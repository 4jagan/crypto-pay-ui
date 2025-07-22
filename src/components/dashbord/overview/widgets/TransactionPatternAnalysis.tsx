import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import useDashboardData from '@/app/api/dashboard/DashboardApi';

export default async function TransactionPatternAnalysis() {

    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }

    const pattern = data.transactionPattern;
    const series = [
        { data: pattern.filter(item => item.inbound).map(item => item.amount)},
        { data: pattern.filter(item => !item.inbound).map(item => item.amount)},
    ];
    const xAxis = [
        {
            data: [...new Set(pattern.map(item => new Date(item.date).toLocaleTimeString([], { hour: '2-digit'})))],
        }
    ];
    const chartSetting = {
        colors: ['#22c55e', '#ef4444'],
        height: 300,
        xAxis: xAxis,
        series: series,
    };

    return (
        <div className="flex flex-col justify-between w-full shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Transaction Pattern Analysis</h3>
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

            <BarChart {...chartSetting} />

        </div>
    );
}
