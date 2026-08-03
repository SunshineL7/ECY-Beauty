/** 「我的」页面领域模型 */

export interface ProfileIdentity {
  nickname: string;
  aiIdentity: string;
  skinLabel: string;
  joinedAt: string;
  avatarLetter: string;
}

export interface SkinDataTrend {
  id: string;
  label: string;
  /** 变化文案，如「↓20%」「逐渐改善」 */
  change: string;
  direction: "up" | "down" | "steady";
  /** 正向 = 好转 */
  positive: boolean;
}

export interface SkinDataOverview {
  stabilityScore: number;
  sensitivityScore: number;
  recordDays: number;
  aiLearnCount: number;
  trendRangeLabel: string;
  trends: SkinDataTrend[];
}

export interface AssetEntry {
  id: string;
  title: string;
  icon: "products" | "reports" | "logs";
  to: string;
  metrics: { label: string; value: string }[];
}

export interface SettingItem {
  id: string;
  title: string;
  description: string;
  icon: "account" | "privacy" | "data" | "bell" | "info";
}
