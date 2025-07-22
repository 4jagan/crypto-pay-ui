import TransactionPatternAnalysis from "@/components/dashbord/overview/widgets/TransactionPatternAnalysis";
import TransactionVolume from "@/components/dashbord/overview/widgets/TransactionVolume";
import RecentTransactions from "@/components/dashbord/transaction/widgets/RecentTransactions";
import SuccessRate from "@/components/dashbord/transaction/widgets/SuccessRate";
import TransactionMetricItem from "@/components/dashbord/transaction/widgets/TransactionMetricItem";
import TransactionVolumeChart from "@/components/dashbord/transaction/widgets/TransactionVolumeChart";

export default function TransactionPage() {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col justify-between">
                <TransactionVolume />
                <SuccessRate />
            </div>
            <div className="grow bg-white text-gray-700 p-4 rounded-lg border border-gray-200">
                <div className="font-bold text-lg">Transaction Metrics</div>
                <div className="p-4 flex justify-between">
                    <TransactionMetricItem title="QR Generated" value="1,247" subValue="+12%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Payments Received" value="1,089" subValue="+8%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Conversion Rate" value="87.3%" subValue="+2.1%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Avg. Confirmation" value="45s" subValue="-5s" subValueClassName="text-gray-700 bg-gray-200" />
                </div>
                <div className="p-4 flex justify-between">
                    <TransactionMetricItem title="Transfers" value="947" subValue="+12%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Successful" value="945" subValue="+97.9%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Failed" value="2" subValue="+2.1%" subValueClassName="text-white bg-gray-700" />
                    <TransactionMetricItem title="Avg. Confirmation" value="15s" subValue="-5s" subValueClassName="text-gray-700 bg-gray-200" />
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
            <TransactionVolumeChart />
            <TransactionPatternAnalysis />
        </div>

        <div className="w-full">
            <RecentTransactions />
        </div>
    </div>
  );
}
