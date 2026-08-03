interface MetricBarProps {
  label: string;
  value: number; // 0-100
  suffix?: string;
}

export function MetricBar({ label, value, suffix = "/100" }: MetricBarProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="text-sm text-foreground">
          {value}
          <span className="text-xs text-muted-foreground">{suffix}</span>
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border/70">
        <div
          className="h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: `${Math.min(Math.max(value, 0), 100)}%`,
            background: "linear-gradient(90deg, var(--ai-effect), var(--primary))",
          }}
        />
      </div>
    </div>
  );
}
