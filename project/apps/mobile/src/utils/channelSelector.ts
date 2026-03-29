import type { Channel } from '../types';

export interface ChannelCapabilities {
  nfc: boolean;
  ble: boolean;
  sms: boolean;
  ussd: boolean;
  sound: boolean;
}

const PRIORITY: Channel[] = ['NFC', 'BLE', 'SMS', 'USSD', 'SOUND'];

export function pickBestChannel(c: ChannelCapabilities): Channel {
  for (const channel of PRIORITY) {
    if (channel === 'NFC' && c.nfc) return channel;
    if (channel === 'BLE' && c.ble) return channel;
    if (channel === 'SMS' && c.sms) return channel;
    if (channel === 'USSD' && c.ussd) return channel;
    if (channel === 'SOUND' && c.sound) return channel;
  }
  return 'SOUND';
}
