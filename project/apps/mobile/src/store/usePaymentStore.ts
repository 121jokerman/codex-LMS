import { create } from 'zustand';
import type { PendingTransaction } from '../types';

interface PaymentState {
  pending: PendingTransaction[];
  online: boolean;
  setOnline: (online: boolean) => void;
  enqueue: (txn: PendingTransaction) => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  pending: [],
  online: false,
  setOnline: (online) => set({ online }),
  enqueue: (txn) => set((state) => ({ pending: [...state.pending, txn] }))
}));
