import { BottleIllustration } from "@/components/home/BottleIllustration";
import { cn } from "@/lib/utils";

interface ScannerCircleProps {
  size?: "lg" | "md";
  onClick?: () => void;
  className?: string;
}

/** 高端美容检测仪风格的圆形扫描区域 */
export function ScannerCircle({ size = "lg", onClick, className }: ScannerCircleProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      {...(onClick ? { type: "button" as const, onClick, "aria-label": "开始 AI 扫描" } : {})}
      className={cn(
        "group relative flex items-center justify-center rounded-full outline-none",
        size === "lg" ? "h-60 w-60" : "h-48 w-48",
        onClick && "transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ai-effect) 28%, transparent), transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full border"
        style={{ borderColor: "color-mix(in oklab, var(--ai-effect) 45%, transparent)" }}
      />
      <span aria-hidden className="absolute inset-5 rounded-full border border-border/70" />
      <span
        aria-hidden
        className="absolute inset-4 animate-[spin_14s_linear_infinite] rounded-full border border-dashed"
        style={{ borderColor: "color-mix(in oklab, var(--ai-effect) 30%, transparent)" }}
      />
      <span
        aria-hidden
        className="absolute inset-10 rounded-full bg-card shadow-[0_24px_70px_-34px_var(--ai-effect)]"
      />
      <span aria-hidden className="absolute inset-10 overflow-hidden rounded-full">
        <span
          className="absolute left-0 h-10 w-full animate-[scanSweep_2.8s_ease-in-out_infinite]"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--ai-effect) 40%, transparent), transparent)",
          }}
        />
      </span>
      <BottleIllustration
        className={cn(
          "relative w-auto transition-transform duration-500",
          size === "lg" ? "h-28" : "h-24",
          onClick && "group-hover:-translate-y-1",
        )}
      />
    </Tag>
  );
}
