import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing } from '../../theme/tokens';

export function ActionButton({ label, onPress, variant = 'primary' }: { label: string; onPress: () => void; variant?: 'primary' | 'ghost' }) {
  return (
    <Pressable style={[styles.base, variant === 'ghost' ? styles.ghost : styles.primary]} onPress={onPress}>
      <Text style={[styles.text, variant === 'ghost' ? styles.ghostText : null]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm
  },
  primary: {
    backgroundColor: colors.primary
  },
  ghost: {
    backgroundColor: colors.surfaceElevated,
    borderColor: colors.border,
    borderWidth: 1
  },
  text: {
    color: colors.text,
    fontWeight: '700'
  },
  ghostText: {
    color: colors.textMuted
  }
});
