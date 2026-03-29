import NfcManager, { Ndef, NfcTech } from 'react-native-nfc-manager';

export async function sendViaNfc(payload: string): Promise<void> {
  await NfcManager.start();
  await NfcManager.requestTechnology(NfcTech.Ndef);
  const bytes = Ndef.encodeMessage([Ndef.textRecord(payload)]);
  if (!bytes) throw new Error('NFC encode failed');
  await NfcManager.ndefHandler.writeNdefMessage(bytes);
}
