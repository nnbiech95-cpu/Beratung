import React from 'react';
import { useCompetence } from '../context/CompetenceContext';
import { LEVELS } from '../types';
import type { Competence } from '../types';
import { Check, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

interface RatingScaleProps {
  competence: Competence;
}

export const RatingScale: React.FC<RatingScaleProps> = ({ competence }) => {
  const { 
    profiles, 
    activeProfileId, 
    updateRating, 
    updateNote, 
    togglePriority,
    getActiveProfile 
  } = useCompetence();

  const activeProfile = getActiveProfile();
  const activeRating = activeProfile?.ratings[competence.id];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{competence.title}</h3>
          <p className="text-slate-600 mt-1">{competence.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <label className="flex items-center space-x-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={activeRating?.isPriority || false}
              onChange={() => togglePriority(competence.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className={clsx("text-sm font-medium", activeRating?.isPriority ? "text-orange-600" : "text-slate-500")}>
              Priorität
            </span>
            {activeRating?.isPriority && <AlertCircle size={16} className="text-orange-600" />}
          </label>
        </div>
      </div>

      {/* Scale */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {LEVELS.map((level) => {
          const isSelected = activeRating?.level === level;
          
          // Find other profiles on this level
          const otherProfilesOnLevel = profiles.filter(p => 
            p.id !== activeProfileId && p.ratings[competence.id]?.level === level
          );

          return (
            <div 
              key={level}
              onClick={() => updateRating(competence.id, level)}
              className={clsx(
                "relative border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md",
                isSelected 
                  ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" 
                  : "border-slate-200 hover:border-blue-300"
              )}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-400 text-xl">{level}</span>
                {isSelected && (
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: activeProfile?.color }}
                  >
                    <Check size={14} />
                  </div>
                )}
              </div>
              <p className="text-sm text-slate-700">{competence.levels[level]}</p>

              {/* Other profiles indicators */}
              {otherProfilesOnLevel.length > 0 && (
                <div className="absolute -bottom-2 left-4 flex -space-x-1">
                  {otherProfilesOnLevel.map(p => (
                    <div 
                      key={p.id}
                      className="w-5 h-5 rounded-full border-2 border-white text-[10px] flex items-center justify-center text-white font-bold shadow-sm"
                      style={{ backgroundColor: p.color }}
                      title={`${p.name} (Level ${level})`}
                    >
                      {p.name.charAt(0)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Notes */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Persönliche Notiz / Maßnahmen
        </label>
        <textarea
          value={activeRating?.note || ''}
          onChange={(e) => updateNote(competence.id, e.target.value)}
          placeholder="Hier können Sie Beobachtungen oder Ziele notieren..."
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm min-h-[80px]"
        />
      </div>
    </div>
  );
};
