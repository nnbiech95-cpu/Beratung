import { useState, useEffect } from 'react';
import { CompetenceProvider } from './context/CompetenceContext';
import { Sidebar } from './components/Sidebar';
import { ProfileManager } from './components/ProfileManager';
import { RatingScale } from './components/RatingScale';
import { Dashboard } from './components/Dashboard';
import { modules } from './data';
import { Menu, Lock } from 'lucide-react';

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === '7080') {
      onLogin();
    } else {
      setError(true);
      setCode('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-2">Zugriffsbeschränkung</h1>
        <p className="text-center text-slate-500 mb-6">Bitte geben Sie den Zugangscode ein.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError(false);
              }}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-center text-lg tracking-widest"
              placeholder="Code eingeben"
              autoFocus
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">Falscher Code. Bitte versuchen Sie es erneut.</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Zugriff freischalten
          </button>
        </form>
      </div>
    </div>
  );
}

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check session storage on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('kompetenz_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('kompetenz_auth', 'true');
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <CompetenceProvider>
      <AppContent />
    </CompetenceProvider>
  );
}

export default App;
