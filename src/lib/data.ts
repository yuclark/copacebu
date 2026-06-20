import { db } from '@/db';
import { divisions, teams, matches } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { mockDivisions, mockTeams, mockMatches, Division, Team, Match } from './mockData';

const hasDb = !!process.env.DATABASE_URL;

export async function getDivisions(): Promise<Division[]> {
  if (!hasDb) return mockDivisions;
  try {
    const results = await db.select().from(divisions);
    if (results.length === 0) return mockDivisions;
    return results.map(d => ({
      id: d.id,
      name: d.name,
      category: d.category as 'Mixed' | 'Boys' | 'Open'
    }));
  } catch (e) {
    console.warn('Database query failed, falling back to mock data:', e);
    return mockDivisions;
  }
}

export async function getTeams(divisionId?: string): Promise<Team[]> {
  if (!hasDb) {
    return divisionId ? mockTeams.filter(t => t.divisionId === divisionId) : mockTeams;
  }
  try {
    const query = db.select().from(teams);
    const results = divisionId 
      ? await query.where(eq(teams.divisionId, divisionId)) 
      : await query;
      
    if (results.length === 0) {
      return divisionId ? mockTeams.filter(t => t.divisionId === divisionId) : mockTeams;
    }
    
    return results.map(t => ({
      id: t.id,
      name: t.name,
      divisionId: t.divisionId,
      logoUrl: t.logoUrl || undefined,
      played: t.played,
      won: t.won,
      drawn: t.drawn,
      lost: t.lost,
      goalsFor: t.goalsFor,
      goalsAgainst: t.goalsAgainst,
      points: t.points
    }));
  } catch (e) {
    console.warn('Database query failed, falling back to mock data:', e);
    return divisionId ? mockTeams.filter(t => t.divisionId === divisionId) : mockTeams;
  }
}

export async function getMatches(): Promise<Match[]> {
  if (!hasDb) return mockMatches;
  try {
    const results = await db.select().from(matches);
    if (results.length === 0) return mockMatches;
    return results.map(m => ({
      id: m.id,
      date: new Date(m.date),
      homeTeamId: m.homeTeamId,
      awayTeamId: m.awayTeamId,
      homeScore: m.homeScore,
      awayScore: m.awayScore,
      status: m.status as 'SCHEDULED' | 'LIVE' | 'COMPLETED',
      pitch: m.pitch || undefined,
      round: m.round
    }));
  } catch (e) {
    console.warn('Database query failed, falling back to mock data:', e);
    return mockMatches;
  }
}
