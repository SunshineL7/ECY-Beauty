/** AI 分析中心领域模型 */

export type AnalysisStage = "scan" | "upload" | "analyzing" | "result";

export type ScanEntryId = "camera" | "ingredients" | "search";

export interface AnalysisStep {
  id: string;
  label: string;
  /** 该步骤的耗时权重（毫秒） */
  duration: number;
}

export interface HighlightIngredient {
  name: string;
  aliasEn: string;
  benefit: string;
}

export interface RiskIngredient {
  name: string;
  level: "caution" | "avoid";
  reason: string;
}

/** 结构化成分条目 */
export interface AnalyzedIngredient {
  name: string;
  aliasEn?: string;
  type: "benefit" | "watch";
  note: string;
}

/** AI 为什么推荐：单条匹配原因 */
export interface MatchReason {
  ingredient: string;
  effect: string;
}

/** 用户肌肤画像摘要 */
export interface SkinSnapshot {
  type: string;
  sensitivity: number;
  concerns: string[];
}

/** AI 使用建议 */
export interface UsageRecommendation {
  time: string;
  frequency: string;
  pairing: string;
}

export interface AnalysisResultDetail {
  id: string;
  brand: string;
  brandEn: string;
  productName: string;
  category: string;
  analyzedAt: string;
  safetyScore: number; // 0-100
  matchRate: number; // 0-100
  repairScore: number; // 0-100
  skin: SkinSnapshot;
  matchReasons: MatchReason[];
  ingredients: AnalyzedIngredient[];
  highlights: HighlightIngredient[];
  risks: RiskIngredient[];
  aiSuggestions: string[];
  recommendation: UsageRecommendation;
  summary: string;
}

/** 扫描首页的最近一次分析摘要 */
export interface RecentAnalysisSummary {
  id: string;
  productName: string;
  brand: string;
  safetyScore: number;
  matchRate: number;
  analyzedAt: string;
}
