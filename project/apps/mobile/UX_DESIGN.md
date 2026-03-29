# UPI Offline UX Design (2026 Modern Aesthetic)

## Design Intent

A premium dark-first fintech aesthetic inspired by current-era patterns:
- Soft-glass cards with high contrast text
- Bold typography and concise copy
- Trust-signals on every key payment touchpoint
- Offline visibility always on-screen (never hidden)

## Core Principles

1. **Trust first:** surface security state (device bound, signed txns, sync status).
2. **One primary action per screen:** reduce cognitive load in low-network contexts.
3. **Offline confidence:** explain what happens now vs after sync.
4. **Fast thumb flow:** big tap targets and vertical progression.

## Visual System

- Background: deep navy (`#0B1020`)
- Surface cards: layered indigo (`#121A30`, `#1A2442`)
- Accent primary: violet (`#6D5EF5`)
- Accent secondary: cyan (`#4CC9F0`)
- Success/warning/danger semantic states

Typography:
- Heading: heavy (800-900)
- Body: medium (500-600)
- Metadata: muted labels and subtle separators

## Information Architecture

1. Login (OTP + biometric shortcut)
2. Dashboard (balance + queue + status banner)
3. Send Money (smart channel + manual override)
4. Receive Money (offline token + QR fallback)
5. History (combined local/synced timeline)
6. Sync Status (retries/conflicts/risk checks)

## Micro-interactions

- Offline banner pulses slightly when network drops.
- Payment button transitions label to `Queued securely` when offline.
- Sync success animates pending count decrement.

## Accessibility

- Minimum 4.5:1 contrast on text
- Dynamic type support for heading/body tiers
- Touch target >= 44px height
- No critical info communicated by color alone
