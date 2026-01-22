export interface CoachProfile {
  id: 'leon' | 'simon';
  name: string;
  role: string;
  description: string;
  vibe: string;
  tags: string[];
  imageUrl: string;
  accentColor: string;
}

export type SplitState = 'left' | 'right' | 'neutral';

export interface NavLink {
  label: string;
  href: string;
}