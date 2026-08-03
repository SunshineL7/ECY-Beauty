import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

/** 通用卡片容器，颜色全部来自主题 token */
export function SurfaceCard({ children, className, glow }: SurfaceCardProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border/70 bg-card p-5 shadow-sm",
        glow && "shadow-[0_18px_40px_-24px_var(--ai-effect)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
