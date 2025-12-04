import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { UserProfile, Level } from '../types';

interface CompetenceContextType {
  profiles: UserProfile[];
  activeProfileId: string;
  addProfile: (name: string) => void;
  setActiveProfileId: (id: string) => void;
  updateRating: (competenceId: string, level: Level) => void;
  updateNote: (competenceId: string, note: string) => void;
  togglePriority: (competenceId: string) => void;
  exportData: () => void;
  importData: (file: File) => void;
  getActiveProfile: () => UserProfile | undefined;
}

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
      const initialProfile: UserProfile = {
        id: 'default',
        name: 'Ich',
        color: COLORS[0],
        ratings: {}
      };
      setProfiles([initialProfile]);
      setActiveProfileId(initialProfile.id);
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

  const importData = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const parsed = JSON.parse(result);
        if (parsed.profiles && Array.isArray(parsed.profiles)) {
          setProfiles(parsed.profiles);
          setActiveProfileId(parsed.activeProfileId || parsed.profiles[0]?.id || '');
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
      exportData,
      importData,
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
