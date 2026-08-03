import { AlertTriangle, Check, ShieldAlert } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { AnalysisResultDetail } from "@/types/analysis";

/** 成分分析：优秀 / 关注 / 风险提示 */
export function IngredientCard({ result }: { result: AnalysisResultDetail }) {
  const benefits = result.ingredients.filter((i) => i.type === "benefit");
  const watches = result.ingredients.filter((i) => i.type === "watch");

  return (
    <div className="space-y-3">
      <SurfaceCard>
        <h3 className="flex items-center gap-2 text-sm text-foreground">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ai text-background">
            <Check className="h-3 w-3" />
          </span>
          优秀成分
        </h3>
        <ul className="mt-4 space-y-3">
          {benefits.map((i) => (
            <li key={i.name} className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm text-foreground">
                  {i.name}
                  {i.aliasEn ? (
                    <span className="ml-2 text-xs text-muted-foreground">{i.aliasEn}</span>
                  ) : null}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{i.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </SurfaceCard>

      <SurfaceCard>
        <h3 className="flex items-center gap-2 text-sm text-foreground">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          关注成分
        </h3>
        <ul className="mt-4 space-y-3">
          {watches.map((i) => (
            <li key={i.name}>
              <p className="text-sm text-foreground">
                {i.name}
                {i.aliasEn ? (
                  <span className="ml-2 text-xs text-muted-foreground">{i.aliasEn}</span>
                ) : null}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{i.note}</p>
            </li>
          ))}
        </ul>
      </SurfaceCard>

      <SurfaceCard>
        <h3 className="flex items-center gap-2 text-sm text-foreground">
          <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          风险提示
        </h3>
        <ul className="mt-4 space-y-3">
          {result.risks.map((r) => (
            <li key={r.name}>
              <div className="flex items-center gap-2">
                <p className="text-sm text-foreground">{r.name}</p>
                <span className="rounded-full border border-border/70 px-2 py-0.5 text-[0.65rem] text-muted-foreground">
                  {r.level === "avoid" ? "建议避开" : "敏感肌建议观察"}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.reason}</p>
            </li>
          ))}
        </ul>
      </SurfaceCard>
    </div>
  );
}
