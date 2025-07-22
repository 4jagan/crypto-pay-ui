"use client";
import useDashboardData from "@/app/api/dashboard/DashboardApi";
import mockDashboardData from "@/app/api/dashboard/mockDashboardData";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { use, useEffect, useState } from "react";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { USDC_CONTRACT_ADDRESS, USDC_ABI } from "@/utils/usdc";

export default function SendPayment() {

    const [asset, setAsset] = useState<string>();
    const [recipientType, setRecipientType] = useState<"exchange" | "individual">("individual");
    
    const [assets, setAssets] = useState<typeof mockDashboardData.assets[number][]>([]);
    const [recipients, setRecipients] = useState<typeof mockDashboardData.paymentRecipients[number][]>([]);
    const [exchanges, setExchanges] = useState<typeof mockDashboardData.paymentExchanges[number][]>([]);
    
    const [recipient, setRecipient] = useState<string>("");
    const [fromWalletAddress, setFromWalletAddress] = useState<string | null>(null);
    const [amount, setAmount] = useState<string>("");
    const [invoiceId, setInvoiceId] = useState<string>("");
    const [txHash, setTxHash] = useState<string | null>(null);
    
    useEffect(() => {
        async function fetchData() {
            const data = await useDashboardData();
            setAssets(data.assets);
            setRecipients(data.paymentRecipients);
            setExchanges(data.paymentExchanges);
            setAsset(data.assets[0].symbol); // Default to first asset
            setRecipient(data.paymentRecipients[1].address); // Default to first recipient address
            setAmount("10.00"); // Default amount
        }
        async function fetchWalletAddress() {
            const ethereum = window.ethereum;
            if (ethereum && ethereum.isMetaMask) {
                const accounts = await ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setFromWalletAddress(accounts[0]);
                } else {
                    console.warn("No accounts found. Please connect your wallet.");
                }
            } else {
                console.warn("MetaMask is not installed or not detected.");
            }
        }
        fetchWalletAddress();
        // Fetch assets and recipients from the API
        fetchData();
    }, []);

    const connectWallet = async () => {
        const accounts = await window.ethereum?.request({ method: "eth_requestAccounts" });
        setFromWalletAddress(accounts[0]);
    };

    const sendPayment = async () => {
        console.log("Sending payment...");
        console.log("From Wallet Address:", fromWalletAddress);
        console.log("Recipient:", recipient);
        console.log("Amount:", amount);
        if (!fromWalletAddress || !recipient || !amount || !window.ethereum) return;

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("Signer:", signer);

        const usdc = new Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, signer);
        console.log("USDC Contract:", usdc);
        const decimals = await usdc.decimals();
        console.log("USDC Decimals:", decimals);

        const scaledAmount = parseUnits(amount, decimals);
        console.log("Scaled Amount:", scaledAmount.toString());
        const tx = await usdc.transfer(recipient, scaledAmount);
        console.log("Transaction:", tx);
        const receipt = await tx.wait();
        console.log("Transaction Receipt:", receipt);

        setTxHash(receipt.transactionHash);
    };

    return (
        <div className="flex flex-col gap-4 justify-between">
            <div>
                {!fromWalletAddress && (
                    <button onClick={connectWallet} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Connect Wallet
                    </button>
                )}
                {fromWalletAddress && (
                    <div className="text-sm text-gray-600">
                        <span className="font-bold">From:</span> {fromWalletAddress}
                    </div>
                )}
            </div>
            {/* Asset & Amount Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">
                {/* Asset Selection */}
                <div className="w-full">
                    <label className="text-sm text-gray-600">Asset</label>
                    <select className="border border-gray-300 p-2 rounded w-full" value={asset} onChange={(e) => setAsset(e.target.value)}>
                        {assets.map((asset) => (
                            <option key={asset.symbol} value={asset.symbol}>
                                {asset.label}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Amount Input */}
                <div className="w-full">
                    <label className="text-sm text-gray-600">Amount</label>
                    <input type="text" placeholder="Amount" className="border border-gray-300 p-2 rounded w-full" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

            </div>
            <div className="w-full text-sm bg-blue-50 text-blue-400 border border-blue-100 p-2 rounded-lg">Only USDC transfers are currently enabled.</div>

            {/* Recipient Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4">

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-600">Recipient Type</label>
                    <div>
                        <input id="recipientTypeIndividual" type="radio" name="recipientType" value="individual" checked={recipientType === "individual"} onChange={() => setRecipientType("individual")} />
                        <label className="ml-2" htmlFor="recipientTypeIndividual">Individual</label>
                        <input id="recipientTypeExchange" type="radio" name="recipientType" value="exchange" className="ml-4" checked={recipientType === "exchange"} onChange={() => setRecipientType("exchange")} />
                        <label className="ml-2" htmlFor="recipientTypeExchange">Exchange</label>
                    </div>
                </div>

                <div>
                    <label className="text-sm text-gray-600">Recipient</label>
                    <select className="border border-gray-300 p-2 rounded w-full" value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                        {recipients.map((recipient) => (
                            <option key={recipient.id} value={recipient.address}>
                                {recipient.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Recipient Address & Amount */}
            <ul className="text-sm p-4 bg-blue-50 text-blue-400 border border-blue-100 rounded-lg">
                <li><TaskAltOutlinedIcon fontSize="small"/> Policy Check</li>
                <li><DoneOutlinedIcon fontSize="small" />Amount within daily USDC limits</li>
                <li><DoneOutlinedIcon fontSize="small" />Counterparty verified for USDC</li>
                <li><DoneOutlinedIcon fontSize="small" />Compliance screening passed</li>
            </ul>

            <div>
                {txHash && (
                    <p className="mt-4">
                    ✅ Transaction successful:{" "}
                    <a
                        href={`https://sepolia.etherscan.io/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        View on Etherscan
                    </a>
                    </p>
                )}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 mt-12 rounded-lg " onClick={sendPayment}>Pay in USDC</button>

        </div>
    );
}