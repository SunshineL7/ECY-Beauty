import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { ScannerCircle } from "./ScannerCircle";
import { mockAnalysisSteps } from "@/mock/analysis";
import { cn } from "@/lib/utils";

interface AnalysisProgressProps {
  productName: string;
  onDone: () => void;
}

const steps = mockAnalysisSteps;

/** AI 分析过程：粒子光圈 + 步骤逐条出现 */
export function AnalysisProgress({ productName, onDone }: AnalysisProgressProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;
    steps.forEach((step, i) => {
      elapsed += step.duration;
      timers.push(setTimeout(() => setCurrent(i + 1), elapsed));
    });
    timers.push(setTimeout(onDone, elapsed + 600));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center pt-4 pb-6">
      <div className="relative">
        <ScannerCircle size="md" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              background: "var(--ai-effect)",
              opacity: 0.5,
              transform: `rotate(${i * 60}deg) translateY(-6.5rem)`,
              animation: `pulse ${2 + (i % 3) * 0.6}s cubic-bezier(0.4,0,0.6,1) ${i * 0.25}s infinite`,
            }}
          />
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">AI 正在理解你的肌肤与</p>
      <p className="mt-1 text-base text-foreground">{productName}</p>

      <ul className="mt-10 w-full space-y-3">
        {steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          if (!done && !active) return null;
          return (
            <li
              key={step.id}
              className={cn(
                "flex animate-fade-in items-center gap-3 rounded-2xl border border-transparent px-3 py-3 transition-colors",
                active && "border-border/70 bg-card",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full border",
                  done ? "border-transparent bg-ai text-background" : "border-border",
                )}
              >
                {done ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-ai" />
                )}
              </span>
              <span className={cn("text-sm", done ? "text-foreground" : "text-muted-foreground")}>
                {done ? step.label : `${step.label.replace("完成", "")}中...`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
