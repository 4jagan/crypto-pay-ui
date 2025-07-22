import AmountPattern from "@/components/dashbord/overview/widgets/AmountPattern";
import AssetAllocation from "@/components/dashbord/overview/widgets/AssetAllocation";
import Assets from "@/components/dashbord/overview/widgets/Assets";
import CCFeeSaving from "@/components/dashbord/overview/widgets/CCFeeSaving";
import QuickActions from "@/components/dashbord/overview/widgets/QuickActions";
import RecentTransactions from "@/components/dashbord/overview/widgets/RecentTransactions";
import TaxEfficiency from "@/components/dashbord/overview/widgets/TaxEfficiency";
import TimePattern from "@/components/dashbord/overview/widgets/TimePattern";
import TotalAssets from "@/components/dashbord/overview/widgets/TotalAssets";
import TransactionPatternAnalysis from "@/components/dashbord/overview/widgets/TransactionPatternAnalysis";
import TransactionVolume from "@/components/dashbord/overview/widgets/TransactionVolume";
import VolumeSpike from "@/components/dashbord/overview/widgets/VolumeSpike";

export default function DashboardOverviewPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 place-items-stretch pb-6">
      
      <div className="col-span-2 grid grid-cols-1 gap-4">
        <div className="h-40"><TotalAssets /></div>
        <div className=" flex flex-row place-content-between">
            <TransactionVolume />
            <CCFeeSaving />
            <TaxEfficiency />
        </div>

        <div className="p-4 bg-white text-gray-700 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between grow w-full mb-8">
                <h3 className="font-bold">
                    Anomaly Detection
                    <span className="ml-4 bg-gray-200 rounded-xl px-2">3</span>
                </h3>
                <span className="text-gray-500">AI-powered behavioural and risk assessment</span>
            </div>
            <div className="flex justify-between">
                <VolumeSpike />
                <TimePattern />
                <AmountPattern />
            </div>
        </div>

        <div className="text-gray-700 grid grid-cols-3 gap-4">
            <div className="col-span-2"><TransactionPatternAnalysis /></div>
            <div className="col-span-1"><AssetAllocation /></div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className=""><QuickActions /></div>
        <div className=""><Assets /></div>
        <div className=""><RecentTransactions /></div>
      </div>
    </div>
  );
}
