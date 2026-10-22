import { useState } from "react";
import { Bell, Palette } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import type { AppNotification } from "@/types";

interface HomeHeaderProps {
  notifications: AppNotification[];
}

export function HomeHeader({ notifications }: HomeHeaderProps) {
  const [themeOpen, setThemeOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="mb-9 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
      <div className="min-w-0">
        <h1 className="truncate text-[1.6rem] font-medium leading-tight tracking-[0.01em] text-foreground">
          Nice Day~
        </h1>
        <p className="mt-1.5 text-[0.8rem] tracking-wide text-muted-foreground">
          今天也一起照顾肌肤吧
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Popover>
          <PopoverTrigger
            aria-label="通知"
            className="relative grid size-10 place-items-center rounded-full border border-border/70 bg-card text-foreground transition-colors hover:bg-accent/60"
          >
            <Bell className="size-[1.05rem]" strokeWidth={1.5} />
            {unread > 0 ? (
              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-primary" />
            ) : null}
          </PopoverTrigger>
          <PopoverContent align="end" className="w-72 rounded-2xl border-border/70 bg-card p-2">
            <p className="px-2 py-1.5 text-xs text-muted-foreground">通知</p>
            <ul className="space-y-1">
              {notifications.map((n) => (
                <li key={n.id} className="rounded-xl px-2 py-2 hover:bg-accent/50">
                  <p className="text-sm text-foreground">{n.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{n.body}</p>
                  <p className="mt-1 text-[0.65rem] text-muted-foreground">{n.createdAt}</p>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>

        <button
          type="button"
          aria-label="切换主题"
          onClick={() => setThemeOpen(true)}
          className="grid size-10 place-items-center rounded-full border border-border/70 bg-card text-foreground transition-colors hover:bg-accent/60"
        >
          <Palette className="size-[1.05rem]" strokeWidth={1.5} />
        </button>
      </div>

      <Sheet open={themeOpen} onOpenChange={setThemeOpen}>
        <SheetContent side="bottom" className="rounded-t-3xl border-border/70 bg-card">
          <SheetHeader className="text-left">
            <SheetTitle className="text-base font-medium text-foreground">外观主题</SheetTitle>
            <SheetDescription className="text-xs text-muted-foreground">
              选择适合此刻心境的护肤氛围
            </SheetDescription>
          </SheetHeader>
          <div className="px-4 pb-8">
            <ThemeSwitcher />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
