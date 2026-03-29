import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { GlassCard } from '../components/ui/GlassCard';
import { colors } from '../theme/tokens';

export function ReceiveMoneyScreen() {
  return (
    <GlassCard>
      <Text style={styles.title}>Receive Money</Text>
      <Text style={styles.sub}>Generate offline token via NFC/BLE/Sound and share QR fallback.</Text>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 20, fontWeight: '700' },
  sub: { color: colors.textMuted, marginTop: 6 }
});
