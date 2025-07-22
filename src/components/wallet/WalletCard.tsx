
interface WalletCardProps {
    title?: string;
    value?: string;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
}

export default function WalletCard({ title, value, description, icon, className }: WalletCardProps) {
  return (
    <div className={`flex flex-col gap-2 items-start justify-between border border-gray-300 rounded-lg p-4 ${className}`}>
        <div className="flex items-center justify-between w-full opacity-80 ">
            <h3 className="text-lg font-semibold">{title}</h3>
            {icon}
        </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="opacity-70 text-sm">{description}</p>
    </div>
  );
}
