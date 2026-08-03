import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { TrendPoint } from "@/types/supervisor";

const W = 300;
const H = 110;

function toPath(values: number[]) {
  const step = W / (values.length - 1);
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(H - (v / 100) * H).toFixed(1)}`)
    .join(" ");
}

export function SkinTrendChart({ points }: { points: TrendPoint[] }) {
  const stability = toPath(points.map((p) => p.stability));
  const sensitivity = toPath(points.map((p) => p.sensitivity));

  return (
    <SurfaceCard className="p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-medium tracking-tight text-foreground">肌肤变化趋势</h2>
        <span className="text-xs text-muted-foreground">最近 7 天</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-5 w-full"
        role="img"
        aria-label="最近 7 天肌肤稳定度与敏感指数趋势"
      >
        <path d={stability} fill="none" stroke="var(--primary)" strokeWidth={2} strokeLinecap="round" />
        <path
          d={sensitivity}
          fill="none"
          stroke="var(--muted-foreground)"
          strokeWidth={1.5}
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
      </svg>

      <div className="mt-3 flex justify-between text-[0.65rem] text-muted-foreground">
        {points.map((p) => (
          <span key={p.date}>{p.date}</span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full bg-primary" />
          肌肤稳定度
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full bg-muted-foreground/60" />
          敏感指数
        </span>
      </div>
    </SurfaceCard>
  );
}
