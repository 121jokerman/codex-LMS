import { Pool } from 'pg';
import { env } from '../config/env';

export const pool = new Pool({ connectionString: env.postgresUrl });

export async function initLedgerTable(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS transaction_ledger (
      id TEXT PRIMARY KEY,
      vpa TEXT NOT NULL,
      amount NUMERIC(12,2) NOT NULL,
      channel TEXT NOT NULL,
      status TEXT NOT NULL,
      fraud_score NUMERIC(5,2) DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}
