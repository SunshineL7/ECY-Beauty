import type { ReactNode } from "react";
import { BottomNav } from "@/components/navigation/BottomNav";

/** 移动端优先的应用外壳：内容区 + 底部导航 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative mx-auto min-h-screen w-full max-w-md px-5 pb-32 pt-[max(1.5rem,env(safe-area-inset-top))]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, var(--ai-effect), transparent 70%)",
          }}
        />
        <main className="relative">{children}</main>
      </div>
      <BottomNav />
    </div>
  );
}
