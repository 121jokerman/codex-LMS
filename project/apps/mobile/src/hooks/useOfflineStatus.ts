import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { usePaymentStore } from '../store/usePaymentStore';

export function useOfflineStatus() {
  const setOnline = usePaymentStore((s) => s.setOnline);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
    return unsubscribe;
  }, [setOnline]);
}
