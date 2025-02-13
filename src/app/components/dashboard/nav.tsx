"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import {
  ChartColumnBig,
  LayoutDashboard,
  Plug,
  Settings,
  TableOfContents,
  UserCircle,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Campaigns", icon: ChartColumnBig },
  { name: "Flows", icon: Workflow },
  { name: "Integrations", icon: Plug },
  { name: "Customers", icon: TableOfContents },
];

export function Nav() {
  const pathname = usePathname();
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className="flex flex-col justify-between h-full pb-6 font-medium">
      <div className="px-4">
        <div className="flex flex-col gap-4 items-start text-muted-foreground text-lg px-5">
          <div className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
            <Settings className="h-6 w-6" />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
            <UserCircle className="h-6 w-6" />
            <span>Team</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 mt-6 text-lg">
          <p className="text-muted-foreground text-base px-5">MENU</p>
          {navLinks.map((item) => (
            <span
              key={item.name}
              className={cn(
                "flex items-center gap-2 rounded-lg py-2 px-5 transition-colors cursor-pointer",
                pathname.includes(item.name.toLowerCase())
                  ? "bg-white text-black shadow-sm"
                  : "text-muted-foreground hover:bg-white hover:text-black"
              )}
            >
              <item.icon
                className={cn(
                  "h-6 w-6",
                  pathname.includes(item.name.toLowerCase())
                    ? "text-primary fill-primary"
                    : "text-gray-500"
                )}
              />
              {item.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <Button
          variant="secondary"
          className="bg-primary ml-8 mb-5 text-white text-base font-semibold hover:bg-primary/80 transition-colors"
          onClick={() => handleLogout()}
        >
          Logout
        </Button>
        <div className="mt-auto flex items-center gap-2 px-6 py-4 border-t">
          <UserCircle className="h-10 w-10 text-gray-700" />
          <span className="text-black font-semibold text-lg">Tom Wang</span>
        </div>
      </div>
    </nav>
  );
}
