import { History } from "lucide-react";

interface AnalysisHeaderProps {
  onHistory: () => void;
}

/** AI 分析中心页头 */
export function AnalysisHeader({ onHistory }: AnalysisHeaderProps) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          Analysis
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground">AI 分析中心</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          智能分析产品成分与肌肤适配度
        </p>
      </div>
      <button
        type="button"
        onClick={onHistory}
        aria-label="历史报告"
        className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:text-foreground"
      >
        <History className="h-4 w-4" />
      </button>
    </header>
  );
}
