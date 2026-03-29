export type Channel = 'NFC' | 'BLE' | 'SMS' | 'USSD' | 'SOUND';
export type TxnStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export interface PaymentRequest {
  id: string;
  vpa: string;
  amount: number;
  note?: string;
  channel?: Channel;
  timestamp: string;
}

export interface PendingTransaction extends PaymentRequest {
  status: TxnStatus;
  signature: string;
  encryptedPayload: string;
}

export interface SyncResult {
  id: string;
  status: TxnStatus;
  reason?: string;
}
