import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { pickBestChannel } from '../utils/channelSelector';
import { featureFlags } from '../config/featureFlags';
import { ActionButton } from '../components/ui/ActionButton';
import { GlassCard } from '../components/ui/GlassCard';
import { colors } from '../theme/tokens';

export function SendMoneyScreen() {
  const channel = pickBestChannel(featureFlags);

  return (
    <GlassCard>
      <Text style={styles.title}>Send Money</Text>
      <Text style={styles.sub}>Smart channel selected: {channel}</Text>
      <ActionButton label={`Pay using ${channel}`} onPress={() => undefined} />
      <ActionButton label="Choose manually" variant="ghost" onPress={() => undefined} />
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 20, fontWeight: '700' },
  sub: { color: colors.textMuted, marginTop: 6, marginBottom: 12 }
});
