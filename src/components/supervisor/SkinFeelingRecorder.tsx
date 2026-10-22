import { useState } from "react";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import type { SkinFeelingLog } from "@/types/supervisor";

const fields = [
  { key: "dryness", label: "干燥程度" },
  { key: "oiliness", label: "油脂程度" },
  { key: "redness", label: "泛红程度" },
  { key: "irritation", label: "刺激 / 刺痛感" },
] as const;

const scaleText = ["很轻微", "轻微", "一般", "明显", "强烈"];

interface Props {
  onSave: (log: SkinFeelingLog) => void;
  saving?: boolean;
}

export function SkinFeelingRecorder({ onSave, saving }: Props) {
  const [values, setValues] = useState({
    dryness: 3,
    oiliness: 2,
    redness: 4,
    irritation: 1,
  });
  const [note, setNote] = useState("");

  return (
    <SurfaceCard className="p-6">
      <h2 className="text-lg font-medium tracking-tight text-foreground">今日肤感记录</h2>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        记录真实变化，让 AI 更懂你的肌肤。
      </p>

      <div className="mt-6 space-y-6">
        {fields.map(({ key, label }) => (
          <div key={key}>
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-foreground">{label}</span>
              <span className="text-xs text-muted-foreground">
                {scaleText[values[key] - 1]} · {values[key]}/5
              </span>
            </div>
            <Slider
              className="mt-3"
              min={1}
              max={5}
              step={1}
              value={[values[key]]}
              onValueChange={([v]) => setValues((s) => ({ ...s, [key]: v ?? 1 }))}
              aria-label={label}
            />
          </div>
        ))}

        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="今天肌肤有什么变化？例如：晚上使用后脸颊有轻微泛红。"
          className="resize-none rounded-2xl bg-background text-sm"
        />

        <Button
          className="w-full rounded-2xl"
          disabled={saving}
          onClick={() =>
            onSave({
              date: new Date().toISOString().slice(0, 10),
              ...values,
              ...(note.trim() ? { note: note.trim() } : {}),
            })
          }
        >
          {saving ? "保存中…" : "保存今日记录"}
        </Button>
      </div>
    </SurfaceCard>
  );
}
