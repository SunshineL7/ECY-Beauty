interface ProgressBarProps {
  label?: string;
  value: number; // 0-100
  suffix?: string;
}

/** 通用进度条（AI 光效渐变） */
export function ProgressBar({ label, value, suffix }: ProgressBarProps) {
  return (
    <div>
      {label || suffix ? (
        <div className="flex items-baseline justify-between">
          {label ? <span className="text-xs text-muted-foreground">{label}</span> : null}
          <span className="text-sm text-foreground">
            {value}
            {suffix ? <span className="text-xs text-muted-foreground">{suffix}</span> : null}
          </span>
        </div>
      ) : null}
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
