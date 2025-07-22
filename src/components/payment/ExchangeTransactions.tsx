"use client";
import useDashboardData from "@/app/api/dashboard/DashboardApi";
import { DashboardData } from "@/app/api/dashboard/mockDashboardData";
import { useEffect, useState } from "react";

export default function ExchangeTransactions() {

    const [data, setData] = useState<DashboardData | null>(null);
    useEffect(() => {
        async function fetchData() {
            const fetchedData = await useDashboardData();
            setData(fetchedData);
        }
        fetchData();
    }, []);


    if (!data) {
        return <div className="p-4 text-gray-500">Data not found</div>;
    }
    const { verifiedExchangePayments } = data;

    return (
        <div className="flex flex-col gap-4 justify-between p-4 bg-white text-gray-700 rounded-lg">
            <h2 className="text-lg font-bold pb-4">Verified USDC Counterparties</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {verifiedExchangePayments.data.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-2 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="text-green-500">●</div>
                            <div className="flex flex-col items-start gap-0.5">
                                <span className="font-bold">{payment.exchangeName}</span>
                                <span className="text-xs text-gray-500">{payment.completedTransactions} USDC transfers completed.</span>
                            </div>
                        </div>
                        <div className="text-xs text-white bg-gray-700 rounded-full px-2 py-1">USDC Verified</div>
                    </div>
                ))}

                <div className="text-gray-500 text-sm flex flex-col justify-center p-4">
                    <span>+ {verifiedExchangePayments.total - verifiedExchangePayments.data.length} more USDC-verified counterparties.</span>
                </div>
            </div>
        </div>
    );
}