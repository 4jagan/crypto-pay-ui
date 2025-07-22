export const USDC_CONTRACT_ADDRESS = '0xd11af7970da8717c552bf5934d6c2ee38dd7effc';

// Simplified ABI just for transfer and balanceOf
export const USDC_ABI = [
  "function transfer(address to, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];
