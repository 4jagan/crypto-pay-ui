import useDashboardData from '@/app/api/dashboard/DashboardApi';
import { PieChart } from '@mui/x-charts/PieChart';

export default async function AssetAllocation() {

    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }

    const assetAllocation = data.assetAllocation;

    const settings = {
        height: 270,
        legend: {
            direction: "row",
            position: { vertical: "bottom", horizontal: "middle" }
        },
        
    };

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const seriesData = assetAllocation.map((item: any, index: number) => ({
        label: item.label,
        value: item.value,
        color: colors[index]
    }));


    return (
        <div className="flex flex-col justify-between w-full shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <h3 className="font-bold">Asset Allocation</h3>

            <PieChart
                series={[{ innerRadius: 50, outerRadius: 100, data: seriesData }]}
                slotProps={{
                    legend: {
                    direction: 'horizontal',
                    position: { 
                        vertical: 'bottom',
                        horizontal: 'end'
                    }
                }}}
                {...settings}
            />

        </div>
    );
}
