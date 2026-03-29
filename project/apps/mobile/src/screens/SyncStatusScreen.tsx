import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GlassCard } from '../components/ui/GlassCard';
import { colors } from '../theme/tokens';

export function SyncStatusScreen() {
  return (
    <GlassCard>
      <Text style={styles.title}>Sync Status</Text>
      <Text style={styles.sub}>Auto retry enabled • conflict resolver active • fraud pre-check before submit.</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 20, fontWeight: '700' },
  sub: { color: colors.textMuted, marginTop: 6 }
});
