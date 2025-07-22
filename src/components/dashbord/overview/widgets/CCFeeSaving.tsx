import useDashboardData from '@/app/api/dashboard/DashboardApi';
import { formatCurrencyShort } from '@/utils/NumberUtils';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

interface CCFeeSavingProps {
    className?: string;
}

export default async function CCFeeSaving({ className = " space-y-2 w-72 " }: CCFeeSavingProps) {
    const data = await useDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { ccFeeSavings, ccFeeSavingsChange } = data;

    return (
        <div className={`flex flex-col rounded-lg p-4 bg-white text-gray-700 border border-gray-200 ${className}`}>
            <div className="flex justify-between items-center">
                <h3 className="">CC Fee Saving</h3>
                <CreditCardOutlinedIcon className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold">{formatCurrencyShort(ccFeeSavings)}</h1>
            <p className={`text-sm ${ccFeeSavingsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {ccFeeSavingsChange >= 0 ? '⬆' : '⬇'} {formatCurrencyShort(ccFeeSavingsChange)} from last month
            </p>
        </div>
    );
}
