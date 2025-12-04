export type Level = 'A' | 'B' | 'C' | 'D';

export interface Competence {
  id: string;
  title: string;
  description: string;
  levels: {
    [key in Level]: string;
  };
}

export interface SubModule {
  id: string;
  title: string;
  competences: Competence[];
}

export interface Module {
  id: string;
  title: string;
  subModules: SubModule[];
}

export interface Rating {
  competenceId: string;
  level: Level | null;
  note: string;
  isPriority: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  color: string;
  ratings: Record<string, Rating>; // competenceId -> Rating
}

export const LEVELS: Level[] = ['A', 'B', 'C', 'D'];
