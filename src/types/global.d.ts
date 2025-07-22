// /types/global.d.ts
interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  on?: (...args: unknown[]) => void;
}

interface Window {
  ethereum?: EthereumProvider;
}
