"use client";
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import getDashboardData from '@/app/api/dashboard/DashboardApi';
import mockDashboardData from '@/app/api/dashboard/mockDashboardData';
import { formatNumber } from '@/utils/NumberUtils';
import { formatRelativeTime } from '@/utils/DateUtils';
import { useEffect, useState } from 'react';

interface RecentTransactionItemProps {
    transaction: typeof mockDashboardData.recentTransactions[number];
}

function RecentTransactionItem({ transaction }: RecentTransactionItemProps) {

    // const title = (transaction.inbound ? `Incoming` : `Outgoing`) + ` ${transaction.assetName}`;

    const address = transaction.inbound ? ("From: " + transaction.fromAddress.substring(0, 6) + "...") : ("To: " + transaction.toAddress.substring(0, 6) + "...");

    return (
        <div className="flex justify-between items-center p-2 bg-gray-100 border border-gray-300 rounded-lg text-sm">
            <div className="flex items-center gap-2">
                {transaction.inbound ? <CallReceivedOutlinedIcon className="text-green-500" /> : <CallMadeOutlinedIcon className="text-red-500" />}
                <div className="flex flex-col">
                    <span className="font-bold text-base">{formatNumber(transaction.amount)} {transaction.assetName}</span>
                    <span className="text-xs text-gray-500">
                        {address}
                        <span className='pl-2'>| {formatRelativeTime(transaction.date)}</span>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MoreVertOutlinedIcon className='text-gray-400 hover:text-gray-700' />
            </div>
        </div>
    );
}

export default function RecentTransactions({maxItems = 2}: {maxItems?: number}) {
    const [data, setData] = useState<typeof mockDashboardData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getDashboardData();
            setData(data);
        }
        fetchData();
    }, []);

    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { recentTransactions } = data;

    return (
        <div className="flex flex-col gap-4 justify-between w-full rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <h3 className="font-bold">Recent Transactions</h3>
            <div className="flex flex-col gap-2">
                {recentTransactions.slice(0, maxItems).map((transaction) => (
                    <RecentTransactionItem key={transaction.id} transaction={transaction} />
                ))}
                <button className="rounded-lg mt-2 py-2 border border-blue-400 text-blue-500 hover:underline">View All</button>
            </div>
        </div>
    );
}
