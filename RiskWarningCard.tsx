import { ShieldAlert } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { RiskAlertItem } from "@/types/community";

/** AI 避雷榜：中性表达的风险提醒 */
export function RiskWarningCard({ items }: { items: RiskAlertItem[] }) {
  return (
    <section className="mb-10">
      <div className="mb-1 flex items-center gap-2">
        <ShieldAlert className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-sm font-medium tracking-wide text-foreground">AI 避雷榜</h2>
      </div>
      <p className="mb-3 text-[0.7rem] text-muted-foreground">根据成分分析与真实反馈生成</p>

      <div className="space-y-3">
        {items.map((item) => (
          <SurfaceCard key={item.id}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-sm text-foreground">
                  <span className="text-muted-foreground">{item.brand}</span> {item.name}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  风险提醒 · {item.warning}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-base text-foreground tabular-nums">{item.riskScore}</p>
                <p className="text-[0.62rem] text-muted-foreground">关注指数</p>
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-destructive/70"
                style={{ width: `${item.riskScore}%` }}
              />
            </div>

            <ul className="mt-4 space-y-2">
              {item.reasons.map((r) => (
                <li
                  key={r}
                  className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border" />
                  {r}
                </li>
              ))}
            </ul>

            <p className="mt-4 rounded-2xl bg-muted/60 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              <span className="text-foreground">使用建议：</span>
              {item.advice}
            </p>

            <p className="mt-3 text-[0.65rem] text-muted-foreground">
              {item.reportedBy} 位用户提交了相关反馈
            </p>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
