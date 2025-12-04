export type Level = number;

export interface Competence {
  id: string;
  title: string;
  description: string;
  activities: string[];
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

export interface Attachment {
  id: string;
  name: string;
  type: string; // MIME type or 'link'
  size: number; // 0 for links
  data: string; // Base64 or URL
  isLink?: boolean;
}

export interface Rating {
  competenceId: string;
  level: Level | null;
  note: string;
  isPriority: boolean;
  attachments?: Attachment[];
}

export interface UserProfile {
  id: string;
  name: string;
  color: string;
  ratings: Record<string, Rating>; // competenceId -> Rating
}

export const LEVELS: Level[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
