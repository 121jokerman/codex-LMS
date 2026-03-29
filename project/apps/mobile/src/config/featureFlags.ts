export const featureFlags = {
  nfc: process.env.ENABLE_NFC === 'true',
  ble: process.env.ENABLE_BLE === 'true',
  sms: process.env.ENABLE_SMS === 'true',
  ussd: process.env.ENABLE_USSD === 'true',
  sound: process.env.ENABLE_SOUND === 'true'
};
