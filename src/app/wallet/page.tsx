import TotalAssets from '@/components/dashbord/overview/widgets/TotalAssets';
import WalletCard from '@/components/wallet/WalletCard';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import useDashboardData from '../api/dashboard/DashboardApi';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import { formatCurrency } from '@/utils/NumberUtils';
import WalletPortfolio from '@/components/wallet/WalletPortfolio';
import AssetSupport from '@/components/wallet/AssetSupport';
import BlockChains from '@/components/wallet/BlockChains';


export default async function WalletPage() {
    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { totalAssets, totalAssetsChange, activeWallets, supportedChains } = data;
    const totalAssetsChangeDescription = (totalAssetsChange >= 0 ? `⬆ +${totalAssetsChange}` : `⬇ -${-totalAssetsChange}`) + ' from last month';

  return (
    <div className='flex flex-col gap-4'>
        {/* Wallet Header */}
      <div className="flex items-center justify-between mb-4 bg-white text-gray-700 -m-8 p-4">
        <div className="text-lg font-bold">Wallet</div>
        <div className="flex items-center gap-4">
            <button className="border border-blue-500 text-blue-700 px-4 py-1 rounded"><span className="text-lg pr-2">+</span> Create Wallet</button>
            <button className="border border-gray-300 bg-gray-50 text-gray-700 px-4 py-1 rounded">
              <CachedOutlinedIcon />
            </button>
        </div>
      </div>

        {/* Wallet Content */}
      <div className="">
        <div className="flex items-center justify-between gap-4">
            <WalletCard 
                title="Total Assets" 
                description={totalAssetsChangeDescription} 
                value={formatCurrency(totalAssets)} 
                icon={<AccountBalanceWalletOutlinedIcon />} 
                className="bg-blue-500 text-white min-w-72  w-full" />
            <WalletCard 
                title="Active Wallets" 
                description="All secured with MPC technology" 
                value={activeWallets + ''} 
                icon={<ShieldOutlinedIcon />} 
                className="bg-green-500 text-white min-w-72  w-full" />
            <WalletCard 
                title="Supported Chains" 
                description="USDC compatible blockchain networks." 
                value={supportedChains + ''} 
                icon={<MovingOutlinedIcon />} 
                className="bg-purple-500 text-white min-w-72  w-full" />
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
            <WalletPortfolio />
            <AssetSupport />
        </div>

        <BlockChains />
    </div>
  );
}
