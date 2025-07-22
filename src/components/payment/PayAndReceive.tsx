"use client";

import { useState } from "react";
import Pay from "./SendPayment";
import SendPayment from "./SendPayment";
import Receive from "./ReceivePayment";
import ReceivePayment from "./ReceivePayment";
import PayPayment from "./PayPayment";

interface PaymentModeToggleProps {
    payMode: boolean;
    setPayMode: (mode: boolean) => void;
}
function PaymentModeToggle({ payMode, setPayMode }: PaymentModeToggleProps) {
    const cssBase = "border px-4 py-1";
    const cssActive = "bg-blue-500 text-white border-blue-500";
    const cssInactive = "bg-white text-gray-500 border-gray-400";

    return (
        <div className="flex items-center justify-between">
            <button className={`${cssBase} border-r-0 rounded-l-lg ${payMode ? cssActive : cssInactive}`} onClick={() => setPayMode(true)}>Pay</button>
            <button className={`${cssBase} border-l-0 rounded-r-lg ${!payMode ? cssActive : cssInactive}`} onClick={() => setPayMode(false)}>Receive</button>
        </div>
    );
}

export default function PayAndReceive() {
    const [payMode, setPayMode] = useState<boolean>(true); // true for Pay, false for Receive


    return (
        <div className="flex flex-col gap-4 p-4 bg-white text-gray-700 rounded-lg">
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{payMode ? "Send" : "Receive"} Payment</span>
                <PaymentModeToggle payMode={payMode} setPayMode={setPayMode} />
            </div>
            {/* {payMode ? <SendPayment /> : <ReceivePayment />} */}
            {payMode ? <PayPayment /> : <ReceivePayment />}
        </div>
    );
}