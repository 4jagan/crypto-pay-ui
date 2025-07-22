import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

interface RecentTransactionItemProps {
    transaction: {
        id: number;
        title: string;
        date: string;
        amount: string;
        fromAddress: string;
        toAddress: string;
        status?: string;
        inbound: boolean;
    };
}

function RecentTransactionItem({ transaction }: RecentTransactionItemProps) {
    return (
        <div className="flex justify-between items-center p-2 py-4 bg-gray-50 border border-gray-200 rounded-lg text-sm">
            <div className="flex items-center gap-2">
                {transaction.inbound ? <CallReceivedOutlinedIcon className="text-green-500" /> : <CallMadeOutlinedIcon className="text-red-500" />}
                <div className="flex flex-col">
                    <span className="font-bold text-base">{transaction.title}</span>
                    <span className="text-xs text-gray-500">
                        {transaction.inbound && <span> From: {transaction.fromAddress}</span>}
                        {!transaction.inbound && <span> To: {transaction.toAddress}</span>}
                    </span>
                </div>
            </div>
                <div className="flex flex-col text-right">
                    <span className={`font-bold text-base ${transaction.inbound ? 'text-green-500' : 'text-red-500'}`}>{transaction.amount}</span>
                    <span className='pl-2'>{transaction.date}</span>
                </div>
            <div className="flex items-center gap-2">
                <span className={`${transaction.status === "Completed" ? 'bg-blue-500' : 'bg-gray-500'} mr-4 text-white rounded-full px-2 py-0.5`}>{transaction.status}</span>
                <MoreVertOutlinedIcon className='text-gray-400 hover:text-gray-700' />
            </div>
        </div>
    );
}

export default function RecentTransactions() {
    const recentTransactions = [
        { id: 1, title: "Incoming USDC", date:"2025-07-05 18:00:22", amount: "+1,000 USDC", fromAddress: "0x84ds21...", toAddress: "0x84ds21...", status: "Pending", inbound: true },
        { id: 2, title: "Outgoing USDC", date:"2025-07-04 13:10:13", amount: "-500 USDC", fromAddress: "1A245aA65...", toAddress: "1A245aA65...", status: "Completed", inbound: false },
        { id: 3, title: "Incoming USDC", date:"2025-07-03 08:23:38", amount: "+2,000 USDC", fromAddress: "0x6b1f109...", toAddress: "0x6b1f109...", status: "Completed", inbound: false },
    ];

    return (
        <div className="flex flex-col gap-4 justify-between w-full rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <h3 className="font-bold">Recent Transactions</h3>
            <div className="flex flex-col gap-2">
                {recentTransactions.map((transaction) => (
                    <RecentTransactionItem key={transaction.id} transaction={transaction} />
                ))}
                <button className="rounded-lg mt-2 py-2 border border-blue-400 text-blue-500 hover:underline">View All</button>
            </div>
        </div>
    );
}
