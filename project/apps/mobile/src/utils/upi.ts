import type { PaymentRequest } from '../types';

export function buildUpiUri({ vpa, amount, note }: PaymentRequest): string {
  const params = new URLSearchParams({
    pa: vpa,
    am: amount.toFixed(2),
    cu: 'INR',
    tn: note ?? 'Offline Payment'
  });
  return `upi://pay?${params.toString()}`;
}
