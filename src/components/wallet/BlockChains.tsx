import useDashboardData from "@/app/api/dashboard/DashboardApi";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default async function BlockChains() {
    const data = await useDashboardData();
    if (!data) {
        return <div className="p-4 text-gray-500">Loading...</div>;
    }
    const { blockchainNetworks } = data;
    return (
        <div className="flex flex-col gap-4 p-4 bg-white text-gray-700 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Blockchain Network Status</h2>
                <span className="text-sm">USDC-enabled networks and upcoming chain support.</span>
            </div>

            <div className="flex flex-wrap gap-4">
                {blockchainNetworks.map(network => (
                    <div key={network.symbol} className="flex justify-between p-4 border border-gray-200 bg-gray-50 rounded-lg  min-w-72">
                        <div className="flex items-center gap-2">
                            <span className={`text-lg ${network.enabled ? 'text-green-500' : 'text-gray-400'}`}>●</span>
                            <h3 className="font-bold">{network.name}</h3>
                            {!network.enabled && <LockOutlinedIcon className='text-gray-400' style={{ fontSize: 'medium' }} />}
                        </div>
                        <div className={`ml-4 flex items-center gap-2 text-xs border rounded-full py-1 px-2 ${network.enabled ? 'text-green-500 bg-green-50  border-green-200' : 'text-gray-400 bg-gray-100 border-gray-300'}`}>
                            {network.enabled ? 'Active' : 'Coming Soon'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
