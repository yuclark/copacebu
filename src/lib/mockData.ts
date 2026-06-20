export interface Division {
  id: string;
  name: string;
  category: 'Mixed' | 'Boys' | 'Open';
}

export interface Team {
  id: string;
  name: string;
  divisionId: string;
  logoUrl?: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Match {
  id: string;
  date: Date;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  status: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
  pitch?: string;
  round: string;
}

export const mockDivisions: Division[] = [
  { id: 'mixed-p7', name: 'Mixed P-7', category: 'Mixed' },
  { id: 'mixed-p9', name: 'Mixed P-9', category: 'Mixed' },
  { id: 'mixed-p11', name: 'Mixed P-11', category: 'Mixed' },
  { id: 'mixed-p13', name: 'Mixed P-13', category: 'Mixed' },
  { id: 'boys-p15', name: 'Boys P-15', category: 'Boys' },
  { id: 'boys-p17', name: 'Boys P-17', category: 'Boys' },
  { id: 'mens-open', name: "Men's Open", category: 'Open' },
  { id: 'womens-open', name: "Women's Open", category: 'Open' },
];

export const mockTeams: Team[] = [
  // Men's Open
  { id: 't-mo-1', name: 'Dynamic Herb FC', divisionId: 'mens-open', played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, points: 9 },
  { id: 't-mo-2', name: 'Cebu FC Reserves', divisionId: 'mens-open', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, points: 7 },
  { id: 't-mo-3', name: 'Talisay Football Club', divisionId: 'mens-open', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 6, points: 4 },
  { id: 't-mo-4', name: 'Leyte United', divisionId: 'mens-open', played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 4, goalsAgainst: 8, points: 3 },
  { id: 't-mo-5', name: 'Mandaue FC', divisionId: 'mens-open', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 3, goalsAgainst: 7, points: 1 },
  { id: 't-mo-6', name: 'Sogod FC', divisionId: 'mens-open', played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 5, points: 1 },

  // Women's Open
  { id: 't-wo-1', name: 'Cebu Lady Elks', divisionId: 'womens-open', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 1, points: 6 },
  { id: 't-wo-2', name: 'Dynamic Herb Ladies', divisionId: 'womens-open', played: 2, won: 1, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 2, points: 4 },
  { id: 't-wo-3', name: 'Talisay Sirens FC', divisionId: 'womens-open', played: 2, won: 0, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 4, points: 1 },
  { id: 't-wo-4', name: 'Liloan Lionesses', divisionId: 'womens-open', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 6, points: 0 },

  // Boys P-15
  { id: 't-b15-1', name: 'Cebu United FC', divisionId: 'boys-p15', played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 8, goalsAgainst: 3, points: 7 },
  { id: 't-b15-2', name: 'Dynamic Herb Academy', divisionId: 'boys-p15', played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 6, goalsAgainst: 4, points: 6 },
  { id: 't-b15-3', name: 'Talisay Athletics', divisionId: 'boys-p15', played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 4, points: 4 },
  { id: 't-b15-4', name: 'Mandaue Youth FC', divisionId: 'boys-p15', played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 9, points: 0 },

  // Mixed P-7
  { id: 't-mp7-1', name: 'Dynamic Herb Grasshoppers', divisionId: 'mixed-p7', played: 2, won: 2, drawn: 0, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 6 },
  { id: 't-mp7-2', name: 'Cebu FC Baby Elks', divisionId: 'mixed-p7', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 3, goalsAgainst: 3, points: 3 },
  { id: 't-mp7-3', name: 'Talisay Fireballs', divisionId: 'mixed-p7', played: 2, won: 1, drawn: 0, lost: 1, goalsFor: 2, goalsAgainst: 3, points: 3 },
  { id: 't-mp7-4', name: 'Liloan Little Strikers', divisionId: 'mixed-p7', played: 2, won: 0, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 4, points: 0 },
];

export const mockMatches: Match[] = [
  // Men's Open Matches
  {
    id: 'm-mo-1',
    date: new Date('2026-06-19T09:00:00'),
    homeTeamId: 't-mo-1',
    awayTeamId: 't-mo-4',
    homeScore: 4,
    awayScore: 1,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-2',
    date: new Date('2026-06-19T10:30:00'),
    homeTeamId: 't-mo-2',
    awayTeamId: 't-mo-5',
    homeScore: 3,
    awayScore: 1,
    status: 'COMPLETED',
    pitch: 'Pitch B',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-3',
    date: new Date('2026-06-19T14:00:00'),
    homeTeamId: 't-mo-3',
    awayTeamId: 't-mo-6',
    homeScore: 1,
    awayScore: 1,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-4',
    date: new Date('2026-06-20T09:00:00'),
    homeTeamId: 't-mo-1',
    awayTeamId: 't-mo-5',
    homeScore: 3,
    awayScore: 0,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-5',
    date: new Date('2026-06-20T10:30:00'),
    homeTeamId: 't-mo-2',
    awayTeamId: 't-mo-3',
    homeScore: 2,
    awayScore: 2,
    status: 'COMPLETED',
    pitch: 'Pitch B',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-6',
    date: new Date('2026-06-20T13:00:00'),
    homeTeamId: 't-mo-4',
    awayTeamId: 't-mo-6',
    homeScore: 2,
    awayScore: 1,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-7',
    date: new Date('2026-06-20T15:30:00'),
    homeTeamId: 't-mo-1',
    awayTeamId: 't-mo-3',
    homeScore: 3,
    awayScore: 1,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-8',
    date: new Date('2026-06-20T16:45:00'),
    homeTeamId: 't-mo-2',
    awayTeamId: 't-mo-6',
    homeScore: 2,
    awayScore: 0,
    status: 'COMPLETED',
    pitch: 'Pitch B',
    round: 'Group Stage'
  },
  {
    id: 'm-mo-9',
    date: new Date('2026-06-20T18:00:00'),
    homeTeamId: 't-mo-4',
    awayTeamId: 't-mo-5',
    homeScore: 1,
    awayScore: 2,
    status: 'COMPLETED',
    pitch: 'Pitch A',
    round: 'Group Stage'
  },
  // Scheduled knockout matches
  {
    id: 'm-mo-10',
    date: new Date('2026-06-21T09:00:00'),
    homeTeamId: 't-mo-1',
    awayTeamId: 't-mo-4',
    homeScore: 0,
    awayScore: 0,
    status: 'SCHEDULED',
    pitch: 'Pitch A',
    round: 'Semi-Final'
  },
  {
    id: 'm-mo-11',
    date: new Date('2026-06-21T10:30:00'),
    homeTeamId: 't-mo-2',
    awayTeamId: 't-mo-3',
    homeScore: 0,
    awayScore: 0,
    status: 'SCHEDULED',
    pitch: 'Pitch A',
    round: 'Semi-Final'
  },
  {
    id: 'm-mo-12',
    date: new Date('2026-06-21T16:00:00'),
    homeTeamId: 't-mo-1', // Placeholder teams for representation
    awayTeamId: 't-mo-2',
    homeScore: 0,
    awayScore: 0,
    status: 'SCHEDULED',
    pitch: 'Main Pitch',
    round: 'Championship'
  },
];
