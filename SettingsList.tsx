import {
  Bell,
  ChevronRight,
  Database,
  Info,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import type { SettingItem } from "@/types/profile";

const icons: Record<SettingItem["icon"], LucideIcon> = {
  account: UserRound,
  privacy: ShieldCheck,
  data: Database,
  bell: Bell,
  info: Info,
};

/** 设置列表：账号 / 隐私 / 数据 / 通知 / 关于 */
export function SettingsList({ items }: { items: SettingItem[] }) {
  return (
    <ul className="divide-y divide-border/60">
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => toast.success(`${item.title}（示例）`)}
              className="flex w-full items-center gap-3 py-3.5 text-left transition-opacity hover:opacity-80"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border/70 bg-accent/40">
                <Icon className="size-4 text-foreground" strokeWidth={1.6} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-foreground">{item.title}</span>
                <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                  {item.description}
                </span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-muted-foreground" strokeWidth={1.6} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
