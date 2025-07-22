"use client";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const tabs = [
    { href: "/dashboard/overview", label: "Overview" },
    { href: "/dashboard/risk", label: "Risk" },
    { href: "/dashboard/transaction", label: "Transaction" },
    { href: "/dashboard/performance", label: "Performance" },
  ];

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex-none bg-white p-4 px-10 -mt-8 -mx-8">
        <h2 className="font-bold text-lg text-gray-700 mb-1">Dashboard</h2>
        
        {/* Tab Headers */}
        <div className="flex space-x-8 -mb-4">
        {tabs.map((tab) => (
          <a key={tab.href} href={tab.href} className={`py-0 px-0 text-left text-gray-600 hover:text-gray-800 border-b-2 ${pathname === tab.href ? 'border-blue-500' : 'border-transparent'}`}>
            {tab.label}
          </a>
        ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-0 pt-2">{children}</main>
    </div>
  );
}
