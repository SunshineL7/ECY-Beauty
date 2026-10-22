import { forwardRef, useState } from "react";
import { Search } from "lucide-react";
import type { CommunitySearchSuggestion } from "@/types/community";

const typeLabel: Record<CommunitySearchSuggestion["type"], string> = {
  product: "产品",
  ingredient: "成分",
  question: "问题",
};

interface SearchBarProps {
  suggestions: CommunitySearchSuggestion[];
}

/** 社区搜索：产品 / 品牌 / 成分 / 肌肤问题 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(function SearchBar(
  { suggestions },
  ref,
) {
  const [value, setValue] = useState("");

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2.5 rounded-2xl bg-muted/70 px-4 py-3.5">
        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        <input
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="搜索产品、成分、肌肤问题"
          aria-label="搜索产品、成分、肌肤问题"
          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setValue(s.label)}
            className="rounded-full border border-border/70 px-3 py-1.5 text-[0.72rem] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <span className="mr-1.5 text-[0.62rem] opacity-70">{typeLabel[s.type]}</span>
            {s.label}
          </button>
        ))}
      </div>
    </section>
  );
});
