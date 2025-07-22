import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';

interface ActiveUsersProps {
    className?: string;
}

export default function ActiveUsers({ className = " space-y-2 w-72 " }: ActiveUsersProps) {
    return (
        <div className={`flex flex-col rounded-lg p-4 bg-white text-gray-700 border border-gray-200 ${className}`}>
            <div className="flex justify-between items-center">
                <h3 className="">Active Users</h3>
                <MovingOutlinedIcon className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold">2,847</h1>
            <p className="text-sm text-green-500">
                <span>⬆</span> +8.3% from last month
            </p>
        </div>
    );
}
