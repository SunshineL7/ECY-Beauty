import { Check } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import type { Theme } from "@/themes/theme";

/** 主题迷你预览：背景 / 卡片 / 主按钮 / AI 光效 */
function ThemePreview({ theme }: { theme: Theme }) {
  const t = theme.tokens;
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-3"
      style={{ backgroundColor: t.backgroundColor }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 size-16 rounded-full opacity-70 blur-xl"
        style={{ backgroundColor: t.aiEffectColor }}
      />
      <div
        className="relative rounded-xl p-2.5"
        style={{ backgroundColor: t.cardColor, border: `1px solid ${t.borderColor}` }}
      >
        <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: t.textColor }} />
        <div
          className="mt-1.5 h-1.5 w-14 rounded-full opacity-60"
          style={{ backgroundColor: t.mutedTextColor }}
        />
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="h-4 w-10 rounded-full" style={{ backgroundColor: t.primaryColor }} />
          <span className="h-4 w-6 rounded-full" style={{ backgroundColor: t.accentColor }} />
        </div>
      </div>
    </div>
  );
}

interface ThemeCardProps {
  theme: Theme;
  active: boolean;
  onSelect: () => void;
}

/** 单个主题卡：预览 + 名称 + 一句话描述 */
export function ThemeCard({ theme, active, onSelect }: ThemeCardProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onSelect}
      className={cn(
        "group rounded-3xl border p-2.5 text-left transition-all duration-300",
        active
          ? "border-primary/60 shadow-[0_16px_36px_-24px_var(--ai-effect)]"
          : "border-border/70 hover:border-primary/40",
      )}
    >
      <ThemePreview theme={theme} />
      <div className="flex items-start justify-between gap-2 px-1 pt-3">
        <div className="min-w-0">
          <p className="truncate text-sm text-foreground">{theme.name}</p>
          <p className="truncate text-[0.68rem] text-muted-foreground">{theme.subtitle}</p>
        </div>
        <span
          className={cn(
            "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border transition-colors",
            active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border/80 text-transparent",
          )}
        >
          <Check className="size-3" strokeWidth={2.4} />
        </span>
      </div>
      <p className="mt-2 px-1 text-[0.68rem] leading-relaxed text-muted-foreground">
        {theme.description}
      </p>
      <div className="flex flex-wrap gap-1 px-1 pb-1 pt-2">
        {theme.keywords.map((k) => (
          <span
            key={k}
            className="rounded-full bg-accent/60 px-1.5 py-0.5 text-[0.6rem] text-muted-foreground"
          >
            {k}
          </span>
        ))}
      </div>
    </button>
  );
}

/** 我的 AI 护肤空间：六套主题实时切换 */
export function ThemeSelector() {
  const { themes, themeId, setThemeId } = useTheme();
  return (
    <div className="grid grid-cols-2 gap-3">
      {themes.map((t) => (
        <ThemeCard
          key={t.id}
          theme={t}
          active={t.id === themeId}
          onSelect={() => setThemeId(t.id)}
        />
      ))}
    </div>
  );
}
