import { ScoreRing } from "@/components/ui-kit/ScoreRing";

interface ScoreCircleProps {
  value: number; // 0-100
  label?: string;
  size?: number;
}

/** 通用环形评分（基于 ScoreRing 的语义封装） */
export function ScoreCircle({ value, label, size = 120 }: ScoreCircleProps) {
  return label ? (
    <ScoreRing value={value} label={label} size={size} />
  ) : (
    <ScoreRing value={value} size={size} />
  );

}
