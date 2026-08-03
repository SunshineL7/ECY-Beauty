import { Bookmark, Heart } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { UserNote } from "@/types/community";

/** 我的护肤笔记：简洁 UGC 卡片 */
export function UserPostCard({ notes }: { notes: UserNote[] }) {
  return (
    <section className="mb-6">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-wide text-foreground">我的护肤笔记</h2>
        <span className="text-[0.7rem] text-muted-foreground">真实记录</span>
      </div>

      <div className="space-y-3">
        {notes.map((note) => (
          <SurfaceCard key={note.id}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-foreground">
                {note.user.slice(0, 1)}
              </span>
              <div className="min-w-0">
                <p className="text-sm text-foreground">{note.user}</p>
                <p className="mt-0.5 text-[0.68rem] text-muted-foreground">
                  {note.skinType} · {note.product} · {note.duration}
                </p>
              </div>
            </div>
            <p className="mt-3.5 text-xs leading-relaxed text-foreground">{note.content}</p>
            <div className="mt-4 flex items-center gap-5 text-[0.7rem] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5" />
                {note.likes}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Bookmark className="h-3.5 w-3.5" />
                {note.saves}
              </span>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}
