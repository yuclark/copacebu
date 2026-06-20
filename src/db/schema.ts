import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const divisions = pgTable('divisions', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(), // 'Mixed', 'Boys', 'Open'
});

export const teams = pgTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  divisionId: text('division_id').references(() => divisions.id, { onDelete: 'cascade' }).notNull(),
  logoUrl: text('logo_url'),
  played: integer('played').default(0).notNull(),
  won: integer('won').default(0).notNull(),
  drawn: integer('drawn').default(0).notNull(),
  lost: integer('lost').default(0).notNull(),
  goalsFor: integer('goals_for').default(0).notNull(),
  goalsAgainst: integer('goals_against').default(0).notNull(),
  points: integer('points').default(0).notNull(),
});

export const matches = pgTable('matches', {
  id: text('id').primaryKey(),
  date: timestamp('date').notNull(),
  homeTeamId: text('home_team_id').references(() => teams.id, { onDelete: 'cascade' }).notNull(),
  awayTeamId: text('away_team_id').references(() => teams.id, { onDelete: 'cascade' }).notNull(),
  homeScore: integer('home_score').default(0).notNull(),
  awayScore: integer('away_score').default(0).notNull(),
  status: text('status').default('SCHEDULED').notNull(), // 'SCHEDULED', 'LIVE', 'COMPLETED'
  pitch: text('pitch'), // 'Pitch A', 'Pitch B'
  round: text('round').notNull(), // 'Group Stage', 'Quarter-Final', 'Semi-Final', 'Championship'
});
