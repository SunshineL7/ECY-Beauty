import { Sparkles } from "lucide-react";
import type { RankingBoard } from "@/types/community";

/** 热门榜单：横向滑动的榜单卡片 */
export function RankingCard({ boards }: { boards: RankingBoard[] }) {
  return (
    <section className="mb-10">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-wide text-foreground">热门榜单</h2>
        <span className="text-[0.7rem] text-muted-foreground">AI 综合评分 · 每周更新</span>
      </div>

      <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2">
        {boards.map((board) => (
          <article
            key={board.id}
            className="w-[17.5rem] shrink-0 snap-start rounded-3xl border border-border/70 bg-card p-5 shadow-sm"
          >
            <h3 className="text-sm text-foreground">{board.title}</h3>
            <p className="mt-1 text-[0.7rem] text-muted-foreground">{board.subtitle}</p>

            <ol className="mt-4 space-y-3.5">
              {board.items.map((item) => (
                <li key={item.id}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                      TOP {item.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-foreground">
                        <span className="text-muted-foreground">{item.brand}</span> {item.name}
                      </p>
                      <p className="mt-1 text-[0.7rem] text-muted-foreground">
                        AI 评分 {item.score} · 满意度 {item.satisfaction}%
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-[0.65rem] text-foreground">
                        <Sparkles className="h-3 w-3 text-ai" />
                        {item.aiTag}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
