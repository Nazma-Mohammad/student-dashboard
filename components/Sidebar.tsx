import { BookOpen, GraduationCap, Home, Settings, Trophy } from "lucide-react";

const navItems = [
  { label: "Home", Icon: Home, active: true },
  { label: "Courses", Icon: BookOpen, active: false },
  { label: "Achievements", Icon: Trophy, active: false },
  { label: "Settings", Icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-neutral-200 bg-white px-5 py-6 lg:block">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-neutral-950 text-white">
          <GraduationCap size={24} aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-500">LearnOS</p>
          <p className="text-lg font-bold text-neutral-950">Academy</p>
        </div>
      </div>

      <nav className="mt-10 space-y-2" aria-label="Dashboard navigation">
        {navItems.map(({ label, Icon, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition ${
              active
                ? "bg-neutral-950 text-white"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
            }`}
          >
            <Icon size={18} aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
