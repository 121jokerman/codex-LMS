import { getPspAdapter } from '../src/services/pspAdapter';

describe('psp adapter', () => {
  it('returns success in sandbox mode', async () => {
    const adapter = getPspAdapter();
    const result = await adapter.submitTransaction({});
    expect(result.status).toBe('SUCCESS');
  });
});
