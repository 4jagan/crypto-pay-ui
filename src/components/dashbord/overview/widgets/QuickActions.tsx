import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function QuickActions() {
  return (
    <div className="rounded-lg p-4 bg-white text-gray-700 flex flex-col space-y-3 border border-gray-200">
      <h2 className="font-bold">Quick Actions</h2>
      
      <button className="bg-blue-500 text-white rounded-lg py-2 mx-8">
        <SendOutlinedIcon className="mr-2" />
        <span className="">Transfer Payment</span>
      </button>

      <button className="bg-blue-500 text-white rounded-lg py-2 mx-8">
        <FileDownloadOutlinedIcon className="mr-2" />
        <span className="">Receive Payment</span>
      </button>
    </div>
  );
}