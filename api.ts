/**
 * API 层：当前返回 Mock 数据，后续替换为 Lovable Cloud（数据库）调用。
 * 所有页面/组件只依赖此层，不直接引用 mock 文件。
 */
import { mockAnalysisResult, mockAnalysisSteps } from "@/mock/analysis";
import {
  mockAdvice,
  mockDailyLogs,
  mockDailySkinReport,
  mockFeatureEntries,
  mockNotifications,
  mockPosts,
  mockProducts,
  mockRecentReports,
  mockSkinProfile,
  mockUser,
} from "@/mock";
import {
  mockFeedbackDigests,
  mockRankingBoards,
  mockRiskAlerts,
  mockSearchSuggestions,
  mockUserNotes,
} from "@/mock/community";
import {
  mockAssetEntries,
  mockProfileIdentity,
  mockSettingItems,
  mockSkinDataOverview,
} from "@/mock/profile";
import type {
  AssetEntry,
  ProfileIdentity,
  SettingItem,
  SkinDataOverview,
} from "@/types/profile";
import {
  mockAiSkinSummary,
  mockAiSuggestion,
  mockSkinRoutine,
  mockTrendPoints,
} from "@/mock/supervisor";
import type {
  AiSkinSummary,
  AiSuggestion,
  SkinFeelingLog,
  SkinRoutine,
  TrendPoint,
} from "@/types/supervisor";
import type { AnalysisResultDetail, AnalysisStep } from "@/types/analysis";
import type {
  CommunitySearchSuggestion,
  FeedbackDigest,
  RankingBoard,
  RiskAlertItem,
  UserNote,
} from "@/types/community";
import type {
  AiAdvice,
  AnalysisReport,
  ApiResponse,
  AppNotification,
  CommunityPost,
  DailyLog,
  DailySkinReport,
  FeatureEntry,
  Product,
  SkinProfile,
  UserProfile,
} from "@/types";

const USE_MOCK = true;
const LATENCY = 250;

function ok<T>(data: T): Promise<ApiResponse<T>> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data, error: null }), LATENCY),
  );
}

function notImplemented(name: string): never {
  throw new Error(`[api] ${name} 尚未接入后端，请先启用 Cloud 数据库`);
}

