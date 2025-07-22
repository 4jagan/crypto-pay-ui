import CCFeeSaving from "@/components/dashbord/overview/widgets/CCFeeSaving";
import TaxEfficiency from "@/components/dashbord/overview/widgets/TaxEfficiency";
import ActiveUsers from "@/components/dashbord/performance/widgets/ActiveUsers";
import PerformanceItem from "@/components/dashbord/performance/widgets/PerformanceItem";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import Divider from "@mui/material/Divider";
import { JSX } from "react/jsx-runtime";

export default function PerformancePage() {
    
  return (
    <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
            <ActiveUsers className="space-y-4 " />
            <CCFeeSaving className="space-y-4 " />
            <TaxEfficiency className="space-y-4 " />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg border border-gray-200 text-gray-700">
                <SavingTitle 
                    title="Cost Savings Breakdown" 
                    subtitle="Monthly savings vs traditional payment methods" 
                    iconClassName="bg-green-100 text-green-600"
                    icon={<CreditCardOutlinedIcon />} />
                
                <PerformanceItem 
                    title="Credit Card Fees Avoided" 
                    subtitle="2.5% avg. processing fee saved." 
                    value="$1,130,000" 
                    type="green" />
                <PerformanceItem 
                    title="Wire Transfer Fees Saved" 
                    subtitle="$25-50 per international transfer." 
                    value="$28,500" 
                    type="blue" />
                <PerformanceItem 
                    title="Currency Exchange Fees Saved" 
                    subtitle="1-3% FX margin avoided." 
                    value="$456,800" 
                    type="purple" />
                
                <div className="h-20"></div>
                <Divider />

                <PerformanceItem 
                    title="Total Monthly Savings" 
                    subtitle="" 
                    value="$1,615,300" 
                    type="cost-saving" />
            </div>
                
            <div className="flex flex-col gap-4 bg-white p-4 rounded-lg border border-gray-200 text-gray-700">
                <SavingTitle 
                    title="Tax Efficiency Analysis" 
                    subtitle="Potential tax optimization through crypto payments." 
                    iconClassName="bg-amber-100 text-amber-600"
                    icon={<RequestQuoteOutlinedIcon />} />
                
                <PerformanceItem 
                    title="Business Expense Deductions" 
                    subtitle="Enhanced tracking and categorization." 
                    value="$345,200" 
                    type="amber" />
                <PerformanceItem 
                    title="Cross-Border Tax Efficiency" 
                    subtitle="Reduced international tax liabilities." 
                    value="$267,900" 
                    type="indigo" />
                <PerformanceItem 
                    title="Automated Compliance" 
                    subtitle="Reduced audit and penalty risks." 
                    value="$89,400" 
                    type="cyan" />
                <PerformanceItem 
                    title="Capital Gains Optimization" 
                    subtitle="Strategic timing and FIFO methods." 
                    value="$189,500"
                    type="cyan" />

                <Divider />

                <PerformanceItem 
                    title="Estimated Tax Savings" 
                    subtitle="" 
                    value="$892,000" 
                    type="cost-saving" />

                <div className="text-xs italic text-gray-400 text-center">*Consult tax advisor for specific situations.</div>

            </div>
            
        </div>
    </div>
  );
}

function SavingTitle({ title, subtitle, icon, iconClassName }: { title: string; subtitle: string; icon: JSX.Element; iconClassName?: string }) {
  return (
    <div className="flex flex-col text-left gap-2">
        <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl ${iconClassName}`}>{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span className="text-sm text-gray-500">{subtitle}</span>
    </div>
  );
}