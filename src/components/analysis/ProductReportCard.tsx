import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { AnalysisResultDetail } from "@/types/analysis";

/** 产品信息卡 */
export function ProductReportCard({ result }: { result: AnalysisResultDetail }) {
  return (
    <SurfaceCard>
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        Product
      </p>
      <h2 className="mt-3 text-xl font-medium tracking-tight text-foreground">
        {result.productName}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{result.brandEn}</p>
      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span>{result.category}</span>
        <span>分析完成 {result.analyzedAt}</span>
      </div>
    </SurfaceCard>
  );
}
