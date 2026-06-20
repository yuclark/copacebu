import * as dotenv from 'dotenv';
// Load environment variables from .env.local for Node/CLI script environments (seed, migrations)
dotenv.config({ path: '.env.local' });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('⚠️ DATABASE_URL is not set. Database features will fallback to mock data or error out.');
}

const sql = neon(databaseUrl || 'postgres://placeholder:placeholder@placeholder.neon.tech/placeholder');
export const db = drizzle(sql, { schema });
export type DbType = typeof db;
