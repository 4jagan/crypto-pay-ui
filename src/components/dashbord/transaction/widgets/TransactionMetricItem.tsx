
interface TransactionMetricItemProps {
  title: string;
  value: string;
  subValue: string;
  subValueClassName: string;
}

export default function TransactionMetricItem({
  title,
  subValue,
  value,
  subValueClassName = "text-xs text-gray-500",
}: TransactionMetricItemProps) {
  return (
    <div className="flex flex-col justify-between h-24 w-52 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <span className="text-sm font-semibold">{title}</span>
        <div className="flex justify-between items-center">
            <span className="text-xl font-bold">{value}</span>
            <span className={`${subValueClassName} px-2 py-0.5 rounded-xl text-sm`}>{subValue}</span>
      </div>
    </div>
  );
}
