import React, { useRef } from 'react';
import { useCompetence } from '../context/CompetenceContext';
import { modules } from '../data';
import { LEVELS } from '../types';
import type { Module, SubModule, Competence } from '../types';
import { Users, Upload, Trash2 } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { profiles, activeProfileId, importData, deleteProfile } = useCompetence();
  const activeProfile = profiles.find(p => p.id === activeProfileId);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!activeProfile) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => importData(file, 'merge'));
    }
    // Reset
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Calculate stats
  const totalCompetences = modules.reduce((acc: number, m: Module) => 
    acc + m.subModules.reduce((sAcc: number, s: SubModule) => sAcc + s.competences.length, 0), 0
  );

  const ratedCompetences = Object.keys(activeProfile.ratings).length;
  const progress = Math.round((ratedCompetences / totalCompetences) * 100);

  const levelCounts = LEVELS.reduce((acc, level) => {
    acc[level] = Object.values(activeProfile.ratings).filter(r => r.level === level).length;
    return acc;
  }, {} as Record<string, number>);

  // Team Analysis Logic
  const showTeamAnalysis = profiles.length > 1;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Übersicht: {activeProfile.name}</h2>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".json"
            multiple
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Upload size={18} />
            <span>Daten importieren / Team zusammenführen</span>
          </button>
        </div>
      </div>
      
      {/* Team Analysis Section */}
      {showTeamAnalysis && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Users className="text-indigo-600 mr-2" size={24} />
            <h3 className="text-lg font-bold text-indigo-900">Team-Reflexion ({profiles.length} Personen)</h3>
          </div>
          <p className="text-indigo-700 mb-4 text-sm">
            Vergleich der Einschätzungen aller importierten Profile. Nutzen Sie diese Ansicht für das gemeinsame Reflexionsgespräch.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {profiles.map(p => (
              <div key={p.id} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: p.color }}
                ></div>
                <span className="text-sm font-medium text-slate-700">{p.name}</span>
                <button 
                  onClick={() => deleteProfile(p.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors ml-1"
                  title="Profil entfernen"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {modules.map((module: Module) => {
              // Calculate average level for this module across all profiles
              const moduleCompetenceIds: string[] = [];
              module.subModules.forEach((sm: SubModule) => sm.competences.forEach((c: Competence) => moduleCompetenceIds.push(c.id)));
              
              // Get all ratings for this module from all profiles
              const allRatings = profiles.map(p => {
                const ratings = moduleCompetenceIds.map(id => p.ratings[id]?.level).filter(l => l !== null && l !== undefined) as number[];
                if (ratings.length === 0) return 0;
                return ratings.reduce((a, b) => a + b, 0) / ratings.length;
              });

              const avg = allRatings.reduce((a, b) => a + b, 0) / allRatings.length;
              
              return (
                <div key={module.id} className="bg-white p-3 rounded border border-indigo-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700">{module.title}</span>
                    <span className="text-sm font-bold text-indigo-600">Ø {avg.toFixed(1)}</span>
                  </div>
                  {/* Visual distribution of profiles */}
                  <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden">
                    {profiles.map((p) => {
                      // Calculate this profile's average for this module
                      const pRatings = moduleCompetenceIds.map(id => p.ratings[id]?.level).filter(l => l !== null && l !== undefined) as number[];
                      if (pRatings.length === 0) return null;
                      const pAvg = pRatings.reduce((a, b) => a + b, 0) / pRatings.length;
                      const leftPos = (pAvg / 10) * 100; // 0-10 scale to %

                      return (
                        <div 
                          key={p.id}
                          className="absolute top-1 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold transition-all hover:z-10 hover:scale-110"
                          style={{ 
                            left: `calc(${leftPos}% - 12px)`, 
                            backgroundColor: p.color 
                          }}
                          title={`${p.name}: Ø ${pAvg.toFixed(1)}`}
                        >
                          {p.name.charAt(0)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-sm font-medium text-slate-500 uppercase mb-2">Fortschritt</h3>
          <div className="flex items-end space-x-2">
            <span className="text-4xl font-bold text-blue-600">{progress}%</span>
            <span className="text-sm text-slate-400 mb-1">ausgefüllt</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 col-span-2">
          <h3 className="text-sm font-medium text-slate-500 uppercase mb-4">Verteilung der Niveaustufen</h3>
          <div className="flex items-end space-x-2 h-32">
            {LEVELS.map(level => {
              const count = levelCounts[level] || 0;
              const height = totalCompetences > 0 ? (count / totalCompetences) * 100 : 0;
              
              return (
                <div key={level} className="flex-1 flex flex-col justify-end items-center group">
                  <div className="text-xs font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {count}
                  </div>
                  <div 
                    className="w-full bg-blue-100 rounded-t-sm relative transition-all group-hover:bg-blue-200"
                    style={{ height: `${Math.max(height, 5)}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-500">{level}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800">Details nach Modulen</h3>
        {modules.map((module: Module) => {
          // Count ratings for this module
          const moduleCompetenceIds: string[] = [];
          module.subModules.forEach((sm: SubModule) => sm.competences.forEach((c: Competence) => moduleCompetenceIds.push(c.id)));
          
          const moduleRatings = moduleCompetenceIds.map(id => activeProfile.ratings[id]?.level).filter(Boolean);
          const moduleProgress = Math.round((moduleRatings.length / moduleCompetenceIds.length) * 100);

          return (
            <div key={module.id} className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-slate-700">{module.title}</h4>
                <span className="text-sm text-slate-500">{moduleRatings.length} / {moduleCompetenceIds.length}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-green-500 h-full rounded-full" 
                  style={{ width: `${moduleProgress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
