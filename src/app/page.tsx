
export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Left: Main Cards */}
      <div className="col-span-8 flex flex-col gap-6">
        {/* Top USDC Assets Card */}
        <div className="bg-gradient-to-tr from-blue-500 to-blue-400 rounded-2xl p-6 text-white flex flex-col min-h-[120px] shadow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-80">Total USDC Assets</div>
              <div className="text-3xl font-bold mt-1">$16,140,000</div>
              <div className="text-xs mt-1 opacity-80">↑ +2.5% from last month</div>
            </div>
            <div>
              <svg width="40" height="40" fill="none"><rect width="40" height="40" rx="12" fill="#fff" fillOpacity="0.1"/></svg>
            </div>
          </div>
        </div>
        {/* 3 Cards Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-5 shadow flex flex-col">
            <div className="text-xs text-gray-500 mb-1">Transaction Volume</div>
            <div className="text-2xl font-bold">$45.2M</div>
            <div className="text-xs text-green-600 mt-1">↑ +12.5% from last month</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow flex flex-col">
            <div className="text-xs text-gray-500 mb-1">CC Fee Savings</div>
            <div className="text-2xl font-bold">$1.1M</div>
            <div className="text-xs text-green-600 mt-1">↑ +15.2% from last month</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow flex flex-col">
            <div className="text-xs text-gray-500 mb-1">Tax Efficiency</div>
            <div className="text-2xl font-bold">$811K</div>
            <div className="text-xs text-green-600 mt-1">↑ +8.7% from last month</div>
          </div>
        </div>
        {/* Anomaly Detection */}
        <div>
          <div className="flex items-center mb-2">
            <span className="font-semibold text-base mr-2">Anomaly Detection</span>
            <span className="bg-gray-100 text-xs px-2 py-0.5 rounded-full">3</span>
            <span className="ml-2 text-xs text-gray-400">AI-powered behavioral analysis and risk scoring</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 flex flex-col shadow">
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium">Volume Spike</span>
                <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Medium</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">Transaction volume 3x higher than normal</div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">Risk Score:</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-yellow-400" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm font-semibold">75</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col shadow">
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium">Time Pattern</span>
                <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Low</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">Unusual payment timing detected</div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">Risk Score:</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-yellow-300" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-semibold">45</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 flex flex-col shadow">
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium">Amount Pattern</span>
                <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">High</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">Similar amounts from different addresses</div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">Risk Score:</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-red-400" style={{ width: '88%' }}></div>
                  </div>
                  <span className="text-sm font-semibold">88</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Transaction Pattern Analysis & Asset Allocation */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Transaction Pattern Analysis</span>
              <select className="text-xs border rounded px-2 py-1">
                <option>Hourly</option>
                <option>Daily</option>
                <option>Weekly</option>
              </select>
            </div>
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm h-32">[Chart Placeholder]</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow flex flex-col">
            <span className="font-semibold mb-2">Asset Allocation</span>
            <div className="flex-1 flex items-center justify-center text-gray-400 text-sm h-32">[Pie Chart Placeholder]</div>
          </div>
        </div>
      </div>
      {/* Right: Actions, Assets, Recent Transactions */}
      <div className="col-span-4 flex flex-col gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <span className="font-semibold mb-2">Quick Actions</span>
          <button className="bg-blue-600 text-white rounded-lg py-2 font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition"> <span className="material-icons">send</span> Transfer</button>
          <button className="bg-blue-50 text-blue-600 rounded-lg py-2 font-medium flex items-center justify-center gap-2 border border-blue-100 hover:bg-blue-100 transition"> <span className="material-icons">download</span> Receive Payment</button>
        </div>
        {/* Assets */}
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Assets</span>
            <select className="text-xs border rounded px-2 py-1">
              <option>7 Days</option>
              <option>30 Days</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-icons text-blue-500">account_balance_wallet</span>
                <span>USDC</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold">$1,69,500</span>
                <span className="text-xs text-blue-600">+0.01%</span>
              </div>
            </div>
            <div className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-icons text-yellow-500">lock</span>
                <span>Bitcoin</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Disabled</span>
            </div>
            <div className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-icons text-gray-500">lock</span>
                <span>Ethereum</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Disabled</span>
            </div>
            <div className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-icons text-purple-500">lock</span>
                <span>Solana</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Disabled</span>
            </div>
            <div className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-2">
                <span className="material-icons text-indigo-500">lock</span>
                <span>Polygon</span>
              </div>
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">Disabled</span>
            </div>
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Recent Transactions</span>
            <input type="text" placeholder="Search" className="text-xs border rounded px-2 py-1 w-32" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span>Payment from Alice</span>
              <span className="text-green-600 font-medium">+$2,000</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Payment to Bob</span>
              <span className="text-red-600 font-medium">-$1,200</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Payment from Carol</span>
              <span className="text-green-600 font-medium">+$3,500</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Payment to Dave</span>
              <span className="text-red-600 font-medium">-$800</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
