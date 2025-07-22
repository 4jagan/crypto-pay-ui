import getDashboardData from "@/app/api/dashboard/DashboardApi";
import LinearScale from "@/components/utils/LinearScale";

export default async function RiskScore() {
  const data = await getDashboardData();
  if (!data) {
      return <div className="p-4 text-gray-500">Loading...</div>;
  }

  const riskScore = data.riskScore;
  const riskLevel = riskScore < 30 ? 'Low' : riskScore < 70 ? 'Medium' : 'High';
  const riskLevelColor = riskLevel === 'High' ? 'text-red-500' 
      : riskLevel === 'Medium' ? 'text-orange-500' 
      : 'text-green-500';
  return (
    <div className="flex flex-col justify-between h-36 w-72 shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
        <h3 className="font-bold">Risk Score</h3>
        <h3 className={`font-bold text-3xl ${riskLevelColor}`}>{riskScore}/100</h3>
        <div className=''>
                <LinearScale value={riskScore} />
            <span className="text-sm text-gray-500">{riskLevel} risk environment</span> 
        </div>
    </div>
  );
}
