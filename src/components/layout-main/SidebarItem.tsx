import getIconComponent from "../icons/IconUtil";

interface SidebarItemProps {
  icon: string;
  label: string;
  href?: string; // Optional href for navigation

}

export default function SidebarItem({ icon, label, href = "#" }: SidebarItemProps) {
  return (
    <a href={href} className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
      {getIconComponent({ icon, size: "small" })}
      <span className="mt-1 ml-2">{label}</span>
    </a>
  );
}
