import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import GeneratingTokensOutlinedIcon from '@mui/icons-material/GeneratingTokensOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

interface IconProps {
  icon: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function getIconComponent({ icon, size = "medium", className }: IconProps) {
  switch (icon) {
    case "home":
      return <HomeFilledIcon fontSize={size} />;
    case "villa":
      return <VillaOutlinedIcon fontSize={size} />;
    case "wallet":
      return <AccountBalanceWalletOutlinedIcon fontSize={size} />;
    case "payment":
      return <PaymentOutlinedIcon fontSize={size} />;
    case "chart":
      return <BarChartOutlinedIcon fontSize={size} />;
    case "bot":
      return <SmartToyOutlinedIcon fontSize={size} />;
    case "token":
      return <GeneratingTokensOutlinedIcon fontSize={size} />;
    case "shield":
      return <ShieldOutlinedIcon fontSize={size} />;
    case "description":
      return <DescriptionOutlinedIcon fontSize={size} />;
    case "usdc":
      return <img src="/icons/usd-coin-usdc-logo.png" alt="USDC" className={`${className}`} />;
    case "btc":
      return <img src="/icons/bitcoin-btc-logo.png" alt="BTC" className={`${className}`} />;
    case "eth":
      return <img src="/icons/ethereum-eth-logo.png" alt="ETH" className={`${className}`} />;
    case "sol":
      return <img src="/icons/solana-sol-logo.png" alt="SOL" className={`${className}`} />;
    case "ada":
      return <img src="/icons/cardano-ada-logo.png" alt="ADA" className={`${className}`} />;
    default:
      return null;
  }
}
