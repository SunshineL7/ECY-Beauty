import { Link } from "@tanstack/react-router";
import { ChevronRight, FlaskConical, NotebookPen, Sparkles, type LucideIcon } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { AssetEntry } from "@/types/profile";

const icons: Record<AssetEntry["icon"], LucideIcon> = {
  products: FlaskConical,
  reports: Sparkles,
  logs: NotebookPen,
};

/** 单个资产入口卡 */
export function AssetCard({ entry }: { entry: AssetEntry }) {
  const Icon = icons[entry.icon];
  return (
    <Link
      to={entry.to}
      className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card px-4 py-3.5 transition-colors hover:border-primary/40"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/50">
        <Icon className="size-4 text-primary" strokeWidth={1.6} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm text-foreground">{entry.title}</span>
        <span className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
          {entry.metrics.map((m) => (
            <span key={m.label} className="text-xs text-muted-foreground">
              {m.label} · <span className="text-foreground">{m.value}</span>
            </span>
          ))}
        </span>
      </span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.6} />
    </Link>
  );
}

/** 我的资产：产品库 / 分析记录 / 肤感记录 */
export function AssetList({
  entries,
  loading,
}: {
  entries: AssetEntry[] | null;
  loading: boolean;
}) {
  if (loading || !entries) {
    return (
      <SurfaceCard className="mb-5">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-4 h-40 w-full rounded-2xl" />
      </SurfaceCard>
    );
  }

  return (
    <SurfaceCard className="mb-5">
      <h2 className="text-sm font-medium text-foreground">我的资产</h2>
      <p className="mt-1 text-xs text-muted-foreground">你的护肤沉淀，都在这里。</p>
      <div className="mt-4 space-y-3">
        {entries.map((e) => (
          <AssetCard key={e.id} entry={e} />
        ))}
      </div>
    </SurfaceCard>
  );
}
