/** 全局领域模型定义（后续对接 Lovable Cloud 数据库） */

export type SkinType = "dry" | "oily" | "combination" | "sensitive" | "normal";

export interface SkinProfile {
  id: string;
  userId: string;
  skinType: SkinType;
  concerns: string[];
  allergens: string[];
  barrierScore: number; // 0-100
  hydrationScore: number; // 0-100
  updatedAt: string;
}

/** 首页「今日肌肤档案」数据 */
export interface DailySkinReport {
  id: string;
  date: string;
  stabilityScore: number; // 0-100 肌肤稳定指数
  skinTypeLabel: string; // 肤质文案，如「混合偏油」
  sensitivityScore: number; // 0-100 敏感指数
  issues: string[]; // 肌肤问题
  aiAdvice: string; // AI 一句话建议
}

export interface DailyLog {
  id: string;
  date: string;
  moodScore: number; // 1-5
  hydration: number; // 0-100
  oiliness: number; // 0-100
  irritation: number; // 0-100
  note?: string;
}

export type IngredientRisk = "safe" | "caution" | "avoid";

export interface Ingredient {
  id: string;
  name: string;
  aliasEn: string;
  risk: IngredientRisk;
  function: string;
  description: string;
}

export interface Product {
  id: string;
  brand: string;
  name: string;
  category: string;
  imageUrl?: string;
  ingredients: Ingredient[];
  safetyScore: number; // 0-100
}

/** 最近一次成分分析报告 */
export interface AnalysisReport {
  id: string;
  productName: string;
  safetyScore: number; // 0-100
  matchRate: number; // 0-100 适配度
  analyzedAt: string; // 展示用时间文案
  brand?: string; // 品牌，用于缩略图占位文案
}

export interface AiAdvice {
  id: string;
  date: string;
  title: string;
  summary: string;
  steps: string[];
  confidence: number; // 0-1
}

/** 首页「我的护肤」功能入口 */
export interface FeatureEntry {
  id: string;
  title: string;
  description: string;
  icon: "profile" | "products" | "logs";
  /** 卡片上的补充要点（可选） */
  highlights?: string[];
  to: string;
}

export interface AppNotification {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  read: boolean;
}

export interface CommunityPost {
  id: string;
  author: string;
  avatarColorToken: "primary" | "accent" | "ai";
  content: string;
  tags: string[];
  likes: number;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  nickname: string;
  joinedAt: string;
  streakDays: number;
  skinProfileId: string;
}

/** 统一 API 响应包装 */
export interface ApiResponse<T> {
  data: T;
  error: string | null;
}
