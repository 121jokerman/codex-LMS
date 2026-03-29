export interface PspAdapter {
  submitTransaction(payload: unknown): Promise<{ status: 'SUCCESS' | 'FAILED'; providerRef: string }>;
}

class SandboxPspAdapter implements PspAdapter {
  async submitTransaction(): Promise<{ status: 'SUCCESS'; providerRef: string }> {
    return { status: 'SUCCESS', providerRef: `MOCK-${Date.now()}` };
  }
}

export function getPspAdapter(): PspAdapter {
  return new SandboxPspAdapter();
}
