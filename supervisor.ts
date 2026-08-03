/** AI 督导领域模型（后续对接 Lovable Cloud 数据表） */

export type RoutinePeriod = "morning" | "night";

export interface RoutineTask {
  id: string;
  /** 步骤名，如「洁面」 */
  label: string;
  /** 推荐产品名 */
  product: string;
  /** 图标标识，由前端映射 lucide 图标 */
  icon: "cleanse" | "serum" | "sunscreen" | "remove" | "repair" | "cream" | "log";
  done: boolean;
}

export interface SkinRoutine {
  id: string;
  date: string;
  morning: RoutineTask[];
  night: RoutineTask[];
}

export interface AiSuggestion {
  id: string;
  problem: string;
  recommendation: string;
  reason: string;
  detectedAt: string;
}

/** 肤感记录（skin_logs） */
export interface SkinFeelingLog {
  id?: string;
  date: string;
  dryness: number; // 1-5
  oiliness: number; // 1-5
  redness: number; // 1-5
  irritation: number; // 1-5
  note?: string;
}

export interface TrendMetric {
  label: string;
  /** 变化百分比，正数为上升 */
  delta: number;
  /** 上升是否为正向 */
  positive: boolean;
}

export interface AiSkinSummary {
  id: string;
  rangeLabel: string;
  summary: string;
  metrics: TrendMetric[];
}

export interface TrendPoint {
  date: string;
  stability: number; // 0-100
  sensitivity: number; // 0-100
}
