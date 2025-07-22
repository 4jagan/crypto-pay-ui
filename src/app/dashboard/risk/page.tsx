import AmountPattern from "@/components/dashbord/overview/widgets/AmountPattern";
import TimePattern from "@/components/dashbord/overview/widgets/TimePattern";
import TransactionPatternAnalysis from "@/components/dashbord/overview/widgets/TransactionPatternAnalysis";
import VolumeSpike from "@/components/dashbord/overview/widgets/VolumeSpike";
import ActiveAnomalies from "@/components/dashbord/risk/widgets/ActiveAnomalies";
import AnomalyDetectionResults from "@/components/dashbord/risk/widgets/AnomalyDetectionResults";
import HighRisk from "@/components/dashbord/risk/widgets/HishRisk";
import RiskAmountCorrelation from "@/components/dashbord/risk/widgets/RiskAmountCorrelation";
import RiskScore from "@/components/dashbord/risk/widgets/RiskScore";

export default function DashboardRiskPage() {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-8">
            <RiskScore />
            <ActiveAnomalies />
            <HighRisk />
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
        <div className="grid grid-cols-2 gap-4">
            <TransactionPatternAnalysis />
            <RiskAmountCorrelation />
        </div>

        <div className="w-full">
            <AnomalyDetectionResults />
        </div>
    </div>
  );
}
