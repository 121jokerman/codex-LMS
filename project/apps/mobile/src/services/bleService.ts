import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export async function sendViaBle(payload: string): Promise<void> {
  // Merchant advertises; payer connects as client (simplified reference implementation)
  if (!payload.length) throw new Error('Empty payload');
  manager.stopDeviceScan();
}
