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
];

export const mockTeams: Team[] = [
  // Men's Open Registered Teams
  { id: 't-mo-1', name: 'DB 18 Degrees', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-2', name: "Arkitek's United FC", divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-3', name: 'Celaros FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-4', name: 'Damare FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-5', name: 'ERCO FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-6', name: 'FC Inter Racial', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-7', name: 'Hermanos FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-8', name: 'LLC FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-9', name: 'Makoto FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-10', name: 'MJ United Cebu', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-11', name: 'San Roque FC', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mo-12', name: 'Sunday Footy', divisionId: 'mens-open', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },


  // Boys P-15 Registered Teams
  { id: 't-b15-1', name: 'ADA Cebu', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-2', name: 'Cebu United FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-3', name: 'CFC Academy', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-4', name: 'City of Naga', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-5', name: 'COD-Far South Hub', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-6', name: 'Corona Del Mar FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-7', name: 'Don Bosco FC - Team A', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-8', name: 'Don Bosco FC - Team B', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-9', name: 'Giuseppe FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-10', name: 'HP 95 FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-11', name: 'JDFCI', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-12', name: 'KTS Football Team', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-13', name: 'Lapu-Lapu City Heroes FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-14', name: 'MVP Elite FC Iloilo City - Team A', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-15', name: 'MVP Elite FC Iloilo City - Team B', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-16', name: 'PAREF Springdale Titans FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-17', name: 'San Carlos School of Cebu Warriors - Team A', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-18', name: 'San Carlos School of Cebu Warriors - Team B', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-19', name: 'SB Ilawod FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-20', name: 'Sugbu Calidad', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-b15-21', name: 'Tacloban Braves FC', divisionId: 'boys-p15', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  
  // Mixed P-7 Registered Teams
  { id: 't-mp7-1', name: 'CFC Academy', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp7-2', name: 'Don Bosco FC', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp7-3', name: 'Giuseppe FC', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp7-4', name: 'Legacy FC Cebu', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp7-5', name: 'SB Ilawod FC', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp7-6', name: 'Sugbu Calidad', divisionId: 'mixed-p7', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },

  // Mixed P-9 Registered Teams
  { id: 't-mp9-1', name: 'CFC Academy - Team A', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-2', name: 'CFC Academy - Team B', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-3', name: 'Corona Del Mar FC', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-4', name: 'Don Bosco FC - Team A', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-5', name: 'Don Bosco FC - Team B', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-6', name: 'Giuseppe FC', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-7', name: 'Lapu-Lapu City Heroes FC', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-8', name: 'Legacy FC - Red', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-9', name: 'Legacy FC - Yellow', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-10', name: 'Makati FC', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-11', name: 'SB Ilawod FC - Team A Elite', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-12', name: 'SB Ilawod FC - Team A Mixed', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-13', name: 'Sugbu Calidad - Team A Gold', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-14', name: 'Sugbu Calidad - Team A White', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp9-15', name: 'Tacloban Braves FC', divisionId: 'mixed-p9', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },

  // Mixed P-11 Registered Teams
  { id: 't-mp11-1', name: 'ADA Cebu', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-2', name: 'Corona Del Mar FC', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-3', name: 'Don Bosco FC - Team A', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-4', name: 'Don Bosco FC - Team B', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-5', name: 'JDFCI', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-6', name: 'Giuseppe FC', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-7', name: 'Lapu-Lapu City Heroes FC', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-8', name: 'Legacy FC Cebu', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-9', name: 'Makati FC - Team A', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-10', name: 'Makati FC - Team B', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-11', name: 'PAVIA FC', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-12', name: 'San Carlos School of Cebu Warriors', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-13', name: 'SB Ilawod FC', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp11-14', name: 'Sugbu Calidad', divisionId: 'mixed-p11', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  // Mixed P-13 Registered Teams
  { id: 't-mp13-1', name: 'Bast Green Lions', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-2', name: 'Cebu Football Club Academy', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-3', name: 'Cebu United FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-4', name: 'Danao City FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-5', name: 'Don Bosco FC - Team A', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-6', name: 'Don Bosco FC - Team B', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-7', name: 'Don Bosco FC - Team C', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-8', name: 'Giuseppe FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-9', name: 'JDFCI - Team A', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-10', name: 'JDFCI - Team B', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-11', name: 'Lapu-Lapu City Heroes FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-12', name: 'Legacy FC Cebu', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-13', name: 'PAVIA FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-14', name: 'Makati FC - Team A', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-15', name: 'Makati FC - Team B', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-16', name: 'San Carlos School of Cebu Warriors - Green', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-17', name: 'San Carlos School of Cebu Warriors - White', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-18', name: 'SB Ilawod FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-19', name: 'Sugbu Calidad', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },
  { id: 't-mp13-20', name: 'Tacloban Braves FC', divisionId: 'mixed-p13', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, points: 0 },

  // Boys P-17 Registered Teams
  { id: 't-b17-1', name: 'Bast Green Lions', divisionId: 'boys-p17', played: 5, won: 5, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 0, points: 15 },
  { id: 't-b17-3', name: 'Don Bosco FC - Team A', divisionId: 'boys-p17', played: 5, won: 2, drawn: 2, lost: 1, goalsFor: 5, goalsAgainst: 3, points: 8 },
  { id: 't-b17-12', name: 'USJR - Team B', divisionId: 'boys-p17', played: 5, won: 2, drawn: 1, lost: 2, goalsFor: 6, goalsAgainst: 4, points: 7 },
  { id: 't-b17-2', name: 'Cebu United FC', divisionId: 'boys-p17', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 3, goalsAgainst: 2, points: 6 },
  { id: 't-b17-10', name: 'San Carlos School of Cebu Warriors', divisionId: 'boys-p17', played: 5, won: 1, drawn: 2, lost: 2, goalsFor: 2, goalsAgainst: 6, points: 5 },
  { id: 't-b17-5', name: 'Don Bosco FC - Team C', divisionId: 'boys-p17', played: 5, won: 0, drawn: 0, lost: 5, goalsFor: 0, goalsAgainst: 9, points: 0 },
  { id: 't-b17-9', name: 'PAREF Springdale Titans FC', divisionId: 'boys-p17', played: 5, won: 4, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 1, points: 13 },
  { id: 't-b17-11', name: 'USJR - Team A', divisionId: 'boys-p17', played: 5, won: 3, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 2, points: 10 },
  { id: 't-b17-4', name: 'Don Bosco FC - Team B', divisionId: 'boys-p17', played: 5, won: 1, drawn: 3, lost: 1, goalsFor: 4, goalsAgainst: 3, points: 6 },
  { id: 't-b17-7', name: 'Janiuaynon Defenders Football Club Inc. (JDFCI)', divisionId: 'boys-p17', played: 5, won: 1, drawn: 2, lost: 2, goalsFor: 3, goalsAgainst: 2, points: 5 },
  { id: 't-b17-8', name: 'Lapu-Lapu City Heroes FC', divisionId: 'boys-p17', played: 5, won: 0, drawn: 3, lost: 2, goalsFor: 0, goalsAgainst: 2, points: 3 },
  { id: 't-b17-6', name: 'Forza FC Cebu', divisionId: 'boys-p17', played: 5, won: 1, drawn: 0, lost: 4, goalsFor: 2, goalsAgainst: 8, points: 3 },
];

export const mockMatches: Match[] = [


  // Boys P-17 Matches
  // -- Group A Matches --
  { id: 'm-b17-1', date: new Date('2026-06-19T17:00:00'), homeTeamId: 't-b17-2', awayTeamId: 't-b17-3', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-2', date: new Date('2026-06-19T17:00:00'), homeTeamId: 't-b17-1', awayTeamId: 't-b17-10', homeScore: 3, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-3', date: new Date('2026-06-19T17:00:00'), homeTeamId: 't-b17-5', awayTeamId: 't-b17-12', homeScore: 0, awayScore: 2, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-4', date: new Date('2026-06-19T17:40:00'), homeTeamId: 't-b17-2', awayTeamId: 't-b17-1', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-5', date: new Date('2026-06-19T17:40:00'), homeTeamId: 't-b17-3', awayTeamId: 't-b17-12', homeScore: 2, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-6', date: new Date('2026-06-19T17:40:00'), homeTeamId: 't-b17-10', awayTeamId: 't-b17-5', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-7', date: new Date('2026-06-19T18:20:00'), homeTeamId: 't-b17-2', awayTeamId: 't-b17-12', homeScore: 1, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-8', date: new Date('2026-06-19T18:20:00'), homeTeamId: 't-b17-12', awayTeamId: 't-b17-10', homeScore: 2, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  { id: 'm-b17-9', date: new Date('2026-06-19T18:20:00'), homeTeamId: 't-b17-3', awayTeamId: 't-b17-1', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  
  { id: 'm-b17-10', date: new Date('2026-06-19T19:00:00'), homeTeamId: 't-b17-2', awayTeamId: 't-b17-5', homeScore: 2, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-11', date: new Date('2026-06-19T19:00:00'), homeTeamId: 't-b17-10', awayTeamId: 't-b17-3', homeScore: 1, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  { id: 'm-b17-12', date: new Date('2026-06-19T19:00:00'), homeTeamId: 't-b17-1', awayTeamId: 't-b17-5', homeScore: 2, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-13', date: new Date('2026-06-19T19:40:00'), homeTeamId: 't-b17-2', awayTeamId: 't-b17-10', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-14', date: new Date('2026-06-19T19:40:00'), homeTeamId: 't-b17-5', awayTeamId: 't-b17-3', homeScore: 0, awayScore: 2, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-15', date: new Date('2026-06-19T19:40:00'), homeTeamId: 't-b17-12', awayTeamId: 't-b17-1', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },

  // -- Group B Matches --
  { id: 'm-b17-16', date: new Date('2026-06-19T17:20:00'), homeTeamId: 't-b17-7', awayTeamId: 't-b17-11', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-17', date: new Date('2026-06-19T17:20:00'), homeTeamId: 't-b17-8', awayTeamId: 't-b17-9', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-18', date: new Date('2026-06-19T17:20:00'), homeTeamId: 't-b17-6', awayTeamId: 't-b17-4', homeScore: 0, awayScore: 2, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-19', date: new Date('2026-06-19T18:00:00'), homeTeamId: 't-b17-7', awayTeamId: 't-b17-9', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-20', date: new Date('2026-06-19T18:00:00'), homeTeamId: 't-b17-11', awayTeamId: 't-b17-4', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-21', date: new Date('2026-06-19T18:00:00'), homeTeamId: 't-b17-8', awayTeamId: 't-b17-6', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-22', date: new Date('2026-06-19T18:40:00'), homeTeamId: 't-b17-7', awayTeamId: 't-b17-4', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-23', date: new Date('2026-06-19T18:40:00'), homeTeamId: 't-b17-4', awayTeamId: 't-b17-8', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-24', date: new Date('2026-06-19T18:40:00'), homeTeamId: 't-b17-9', awayTeamId: 't-b17-6', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  
  { id: 'm-b17-25', date: new Date('2026-06-19T19:20:00'), homeTeamId: 't-b17-7', awayTeamId: 't-b17-6', homeScore: 3, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-26', date: new Date('2026-06-19T19:20:00'), homeTeamId: 't-b17-6', awayTeamId: 't-b17-11', homeScore: 1, awayScore: 2, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-27', date: new Date('2026-06-19T19:20:00'), homeTeamId: 't-b17-11', awayTeamId: 't-b17-8', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },
  
  { id: 'm-b17-28', date: new Date('2026-06-19T20:00:00'), homeTeamId: 't-b17-7', awayTeamId: 't-b17-8', homeScore: 0, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Group Stage' },
  { id: 'm-b17-29', date: new Date('2026-06-19T20:00:00'), homeTeamId: 't-b17-9', awayTeamId: 't-b17-11', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 2', round: 'Group Stage' },
  { id: 'm-b17-30', date: new Date('2026-06-19T20:00:00'), homeTeamId: 't-b17-4', awayTeamId: 't-b17-9', homeScore: 1, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 3', round: 'Group Stage' },

  // -- Quarter-Finals --
  { id: 'm-b17-qf1', date: new Date('2026-06-20T09:00:00'), homeTeamId: 't-b17-1', awayTeamId: 't-b17-7', homeScore: 2, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Quarter-Final' },
  { id: 'm-b17-qf2', date: new Date('2026-06-20T09:30:00'), homeTeamId: 't-b17-9', awayTeamId: 't-b17-2', homeScore: 0, awayScore: 1, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Quarter-Final' },
  { id: 'm-b17-qf3', date: new Date('2026-06-20T10:00:00'), homeTeamId: 't-b17-3', awayTeamId: 't-b17-4', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Quarter-Final' },
  { id: 'm-b17-qf4', date: new Date('2026-06-20T10:30:00'), homeTeamId: 't-b17-11', awayTeamId: 't-b17-12', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Quarter-Final' },

  // -- Semi-Finals --
  { id: 'm-b17-sf1', date: new Date('2026-06-20T13:00:00'), homeTeamId: 't-b17-1', awayTeamId: 't-b17-11', homeScore: 1, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Semi-Final' },
  { id: 'm-b17-sf2', date: new Date('2026-06-20T13:40:00'), homeTeamId: 't-b17-3', awayTeamId: 't-b17-2', homeScore: 2, awayScore: 0, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Semi-Final' },

  // -- Championship --
  { id: 'm-b17-f', date: new Date('2026-06-20T15:30:00'), homeTeamId: 't-b17-1', awayTeamId: 't-b17-3', homeScore: 4, awayScore: 3, status: 'COMPLETED', pitch: 'Pitch 1', round: 'Championship' }
];
