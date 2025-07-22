
interface PerformanceItemProps {
    title: string;
    subtitle: string;
    value: string;
    type: "green" | "blue" | "purple" | "amber" | "indigo" | "emerald" | "cyan" | "cost-saving" | "tax-saving";
    className?: string;
}

export default function PerformanceItem({ title, subtitle, value, type }: PerformanceItemProps) {

    const styles = [
        { type: "green", className: "bg-green-50 text-green-700 border-green-200" },
        { type: "blue", className: "bg-blue-50 text-blue-700 border-blue-200" },
        { type: "purple", className: "bg-purple-50 text-purple-700 border-purple-200" },
        { type: "amber", className: "bg-amber-50 text-amber-700 border-amber-200" },
        { type: "indigo", className: "bg-indigo-50 text-indigo-700 border-indigo-200" },
        { type: "emerald", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        { type: "cyan", className: "bg-cyan-50 text-cyan-700 border-cyan-200" },
        { type: "cost-saving", className: "bg-gray-50 text-gray-800 border-gray-100" },
        { type: "tax-saving", className: "bg-gray-50 text-gray-800 border-gray-100" },
    ]

    const currentStyle = styles.find(style => style.type === type);

    return (
        <div className={`flex justify-between items-center rounded-lg p-4 border ${currentStyle?.className}`}>
            <div className="flex flex-col items-start justify-between text-left">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-xs opacity-70">{subtitle}</p>
            </div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    );
}
