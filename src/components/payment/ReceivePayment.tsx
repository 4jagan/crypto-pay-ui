"use client";
import { useState } from "react";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { QRCodeSVG } from 'qrcode.react'; // Ensure you have qrcode.react installed

export default function ReceivePayment() {

    const [amount, setAmount] = useState<number>(0);
    const [invoiceId, setInvoiceId] = useState<string>("");
    const [qrCode, setQrCode] = useState<string>("");


    const generateQRCode = () => {
        if (amount <= 0 || !invoiceId) {
            alert("Please enter a valid amount and invoice ID.");
            return;
        }
        const merchantAddress = "0xabeb087eD74C53d406ebAECbe91C4439536549b1"; // Replace with actual merchant address
        // const qrData = `ethereum:${USDC_CONTRACT_ADDRESS}/transfer?address=${merchantAddress}&uint256=${amount}`;
        // setQrCode(qrData);
        const qrData = `mode=qr-pay&asset=USDC&recipient=${merchantAddress}&recipientName=Café%20Lumina&amount=${amount}&invoice=${invoiceId}`;
        // const url = window.location.href.split('?')[0]; // Get the base URL without query params
        const url = 'https://crypto-pay-ui.vercel.app/pay';
        setQrCode(`${url}?${qrData}`);

    };

    const resetQRCode = () => {
        setAmount(0);
        setInvoiceId("");
        setQrCode("");
    };

    return (
        <div className="flex flex-col gap-4 justify-between">

            <div className="flex gap-4 items-center justify-between">
                <div className="flex flex-col w-full">
                    <label className="text-xs font-bold">Payment Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount in USDC"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-xs font-bold">Invoice ID</label>
                    <input
                        type="text"
                        placeholder="Enter invoice ID"
                        value={invoiceId}
                        onChange={(e) => setInvoiceId(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4 border border-gray-100 bg-gray-50 rounded-lg h-48">
                {/* <label className="text-sm font-bold text-gray-600">Pay with QR Code</label> */}
                {/* <div className="text-xs">{qrCode}</div> */}
                <div className="flex items-center justify-center h-full">
                    {qrCode ? (
                        <QRCodeSVG value={qrCode} height={180} width={180} />
                    ) : (
                        <div className="flex flex-col gap-4 items-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={generateQRCode}>Generate QR Code</button>
                            <span className="text-sm text-gray-500">QR Code will appear here when generated</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 items-center gap-4 justify-between">
                <div className="flex flex-col items-center p-4 border border-blue-100 bg-blue-50 rounded-lg">
                    <PhoneIphoneOutlinedIcon className="mb-1  text-blue-700" />
                    <label className="text-sm font-bold text-gray-600">Mobile Friendly</label>
                    <span className="text-sm text-gray-500">Any USDC wallet</span>
                </div>
                <div className="flex flex-col items-center p-4 border border-blue-100 bg-blue-50 rounded-lg">
                    <TaskAltOutlinedIcon className="mb-1 text-green-500" />
                    <label className="text-sm font-bold text-gray-600">Secure</label>
                    <span className="text-sm text-gray-500">Tokenized payments</span>
                </div>
            </div>

            <button className="border-blue-500 text-blue-500 px-4 py-2 border rounded-lg" onClick={resetQRCode}>Reset</button>
           {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Pay in USDC</button> */}
        </div>
    );
}