import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { env } from '../config/env';
import { initLedgerTable } from '../db/postgres';
import { transactionRouter } from './routes/transactions';
import { fraudRouter } from './routes/fraud';

async function bootstrap() {
  await initLedgerTable();

  const app = express();
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req, res) => res.json({ status: 'ok' }));
  app.use(transactionRouter);
  app.use(fraudRouter);

  const openapi = YAML.load(path.resolve(__dirname, '../../../platform/infra/docs/openapi.yaml'));
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapi));

  app.listen(env.port, () => {
    // eslint-disable-next-line no-console
    console.log(`API listening on ${env.port}`);
  });
}

void bootstrap();
