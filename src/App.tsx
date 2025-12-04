import { useState } from 'react';
import { CompetenceProvider } from './context/CompetenceContext';
import { Sidebar } from './components/Sidebar';
import { ProfileManager } from './components/ProfileManager';
import { RatingScale } from './components/RatingScale';
import { Dashboard } from './components/Dashboard';
import { modules } from './data';
import { Menu } from 'lucide-react';

function AppContent() {
  const [activeSubModuleId, setActiveSubModuleId] = useState<string>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSubModule = modules
    .flatMap(m => m.subModules)
    .find(s => s.id === activeSubModuleId);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-200 lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar 
          activeSubModuleId={activeSubModuleId} 
          onSelectSubModule={(id) => {
            setActiveSubModuleId(id);
            setIsSidebarOpen(false);
          }} 
        />
        <div className="absolute bottom-0 w-full p-4 bg-slate-900 border-t border-slate-800">
          <button 
            onClick={() => setActiveSubModuleId('dashboard')}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Zum Dashboard
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="mr-4 lg:hidden text-slate-500 hover:text-slate-700"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-slate-800 truncate">
              {activeSubModule ? activeSubModule.title : 'Dashboard'}
            </h2>
          </div>
          <ProfileManager />
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {activeSubModuleId === 'dashboard' ? (
              <Dashboard />
            ) : (
              activeSubModule && (
                <div className="animate-fadeIn">
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{activeSubModule.title}</h1>
                    <p className="text-slate-500">Bitte schätzen Sie Ihre Kompetenzen ein.</p>
                  </div>
                  
                  {activeSubModule.competences.map(comp => (
                    <RatingScale key={comp.id} competence={comp} />
                  ))}
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <CompetenceProvider>
      <AppContent />
    </CompetenceProvider>
  );
}

export default App;
