import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { usePaymentStore } from '../store/usePaymentStore';
import { OfflineModeBanner } from '../components/OfflineModeBanner';
import { GlassCard } from '../components/ui/GlassCard';
import { colors, spacing } from '../theme/tokens';

export function DashboardScreen() {
  const online = usePaymentStore((s) => s.online);
  const pending = usePaymentStore((s) => s.pending.length);

  return (
    <View>
      <OfflineModeBanner offline={!online} />
      <GlassCard>
        <Text style={styles.label}>Available balance</Text>
        <Text style={styles.balance}>₹ 24,860.00</Text>
        <Text style={styles.caption}>Protected with device binding + transaction signing</Text>
      </GlassCard>
      <GlassCard>
        <Text style={styles.label}>Sync Queue</Text>
        <Text style={styles.pending}>{pending} pending</Text>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: colors.textMuted, marginBottom: spacing.xs },
  balance: { color: colors.text, fontSize: 30, fontWeight: '800' },
  caption: { color: colors.textMuted, marginTop: spacing.xs },
  pending: { color: colors.warning, fontSize: 22, fontWeight: '700' }
});
