import {
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  ClipboardCheck,
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react";

type MenuItem = {
  icon: LucideIcon;
  label: string;
};

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Turmas" },
  { icon: CalendarDays, label: "Aulas" },
  { icon: ClipboardCheck, label: "Frequência" },
  { icon: ChartNoAxesCombined, label: "Relatórios" },
  { icon: Settings, label: "Configurações" },
];

export function AppSidebar() {
  return (
    <aside className="w-65 shrink-0 border-r border-gray-200 bg-white">
      <nav aria-label="Navegação principal" className="p-4">
        <ul className="space-y-1">
          {menuItems.map(({ icon: Icon, label }) => (
            <li key={label}>
              <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700">
                <Icon aria-hidden="true" className="size-5" />
                <span>{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
