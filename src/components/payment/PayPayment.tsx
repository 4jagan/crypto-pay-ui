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
import { getEstimatedGasCost } from '@/services/rate-shop.service';

export default function PayPayment() {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const params = new URLSearchParams(window.location.search);

  const [recipient, setRecipient] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [asset, setAsset] = useState('USDC');
  const [mode, setMode] = useState<'qr-pay' | 'main'>('main');
  const [sending, setSending] = useState(false);
  const [recipients, setRecipients] = useState<PaymentRecipient[]>([]);
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [gasMetric, setGasMetric] = useState<GasMetric | null>(null);
  const payBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getDashboardData();
            setRecipients(data.paymentRecipients);
            // setExchanges(data.paymentExchanges);
            // setAsset(data.assets[0].symbol); // Default to first asset
            // setRecipient(data.paymentRecipients[1].address); // Default to first recipient address
            setAmount(""); // Default amount
        }
        fetchData();
    },[]);

  useEffect(() => {
    if (params.get('recipient')) {
      setRecipient(params.get('recipient') || '');
    }
    if (params.get('recipientName')) {
      setRecipientName(params.get('recipientName') || '');
    }
    if (params.get('amount')) {
      setAmount(params.get('amount') || '');
    }
    if (params.get('asset')) {
      setAsset(params.get('asset') || 'USDC');
    }
    if (params.get('mode')) {
      setMode(params.get('mode') as 'qr-pay' | 'main');
    }
  }, [params]);

  useEffect(() => {
    if (payBtnRef.current) {
      const rect = payBtnRef.current.getBoundingClientRect();
      console.log('Pay button bounding rect:', rect);
    }
  }, [isConnected, recipients]);

  const estimatedGasCost = async () => {
    getEstimatedGasCost(
      walletClient?.account.address || '',
      'USDC',
      recipient,
      amount
    )
      .then((metric) => {
        setGasMetric(metric ?? null);
      })
      .catch((error) => {
        console.error('Error estimating gas cost:', error);
        alert('Failed to estimate gas cost. Please check the console for details.');
      });
  }

  const sendPayment = async () => {
    if (!window.ethereum) {
      alert(
        "No wallet detected. Please open this page in a Web3-enabled browser, such as MetaMask Mobile's built-in browser."
      );
      return;
    }
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
    <div className="flex flex-col gap-4 px-4 py-2 ">
      <div className="p-0 flex justify-center items-center">
        <ConnectButton />
      </div>

      {isConnected && mode === 'main' && (
        <div className='flex flex-col gap-4 p-4 border-t border-gray-200 bg-white'>
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
            {gasMetric && <div className="text-sm text-gray-600">
                <p>Estimated Gas Units: {gasMetric.estimatedGasUnits}</p>
                <p>Gas Price (wei): {gasMetric.gasPrice}</p>
                <p>Estimated Gas Cost (in ETH): {gasMetric.gasPriceInEth}</p>
                <p>Estimated Gas Cost (in USDC): {gasMetric.gasPriceInUSDC}</p>
            </div>}
            <div className="text-sm text-gray-600 grid grid-cols-2 items-center gap-4 justify-between">
              <button 
                className="bg-purple-500 disabled:bg-purple-300 text-white px-6 py-3 mt-6 rounded-lg w-full text-lg active:scale-95 transition cursor-pointer min-h-12 min-w-32 focus:outline-blue-600 z-10" 
                disabled={!recipient || !amount || sending}
                tabIndex={0}
                role="button"
                aria-disabled={!recipient || !amount || sending}
                onClick={estimatedGasCost} >
                Estimate Gas Cost
              </button>

              <button
                ref={payBtnRef}
                type="button"
                className="bg-blue-500 disabled:bg-blue-300 text-white px-6 py-3 mt-6 rounded-lg w-full text-lg active:scale-95 transition cursor-pointer min-h-12 min-w-32 focus:outline-blue-600 z-10"
                onClick={() => {
                  sendPayment();
                }}
                disabled={sending || !window.ethereum || !recipient || !amount}
                tabIndex={0}
                role="button"
                aria-disabled={sending || !window.ethereum}
              >
                {sending ? 'Sending...' : 'Pay in USDC'}
              </button>
            </div>
          {!window.ethereum && (
            <div className="text-red-500 text-sm mt-2">
              No wallet detected. Please open this page in a Web3-enabled browser, such as MetaMask Mobile built-in browser.
            </div>
          )}
          {/* {(recipient === '' && !txHash) && (
            <div className="text-red-500 text-sm mt-2">Please select a recipient.</div>
          )} */}
        </div>
      )}

      {isConnected && mode === 'qr-pay' && (
        <div className="flex flex-col gap-4 px-4 pt-6 border-t border-gray-200 bg-white">
        
          {!txHash && <>
            <div className="flex flex-col gap-1 items-center bg-white text-gray-700 text-lg">
              <div>Paying</div>
              <div className='font-bold text-blue-500 text-xl'>{amount} {asset}</div>
              <div>at</div>
              <div className='font-bold'>{recipientName}</div>
            </div>

            <button
              className={`${sending ? 'bg-blue-300' : 'bg-blue-500'} text-white px-6 py-3 mt-4 rounded-lg w-full text-lg active:scale-95 transition cursor-pointer min-h-12 min-w-32 focus:outline-blue-600 z-10`}
              onClick={() => sendPayment()}
            >
              {sending ? 'Processing Payment...' : 'Confirm and Pay'}
            </button>
            {!sending && (
              <button className="bg-gray-300 text-gray-700 px-6 py-3 mt-2 rounded-lg w-full text-lg active:scale-95 transition cursor-pointer min-h-12 min-w-32 focus:outline-blue-600 z-10" onClick={() => setMode('main')}>
                Cancel
              </button>
            )}
          </>}
          {sending && (
            <div className="text-gray-500 text-sm mt-2 text-center w-full">Your payment is processed via the blockchain. Please allow a few seconds for confirmation.</div>
          )}
        </div>
      )}

      {txHash && (
        <div className="mt-4 text-green-700 w-full flex flex-col gap-4 items-center justify-center">
          <span>✅ Payment sent!</span>
          {/* <a
            href={`https://sepolia.etherscan.io/tx/${txHash}`}
            className="underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            View on Etherscan
            </a> */}
        </div>
      )}
      <div className="mt-4 text-gray-500 text-sm italic w-full text-center">Powered by BRACKT</div>
    </div>
  );
}
