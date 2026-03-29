import NetInfo from '@react-native-community/netinfo';
import type { PendingTransaction } from '../types';

export async function canSyncNow(): Promise<boolean> {
  const state = await NetInfo.fetch();
  return !!state.isConnected;
}

export async function syncPendingTransactions(pending: PendingTransaction[], apiBaseUrl: string): Promise<void> {
  for (const txn of pending) {
    const response = await fetch(`${apiBaseUrl}/submit-transaction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(txn)
    });

    if (!response.ok) {
      // Retry strategy can be backed by exponential queue and dead-letter logic.
      continue;
    }
  }
}
