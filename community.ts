/** 社区（AI 增强型护肤社区）领域模型 */

export type RankingBoardId = "sensitive" | "hydration" | "oil-control" | "repair";

export interface RankingItem {
  id: string;
  rank: number;
  brand: string;
  name: string;
  score: number; // AI 综合评分 0-100
  satisfaction: number; // 用户满意度 %
  reviewCount: number;
  aiTag: string; // AI 推荐标签，如「敏感肌友好」
  highlight: string; // 一句话亮点
}

export interface RankingBoard {
  id: RankingBoardId;
  title: string;
  subtitle: string;
  items: RankingItem[];
}

export interface FeedbackSentiment {
  positive: number; // 百分比
  neutral: number;
  negative: number;
}

/** 各肤质满意度 */
export interface SkinFeedbackBreakdown {
  label: string;
  satisfaction: number; // %
  count: number;
}

/** AI 总结结论标签 */
export interface AiSummaryTag {
  label: string;
  tone: "positive" | "caution";
}

/** 真实用户反馈聚合 + AI 总结 */
export interface FeedbackDigest {
  id: string;
  brand: string;
  productName: string;
  reviewCount: number;
  rating: number; // 0-5
  sentiment: FeedbackSentiment;
  aiSummary: string; // AI 总结正文
  aiTags: AiSummaryTag[];
  skinFeedback: SkinFeedbackBreakdown[];
  keywords: { label: string; count: number }[];
  voices: { id: string; skinTypeLabel: string; days: string; content: string }[];
}

export type RiskLevel = "high" | "medium";

/** AI 避雷榜条目 */
export interface RiskAlertItem {
  id: string;
  brand: string;
  name: string;
  level: RiskLevel;
  riskScore: number; // 0-100，越高越需注意
  warning: string; // 中性风险提醒
  reasons: string[];
  advice: string; // 使用建议
  reportedBy: number; // 反馈人数
}

export interface CommunitySearchSuggestion {
  id: string;
  label: string;
  type: "product" | "ingredient" | "question";
}

/** 用户护肤笔记（UGC） */
export interface UserNote {
  id: string;
  user: string;
  skinType: string;
  product: string;
  duration: string;
  content: string;
  likes: number;
  saves: number;
}
