import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { formatCurrency } from '@/utils/NumberUtils';
import useDashboardData from '@/app/api/dashboard/DashboardApi';
import mockDashboardData from '@/app/api/dashboard/mockDashboardData';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

interface PortfolioItem {
    item: typeof mockDashboardData.walletPortfolio[number];
}

function PortfolioCard({ item }: PortfolioItem) {
  const { title, value, assetName, assetDescription, riskLevel, status, temperature } = item;

  const riskLevelColor = riskLevel === 'Low' ? 'bg-green-100 text-green-700 border-green-300'
      : riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
      : 'bg-red-100 text-red-700 border-red-300';

  return (
    <div className="flex flex-col gap-2 justify-between bg-gray-50 border border-gray-300 rounded-lg p-4">
      
      <div className="grid grid-cols-5 items-center justify-between w-full">
        <h3 className="text-lg font-semibold col-span-2">{title}</h3>
        <div className='w-28 text-center text-xs font-semibold bg-gray-600 text-white rounded-full py-2 px-3'>{temperature} Wallet</div>
        {value>0 && <div className='text-2xl font-bold col-span-2 text-right'>{formatCurrency(value)}</div>}
      </div>

        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-2'>
                <div className="flex gap-4 opacity-70 text-sm items-center">
                    <div className='flex items-center'>
                        <span className='text-green-500 mr-1 text-base'>●</span>
                        <span className=''>{assetName}</span>
                    </div>
                    <p>{assetDescription}</p>
                </div>

                {value>0 && <div className="flex gap-4 opacity-70 text-sm items-center">
                    <span className={`px-2 py-1 rounded-full border text-xs ${riskLevelColor}`}>{riskLevel} Risk</span>
                    <span className="px-2 py-1 rounded-full font-semibold text-xs">{status}</span>
                </div>} 
            </div>

            <div className='flex gap-4 items-center justify-between text-sm'>
                <button className="border border-gray-300 text-gray-500 px-4 py-1 rounded">
                    <VisibilityOutlinedIcon style={{ fontSize: '18px' }} />
                </button>
                <button className="border border-blue-600 bg-blue-500 text-white px-4 py-1 rounded">
                    Manage
                </button>
            </div>
        </div>
    </div>);
}

export default async function WalletPortfolio() {

    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const {walletPortfolio} = data;

  return (
    <div className="flex flex-col justify-between gap-4 p-4 bg-white text-gray-700 rounded-lg">

      {/* Wallet Portfolio Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Wallet Portfolio</h2>
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
        <div className="flex flex-col justify-between gap-4 grow mt-4">
            {walletPortfolio.map(item => (
                <PortfolioCard key={item.id} item={item} />
            ))}

            <button className="border border-blue-600 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg w-full">
                <span className="text-lg pr-2">+</span> Create New Wallet
            </button>
        </div>
    </div>
  );
}
