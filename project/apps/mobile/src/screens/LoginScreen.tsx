import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from '../components/ui/ActionButton';
import { GlassCard } from '../components/ui/GlassCard';
import { colors, spacing } from '../theme/tokens';

export function LoginScreen() {
  return (
    <GlassCard>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.sub}>OTP + device binding + biometric unlock</Text>
      <View style={styles.actions}>
        <ActionButton label="Send OTP" onPress={() => undefined} />
        <ActionButton label="Use Biometric" variant="ghost" onPress={() => undefined} />
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.text, fontSize: 24, fontWeight: '800' },
  sub: { color: colors.textMuted, marginTop: 4, marginBottom: spacing.md },
  actions: { marginTop: spacing.sm }
});
