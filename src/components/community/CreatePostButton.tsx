import { Plus } from "lucide-react";

/** 右下角浮动发布入口 */
export function CreatePostButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm text-primary-foreground shadow-[0_18px_40px_-18px_var(--ai-effect)] transition-transform active:scale-[0.97]"
    >
      <Plus className="h-4 w-4" />
      分享我的体验
    </button>
  );
}
