import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { db } from './index';
import * as schema from './schema';
import { mockDivisions, mockTeams, mockMatches } from '../lib/mockData';

async function seed() {
  console.log('🌱 Seeding database...');

  if (!process.env.DATABASE_URL) {
    console.warn('⚠️ DATABASE_URL is not set. Skipping database seeding.');
    return;
  }

  try {
    // 1. Clean existing records (dependent order due to foreign keys)
    console.log('Cleaning old data...');
    await db.delete(schema.matches);
    await db.delete(schema.teams);
    await db.delete(schema.divisions);

    // 2. Insert Divisions
    console.log('Inserting divisions...');
    await db.insert(schema.divisions).values(
      mockDivisions.map(d => ({
        id: d.id,
        name: d.name,
        category: d.category
      }))
    );

    // 3. Insert Teams
    console.log('Inserting teams...');
    await db.insert(schema.teams).values(
      mockTeams.map(t => ({
        id: t.id,
        name: t.name,
        divisionId: t.divisionId,
        played: t.played,
        won: t.won,
        drawn: t.drawn,
        lost: t.lost,
        goalsFor: t.goalsFor,
        goalsAgainst: t.goalsAgainst,
        points: t.points
      }))
    );

    // 4. Insert Matches
    console.log('Inserting matches...');
    await db.insert(schema.matches).values(
      mockMatches.map(m => ({
        id: m.id,
        date: m.date,
        homeTeamId: m.homeTeamId,
        awayTeamId: m.awayTeamId,
        homeScore: m.homeScore,
        awayScore: m.awayScore,
        status: m.status,
        pitch: m.pitch,
        round: m.round
      }))
    );

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
