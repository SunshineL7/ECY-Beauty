import { useEffect, useState } from "react";
import { api } from "@/services/api";
import type { ApiResponse } from "@/types";

/** 通用数据请求 hook，统一处理 loading / error */
export function useApi<T>(fetcher: () => Promise<ApiResponse<T>>, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetcher()
      .then((res) => {
        if (!active) return;
        setData(res.data);
        setError(res.error);
      })
      .catch((e: unknown) => active && setError(e instanceof Error ? e.message : "未知错误"))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

export const useSkinProfile = () => useApi(() => api.getSkinProfile());
export const useDailyLogs = () => useApi(() => api.getDailyLogs());
export const useTodayAdvice = () => useApi(() => api.getTodayAdvice());
export const useCommunityPosts = () => useApi(() => api.getCommunityPosts());
export const useUser = () => useApi(() => api.getUser());
export const useDailySkinReport = () => useApi(() => api.getDailySkinReport());
export const useFeatureEntries = () => useApi(() => api.getFeatureEntries());
export const useRecentReports = () => useApi(() => api.getRecentReports());
export const useNotifications = () => useApi(() => api.getNotifications());
export const useCommunitySearchSuggestions = () =>
  useApi(() => api.getCommunitySearchSuggestions());
export const useRankingBoards = () => useApi(() => api.getRankingBoards());
export const useFeedbackDigests = () => useApi(() => api.getFeedbackDigests());
export const useRiskAlerts = () => useApi(() => api.getRiskAlerts());
export const useUserNotes = () => useApi(() => api.getUserNotes());
export const useSkinRoutine = () => useApi(() => api.getSkinRoutine());
export const useAiSuggestion = () => useApi(() => api.getAiSuggestion());
export const useAiSkinSummary = () => useApi(() => api.getAiSkinSummary());
export const useSkinTrend = () => useApi(() => api.getSkinTrend());
export const useProfileIdentity = () => useApi(() => api.getProfileIdentity());
export const useSkinDataOverview = () => useApi(() => api.getSkinDataOverview());
export const useAssetEntries = () => useApi(() => api.getAssetEntries());
export const useSettingItems = () => useApi(() => api.getSettingItems());
