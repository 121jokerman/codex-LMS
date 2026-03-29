import { Linking } from 'react-native';

export async function triggerUssd(): Promise<void> {
  await Linking.openURL('tel:*99%23');
}
