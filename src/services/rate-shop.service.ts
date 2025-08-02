import { USDC_ABI, USDC_CONTRACT_ADDRESS } from "@/utils/usdc";
import { BrowserProvider, Contract, formatEther, parseUnits } from "ethers";

export function _getEstimatedGasPrice() {
    return fetch('https://api.blocknative.com/gasprices/blockprices', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY' // Replace with your actual API key
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.blockPrices && data.blockPrices.length > 0) {
            return data.blockPrices[0].estimatedPrice; // Return the estimated gas price
        }
        throw new Error('No block prices available');
    })
    .catch(error => {
        console.error('Error fetching gas price:', error);
        throw error;
    });
}

async function getEthToUsdcPrice(): Promise<number> {
    // Fetch ETH price in USDC from CoinGecko
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usdc');
    const data = await response.json();
    return data.ethereum.usdc;
}

export async function getEstimatedGasCost(fromWalletAddress: string, asset: string, recipient: string, amount: string) {

        if (!fromWalletAddress || !recipient || !amount || !asset) {
            alert("Please fill in all fields before estimating gas cost.");
            return;
        }
        if (!fromWalletAddress || !recipient || !amount || !window.ethereum) return;

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const usdc = new Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, signer);
        const decimals = await usdc.decimals();
        const scaledAmount = parseUnits(amount, decimals);

        const gasMetric: GasMetric = {
            estimatedGasUnits: '0',
            gasPrice: '',
            gasPriceInEth: '',
            gasPriceInUSDC: ''
        };
        
        try {
            const estimate = await usdc.transfer.estimateGas(recipient, scaledAmount);
            const feeData = await provider.getFeeData();
            const gasPrice = feeData.gasPrice;

            if (!gasPrice) {
                alert("Unable to fetch gas price.");
                return;
            }

            const feeInEth = gasPrice * estimate;
            const feeInEthFormatted = formatEther(feeInEth);

            console.log("Estimated Gas Units:", estimate.toString());
            console.log("Gas Price (wei):", gasPrice.toString());
            console.log("Estimated Gas Cost (in ETH):", feeInEthFormatted);

            gasMetric.estimatedGasUnits = estimate.toString();
            gasMetric.gasPrice = gasPrice.toString();
            gasMetric.gasPriceInEth = feeInEthFormatted;

            const ethToUsdcPrice = (await getEthToUsdcPrice()) || 3690;
            const feeInUSDC = parseFloat(feeInEthFormatted) * ethToUsdcPrice;
            gasMetric.gasPriceInUSDC = feeInUSDC.toFixed(5);

            console.log("Estimated Gas Cost (in USDC):", gasMetric.gasPriceInUSDC);

            return gasMetric;
        } catch (error) {
            console.error("Error estimating gas cost:", error);
            alert("Failed to estimate gas cost. Please check the console for details.");
        }
        return null;
    }