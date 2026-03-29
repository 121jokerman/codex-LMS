import { pickBestChannel } from '../src/utils/channelSelector';

describe('pickBestChannel', () => {
  it('prefers NFC first', () => {
    expect(pickBestChannel({ nfc: true, ble: true, sms: true, ussd: true, sound: true })).toBe('NFC');
  });

  it('falls back to BLE then SMS', () => {
    expect(pickBestChannel({ nfc: false, ble: true, sms: true, ussd: true, sound: true })).toBe('BLE');
    expect(pickBestChannel({ nfc: false, ble: false, sms: true, ussd: true, sound: true })).toBe('SMS');
  });
});
