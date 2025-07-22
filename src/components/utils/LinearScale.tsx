export default function LinearScale({ value }: { value: number }) {
    return (
            <div className="w-full border border-gray-200 h-3 rounded-lg">
                <div className="h-full p-0.5 bg-gray-500 rounded-l-lg " style={{ width: `${value}%` }}></div>
            </div>
    );
}
