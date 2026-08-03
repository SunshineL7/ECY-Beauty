import { Sparkles } from "lucide-react";

export function AIHeader() {
  return (
    <header className="mb-7 flex items-start justify-between gap-4">
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          AI Skin Coach
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
          你的私人护肤教练
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          根据你的肌肤状态，每天调整护理方案。
        </p>
      </div>
      <div
        className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card"
        style={{ boxShadow: "0 10px 26px -16px var(--ai-effect)" }}
        aria-label="AI 正在陪伴"
      >
        <Sparkles className="size-5 text-primary" strokeWidth={1.6} />
      </div>
    </header>
  );
}
