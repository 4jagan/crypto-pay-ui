"use client";

import { useEffect, useRef, useState } from 'react';
import { parseUnits } from 'viem';
import { useAccount, useWalletClient } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Contract } from 'ethers';
import { USDC_ABI, USDC_CONTRACT_ADDRESS } from '@/utils/usdc';
import { BrowserProvider } from 'ethers';
import getDashboardData from '@/app/api/dashboard/DashboardApi';
import { PaymentRecipient } from '@/app/api/dashboard/mockDashboardData';

export default function PayPayment() {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [recipient, setRecipient] = useState('');
  const [sending, setSending] = useState(false);
  const [recipients, setRecipients] = useState<PaymentRecipient[]>([]);
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const payBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getDashboardData();
            setRecipients(data.paymentRecipients);
            // setExchanges(data.paymentExchanges);
            // setAsset(data.assets[0].symbol); // Default to first asset
            // setRecipient(data.paymentRecipients[1].address); // Default to first recipient address
            setAmount("10.00"); // Default amount
        }
        fetchData();
    },[]);

  useEffect(() => {
    if (payBtnRef.current) {
      const rect = payBtnRef.current.getBoundingClientRect();
      console.log('Pay button bounding rect:', rect);
    }
  }, [isConnected, recipients]);

  const sendPayment = async () => {
    alert('Send Payment button works!'); // Debug: confirm button works
    console.log('sendPayment called'); // Debug: confirm function is called

    // Debug: Show which value is falsy
    if (!walletClient || !recipient || !amount || !window.ethereum) {
      alert(
        `Missing:\n` +
        `walletClient: ${!!walletClient}\n` +
        `recipient: ${!!recipient}\n` +
        `amount: ${!!amount}\n` +
        `window.ethereum: ${!!window.ethereum}`
      );
      return;
    }
    setSending(true);
    try {
        // Convert viem WalletClient to Ethers signer
        const provider = new BrowserProvider(window.ethereum);
        const ethersSigner = await provider.getSigner();
        console.log("Ethers Signer:", ethersSigner);

        const usdc = new Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, ethersSigner);
        console.log("USDC Contract:", usdc);

        const decimalsBigInt = await usdc.decimals(); // usually 6 or 18, returns bigint
        const decimals = Number(decimalsBigInt);
        console.log("USDC Decimals:", decimals);
        const scaledAmount = parseUnits(amount, decimals); // amount = string
        console.log("Scaled Amount:", scaledAmount);

        const tx = await usdc.transfer(recipient, scaledAmount);
        const receipt = await tx.wait();
        console.log("Transaction Receipt:", receipt);

        setTxHash(receipt.hash);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Transfer failed:', err.message);
      } else {
        console.error('Transfer failed:', err);
      }
    } finally {
      setSending(false);
      setAmount('');
      setRecipient('');
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 ">
      {/* Test button to check if *any* button works on mobile */}
      <button
        type="button"
        className="bg-gray-300 text-black px-4 py-2 rounded mb-2"
        onClick={() => sendPayment()}
      >
        Test Button
      </button>
      <div className="p-4 flex justify-center items-center">
        <ConnectButton />
      </div>

      {isConnected && (
        <div className='flex flex-col gap-4 px-4 pt-6 border-t border-gray-200 bg-white'>
            <div className="mb-4">
                <label className="text-sm text-gray-600">Recipient</label>
                <select className="border border-gray-300 p-2 rounded w-full" value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                    {recipients.map((recipient) => (
                        <option key={recipient.id} value={recipient.address}>
                            {recipient.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full">
                <label className="text-sm text-gray-600">Amount</label>
                <input type="text" placeholder="Amount" className="border border-gray-300 p-2 rounded w-full" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
          <button
            ref={payBtnRef}
            type="button"
            className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-lg w-full text-lg active:scale-95 transition cursor-pointer min-h-12 min-w-32 focus:outline-blue-600 z-10"
            onClick={(e) => {
              console.log('Button clicked ' + e); // Debug: confirm click event
              sendPayment();
            }}
            disabled={sending}
            tabIndex={0}
            role="button"
            aria-disabled={sending}
          >
            {sending ? 'Sending...' : 'Pay in USDC'}
          </button>
          {recipient === '' && (
            <div className="text-red-500 text-sm mt-2">Please select a recipient.</div>
          )}
        </div>
      )}

      {txHash && (
        <div className="mt-4 text-green-700 w-full flex gap-4 items-center justify-center">
          <span>✅ Payment sent!</span>
          <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            className="underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Etherscan
          </a>
        </div>
      )}
    </div>
  );
}
