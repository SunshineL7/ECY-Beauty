import { ScoreRing } from "@/components/ui-kit/ScoreRing";
import { Sparkles } from "lucide-react";
import type { DailySkinReport } from "@/types";

export function DailySkinCard({ report }: { report: DailySkinReport }) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-border/60 p-6 shadow-[0_24px_60px_-40px_var(--ai-effect)]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in oklab, var(--ai-effect) 12%, var(--card)), var(--card) 60%)",
        }}
      />
      <div className="relative">
        <div className="flex items-baseline justify-between">
          <h2 className="text-base font-medium text-foreground">今日肌肤状态</h2>
          <span className="text-[0.7rem] tracking-wide text-muted-foreground">{report.date}</span>
        </div>

        <div className="mt-7 flex items-center gap-7">
          <ScoreRing value={report.stabilityScore} label="肌肤稳定指数" />
          <dl className="min-w-0 flex-1 space-y-4">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-xs text-muted-foreground">肤质</dt>
              <dd className="truncate text-sm text-foreground">{report.skinTypeLabel}</dd>
            </div>
            <div className="h-px w-full bg-border/60" />
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-xs text-muted-foreground">敏感指数</dt>
              <dd className="text-sm text-foreground">
                {report.sensitivityScore}
                <span className="text-xs text-muted-foreground">/100</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-7">
          <p className="text-xs text-muted-foreground">主要问题</p>
          <ul className="mt-2.5 flex flex-wrap gap-2">
            {report.issues.map((issue) => (
              <li
                key={issue}
                className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs text-foreground"
              >
                {issue}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-6 flex items-start gap-2.5 rounded-2xl p-4"
          style={{ background: "color-mix(in oklab, var(--ai-effect) 14%, var(--card))" }}
        >
          <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.5} />
          <div className="min-w-0">
            <p className="text-[0.7rem] tracking-wide text-muted-foreground">AI建议</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{report.aiAdvice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
