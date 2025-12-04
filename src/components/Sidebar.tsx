import React from 'react';
import { modules } from '../data';
import { ChevronRight, BookOpen, GraduationCap, MessageCircle, Users, ClipboardList } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  activeSubModuleId: string;
  onSelectSubModule: (id: string) => void;
}

const ICONS = [GraduationCap, Users, MessageCircle, BookOpen, ClipboardList];

export const Sidebar: React.FC<SidebarProps> = ({ activeSubModuleId, onSelectSubModule }) => {
  return (
    <div className="w-64 bg-slate-900 text-white h-screen overflow-y-auto flex-shrink-0">
      <div className="p-4 border-b border-slate-700">
        <h1 className="text-xl font-bold">Kompetenzraster</h1>
        <p className="text-xs text-slate-400 mt-1">Rheinland-Pfalz</p>
      </div>
      <nav className="p-2">
        {modules.map((module, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div key={module.id} className="mb-4">
              <div className="flex items-center px-2 py-2 text-slate-300 font-semibold">
                <Icon size={18} className="mr-2" />
                <span className="text-sm">{module.title}</span>
              </div>
              <div className="ml-4 border-l border-slate-700 pl-2 space-y-1">
                {module.subModules.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => onSelectSubModule(sub.id)}
                    className={clsx(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group",
                      activeSubModuleId === sub.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    )}
                  >
                    <span className="truncate">{sub.title}</span>
                    {activeSubModuleId === sub.id && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
