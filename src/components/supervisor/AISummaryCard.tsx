import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { cn } from "@/lib/utils";
import type { AiSkinSummary } from "@/types/supervisor";

export function AISummaryCard({ summary }: { summary: AiSkinSummary }) {
  return (
    <SurfaceCard className="p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-medium tracking-tight text-foreground">AI 总结</h2>
        <span className="text-xs text-muted-foreground">{summary.rangeLabel}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{summary.summary}</p>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {summary.metrics.map((m) => {
          const up = m.delta > 0;
          const Icon = up ? ArrowUpRight : ArrowDownRight;
          return (
            <div key={m.label} className="rounded-2xl bg-accent/50 px-3 py-4 text-center">
              <p className="text-xs text-muted-foreground">{m.label}</p>
              <p
                className={cn(
                  "mt-2 flex items-center justify-center gap-0.5 text-base",
                  m.positive ? "text-primary" : "text-destructive",
                )}
              >
                <Icon className="size-4" strokeWidth={2} />
                {Math.abs(m.delta)}%
              </p>
            </div>
          );
        })}
      </div>
    </SurfaceCard>
  );
}
