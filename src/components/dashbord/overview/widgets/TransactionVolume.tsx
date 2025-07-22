import getDashboardData from '@/app/api/dashboard/DashboardApi';
import { formatCurrencyShort } from '@/utils/NumberUtils';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';

export default async function TransactionVolume() {
    const data = await getDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { transactionVolume, transactionVolumeChange } = data;

    return (
        <div className="flex flex-col space-y-2 w-72 rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="">Transaction Volume</h3>
                <MovingOutlinedIcon className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold">{formatCurrencyShort(transactionVolume)}</h1>
            <p className="text-sm text-green-500">
                <span>{transactionVolumeChange >= 0 ? '⬆' : '⬇'}</span> {Math.abs(transactionVolumeChange)}% from last month
            </p>
        </div>
    );
}
