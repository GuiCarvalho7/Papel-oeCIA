export interface AnalysisItem {
  observation: string;
  impact: string;
}

export interface StrategyPoint {
  title: string;
  description: string;
  items: string[];
}

export interface RoutineDay {
  day: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  content: string[];
}

export interface Phase {
  title: string;
  description: string;
  term: string;
}

export interface ResultMonth {
  month: string;
  items: string[];
}

export interface AudienceProfile {
  category: string;
  needs: string;
  strategy: string;
}
