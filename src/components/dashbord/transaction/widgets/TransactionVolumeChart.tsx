import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { BarChart } from '@mui/x-charts/BarChart';

export default function TransactionVolumeChart() {
    const chartSetting = {
        colors: ['#22c55e', '#ef4444'],
        height: 300,
    };

    return (
        <div className="flex flex-col justify-between w-full shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Transaction Volume</h3>
                <div className="flex gap-4">
                    <button className="border border-gray-200 rounded-md px-2 py-1 text-sm">
                        Hourly
                        <ExpandMoreOutlinedIcon className='text-gray-500 ml-1' />
                    </button>
                    <button className="border border-gray-200 rounded-md px-2 py-1 text-sm">
                        <CachedOutlinedIcon className='text-gray-500 ml-1' />
                    </button>
                </div>
            </div>

            <BarChart
                series={[
                    { data: [2500, 3075, 1800, 4300, 2900, 4000, 3100] },
                    { data: [2000, 1800, 2800, 1800, 3100, 2800, 2800] },
                ]}
                xAxis={[{ data: ['06-27', '06-29', '07-01', '07-03', '07-05', '07-07'] }]}
                {...chartSetting}
            />

            <div className='flex justify-between items-center'>
                <span className="text-sm text-gray-700">Risk Score</span>
                <span className="text-sm text-gray-500">60</span>
            </div>
        </div>
    );
}
