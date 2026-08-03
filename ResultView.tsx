import { BookmarkPlus, Clock, Layers, RotateCcw, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { ProductReportCard } from "./ProductReportCard";
import { ScoreCard } from "./ScoreCard";
import { PersonalAdviceCard } from "./PersonalAdviceCard";
import { IngredientCard } from "./IngredientCard";
import type { AnalysisResultDetail } from "@/types/analysis";

interface ResultViewProps {
  result: AnalysisResultDetail;
  onRestart: () => void;
  onSave: () => void;
  onSupervise: () => void;
}

/** 分析结果页 */
export function ResultView({ result, onRestart, onSave, onSupervise }: ResultViewProps) {
  const rec = result.recommendation;
  const items = [
    { icon: Clock, label: "推荐时间", value: rec.time },
    { icon: Repeat, label: "推荐频率", value: rec.frequency },
    { icon: Layers, label: "搭配", value: rec.pairing },
  ];

  return (
    <div className="space-y-4 pb-4">
      <ProductReportCard result={result} />
      <ScoreCard result={result} />
      <PersonalAdviceCard result={result} />
      <IngredientCard result={result} />

      <SurfaceCard>
        <h3 className="text-sm text-foreground">你的专属建议</h3>
        <div className="mt-4 space-y-3">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3">
              <Icon className="h-4 w-4 shrink-0 text-ai" />
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className="ml-auto text-sm text-foreground">{value}</span>
            </div>
          ))}
        </div>
        <ul className="mt-4 space-y-2">
          {result.aiSuggestions.map((s, i) => (
            <li key={s} className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
              <span className="text-foreground">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </li>
          ))}
        </ul>
      </SurfaceCard>

      <div className="sticky bottom-24 space-y-3 pt-2">
        <Button className="h-12 w-full rounded-2xl" onClick={onSave}>
          <BookmarkPlus className="mr-2 h-4 w-4" />
          加入我的产品库
        </Button>
        <Button
          variant="outline"
          className="h-12 w-full rounded-2xl bg-card"
          onClick={onSupervise}
        >
          开启 AI 督导
        </Button>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="inline-flex w-full items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        再分析一件产品
      </button>
    </div>
  );
}
