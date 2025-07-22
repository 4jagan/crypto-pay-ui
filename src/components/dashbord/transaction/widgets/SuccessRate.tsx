import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';

export default function SuccessRate() {
    return (
        <div className="flex flex-col space-y-2 w-72 rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="">Success Rate</h3>
                <MovingOutlinedIcon className="text-green-500" />
            </div>
            <h1 className="text-2xl font-bold">99.8%</h1>
            <p className="text-sm text-green-500">
                <span>⬆</span> +0.2% from last month
            </p>
        </div>
    );
}
