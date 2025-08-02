"use client";
import { useEffect, useState } from "react";
import { QRCodeSVG } from 'qrcode.react'; // Ensure you have qrcode.react installed


export default function ReceiveByQrCode() {
    const [qrCode, setQrCode] = useState<string>("");
    const [amount] = useState<number>(0);
    const [usdcContract] = useState<string>("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"); // USDC contract address on Sepolia
    const [merchantAddress] = useState<string>("0xYourMerchantAddressHere"); // Replace with actual merchant address

    useEffect(() => {
        const generateQrCode = async () => {
            const uri = `ethereum:${usdcContract}/transfer?address=${merchantAddress}&uint256=${amount}`;
            setQrCode(uri);
        };
        generateQrCode();
    }, [amount, merchantAddress, usdcContract]);

    // const resetQRCode = () => {
    //     setAmount(0);
    //     setMerchantAddress("");
    //     setUsdcContract("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"); // Reset to default USDC contract address
    //     setQrCode("");
    // };

    return (
        <div className="flex flex-col gap-4 p-4 bg-white text-gray-700 rounded-lg">
            <div className="text-lg font-bold">Receive Payment</div>
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                <QRCodeSVG value={qrCode} className="m-auto" />
            </div>
            <div className="text-sm text-gray-500 mt-2">
                Scan this QR code to receive payments.
            </div>
        </div>
    );
}