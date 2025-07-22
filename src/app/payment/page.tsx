"use client";

import PayAndReceive from "@/components/payment/PayAndReceive";
import useDashboardData from "../api/dashboard/DashboardApi";
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import RecentTransactions from "@/components/dashbord/overview/widgets/RecentTransactions";
import ExchangeTransactions from "@/components/payment/ExchangeTransactions";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// RainbowKit/Wagmi imports
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { useEffect, useState } from "react";
import { DashboardData } from "../api/dashboard/mockDashboardData";

// RainbowKit config (same as _app.tsx)
const config = getDefaultConfig({
  appName: 'CryptoPay',
  projectId: '0b4ece2576ccf0c16a96a5fdd87c06f8',
  chains: [sepolia],
  transports: {
    [sepolia.id]: http()
  }
});
const queryClient = new QueryClient();

export default function PaymentsPage() {

    const [data, setData] = useState<DashboardData | null>(null);
    useEffect(() => {
        async function fetchData() {
            const fetchedData = await useDashboardData();
            setData(fetchedData);
        }
        fetchData();
    }, []);
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { totalAssets, totalAssetsChange, activeWallets, supportedChains } = data;
    const totalAssetsChangeDescription = (totalAssetsChange >= 0 ? `⬆ +${totalAssetsChange}` : `⬇ -${-totalAssetsChange}`) + ' from last month';

    return (
        <QueryClientProvider client={queryClient}>
            <WagmiProvider config={config}>
                <RainbowKitProvider>
                    <div className='flex flex-col gap-4'>
                        {/* Payments Header */}
                        <div className="flex items-center justify-between mb-4 bg-white text-gray-700 -m-8 p-4">
                            <div className="text-lg font-bold">Payments</div>
                            <div className="flex items-center gap-4">
                                <button className="border border-gray-300 bg-gray-50 text-gray-700 px-4 py-1 rounded">
                                <CachedOutlinedIcon />
                                </button>
                            </div>
                        </div>

                        {/* Payments Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <PayAndReceive />
                            <RecentTransactions maxItems={6} />
                        </div>

                        <ExchangeTransactions />
                    </div>
                </RainbowKitProvider>
            </WagmiProvider>
        </QueryClientProvider>
    );
}