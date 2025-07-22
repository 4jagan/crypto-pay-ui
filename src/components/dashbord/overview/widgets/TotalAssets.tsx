import useDashboardData from "@/app/api/dashboard/DashboardApi";

export default async function TotalAssets() {
    
    const data = await useDashboardData();
    
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { totalAssets, totalAssetsChange } = data;

  return (
    <div className="shadow rounded-lg p-4 bg-blue-500 text-white flex flex-col space-y-3 h-full text-left">
      <h3 className="mt-3">Total Assets</h3>
      <h2 className="font-bold text-3xl">${totalAssets.toLocaleString()}</h2>
      <p className="text-gray-300 text-sm">
        {totalAssetsChange >= 0 ? (
          <span className="text-green-500 pr-1">⬆</span>
        ) : (
          <span className="text-red-500 pr-1">⬇</span>
        )}
        {totalAssetsChange}% from last month
      </p>
    </div>
  );
}