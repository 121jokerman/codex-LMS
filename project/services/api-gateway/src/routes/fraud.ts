import { Router } from 'express';
import { fetchFraudScore } from '../services/fraudClient';

export const fraudRouter = Router();

fraudRouter.post('/fraud-check', async (req, res) => {
  const score = await fetchFraudScore(req.body);
  res.json({ score });
});
