import SQLite from 'react-native-sqlite-storage';
import type { PendingTransaction, TxnStatus } from '../types';

const db = SQLite.openDatabase({ name: 'upi_offline.db', location: 'default' });

export function initDb(): void {
  db.transaction((tx) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS pending_transactions (
        id TEXT PRIMARY KEY,
        vpa TEXT NOT NULL,
        amount REAL NOT NULL,
        channel TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        status TEXT NOT NULL,
        encrypted_payload TEXT NOT NULL,
        signature TEXT NOT NULL
      );
    `);
  });
}

export function insertPending(txn: PendingTransaction): void {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT OR REPLACE INTO pending_transactions
       (id, vpa, amount, channel, timestamp, status, encrypted_payload, signature)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [txn.id, txn.vpa, txn.amount, txn.channel, txn.timestamp, txn.status, txn.encryptedPayload, txn.signature]
    );
  });
}

export function updateStatus(id: string, status: TxnStatus): void {
  db.transaction((tx) => {
    tx.executeSql(`UPDATE pending_transactions SET status = ? WHERE id = ?`, [status, id]);
  });
}