export const api = {
  getUser(): Promise<ApiResponse<UserProfile>> {
    if (USE_MOCK) return ok(mockUser);
    return notImplemented("getUser");
  },
  getSkinProfile(): Promise<ApiResponse<SkinProfile>> {
    if (USE_MOCK) return ok(mockSkinProfile);
    return notImplemented("getSkinProfile");
  },
  /** 首页：今日肌肤档案 */
  getDailySkinReport(): Promise<ApiResponse<DailySkinReport>> {
    if (USE_MOCK) return ok(mockDailySkinReport);
    return notImplemented("getDailySkinReport");
  },
  /** 首页：我的护肤功能入口 */
  getFeatureEntries(): Promise<ApiResponse<FeatureEntry[]>> {
    if (USE_MOCK) return ok(mockFeatureEntries);
    return notImplemented("getFeatureEntries");
  },
  /** 首页：最近分析报告 */
  getRecentReports(): Promise<ApiResponse<AnalysisReport[]>> {
    if (USE_MOCK) return ok(mockRecentReports);
    return notImplemented("getRecentReports");
  },
  getNotifications(): Promise<ApiResponse<AppNotification[]>> {
    if (USE_MOCK) return ok(mockNotifications);
    return notImplemented("getNotifications");
  },
  getDailyLogs(): Promise<ApiResponse<DailyLog[]>> {
    if (USE_MOCK) return ok(mockDailyLogs);
    return notImplemented("getDailyLogs");
  },
  createDailyLog(log: Omit<DailyLog, "id">): Promise<ApiResponse<DailyLog>> {
    if (USE_MOCK) return ok({ ...log, id: `log_${Date.now()}` });
    return notImplemented("createDailyLog");
  },
  getTodayAdvice(): Promise<ApiResponse<AiAdvice>> {
    if (USE_MOCK) return ok(mockAdvice);
    return notImplemented("getTodayAdvice");
  },
  analyzeProduct(_query: string): Promise<ApiResponse<Product>> {
    if (USE_MOCK) return ok(mockProducts[0]!);
    return notImplemented("analyzeProduct");
  },
  /** AI 分析中心：分析步骤定义 */
  getAnalysisSteps(): Promise<ApiResponse<AnalysisStep[]>> {
    if (USE_MOCK) return ok(mockAnalysisSteps);
    return notImplemented("getAnalysisSteps");
  },
  /** AI 分析中心：生成分析结果 */
  runAnalysis(_input: { source: string; query?: string }): Promise<ApiResponse<AnalysisResultDetail>> {
    if (USE_MOCK) return ok(mockAnalysisResult);
    return notImplemented("runAnalysis");
  },
  getCommunityPosts(): Promise<ApiResponse<CommunityPost[]>> {
    if (USE_MOCK) return ok(mockPosts);
    return notImplemented("getCommunityPosts");
  },
  /** 社区：搜索建议 */
  getCommunitySearchSuggestions(): Promise<ApiResponse<CommunitySearchSuggestion[]>> {
    if (USE_MOCK) return ok(mockSearchSuggestions);
    return notImplemented("getCommunitySearchSuggestions");
  },
  /** 社区：热门榜单 */
  getRankingBoards(): Promise<ApiResponse<RankingBoard[]>> {
    if (USE_MOCK) return ok(mockRankingBoards);
    return notImplemented("getRankingBoards");
  },
  /** 社区：真实用户反馈 + AI 总结 */
  getFeedbackDigests(): Promise<ApiResponse<FeedbackDigest[]>> {
    if (USE_MOCK) return ok(mockFeedbackDigests);
    return notImplemented("getFeedbackDigests");
  },
  /** 社区：AI 避雷榜 */
  getRiskAlerts(): Promise<ApiResponse<RiskAlertItem[]>> {
    if (USE_MOCK) return ok(mockRiskAlerts);
    return notImplemented("getRiskAlerts");
  },
  /** 社区：用户护肤笔记 */
  getUserNotes(): Promise<ApiResponse<UserNote[]>> {
    if (USE_MOCK) return ok(mockUserNotes);
    return notImplemented("getUserNotes");
  },
  /** AI 督导：今日护肤计划 */
  getSkinRoutine(): Promise<ApiResponse<SkinRoutine>> {
    if (USE_MOCK) return ok(mockSkinRoutine);
    return notImplemented("getSkinRoutine");
  },
  /** AI 督导：AI 动态建议 */
  getAiSuggestion(): Promise<ApiResponse<AiSuggestion>> {
    if (USE_MOCK) return ok(mockAiSuggestion);
    return notImplemented("getAiSuggestion");
  },
  /** AI 督导：AI 肤感总结 */
  getAiSkinSummary(): Promise<ApiResponse<AiSkinSummary>> {
    if (USE_MOCK) return ok(mockAiSkinSummary);
    return notImplemented("getAiSkinSummary");
  },
  /** AI 督导：最近 7 天趋势 */
  getSkinTrend(): Promise<ApiResponse<TrendPoint[]>> {
    if (USE_MOCK) return ok(mockTrendPoints);
    return notImplemented("getSkinTrend");
  },
  /** AI 督导：保存肤感记录 */
  saveSkinFeelingLog(log: SkinFeelingLog): Promise<ApiResponse<SkinFeelingLog>> {
    if (USE_MOCK) return ok({ ...log, id: `sfl_${Date.now()}` });
    return notImplemented("saveSkinFeelingLog");
  },
  /** 我的：个人信息 */
  getProfileIdentity(): Promise<ApiResponse<ProfileIdentity>> {
    if (USE_MOCK) return ok(mockProfileIdentity);
    return notImplemented("getProfileIdentity");
  },
  /** 我的：肌肤数据总览 */
  getSkinDataOverview(): Promise<ApiResponse<SkinDataOverview>> {
    if (USE_MOCK) return ok(mockSkinDataOverview);
    return notImplemented("getSkinDataOverview");
  },
  /** 我的：资产入口 */
  getAssetEntries(): Promise<ApiResponse<AssetEntry[]>> {
    if (USE_MOCK) return ok(mockAssetEntries);
    return notImplemented("getAssetEntries");
  },
  /** 我的：设置项 */
  getSettingItems(): Promise<ApiResponse<SettingItem[]>> {
    if (USE_MOCK) return ok(mockSettingItems);
    return notImplemented("getSettingItems");
  },
};

export type Api = typeof api;
