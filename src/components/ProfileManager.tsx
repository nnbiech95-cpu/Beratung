import React, { useState, useRef } from 'react';
import { useCompetence } from '../context/CompetenceContext';
import { Plus, Download, Upload, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export const ProfileManager: React.FC = () => {
  const { 
    profiles, 
    activeProfileId, 
    setActiveProfileId, 
    addProfile, 
    exportData, 
    importData 
  } = useCompetence();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeProfile = profiles.find(p => p.id === activeProfileId);

  const handleAddProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProfileName.trim()) {
      addProfile(newProfileName.trim());
      setNewProfileName('');
      setIsAdding(false);
      setIsMenuOpen(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importData(file);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 bg-white border border-slate-200 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
        >
          <div 
            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: activeProfile?.color || '#ccc' }}
          >
            {activeProfile?.name.charAt(0)}
          </div>
          <span className="font-medium text-sm text-slate-700">{activeProfile?.name}</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-100 z-50 p-2">
            <div className="mb-2 pb-2 border-b border-slate-100">
              <p className="text-xs font-semibold text-slate-400 px-2 mb-2">PROFILE WECHSELN</p>
              {profiles.map(profile => (
                <button
                  key={profile.id}
                  onClick={() => {
                    setActiveProfileId(profile.id);
                    setIsMenuOpen(false);
                  }}
                  className={clsx(
                    "w-full text-left px-2 py-2 rounded-md text-sm flex items-center space-x-2",
                    activeProfileId === profile.id ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700"
                  )}
                >
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: profile.color }}
                  >
                    {profile.name.charAt(0)}
                  </div>
                  <span>{profile.name}</span>
                </button>
              ))}
            </div>

            {isAdding ? (
              <form onSubmit={handleAddProfile} className="px-2 pb-2">
                <input
                  type="text"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                  placeholder="Name eingeben..."
                  className="w-full text-sm border border-slate-300 rounded px-2 py-1 mb-2"
                  autoFocus
                />
                <div className="flex space-x-2">
                  <button 
                    type="submit"
                    className="flex-1 bg-blue-600 text-white text-xs py-1 rounded hover:bg-blue-700"
                  >
                    Erstellen
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="flex-1 bg-slate-100 text-slate-600 text-xs py-1 rounded hover:bg-slate-200"
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="w-full text-left px-2 py-2 rounded-md text-sm text-blue-600 hover:bg-blue-50 flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>Neues Profil anlegen</span>
              </button>
            )}
          </div>
        )}
      </div>

      <div className="h-6 w-px bg-slate-200 mx-2"></div>

      <button 
        onClick={exportData}
        className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        title="Daten exportieren"
      >
        <Download size={20} />
      </button>

      <button 
        onClick={() => fileInputRef.current?.click()}
        className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
        title="Daten importieren"
      >
        <Upload size={20} />
      </button>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept=".json"
      />
    </div>
  );
};
