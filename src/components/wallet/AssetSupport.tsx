import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { formatCurrency } from '@/utils/NumberUtils';
import useDashboardData from '@/app/api/dashboard/DashboardApi';
import mockDashboardData from '@/app/api/dashboard/mockDashboardData';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

interface PortfolioItem {
    item: typeof mockDashboardData.assets[number];
}

function AssetSupportCard({ item }: PortfolioItem) {
  const { symbol, label, value, change, enabled } = item;

  return (
    <div className={`flex items-center justify-between p-4 border border-gray-200 bg-gray-50 rounded-lg`}>
      
      <div className="flex gap-4 items-center">
        <span className={`mr-1 text-lg ${enabled ? 'text-green-500' : 'text-gray-400'}`}>●</span>
        <span className="font-semibold uppercase">{symbol}</span>
        <span className="font-light text-sm">{label}</span>
        {!enabled && <LockOutlinedIcon className='text-gray-400' style={{ fontSize: 'medium' }} />}
      </div>

      <div className="flex items-center gap-4 font-bold">
        {enabled && <span className="text-gray-700 mr-4">{formatCurrency(value)}</span>}
        {!enabled && <span className="text-gray-400">Coming Soon</span>}
        <div className={` text-xs ${enabled ? 'text-green-500 bg-green-100 border-green-300' : 'text-gray-400 bg-gray-100 border-gray-300'} border  px-2 py-1 rounded-full`}>
          {enabled ? 'Active' : 'Disabled'}
        </div>
      </div>
    </div>
  );
}

export default async function AssetSupport() {

    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const {assets} = data;

  return (
    <div className="flex flex-col gap-4 p-4 bg-white text-gray-700 rounded-lg">

      {/* Wallet Portfolio Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Asset Support Status</h2>
        <div className="flex items-center gap-4 text-sm">
            <button className="border border-gray-300 text-gray-500 px-4 py-1 rounded">
                <SearchOutlinedIcon />
            </button>
            <button className="border border-gray-300 text-gray-500 px-4 py-1 rounded">
                <CachedOutlinedIcon />
            </button>
        </div>
      </div>

        {/* Portfolio Cards */}
        <div className="flex flex-col gap-4 mt-4">
            {assets.map(item => (
                <AssetSupportCard key={item.symbol} item={item} />
            ))}

            <div className="flex flex-col text-blue-700 border border-blue-300 bg-blue-100 p-4 rounded-lg">
                <div className="flex items-center gap-1">
                    <ReportProblemOutlinedIcon className="text-blue-600" style={{ fontSize: '16px' }} />
                    <span className="text-sm font-semibold">Asset Expansion Roadmap</span>
                </div>
                <p className="text-xs mt-2">Additional cryptocurrencies will be enabled based on regulatory approval and compliance requirements. Stay tuned for updates!</p>
            </div>
        </div>
    </div>
  );
}
