"use client";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { ScatterChart } from '@mui/x-charts';

export default function RiskAmountCorrelation() {
    const chartSetting = {
        colors: ['purple'],
        height: 300,
    };

    const data = [
        {
            data: [
                { x: 50, y: 11, id: '1' },
                { x: 150, y: 15, id: '2' },
                { x: 250, y: 85, id: '3' },
                { x: 89, y: 25, id: '4' },
                { x: 320, y: 23, id: '5' },
                { x: 75, y: 14, id: '6' },
                { x: 200, y: 23, id: '7' },
            ],
        },
    ];

    return (
        <div className="flex flex-col justify-between w-full shadow-xs rounded-lg p-4 bg-white text-gray-700 border border-gray-200">
            <div className="flex justify-between items-center">
                <h3 className="font-bold">Risk Amount Correlation</h3>
                <div className="flex gap-4">
                    <button className="border border-gray-200 rounded-md px-2 py-1 text-sm">
                        Hourly
                        <ExpandMoreOutlinedIcon className='text-gray-500 ml-1' />
                    </button>
                    <button className="border border-gray-200 rounded-md px-2 py-1 text-sm">
                        <CachedOutlinedIcon className='text-gray-500 ml-1' />
                    </button>
                </div>
            </div>

            <ScatterChart
                series={data}
                {...chartSetting}
            />

            <div className='flex justify-between items-center'>
                <span className="text-sm text-gray-700">Risk Score</span>
                <span className="text-sm text-gray-500">60</span>
            </div>
        </div>
    );
}
