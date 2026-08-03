import { Check, Sparkles } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { AnalysisResultDetail } from "@/types/analysis";

/** 为什么适合你：AI 解释卡 */
export function PersonalAdviceCard({ result }: { result: AnalysisResultDetail }) {
  return (
    <SurfaceCard className="relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ai-effect) 34%, transparent), transparent 70%)",
        }}
      />
      <h3 className="relative flex items-center gap-2 text-sm text-foreground">
        <Sparkles className="h-4 w-4 text-ai" />
        AI 为什么推荐？
      </h3>

      <div className="relative mt-4 rounded-2xl bg-muted/60 p-4">
        <p className="text-xs text-muted-foreground">你的肌肤</p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-border/70 bg-card px-3 py-1 text-xs text-foreground">
            {result.skin.type}
          </span>
          <span className="rounded-full border border-border/70 bg-card px-3 py-1 text-xs text-foreground">
            敏感指数 {result.skin.sensitivity}
          </span>
          {result.skin.concerns.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border/70 bg-card px-3 py-1 text-xs text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <p className="relative mt-5 text-xs text-muted-foreground">匹配原因</p>
      <ul className="relative mt-3 space-y-3">
        {result.matchReasons.map((r) => (
          <li key={r.ingredient} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ai text-background">
              <Check className="h-3 w-3" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-foreground">{r.ingredient}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{r.effect}</p>
            </div>
          </li>
        ))}
      </ul>
    </SurfaceCard>
  );
}
