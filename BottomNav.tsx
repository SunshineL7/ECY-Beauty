import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Leaf, ScanLine, Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  to: string;
  label: string;
  icon: typeof Home;
}

/** 底部 Tab 导航顺序固定：首页 / AI督导 / AI分析 / 肌肤发现 / 我的 */
export const navItems: NavItem[] = [
  { to: "/home", label: "首页", icon: Home },
  { to: "/coach", label: "AI督导", icon: Sparkles },
  { to: "/analysis", label: "AI分析", icon: ScanLine },
  { to: "/community", label: "肌肤发现", icon: Leaf },
  { to: "/profile", label: "我的", icon: User },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-5 items-center gap-1 rounded-[1.75rem] border border-border/70 bg-card/85 px-2 py-2 shadow-[0_8px_30px_-12px_var(--ai-effect)] backdrop-blur-xl">
        {navItems.map(({ to, label, icon: Icon }) => {
          const active = pathname === to || pathname.startsWith(`${to}/`);

          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center gap-1 rounded-2xl py-2 transition-all duration-300 ease-out",
                active
                  ? "bg-accent/70 text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon
                className={cn(
                  "size-[1.15rem] transition-transform duration-300",
                  active ? "scale-110" : "scale-100",
                )}
                strokeWidth={active ? 2.2 : 1.6}
              />
              <span className="text-[0.625rem] tracking-wide">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
