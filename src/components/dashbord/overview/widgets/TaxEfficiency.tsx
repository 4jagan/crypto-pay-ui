import getDashboardData from '@/app/api/dashboard/DashboardApi';
import { formatCurrencyShort } from '@/utils/NumberUtils';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

interface TaxEfficiencyProps {
    className?: string;
}

export default async function TaxEfficiency({ className = " space-y-2 w-72 " }: TaxEfficiencyProps) {
    const data = await getDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { taxEfficiency, taxEfficiencyChange } = data;

    return (
        <div className={`flex flex-col rounded-lg p-4 bg-white text-gray-700 border border-gray-200 ${className}`}>
            <div className="flex justify-between items-center">
                <h3 className="">Tax Efficiency</h3>
                <RequestQuoteOutlinedIcon className="text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold">{formatCurrencyShort(taxEfficiency)} <span className="ml-4 text-xs text-gray-500 font-light"> estimated tax savings</span></h1>
            <p className={`text-sm ${taxEfficiencyChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {taxEfficiencyChange >= 0 ? '⬆' : '⬇'} {Math.abs(taxEfficiencyChange)}% from last month
            </p>
        </div>
    );
}
