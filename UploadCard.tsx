import { useRef, useState } from "react";
import { ArrowLeft, Loader2, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import type { ScanEntryId } from "@/types/analysis";

interface UploadCardProps {
  entry: ScanEntryId;
  onBack: () => void;
  onSubmit: (query: string) => void;
}

/** 产品上传页 */
export function UploadCard({ entry, onBack, onSubmit }: UploadCardProps) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const ready = Boolean(photo || name.trim());

  return (
    <div className="pb-4">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        返回
      </button>

      <h2 className="text-xl font-medium tracking-tight text-foreground">上传你的护肤品</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        支持产品图片、成分表和产品信息
      </p>

      {photo ? (
        <SurfaceCard className="mt-8">
          <div className="flex items-center gap-4">
            <img
              src={photo}
              alt="已上传的产品图片"
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                识别中
              </p>
              <p className="mt-2 text-sm text-foreground">
                {name.trim() || "理肤泉 B5 修护霜"}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Loader2 className="h-3 w-3 animate-spin text-ai" />
                正在读取成分信息...
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="mt-4 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            重新上传图片
          </button>
        </SurfaceCard>
      ) : (
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="mt-8 flex w-full flex-col items-center rounded-[28px] border border-dashed border-border bg-card/60 px-6 py-12 shadow-sm transition-colors hover:border-ring/60"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full bg-muted"
            style={{ boxShadow: "0 18px 40px -26px var(--ai-effect)" }}
          >
            <Plus className="h-6 w-6 text-ai" />
          </span>
          <span className="mt-5 text-sm text-foreground">上传产品图片</span>
          <span className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
            支持产品包装 · 成分表 · 商品详情页
          </span>
        </button>
      )}

      <SurfaceCard className="mt-4 p-4">
        <label htmlFor="product-name" className="text-xs text-muted-foreground">
          产品名称
        </label>
        <Input
          id="product-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="例如：理肤泉 B5 修护霜"
          className="mt-2 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </SurfaceCard>

      <input
        ref={fileInput}
        type="file"
        accept="image/*"
        capture={entry === "camera" ? "environment" : undefined}
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setPhoto(URL.createObjectURL(file));
        }}
      />

      <Button
        className="mt-8 h-12 w-full rounded-2xl"
        disabled={!ready}
        onClick={() => onSubmit(name.trim() || "理肤泉 B5 修护霜")}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        开始 AI 分析
      </Button>
    </div>
  );
}
