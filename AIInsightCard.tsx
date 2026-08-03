import { Sparkles } from "lucide-react";
import type { AiSuggestion } from "@/types/supervisor";

export function AIInsightCard({ suggestion }: { suggestion: AiSuggestion }) {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6"
      style={{ boxShadow: "0 20px 44px -28px var(--ai-effect)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--ai-effect)" }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" strokeWidth={1.7} />
          <h2 className="text-sm tracking-wide text-foreground">AI 动态建议</h2>
          <span className="ml-auto text-[0.7rem] text-muted-foreground">
            {suggestion.detectedAt}
          </span>
        </div>

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              检测到
            </dt>
            <dd className="mt-1 text-base text-foreground">{suggestion.problem}</dd>
          </div>
          <div className="rounded-2xl bg-accent/60 p-4">
            <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              AI 建议
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground">
              {suggestion.recommendation}
            </dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              原因
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {suggestion.reason}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
