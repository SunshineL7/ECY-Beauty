import { Link } from "@tanstack/react-router";
import { BottleIllustration } from "@/components/home/BottleIllustration";

export function AnalysisEntryCard() {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-border/70 p-6 shadow-[0_20px_50px_-32px_var(--ai-effect)]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--ai-effect) 18%, var(--card)), var(--card) 70%)",
        }}
      />
      <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <h2 className="text-base font-medium text-foreground">AI分析中心</h2>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
            上传产品照片或成分表，AI分析安全性和肌肤适配度。
          </p>
          <Link
            to="/analysis"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            开始分析
          </Link>
        </div>
        <BottleIllustration className="h-28 w-auto shrink-0 opacity-90" />
      </div>
    </section>
  );
}
