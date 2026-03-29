import { Router } from 'express';
import { z } from 'zod';
import { pool } from '../db/postgres';
import { fetchFraudScore } from '../services/fraudClient';
import { getPspAdapter } from '../services/pspAdapter';

const schema = z.object({
  id: z.string(),
  vpa: z.string(),
  amount: z.number().positive(),
  channel: z.enum(['NFC', 'BLE', 'SMS', 'USSD', 'SOUND']),
  timestamp: z.string(),
  encryptedPayload: z.string(),
  signature: z.string()
});

export const transactionRouter = Router();

transactionRouter.post('/submit-transaction', async (req, res) => {
  const payload = schema.parse(req.body);
  const fraudScore = await fetchFraudScore(payload);

  if (fraudScore > 80) {
    return res.status(403).json({ status: 'FAILED', reason: 'Fraud risk too high' });
  }

  const psp = getPspAdapter();
  const pspResult = await psp.submitTransaction(payload);

  await pool.query(
    `INSERT INTO transaction_ledger (id, vpa, amount, channel, status, fraud_score)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (id)
     DO UPDATE SET status = EXCLUDED.status, fraud_score = EXCLUDED.fraud_score, updated_at = NOW()`,
    [payload.id, payload.vpa, payload.amount, payload.channel, pspResult.status, fraudScore]
  );

  return res.json({ status: pspResult.status, providerRef: pspResult.providerRef, fraudScore });
});

transactionRouter.get('/sync-status/:id', async (req, res) => {
  const { rows } = await pool.query('SELECT id, status, updated_at FROM transaction_ledger WHERE id = $1', [req.params.id]);
  if (!rows.length) return res.status(404).json({ status: 'NOT_FOUND' });
  return res.json(rows[0]);
});
