# Architecture and Transaction Flow

## 4-Layer Architecture

1. **Presentation Layer (React Native)**
   - Login (OTP + device binding)
   - Dashboard + offline indicator
   - Send/Receive screens
   - History + sync status

2. **Offline Communication Layer**
   - NFC: NDEF upi:// URI transfer
   - BLE: GATT broadcast/request exchange
   - SMS: fallback trigger
   - USSD: *99# trigger
   - Sound: ultrasonic transport abstraction

3. **Data Layer**
   - SQLite `pending_transactions`
   - Queue with states: `PENDING`, `SUCCESS`, `FAILED`
   - Sync engine with connectivity detection and retries

4. **Backend + UPI Integration Layer**
   - Node API endpoints: `/submit-transaction`, `/sync-status/:id`, `/fraud-check`
   - FastAPI fraud scoring service
   - PostgreSQL transaction ledger
   - Redis for session and rate-limit hooks

## Transaction Sequence

1. User enters payment details.
2. App checks connectivity state.
3. If offline, channel selected in priority order: `NFC > BLE > SMS > USSD > SOUND`.
4. Payload is built (`upi://pay?...`) and encrypted (AES-256), then signed (RSA-2048).
5. Payload is transmitted over selected channel.
6. Receiver decodes and acknowledges.
7. Transaction inserted in SQLite as `PENDING`.
8. Sync engine retries `/submit-transaction` when online.
9. Status updated based on gateway response.

## Security Controls

- Biometric gate before payment initiation
- Device binding fingerprint support
- Certificate pinning placeholder via environment pin
- Root/jailbreak detection hook
- Encrypted-at-rest payloads in queue
- No plaintext PIN storage

## Feature Flags

- `ENABLE_NFC`
- `ENABLE_BLE`
- `ENABLE_SMS`
- `ENABLE_USSD`
- `ENABLE_SOUND`

Use staged rollout by environment for channel enablement.
