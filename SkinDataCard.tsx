import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { MetricBar } from "@/components/ui-kit/MetricBar";
import { Skeleton } from "@/components/ui/skeleton";
import type { SkinDataOverview } from "@/types/profile";

interface SkinDataCardProps {
  data: SkinDataOverview | null;
  loading: boolean;
}

const iconMap = {
  up: ArrowUpRight,
  down: ArrowDownRight,
  steady: Minus,
} as const;

/** 我的肌肤数据：Apple Health 风格的长期数据沉淀 */
export function SkinDataCard({ data, loading }: SkinDataCardProps) {
  if (loading || !data) {
    return (
      <SurfaceCard className="mb-5">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="mt-4 h-24 w-full rounded-2xl" />
      </SurfaceCard>
    );
  }

  return (
    <SurfaceCard className="mb-5">
      <h2 className="text-sm font-medium text-foreground">我的肌肤数据</h2>
      <p className="mt-1 text-xs text-muted-foreground">
        累计 {data.recordDays} 天记录 · AI 已分析 {data.aiLearnCount} 次肤感变化
      </p>

      <div className="mt-5 space-y-4">
        <MetricBar label="肌肤稳定指数" value={data.stabilityScore} />
        <MetricBar label="敏感指数" value={data.sensitivityScore} />
      </div>

      <div className="mt-5 rounded-2xl bg-accent/40 p-4">
        <p className="text-[0.68rem] tracking-wide text-muted-foreground">
          长期趋势 · {data.trendRangeLabel}
        </p>
        <ul className="mt-3 space-y-2.5">
          {data.trends.map((t) => {
            const Icon = iconMap[t.direction];
            return (
              <li key={t.id} className="flex items-center justify-between gap-3">
                <span className="text-sm text-foreground">{t.label}</span>
                <span
                  className={
                    t.positive
                      ? "inline-flex items-center gap-1 text-sm text-primary"
                      : "inline-flex items-center gap-1 text-sm text-muted-foreground"
                  }
                >
                  <Icon className="size-3.5" strokeWidth={1.8} />
                  {t.change}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </SurfaceCard>
  );
}
