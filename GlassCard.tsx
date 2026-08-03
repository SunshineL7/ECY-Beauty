import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** 是否带 AI 光晕 */
  glow?: boolean;
}

/** 通用玻璃质感卡片（颜色全部来自主题 token） */
export function GlassCard({ children, className, glow }: GlassCardProps) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border/70 bg-card/85 p-5 shadow-sm backdrop-blur-xl",
        glow && "shadow-[0_18px_40px_-24px_var(--ai-effect)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
