"use client";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

export default function Topbar() {
  return (
    <header className="w-full h-14 flex items-center justify-between px-6 bg-white shadow fixed top-0 left-0 z-20">
        
        {/* Logo, Title & Center Space */}
        <div className="flex items-center space-x-2">
            {/* Logo & Title */}
            <div className="flex items-center w-56">
                <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-lg flex items-center justify-center mr-2">
                <AccountBalanceWalletOutlinedIcon className="text-white" />
                </div>
                {/* Title */}
                <span className="font-bold text-lg text-gray-800">CryptoPay</span>
            </div>
            
            {/* Center Space */}
            {/* <h1 className='font-bold text-lg text-gray-800 ml-8'>Sample Title</h1> */}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="bg-gray-100 p-2 rounded-full relative">
                <NotificationsOutlinedIcon className="text-gray-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
            </button>
            {/* Settings */}
            <button className="bg-gray-100 p-2 rounded-full">
                <SettingsOutlinedIcon className="text-gray-500" />
            </button>
            {/* User Profile */}
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center">
                <Person2OutlinedIcon className="text-white" />
                </div>
                <span className="font-medium text-gray-700">John Doe</span>
                <ExpandMoreOutlinedIcon className="text-gray-400" />
            </div>
        </div>
    </header>
  );
}