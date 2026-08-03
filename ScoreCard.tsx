import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { ScoreRing } from "@/components/ui-kit/ScoreRing";
import { MetricBar } from "@/components/ui-kit/MetricBar";
import type { AnalysisResultDetail } from "@/types/analysis";

/** AI 综合评分仪表盘 */
export function ScoreCard({ result }: { result: AnalysisResultDetail }) {
  return (
    <SurfaceCard glow>
      <div className="flex flex-col items-center py-2">
        <ScoreRing value={result.safetyScore} size={148} />
        <p className="mt-3 text-xs text-muted-foreground">/100 · AI 安全评分</p>
      </div>
      <div className="mt-6 space-y-4 border-t border-border/60 pt-5">
        <MetricBar label="安全性" value={result.safetyScore} />
        <MetricBar label="修护能力" value={result.repairScore} />
        <MetricBar label="与你匹配" value={result.matchRate} suffix="%" />
      </div>
      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{result.summary}</p>
    </SurfaceCard>
  );
}
