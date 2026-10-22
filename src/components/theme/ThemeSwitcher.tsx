import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

/** 主题切换器：6 套主题 */
export function ThemeSwitcher() {
  const { themes, themeId, setThemeId } = useTheme();

  return (
    <div className="grid grid-cols-2 gap-3">
      {themes.map((t) => {
        const active = t.id === themeId;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setThemeId(t.id)}
            className={cn(
              "rounded-2xl border p-3 text-left transition-all duration-300",
              active
                ? "border-primary/60 bg-accent/60"
                : "border-border/70 bg-card hover:border-primary/30",
            )}
          >
            <div className="flex gap-1.5">
              {[t.tokens.backgroundColor, t.tokens.primaryColor, t.tokens.aiEffectColor].map(
                (c) => (
                  <span
                    key={c}
                    className="size-4 rounded-full border border-border/60"
                    style={{ backgroundColor: c }}
                  />
                ),
              )}
            </div>
            <p className="mt-2 text-sm text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.subtitle}</p>
          </button>
        );
      })}
    </div>
  );
}
