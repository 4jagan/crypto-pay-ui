import useDashboardData from '@/app/api/dashboard/DashboardApi';
import LinearScale from '@/components/utils/LinearScale';

export default async function AmountPattern() {
    const data = await useDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { riskScore, riskLevel, description } = data.anomalyDetection.amountPattern;
    const riskLevelColor = riskLevel === 'High' ? ' bg-red-600 text-white ' 
        : riskLevel === 'Medium' ? ' bg-orange-500 text-white ' 
        : ' bg-yellow-400 text-white ';

    return (
        <div className="flex flex-col justify-between h-36 w-72 shadow-xs rounded-lg p-4 bg-gray-100 text-gray-800 border border-gray-300">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Amount Pattern</h3>
                <span className={`${riskLevelColor} text-sm px-2 rounded-2xl`}>{riskLevel}</span>
            </div>

            <p className="text-sm font-light text-gray-500">
                {description}
            </p>

            <div className='flex justify-between items-center'>
                <span className="text-sm text-gray-700">Risk Score</span>
                <div className="w-32">
                    <LinearScale value={riskScore} />
                </div>
                <span className="text-sm text-gray-500">{riskScore}</span>
            </div>
        </div>
    );
}
