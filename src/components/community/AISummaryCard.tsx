import { AlertTriangle, Check, Sparkles } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { AiSummaryTag } from "@/types/community";

interface AISummaryCardProps {
  summary: string;
  tags: AiSummaryTag[];
  className?: string;
}

/** AI 总结卡：结论标签 + 总结正文 */
export function AISummaryCard({ summary, tags }: AISummaryCardProps) {
  return (
    <SurfaceCard className="relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--ai-effect) 32%, transparent), transparent 70%)",
        }}
      />
      <h3 className="relative flex items-center gap-2 text-sm text-foreground">
        <Sparkles className="h-4 w-4 text-ai" />
        AI 总结
      </h3>
      <p className="relative mt-3 text-xs leading-relaxed text-muted-foreground">{summary}</p>
      <ul className="relative mt-4 space-y-2">
        {tags.map((t) => (
          <li key={t.label} className="flex items-center gap-2 text-xs text-foreground">
            {t.tone === "positive" ? (
              <Check className="h-3.5 w-3.5 shrink-0 text-ai" />
            ) : (
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-destructive" />
            )}
            {t.label}
          </li>
        ))}
      </ul>
    </SurfaceCard>
  );
}
