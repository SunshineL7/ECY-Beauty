import { Camera, FileText, Search } from "lucide-react";
import { ScannerCircle } from "./ScannerCircle";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { mockRecentAnalysis } from "@/mock/analysis";
import type { ScanEntryId } from "@/types/analysis";

const entries: { id: ScanEntryId; label: string; hint: string; icon: typeof Camera }[] = [
  { id: "camera", label: "拍摄产品", hint: "拍摄包装快速识别", icon: Camera },
  { id: "ingredients", label: "上传成分表", hint: "精准解析 INCI 成分", icon: FileText },
  { id: "search", label: "搜索产品", hint: "输入产品名称分析", icon: Search },
];

interface ScanHomeProps {
  onSelect: (id: ScanEntryId) => void;
}

/** 扫描首页 */
export function ScanHome({ onSelect }: ScanHomeProps) {
  const recent = mockRecentAnalysis;

  return (
    <div className="pb-4">
      <div className="flex flex-col items-center pt-2">
        <ScannerCircle onClick={() => onSelect("camera")} />
        <h2 className="mt-8 text-xl font-medium tracking-tight text-foreground">扫描你的护肤品</h2>
        <p className="mt-2 max-w-[17rem] text-center text-sm leading-relaxed text-muted-foreground">
          了解成分风险与肌肤适配度
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {entries.map(({ id, label, hint, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className="flex w-full items-center gap-4 rounded-3xl border border-border/70 bg-card p-4 text-left transition-colors hover:border-ring/60"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
              <Icon className="h-5 w-5 text-ai" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm text-foreground">{label}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{hint}</span>
            </span>
          </button>
        ))}
      </div>

      <SurfaceCard className="mt-8">
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm text-foreground">最近分析</h3>
          <span className="text-xs text-muted-foreground">{recent.analyzedAt}</span>
        </div>
        <p className="mt-3 text-sm text-foreground">{recent.productName}</p>
        <p className="mt-1 text-xs text-muted-foreground">{recent.brand}</p>
        <div className="mt-4 flex gap-8">
          <div>
            <p className="text-xs text-muted-foreground">安全评分</p>
            <p className="mt-1 text-lg text-foreground">{recent.safetyScore}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">与你匹配</p>
            <p className="mt-1 text-lg text-foreground">{recent.matchRate}%</p>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
}
