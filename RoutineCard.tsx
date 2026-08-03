import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { RoutineList } from "@/components/supervisor/RoutineList";
import type { SkinRoutine } from "@/types/supervisor";

interface RoutineCardProps {
  routine: SkinRoutine;
  onToggle: (period: "morning" | "night", id: string) => void;
}

export function RoutineCard({ routine, onToggle }: RoutineCardProps) {
  const all = [...routine.morning, ...routine.night];
  const progress = Math.round((all.filter((t) => t.done).length / all.length) * 100);

  return (
    <SurfaceCard glow className="p-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h2 className="text-lg font-medium tracking-tight text-foreground">今日护肤计划</h2>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            坚持护理，遇见更稳定的肌肤
          </p>
        </div>
        <span className="text-sm text-primary">{progress}%</span>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border/70">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--ai-effect), var(--primary))",
          }}
        />
      </div>

      <div className="mt-6 space-y-7">
        <RoutineList
          period="morning"
          tasks={routine.morning}
          onToggle={(id) => onToggle("morning", id)}
        />
        <RoutineList
          period="night"
          tasks={routine.night}
          onToggle={(id) => onToggle("night", id)}
        />
      </div>
    </SurfaceCard>
  );
}
