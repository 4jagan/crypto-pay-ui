const mockDashboardData = {
  totalUSDCAssets: 16140000,
  totalAssets: 16140000,
  activeWallets: 3,
  supportedChains: 4,
  totalAssetsChange: 2.5, // percent
  transactionVolume: 45200000,
  transactionVolumeChange: 12.5, // percent
  ccFeeSavings: 1100000,
  ccFeeSavingsChange: 15.2, // percent
  taxEfficiency: 811000,
  taxEfficiencyChange: 8.7, // percent
  assetAllocation: [
    { label: 'USDC', value: 400},
    { label: 'Bitcoin', value: 300},
    { label: 'Ethereum', value: 300},
    { label: 'Solana', value: 200},
  ],
  assets: [
    { symbol: "usdc", label: "USDC", value: 16140000, change: 0.01, enabled: true },
    { symbol: "btc", label: "Bitcoin", value: 0, change: 0, enabled: false },
    { symbol: "eth", label: "Ethereum", value: 0, change: 0, enabled: false },
    { symbol: "sol", label: "Solana", value: 0, change: 0, enabled: false },
    { symbol: "ada", label: "Cardano", value: 0, change: 0, enabled: false },
  ],
  blockchainNetworks: [
    { name: "Solana", symbol: "SOL", enabled: true},
    { name: "Polygon", symbol: "MATIC", enabled: false},
    { name: "BSC", symbol: "BSC", enabled: false},
    { name: "Avalanche", symbol: "AVAX", enabled: false},
    { name: "Bitcoin", symbol: "BTC", enabled: false},
    { name: "Ethereum", symbol: "ETH", enabled: false},
  ],
  anomalyDetection: {
    count: 3,
    volumeSpike: {
      riskScore: 75,
      riskLevel: "Medium",
      description: "Transaction volume 3x higher than normal levels.",
    },
    timePattern: {
      riskScore: 45,
      riskLevel: "Low",
      description: "Unusual payment times detected.",
    },
    amountPattern: {
      riskScore: 88,
      riskLevel: "High",
      description: "Similar amounts from different addresses.",
    },
    results: [
      { id: 1, type: "error", date: "2025-05-01 14:30", title: "Volume Spike", description: "Transaction volume 340% higher than average." },
      { id: 2, type: "warning", date: "2025-05-01 12:40", title: "IP Inconsistency", description: "Payment from unusual geographic location." },
      { id: 3, type: "info", date: "2025-05-01 08:15", title: "Timing Pattern", description: "Payment outside of normal business hours." }
    ]
  },
  transactionMetrics: [
    { title: "QR Generated", value: 1247, subValue: 12, subValueType: "percent" },
    { title: "Payments Received", value: 1089, subValue: 8, subValueType: "percent" },
    { title: "Conversion Rate", value: 87.3, subValue: 2.1, subValueType: "percent" },
    { title: "Avg. Confirmation", value: 45, subValue: -5, subValueType: "seconds" },
    { title: "Transfers", value: 947, subValue: 12, subValueType: "percent" },
    { title: "Successful", value: 945, subValue: 97.9, subValueType: "percent" },
    { title: "Failed", value: 2, subValue: 2.1, subValueType: "percent" },
    { title: "Avg. Confirmation", value: 15, subValue: -5, subValueType: "seconds" },
  ],
  transactionSuccessRate: 99.8,
  transactionSuccessRateChange: 0.2,
  activeUsers: 2847,
  activeUsersChange: 8.3,
  costSavings: {
    creditCardFeesAvoided: 1130000,
    wireTransferFeesSaved: 28500,
    currencyExchangeFeesSaved: 456800,
    totalMonthlySavings: 1615300,
  },
  taxEfficiencyAnalysis: {
    businessExpenseDeductions: 345200,
    crossBorderTaxEfficiency: 267900,
    automatedCompliance: 89400,
    capitalGainsOptimization: 189500,
    estimatedTaxSavings: 892000,
  },
  riskScore: 23,
  activeAnomalies: {
    count: 3,
    label: "Flagged Transactions",
  },
  highRisk: {
    count: 3,
    label: "Require immediate attention",
  },
  recentTransactions: [
    { id: 1, date:"2025-07-05 18:00:39", inbound: true,   amount: 50000,    assetName:"USDC",   fromAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",   toAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",  status: "Completed" },
    { id: 2, date:"2025-07-05 15:20:24", inbound: false,  amount: 25000,    assetName:"USDC",   fromAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",   toAddress: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",  status: "Completed" },
    { id: 3, date:"2025-07-05 10:44:16", inbound: true,   amount: 1000,     assetName:"USDC",   fromAddress: "0xF0128083818e3c15555C0aE0f098045F1212B000",   toAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",  status: "Pending" },
    { id: 4, date:"2025-07-04 13:10:52", inbound: false,  amount: 500,      assetName:"USDC",   fromAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",   toAddress: "0x9f8F72AA9304c8B593d555F12eF6589cC3A579A2",  status: "Completed" },
    { id: 5, date:"2025-07-04 08:23:38", inbound: false,  amount: 2000,     assetName:"USDC",   fromAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",   toAddress: "0x87D487fa59274545743949BE4282EA87F316821E",  status: "Completed" },
    { id: 6, date:"2025-07-03 20:15:12", inbound: true,   amount: 15000,    assetName:"USDC",   fromAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",   toAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",  status: "Completed" },
    { id: 7, date:"2025-07-03 17:45:05", inbound: false,  amount: 30000,    assetName:"USDC",   fromAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",   toAddress: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",  status: "Completed" },
    { id: 8, date:"2025-07-02 14:30:39", inbound: true,   amount: 75000,    assetName:"USDC",   fromAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",   toAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",  status: "Completed" },
    { id: 9, date:"2025-07-02 11:20:24", inbound: false,  amount: 12000,    assetName:"USDC",   fromAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",   toAddress: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",  status: "Completed" },
    { id: 10,date:"2025-07-01 09:44:16", inbound: true,   amount: 5000,     assetName:"USDC",   fromAddress: "0xF0128083818e3c15555C0aE0f098045F1212B000",   toAddress: "0xAcF36260817d1c78C471406BdE482177a1935071",  status: "Completed" },
  ],
  transactionPattern: [
    {inbound:true,  date: '2023-01-01 00:00:00', amount: 4},
    {inbound:false, date: '2023-01-01 00:00:00', amount: 0},
    {inbound:true,  date: '2023-01-01 03:00:00', amount: 2},
    {inbound:false, date: '2023-01-01 03:00:00', amount: 2},
    {inbound:true,  date: '2023-01-01 06:00:00', amount: 6},
    {inbound:false, date: '2023-01-01 06:00:00', amount: 0},
    {inbound:true,  date: '2023-01-01 09:00:00', amount: 15},
    {inbound:false, date: '2023-01-01 09:00:00', amount: 2},
    {inbound:true,  date: '2023-01-01 12:00:00', amount: 22},
    {inbound:false, date: '2023-01-01 12:00:00', amount: 0},
    {inbound:true,  date: '2023-01-01 15:00:00', amount: 18},
    {inbound:false, date: '2023-01-01 15:00:00', amount: 5},
  ],
  walletPortfolio: [
    {id: 1, value: 2450000,   title: "Main Treasury",   assetName: "USDC", assetDescription: "MPC: 3/5", riskLevel: "Low", status: "Active", temperature: "Hot"},
    {id: 2, value: 890000,    title: "Trading Desk",    assetName: "USDC", assetDescription: "MPC: 2/3", riskLevel: "Low", status: "Active", temperature: "Warm"},
    {id: 3, value: 0,         title: "Trading Desk",    assetName: "USDC", assetDescription: "", riskLevel: "Low", status: "Active", temperature: "Empty"},
  ],
  paymentExchanges: [
    {id: 1, name: "Binance Exchange"},
    {id: 2, name: "Coinbase Prime"},
    {id: 3, name: "Kraken Pro"},
    {id: 4, name: "Circle"},
    {id: 5, name: "Gemini Trust"},
  ],
  paymentRecipients: [
    {id: 1, name: "Customer Account", address: "0xed35613877e07052030499Cf7E87B4792022bf8A"},
    {id: 2, name: "Merchant Account", address: "0xabeb087eD74C53d406ebAECbe91C4439536549b1"},
    {id: 3, name: "Alice Johnson", address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"},
    {id: 4, name: "Bob Smith", address: "0xAcF36260817d1c78C471406BdE482177a1935071"},
    {id: 5, name: "Charlie Brown", address: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"},
    {id: 6, name: "David Wilson", address: "0xF0128083818e3c15555C0aE0f098045F1212B000"},
  ],
  verifiedExchangePayments: {
    total: 1800,
    data: [
      {id: 1, exchangeName: "Binance Exchange", completedTransactions: 245, usdcVerified: true},
      {id: 2, exchangeName: "Coinbase Prime", completedTransactions: 189, usdcVerified: false},
      {id: 3, exchangeName: "Kraken Pro", completedTransactions: 156, usdcVerified: true},
      {id: 4, exchangeName: "Circle", completedTransactions: 89, usdcVerified: false},
      {id: 5, exchangeName: "Gemini Trust", completedTransactions: 67, usdcVerified: true},
    ]
  },
};

export default mockDashboardData;

export type DashboardData = typeof mockDashboardData;
export type PaymentRecipient = typeof mockDashboardData.paymentRecipients[number];

