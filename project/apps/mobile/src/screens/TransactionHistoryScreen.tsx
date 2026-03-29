import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GlassCard } from '../components/ui/GlassCard';
import { colors } from '../theme/tokens';

export function TransactionHistoryScreen() {
  return (
    <GlassCard>
      <Text style={styles.title}>Transaction History</Text>
      <Text style={styles.sub}>Merged timeline: local queued + synced ledger entries.</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 20, fontWeight: '700' },
  sub: { color: colors.textMuted, marginTop: 6 }
});
