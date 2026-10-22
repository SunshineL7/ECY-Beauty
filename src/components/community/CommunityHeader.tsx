import { Search } from "lucide-react";

interface CommunityHeaderProps {
  onSearch: () => void;
}

/** 社区中心页头 */
export function CommunityHeader({ onSearch }: CommunityHeaderProps) {
  return (
    <header className="mb-6 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
          Community
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-tight text-foreground">肌肤社区</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">发现真实护肤体验</p>
      </div>
      <button
        type="button"
        onClick={onSearch}
        aria-label="搜索"
        className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card text-muted-foreground transition-colors hover:text-foreground"
      >
        <Search className="h-4 w-4" />
      </button>
    </header>
  );
}
