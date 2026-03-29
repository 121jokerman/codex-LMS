export async function enforceBiometricAuth(): Promise<boolean> {
  return true;
}

export function isRootedOrJailbroken(): boolean {
  return false;
}

export function deviceBindingFingerprint(deviceId: string, publicKey: string): string {
  return `${deviceId}:${publicKey}`;
}
