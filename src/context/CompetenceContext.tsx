import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { UserProfile, Level, Attachment } from '../types';

interface CompetenceContextType {
  profiles: UserProfile[];
  activeProfileId: string;
  addProfile: (name: string) => void;
  setActiveProfileId: (id: string) => void;
  updateRating: (competenceId: string, level: Level) => void;
  updateNote: (competenceId: string, note: string) => void;
  togglePriority: (competenceId: string) => void;
  addAttachment: (competenceId: string, file: File) => void;
  addLinkAttachment: (competenceId: string, name: string, url: string) => void;
  removeAttachment: (competenceId: string, attachmentId: string) => void;
  exportData: () => void;
  importData: (file: File, mode?: 'merge' | 'replace' | 'ask') => void;
  deleteProfile: (profileId: string) => void;
  getActiveProfile: () => UserProfile | undefined;
}

import { demoProfile } from '../demoData';

const CompetenceContext = createContext<CompetenceContextType | undefined>(undefined);

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

const STORAGE_KEY = 'kompetenz_tracker_data';

export const CompetenceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfileId, setActiveProfileId] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setProfiles(parsed.profiles || []);
        setActiveProfileId(parsed.activeProfileId || '');
      } catch (e) {
        console.error("Failed to load data", e);
      }
    } else {
      // Initial setup if empty
      setProfiles([demoProfile]);
      setActiveProfileId(demoProfile.id);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ profiles, activeProfileId }));
    }
  }, [profiles, activeProfileId]);

  const addProfile = (name: string) => {
    const newProfile: UserProfile = {
      id: Date.now().toString(),
      name,
      color: COLORS[profiles.length % COLORS.length],
      ratings: {}
    };
    setProfiles([...profiles, newProfile]);
    setActiveProfileId(newProfile.id);
  };

  const updateRating = (competenceId: string, level: Level) => {
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        const currentRating = p.ratings[competenceId] || { competenceId, level: null, note: '', isPriority: false };
        return {
          ...p,
          ratings: {
            ...p.ratings,
            [competenceId]: { ...currentRating, level }
          }
        };
      }
      return p;
    }));
  };

  const updateNote = (competenceId: string, note: string) => {
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        const currentRating = p.ratings[competenceId] || { competenceId, level: null, note: '', isPriority: false };
        return {
          ...p,
          ratings: {
            ...p.ratings,
            [competenceId]: { ...currentRating, note }
          }
        };
      }
      return p;
    }));
  };

  const togglePriority = (competenceId: string) => {
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        const currentRating = p.ratings[competenceId] || { competenceId, level: null, note: '', isPriority: false };
        return {
          ...p,
          ratings: {
            ...p.ratings,
            [competenceId]: { ...currentRating, isPriority: !currentRating.isPriority }
          }
        };
      }
      return p;
    }));
  };

  const addAttachment = (competenceId: string, file: File) => {
    // Limit file size to 2MB to prevent localStorage issues
    if (file.size > 2 * 1024 * 1024) {
      alert("Datei ist zu groß (Max 2MB)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result as string;
      const newAttachment: Attachment = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        size: file.size,
        data
      };

      setProfiles(prev => prev.map(p => {
        if (p.id === activeProfileId) {
          const currentRating = p.ratings[competenceId] || { competenceId, level: null, note: '', isPriority: false, attachments: [] };
          return {
            ...p,
            ratings: {
              ...p.ratings,
              [competenceId]: { 
                ...currentRating, 
                attachments: [...(currentRating.attachments || []), newAttachment] 
              }
            }
          };
        }
        return p;
      }));
    };
    reader.readAsDataURL(file);
  };

  const addLinkAttachment = (competenceId: string, name: string, url: string) => {
    const newAttachment: Attachment = {
      id: Date.now().toString(),
      name,
      type: 'link',
      size: 0,
      data: url,
      isLink: true
    };

    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        const currentRating = p.ratings[competenceId] || { competenceId, level: null, note: '', isPriority: false, attachments: [] };
        return {
          ...p,
          ratings: {
            ...p.ratings,
            [competenceId]: { 
              ...currentRating, 
              attachments: [...(currentRating.attachments || []), newAttachment] 
            }
          }
        };
      }
      return p;
    }));
  };

  const removeAttachment = (competenceId: string, attachmentId: string) => {
    setProfiles(prev => prev.map(p => {
      if (p.id === activeProfileId) {
        const currentRating = p.ratings[competenceId];
        if (!currentRating) return p;
        
        return {
          ...p,
          ratings: {
            ...p.ratings,
            [competenceId]: { 
              ...currentRating, 
              attachments: (currentRating.attachments || []).filter(a => a.id !== attachmentId) 
            }
          }
        };
      }
      return p;
    }));
  };

  const exportData = () => {
    const dataStr = JSON.stringify({ profiles, activeProfileId }, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kompetenz_tracker_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const importData = (file: File, mode: 'merge' | 'replace' | 'ask' = 'ask') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const parsed = JSON.parse(result);
        
        if (parsed.profiles && Array.isArray(parsed.profiles)) {
          const importedProfiles = parsed.profiles as UserProfile[];
          
          // Check if we should merge or replace
          let shouldMerge = false;
          if (mode === 'ask') {
            shouldMerge = window.confirm(
              "Möchten Sie die Profile hinzufügen (OK) oder die aktuellen Daten ersetzen (Abbrechen)?"
            );
          } else {
            shouldMerge = (mode === 'merge');
          }

          if (shouldMerge) {
            // Merge logic: Add profiles that don't exist yet (by ID)
            // If ID exists, we generate a new ID to avoid conflicts
            setProfiles(prevProfiles => {
              const newProfiles = [...prevProfiles];
              
              importedProfiles.forEach(importedProfile => {
                // Check if exact ID exists
                const exists = newProfiles.some(p => p.id === importedProfile.id);
                
                if (exists) {
                  // Create a copy with new ID
                  const newId = `${importedProfile.id}_imported_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                  newProfiles.push({
                    ...importedProfile,
                    id: newId,
                    name: `${importedProfile.name} (Importiert)`
                  });
                } else {
                  newProfiles.push(importedProfile);
                }
              });
              return newProfiles;
            });
            
            if (mode === 'ask') {
              alert(`${importedProfiles.length} Profile wurden importiert.`);
            }
          } else {
            // Replace logic
            setProfiles(importedProfiles);
            setActiveProfileId(parsed.activeProfileId || importedProfiles[0]?.id || '');
            if (mode === 'ask') {
              alert("Daten wurden ersetzt.");
            }
          }
        } else {
          alert("Ungültiges Dateiformat");
        }
      } catch (err) {
        console.error(err);
        alert("Fehler beim Importieren");
      }
    };
    reader.readAsText(file);
  };

  const deleteProfile = (profileId: string) => {
    if (profiles.length <= 1) {
      alert("Das letzte Profil kann nicht gelöscht werden.");
      return;
    }
    
    if (window.confirm("Möchten Sie dieses Profil wirklich löschen?")) {
      const newProfiles = profiles.filter(p => p.id !== profileId);
      setProfiles(newProfiles);
      
      // If we deleted the active profile, switch to the first available one
      if (activeProfileId === profileId && newProfiles.length > 0) {
        setActiveProfileId(newProfiles[0].id);
      }
    }
  };

  const getActiveProfile = () => profiles.find(p => p.id === activeProfileId);

  return (
    <CompetenceContext.Provider value={{
      profiles,
      activeProfileId,
      addProfile,
      setActiveProfileId,
      updateRating,
      updateNote,
      togglePriority,
      addAttachment,
      addLinkAttachment,
      removeAttachment,
      exportData,
      importData,
      deleteProfile,
      getActiveProfile
    }}>
      {children}
    </CompetenceContext.Provider>
  );
};

export const useCompetence = () => {
  const context = useContext(CompetenceContext);
  if (context === undefined) {
    throw new Error('useCompetence must be used within a CompetenceProvider');
  }
  return context;
};
