// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';

import {
  WagmiProvider,
  http,
} from 'wagmi';

import { sepolia } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'CryptoPay',
  projectId: '0b4ece2576ccf0c16a96a5fdd87c06f8', // 🔁 replace this
  chains: [sepolia],
  transports: {
    [sepolia.id]: http()
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
