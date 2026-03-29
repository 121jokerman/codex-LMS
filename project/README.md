# UPI Offline Payments Platform (Production-Ready Blueprint)

This repository contains a production-oriented reference implementation for an **offline-first UPI payments system** with:

- React Native mobile app (TypeScript)
- Node.js API gateway + transaction ledger APIs
- FastAPI fraud microservice
- PostgreSQL + Redis
- Docker Compose for local orchestration
- CI workflow and deployment guidance

> ⚠️ Compliance note: Real UPI money movement requires NPCI PSP onboarding, sponsor bank integration, and RBI-regulated compliance controls. This codebase includes mock + production-ready abstractions, not live NPCI credentials.

## Monorepo Layout

- `apps/mobile/` - React Native app with offline channels, queueing, sync UX, and modern UI tokens
- `frontend/UX_DESIGN.md` - modern UX system and interaction blueprint
- `services/api-gateway/` - API gateway and transaction orchestration
- `services/fraud-service/` - Fraud scoring microservice
- `platform/infra/` - deployment docs, OpenAPI, and infrastructure manifests

## Key Features

- Multi-channel offline transport abstraction: NFC, BLE, SMS, USSD, Sound
- Local encrypted queue (`pending_transactions`) via SQLite
- Smart channel selector (`NFC > BLE > SMS > USSD > Sound`)
- Online sync + retries + conflict handling
- AES-256 payload encryption and RSA-2048 signatures
- Biometric gate, device binding hooks, root/jailbreak checks
- Feature flags for channel rollout per environment

## Quick Start

### 1) Local infra

```bash
docker compose -f project/platform/infra/docker/docker-compose.yml up --build
```

### 2) Node backend

```bash
cd project/services/api-gateway
npm install
npm run dev
```

### 3) FastAPI fraud service

```bash
cd project/services/fraud-service
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

### 4) Frontend

```bash
cd project/apps/mobile
npm install
npm run start
```

## Environments

Environment-specific configs are provided via:

- `project/apps/mobile/.env.example`
- `project/services/api-gateway/.env.example`
- `project/services/fraud-service/.env.example`

Use `.env.development`, `.env.staging`, `.env.production` patterns in deployment.

## API Docs

- OpenAPI reference: `project/platform/infra/docs/openapi.yaml`
- Node Swagger UI: `/docs` when API is running
- FastAPI docs: `/docs` on port `8001`

## Testing

- Frontend unit tests: Jest (queue, selector, encryption)
- Backend unit tests: Jest + Pytest
- Load test template for 1000+ pending transaction sync included in docs

## Production Deployment

See `project/platform/infra/docs/deployment-guide.md` for AWS/GCP guidance, observability, scaling, secrets, and rollout.
