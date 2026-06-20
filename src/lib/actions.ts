'use server';

import { db } from '@/db';
import { matches, teams } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function updateMatchScore(
  matchId: string,
  homeScore: number,
  awayScore: number
) {
  if (!process.env.DATABASE_URL) {
    // No database connected. The caller should manage state locally.
    return { success: true, message: 'Updated locally (No DB connected)' };
  }

  try {
    // 1. Update the match score and status
    await db
      .update(matches)
      .set({
        homeScore,
        awayScore,
        status: 'COMPLETED',
      })
      .where(eq(matches.id, matchId));

    // 2. Fetch the match to find the team division
    const matchResults = await db.select().from(matches).where(eq(matches.id, matchId));
    if (matchResults.length === 0) throw new Error('Match not found');
    const match = matchResults[0];

    // Fetch the home team to get its division
    const homeTeamResult = await db.select().from(teams).where(eq(teams.id, match.homeTeamId));
    if (homeTeamResult.length === 0) throw new Error('Home team not found');
    const divisionId = homeTeamResult[0].divisionId;

    // 3. Fetch all teams in this division
    const divisionTeams = await db.select().from(teams).where(eq(teams.divisionId, divisionId));
    
    // Fetch all completed matches
    const allMatches = await db.select().from(matches);
    const teamIds = new Set(divisionTeams.map(t => t.id));
    const completedMatches = allMatches.filter(
      m => m.status === 'COMPLETED' && teamIds.has(m.homeTeamId) && teamIds.has(m.awayTeamId)
    );

    // 4. Recalculate stats for each team
    for (const team of divisionTeams) {
      let played = 0;
      let won = 0;
      let drawn = 0;
      let lost = 0;
      let goalsFor = 0;
      let goalsAgainst = 0;
      let points = 0;

      for (const m of completedMatches) {
        if (m.homeTeamId === team.id) {
          played++;
          goalsFor += m.homeScore;
          goalsAgainst += m.awayScore;
          if (m.homeScore > m.awayScore) {
            won++;
            points += 3;
          } else if (m.homeScore < m.awayScore) {
            lost++;
          } else {
            drawn++;
            points += 1;
          }
        } else if (m.awayTeamId === team.id) {
          played++;
          goalsFor += m.awayScore;
          goalsAgainst += m.homeScore;
          if (m.awayScore > m.homeScore) {
            won++;
            points += 3;
          } else if (m.awayScore < m.homeScore) {
            lost++;
          } else {
            drawn++;
            points += 1;
          }
        }
      }

      // Update team stats in DB
      await db
        .update(teams)
        .set({ played, won, drawn, lost, goalsFor, goalsAgainst, points })
        .where(eq(teams.id, team.id));
    }

    revalidatePath('/standings');
    revalidatePath('/admin');
    return { success: true, message: 'Standings updated successfully' };
  } catch (error: any) {
    console.error('Failed to update match score:', error);
    return { success: false, error: error.message };
  }
}
