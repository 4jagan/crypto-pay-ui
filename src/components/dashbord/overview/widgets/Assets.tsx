import getDashboardData from '@/app/api/dashboard/DashboardApi';
import getIconComponent from '@/components/icons/IconUtil';
import { formatCurrency } from '@/utils/NumberUtils';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ReactNode } from 'react';

interface AssetItemProps {
    label: string;
    value: number;
    disabled: boolean;
    icon: ReactNode;
}

function AssetItem({ label, value, icon, disabled }: AssetItemProps) {
    return (
        <div className="flex justify-between items-center h-18 px-4 py-2 rounded-lg bg-gray-100 border border-gray-300">
            <div className='flex items-center gap-2'>
                <span>{icon}</span>
                <span>{label}</span>
                {disabled && <LockOutlinedIcon className='text-gray-400' style={{ fontSize: 'medium' }} />}
            </div>

            {disabled && <div className='px-2 py-1 my-1 rounded-lg text-xs bg-slate-300'>Disabled</div>}

            {!disabled && <div className='flex flex-col items-center gap-2 text-sm'>
                <div className='font-bold'>{formatCurrency(value)}</div>
                <div className='px-2 py-1 rounded-lg text-xs text-white bg-blue-500'>+0.01%</div>
            </div>}
        </div>
    );
}

export default async function Assets() {
    const data = await getDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { assets } = data;

    return (
        <div className="flex flex-col gap-4 justify-between w-full rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Assets</h3>
                <div className="flex gap-4">
                    <button className="border border-gray-200 rounded-md px-2 py-1 text-sm">
                        7 Days
                        <ExpandMoreOutlinedIcon className='text-gray-500 ml-1' />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {assets.map(asset => (
                    <AssetItem key={asset.symbol} label={asset.label} value={asset.value} icon={getIconComponent({ icon: asset.symbol, className: "w-8 h-8" })} disabled={!asset.enabled} />
                ))}
                {/* <AssetItem label="USDC" value="$169,500" icon={getIconComponent({ icon: "usdc", className: "w-8 h-8" })} /> */}
            </div>
        </div>
    );
}
