import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MultilineChartOutlinedIcon from '@mui/icons-material/MultilineChartOutlined';

export default function AnomalyDetectionResults() {
  const data = [
    { id: 1, type: "error", date: "2025-05-01 14:30", title: "Volume Spike", description: "Transaction volume 340% higher than average." },
    { id: 2, type: "warning", date: "2025-05-01 12:40", title: "IP Inconsistency", description: "Payment from unusual geographic location." },
    { id: 3, type: "info", date: "2025-05-01 08:15", title: "Timing Pattern", description: "Payment outside of normal business hours." }
  ]
  return (
    <div className="flex flex-col gap-4 justify-between w-full shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
        <div className="flex items-center">
          <ReportProblemOutlinedIcon className="text-gray-800 -mt-0.5 mr-2" style={{ fontSize: 20 }} />
          <span className='font-bold text-lg text-gray-700'>Anomaly Detection Results</span>
        </div>
        <span className="-mt-4 mb-4 text-sm text-gray-500">AI-based composite scoring with behavioural analytics</span>

        {data.map(item => (
          <div key={item.id} className="flex p-2 gap-4 items-center rounded-lg bg-gray-100 border border-gray-200">
            {
              item.type === "error" ? <ReportProblemOutlinedIcon className="text-red-500" /> 
                : item.type === "warning" ? <NotificationsNoneOutlinedIcon className="text-yellow-500" /> 
                  : <MultilineChartOutlinedIcon className="text-blue-500" />
            }
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold">{item.title}</span>
              <span className="text-xs">{item.description}</span>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
    </div>
  );
}
