import { Home, Coins, MessageSquare, Users, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Coins, label: "Earn", path: "/earn" },
    { icon: MessageSquare, label: "Memepad", path: "/memepad" },
    { icon: Users, label: "Frens", path: "/frens" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2">←</button>
          <h1 className="text-xl font-semibold">MR App</h1>
        </div>
        <button className="p-2">⋮</button>
      </header>

      <main className="pt-16 pb-20">{children}</main>

      <nav className="fixed bottom-0 w-full bg-black/90 backdrop-blur-sm border-t border-gray-800">
        <div className="flex justify-around p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 ${
                  isActive ? "text-white" : "text-gray-500"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
