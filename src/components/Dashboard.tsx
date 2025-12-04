import React from 'react';
import { useCompetence } from '../context/CompetenceContext';
import { modules } from '../data';
import { LEVELS } from '../types';

export const Dashboard: React.FC = () => {
  const { profiles, activeProfileId } = useCompetence();
  const activeProfile = profiles.find(p => p.id === activeProfileId);

  if (!activeProfile) return null;

  // Calculate stats
  const totalCompetences = modules.reduce((acc, m) => 
    acc + m.subModules.reduce((sAcc, s) => sAcc + s.competences.length, 0), 0
  );

  const ratedCompetences = Object.keys(activeProfile.ratings).length;
  const progress = Math.round((ratedCompetences / totalCompetences) * 100);

  const levelCounts = LEVELS.reduce((acc, level) => {
    acc[level] = Object.values(activeProfile.ratings).filter(r => r.level === level).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Übersicht: {activeProfile.name}</h2>
      
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
          <div className="flex items-end space-x-8 h-32">
            {LEVELS.map(level => {
              const count = levelCounts[level] || 0;
              const height = totalCompetences > 0 ? (count / totalCompetences) * 100 : 0;
              
              return (
                <div key={level} className="flex-1 flex flex-col justify-end items-center group">
                  <div className="text-sm font-bold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {count}
                  </div>
                  <div 
                    className="w-full bg-blue-100 rounded-t-md relative transition-all group-hover:bg-blue-200"
                    style={{ height: `${Math.max(height, 5)}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-md transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 font-bold text-slate-500">{level}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800">Details nach Modulen</h3>
        {modules.map(module => {
          // Count ratings for this module
          const moduleCompetenceIds: string[] = [];
          module.subModules.forEach(sm => sm.competences.forEach(c => moduleCompetenceIds.push(c.id)));
          
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
