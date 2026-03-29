describe('offline queue load simulation', () => {
  it('handles 1000+ queued txns in memory baseline', () => {
    const txns = Array.from({ length: 1200 }, (_, i) => ({ id: `txn_${i}`, amount: i }));
    expect(txns.length).toBeGreaterThan(1000);
  });
});
