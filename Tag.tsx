import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  /** 语气：中性 / 正向 / 提醒 */
  tone?: "neutral" | "positive" | "caution";
  className?: string;
}

/** 通用标签 */
export function Tag({ children, tone = "neutral", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] leading-5",
        tone === "positive" && "bg-primary/12 text-primary",
        tone === "caution" && "bg-destructive/10 text-destructive",
        tone === "neutral" && "bg-accent/60 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
