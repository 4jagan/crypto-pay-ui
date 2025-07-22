import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="border-r min-h-screen py-4 px-4 bg-white shadow h-[calc(100vh-3rem)] w-64 transition-all duration-200 flex flex-col fixed top-14 left-0 z-10">
      <nav className="flex-1 space-y-2 text-sm">
        <SidebarItem icon="villa" label="Dashboard" href="/dashboard/overview" />
        <SidebarItem icon="wallet" label="Wallet" href="/wallet" />
        <SidebarItem icon="payment" label="Pay and Receive" href="/payment" />
        <SidebarItem icon="chart" label="Monitor Transactions" href="/monitor" />
        <SidebarItem icon="bot" label="AI Reconcile & QB" href="/ai" />
        <SidebarItem icon="token" label="Tokens" href="/tokens" />
        <SidebarItem icon="shield" label="MPC Auth" href="/mpc" />
        <SidebarItem icon="description" label="Policy" href="/policy" />
      </nav>
    </aside>
  );
}