import type { ReactNode } from "react";

interface AppHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** 右侧操作区（通知、主题入口等） */
  action?: ReactNode;
}

/** 通用页面头部 */
export function AppHeader({ eyebrow, title, description, action }: AppHeaderProps) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground">{title}</h1>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
