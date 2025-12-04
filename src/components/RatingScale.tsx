import React from 'react';
import { useCompetence } from '../context/CompetenceContext';
import { LEVELS } from '../types';
import type { Competence } from '../types';
import { Check, AlertCircle, Upload, Trash2, FileText, Link as LinkIcon } from 'lucide-react';
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
    addAttachment,
    addLinkAttachment,
    removeAttachment,
    getActiveProfile 
  } = useCompetence();

  const activeProfile = getActiveProfile();
  const activeRating = activeProfile?.ratings[competence.id];
  const [showLinkInput, setShowLinkInput] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState('');
  const [linkName, setLinkName] = React.useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      addAttachment(competence.id, file);
      // Reset input
      e.target.value = '';
    }
  };

  const handleAddLink = () => {
    if (linkUrl && linkName) {
      addLinkAttachment(competence.id, linkName, linkUrl);
      setLinkUrl('');
      setLinkName('');
      setShowLinkInput(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="w-full">
          <h3 className="text-lg font-bold text-slate-800 mb-4">{competence.title}</h3>
          
          <div className="bg-slate-100 p-4 rounded-md mb-4">
            <div className="grid grid-cols-[100px_1fr] gap-4 mb-4">
              <div className="font-bold text-slate-700">Kompetenz</div>
              <div className="text-slate-700">{competence.description}</div>
            </div>
            
            {competence.activities && competence.activities.length > 0 && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-bold text-slate-700">Aktivitäten</div>
                <div className="text-slate-700">
                  <p className="mb-2">Ich...</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {competence.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
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

      {/* Scale 0-10 */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
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
                  "relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full cursor-pointer transition-all border-2",
                  isSelected 
                    ? "border-blue-500 bg-blue-50 text-blue-700 font-bold shadow-md scale-110" 
                    : "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50"
                )}
              >
                <span className="text-lg">{level}</span>
                
                {/* Active Profile Indicator (Checkmark) */}
                {isSelected && (
                  <div 
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: activeProfile?.color }}
                  >
                    <Check size={12} />
                  </div>
                )}

                {/* Other profiles indicators */}
                {otherProfilesOnLevel.length > 0 && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex -space-x-1">
                    {otherProfilesOnLevel.map(p => (
                      <div 
                        key={p.id}
                        className="w-4 h-4 rounded-full border border-white text-[8px] flex items-center justify-center text-white font-bold shadow-sm"
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
        <div className="flex justify-between text-xs text-slate-400 mt-2 px-1">
          <span>Niedrig (0)</span>
          <span>Hoch (10)</span>
        </div>
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

      {/* Attachments */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Dateianhänge / Nachweise
        </label>
        
        <div className="space-y-2 mb-3">
          {activeRating?.attachments?.map(att => (
            <div key={att.id} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-200 text-sm">
              <div className="flex items-center space-x-2 overflow-hidden">
                {att.isLink ? (
                  <LinkIcon size={16} className="text-blue-500 flex-shrink-0" />
                ) : (
                  <FileText size={16} className="text-slate-400 flex-shrink-0" />
                )}
                
                {att.isLink ? (
                  <a href={att.data} target="_blank" rel="noopener noreferrer" className="truncate text-blue-600 hover:underline font-medium" title={att.data}>
                    {att.name}
                  </a>
                ) : (
                  <span className="truncate text-slate-700 font-medium" title={att.name}>{att.name}</span>
                )}
                
                {!att.isLink && <span className="text-xs text-slate-400">({Math.round(att.size / 1024)} KB)</span>}
              </div>
              <button 
                onClick={() => removeAttachment(competence.id, att.id)}
                className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                title="Löschen"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>

        {showLinkInput ? (
          <div className="bg-slate-50 p-3 rounded border border-slate-200 mb-3">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Name des Links (z.B. SharePoint Dokument)"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
                className="w-full p-2 border border-slate-300 rounded text-sm mb-2"
              />
              <input
                type="url"
                placeholder="URL (https://...)"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="w-full p-2 border border-slate-300 rounded text-sm"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setShowLinkInput(false)}
                className="px-3 py-1 text-sm text-slate-600 hover:bg-slate-200 rounded"
              >
                Abbrechen
              </button>
              <button 
                onClick={handleAddLink}
                disabled={!linkName || !linkUrl}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Hinzufügen
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <label className="inline-flex items-center space-x-2 cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
              <Upload size={16} />
              <span>Datei hochladen</span>
              <input 
                type="file" 
                className="hidden" 
                onChange={handleFileUpload}
              />
            </label>
            
            <button 
              onClick={() => setShowLinkInput(true)}
              className="inline-flex items-center space-x-2 cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <LinkIcon size={16} />
              <span>Link hinzufügen</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
