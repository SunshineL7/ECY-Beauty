import { Sparkles } from "lucide-react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/hooks/useTheme";
import type { ProfileIdentity } from "@/types/profile";

interface ProfileHeaderProps {
  identity: ProfileIdentity | null;
  loading: boolean;
}

/** 个人信息卡：头像、昵称、AI 身份、肌肤状态、当前主题 */
export function ProfileHeader({ identity, loading }: ProfileHeaderProps) {
  const { theme } = useTheme();

  if (loading || !identity) {
    return (
      <SurfaceCard className="mb-5">
        <div className="flex items-center gap-5">
          <Skeleton className="size-20 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </SurfaceCard>
    );
  }

  return (
    <SurfaceCard glow className="relative mb-5 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-14 size-40 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--ai-effect)" }}
      />
      <div className="relative flex items-center gap-5">
        <div
          className="grid size-20 shrink-0 place-items-center rounded-full text-xl font-medium text-primary-foreground"
          style={{
            background:
              "radial-gradient(120% 120% at 30% 20%, var(--ai-effect), var(--primary))",
          }}
        >
          {identity.avatarLetter}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-medium tracking-tight text-foreground">
            {identity.nickname}
          </p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            {identity.aiIdentity}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            肌肤状态 · {identity.skinLabel}
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Sparkles className="size-3.5" strokeWidth={1.6} />
          当前空间 · {theme.name}
        </span>
        <span className="text-[0.68rem] text-muted-foreground">
          加入于 {identity.joinedAt}
        </span>
      </div>
    </SurfaceCard>
  );
}
