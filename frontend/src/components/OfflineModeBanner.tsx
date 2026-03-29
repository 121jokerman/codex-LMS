import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme/tokens';

export function OfflineModeBanner({ offline }: { offline: boolean }) {
  return (
    <View style={[styles.wrapper, offline ? styles.offline : styles.online]}>
      <Text style={styles.text}>{offline ? 'Offline Mode • queued transactions will sync automatically' : 'Online • all transactions synchronized'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.pill,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md
  },
  offline: {
    backgroundColor: '#3A1026',
    borderColor: colors.danger,
    borderWidth: 1
  },
  online: {
    backgroundColor: '#0E2D24',
    borderColor: colors.success,
    borderWidth: 1
  },
  text: {
    color: colors.text,
    fontWeight: '600',
    textAlign: 'center'
  }
});
