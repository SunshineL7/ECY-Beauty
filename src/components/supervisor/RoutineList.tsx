import {
  Check,
  Droplets,
  Eraser,
  FlaskConical,
  Moon,
  NotebookPen,
  ShieldCheck,
  Sun,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoutineTask } from "@/types/supervisor";

const iconMap = {
  cleanse: Droplets,
  serum: FlaskConical,
  sunscreen: ShieldCheck,
  remove: Eraser,
  repair: Sparkles,
  cream: Droplets,
  log: NotebookPen,
} as const;

interface RoutineListProps {
  period: "morning" | "night";
  tasks: RoutineTask[];
  onToggle: (id: string) => void;
}

export function RoutineList({ period, tasks, onToggle }: RoutineListProps) {
  const PeriodIcon = period === "morning" ? Sun : Moon;
  const title = period === "morning" ? "晨间护理" : "夜间护理";
  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <PeriodIcon className="size-4 text-primary" strokeWidth={1.7} />
        <span className="text-sm text-foreground">{title}</span>
        <span className="ml-auto text-xs text-muted-foreground">
          {doneCount}/{tasks.length}
        </span>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => {
          const Icon = iconMap[task.icon];
          return (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => onToggle(task.id)}
                aria-pressed={task.done}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300",
                  task.done
                    ? "border-transparent bg-accent/60"
                    : "border-border/70 bg-background hover:border-primary/40",
                )}
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full transition-colors",
                    task.done ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground",
                  )}
                >
                  <Icon className="size-4" strokeWidth={1.7} />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-sm",
                      task.done ? "text-muted-foreground line-through" : "text-foreground",
                    )}
                  >
                    {task.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {task.product}
                  </span>
                </span>
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full border transition-colors",
                    task.done
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border",
                  )}
                >
                  {task.done ? <Check className="size-3" strokeWidth={2.4} /> : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
