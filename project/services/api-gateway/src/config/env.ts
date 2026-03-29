import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT ?? 8000),
  postgresUrl: process.env.POSTGRES_URL ?? '',
  redisUrl: process.env.REDIS_URL ?? '',
  fraudApiUrl: process.env.FRAUD_API_URL ?? 'http://localhost:8001',
  pspMode: process.env.PSP_MODE ?? 'sandbox'
};
