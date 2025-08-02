// /types/global.d.ts
interface EthereumProvider {
  isMetaMask?: boolean;
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  on?: (...args: unknown[]) => void;
}

interface Window {
  ethereum?: EthereumProvider;
}

/**
 * Estimated Gas Units: 35437
rate-shop.service.ts:60 Gas Price (wei): 1115867
rate-shop.service.ts:61 Estimated Gas Cost (in ETH): 0.000000039542978879
 */
interface GasMetric {
  estimatedGasUnits: string;
  gasPrice: string; // in wei
  gasPriceInEth: string; // in ETH
  gasPriceInUSDC: string; // in USDC
}