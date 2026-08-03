import { Link } from "@tanstack/react-router";
import { ChevronRight, FlaskConical, LineChart, ScanFace } from "lucide-react";
import type { FeatureEntry } from "@/types";

const iconMap = {
  profile: ScanFace,
  products: FlaskConical,
  logs: LineChart,
} as const;

export function FeatureEntries({ entries }: { entries: FeatureEntry[] }) {
  const [primary, ...rest] = entries;

  return (
    <section>
      <div className="mb-3.5 flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-wide text-foreground">我的护肤</h2>
        <span className="text-[0.7rem] text-muted-foreground">我的护肤资产</span>
      </div>

      {primary ? <FeatureEntryCard entry={primary} variant="wide" /> : null}

      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        {rest.map((entry) => (
          <FeatureEntryCard key={entry.id} entry={entry} variant="tile" />
        ))}
      </div>
    </section>
  );
}

export function FeatureEntryCard({
  entry,
  variant = "tile",
}: {
  entry: FeatureEntry;
  variant?: "wide" | "tile";
}) {
  const Icon = iconMap[entry.icon];

  if (variant === "wide") {
    return (
      <Link
        to={entry.to}
        className="flex items-center gap-4 rounded-[1.4rem] border border-border/60 bg-card px-4 py-4 shadow-[0_10px_30px_-26px_var(--ai-effect)] transition-colors hover:bg-accent/30"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent/60">
          <Icon className="size-[1.1rem] text-primary" strokeWidth={1.5} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm text-foreground">{entry.title}</span>
          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
            {entry.description}
          </span>
          {entry.highlights?.length ? (
            <span className="mt-2 flex flex-wrap gap-1.5">
              {entry.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full bg-accent/50 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </span>
          ) : null}
        </span>
        <ChevronRight className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
      </Link>
    );
  }

  return (
    <Link
      to={entry.to}
      className="flex h-full flex-col justify-between rounded-[1.4rem] border border-border/60 bg-card p-4 shadow-[0_10px_30px_-26px_var(--ai-effect)] transition-colors hover:bg-accent/30"
    >
      <span className="grid size-10 place-items-center rounded-2xl bg-accent/60">
        <Icon className="size-[1.05rem] text-primary" strokeWidth={1.5} />
      </span>
      <span className="mt-6 block">
        <span className="block text-sm text-foreground">{entry.title}</span>
        <span className="mt-1 block text-[0.7rem] leading-relaxed text-muted-foreground">
          {entry.description}
        </span>
      </span>
    </Link>
  );
}
