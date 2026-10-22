import { Star, Users } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { AISummaryCard } from "./AISummaryCard";
import type { FeedbackDigest } from "@/types/community";

/** 产品真实反馈：结构化数据卡 */
export function ProductFeedbackCard({ digest }: { digest: FeedbackDigest }) {
  return (
    <section className="mb-10 space-y-3">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-wide text-foreground">真实使用反馈</h2>
        <span className="text-[0.7rem] text-muted-foreground">结构化聚合</span>
      </div>

      <SurfaceCard>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm text-foreground">
              {digest.brand} {digest.productName}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              {digest.reviewCount.toLocaleString()} 人反馈
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 text-sm text-foreground">
            <Star className="h-3.5 w-3.5 text-ai" />
            {digest.rating.toFixed(1)}
          </span>
        </div>

        <div className="mt-5">
          <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <span className="h-full bg-ai" style={{ width: `${digest.sentiment.positive}%` }} />
            <span
              className="h-full bg-border"
              style={{ width: `${digest.sentiment.neutral}%` }}
            />
            <span
              className="h-full bg-destructive/70"
              style={{ width: `${digest.sentiment.negative}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[0.68rem] text-muted-foreground">
            <span>正向 {digest.sentiment.positive}%</span>
            <span>中性 {digest.sentiment.neutral}%</span>
            <span>负向 {digest.sentiment.negative}%</span>
          </div>
        </div>

        <div className="mt-6 border-t border-border/60 pt-5">
          <p className="text-xs text-muted-foreground">不同肤质反馈</p>
          <ul className="mt-3 space-y-3">
            {digest.skinFeedback.map((s) => (
              <li key={s.label}>
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-foreground">{s.label}</span>
                  <span className="text-xs text-muted-foreground">
                    满意度 <span className="text-foreground">{s.satisfaction}%</span> ·{" "}
                    {s.count} 人
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.satisfaction}%`,
                      background: "linear-gradient(90deg, var(--ai-effect), var(--primary))",
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
          {digest.keywords.map((k) => (
            <span
              key={k.label}
              className="rounded-full bg-muted px-3 py-1.5 text-[0.68rem] text-muted-foreground"
            >
              {k.label}
              <span className="ml-1.5 text-foreground">{k.count}</span>
            </span>
          ))}
        </div>
      </SurfaceCard>

      <AISummaryCard summary={digest.aiSummary} tags={digest.aiTags} />

      <SurfaceCard>
        <h3 className="text-sm text-foreground">代表性反馈</h3>
        <ul className="mt-4 space-y-4">
          {digest.voices.map((v) => (
            <li key={v.id}>
              <p className="text-[0.7rem] text-muted-foreground">
                {v.skinTypeLabel} · {v.days}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-foreground">{v.content}</p>
            </li>
          ))}
        </ul>
      </SurfaceCard>
    </section>
  );
}
