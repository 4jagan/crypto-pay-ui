
export default function HighRisk() {
  return (
    <div className="flex flex-col justify-between h-36 w-72 shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
        <h3 className="font-bold">High Risk</h3>
        <h3 className="font-bold text-red-500 text-3xl">3</h3>
        <span className="text-sm text-gray-500">Require immediate attention</span>
    </div>
  );
}
