import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useOfflineStatus } from './hooks/useOfflineStatus';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { SendMoneyScreen } from './screens/SendMoneyScreen';
import { ReceiveMoneyScreen } from './screens/ReceiveMoneyScreen';
import { TransactionHistoryScreen } from './screens/TransactionHistoryScreen';
import { SyncStatusScreen } from './screens/SyncStatusScreen';
import { colors, spacing } from './theme/tokens';

export default function App() {
  useOfflineStatus();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>UPI Offline</Text>
          <Text style={styles.sub}>Modern, secure, offline-first payments</Text>
        </View>
        <LoginScreen />
        <DashboardScreen />
        <SendMoneyScreen />
        <ReceiveMoneyScreen />
        <TransactionHistoryScreen />
        <SyncStatusScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.md, paddingBottom: spacing.xl },
  header: { marginBottom: spacing.md },
  title: { color: colors.text, fontWeight: '900', fontSize: 30 },
  sub: { color: colors.textMuted, marginTop: 4 }
});
