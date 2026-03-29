import { env } from '../config/env';

export async function fetchFraudScore(payload: unknown): Promise<number> {
  const response = await fetch(`${env.fraudApiUrl}/fraud-check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) return 100;
  const body = (await response.json()) as { score: number };
  return body.score;
}
