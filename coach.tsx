import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { AIHeader } from "@/components/supervisor/AIHeader";
import { RoutineCard } from "@/components/supervisor/RoutineCard";
import { AIInsightCard } from "@/components/supervisor/AIInsightCard";
import { SkinFeelingRecorder } from "@/components/supervisor/SkinFeelingRecorder";
import { AISummaryCard } from "@/components/supervisor/AISummaryCard";
import { SkinTrendChart } from "@/components/supervisor/SkinTrendChart";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/services/api";
import {
  useAiSkinSummary,
  useAiSuggestion,
  useSkinRoutine,
  useSkinTrend,
} from "@/hooks/useApi";
import type { SkinFeelingLog, SkinRoutine } from "@/types/supervisor";

export const Route = createFileRoute("/coach")({
  head: () => ({
    meta: [
      { title: "AI 督导 — BeautyAI" },
      {
        name: "description",
        content: "AI 护肤教练：今日护肤计划、AI 动态建议、肤感记录与 7 天肌肤趋势。",
      },
      { property: "og:title", content: "AI 督导 — BeautyAI" },
      { property: "og:description", content: "每日肤感记录与 AI 陪伴式护肤督导。" },
    ],
  }),
  component: SupervisorPage,
});

function SupervisorPage() {
  const { data: routineData } = useSkinRoutine();
  const { data: suggestion } = useAiSuggestion();
  const { data: summary } = useAiSkinSummary();
  const { data: trend } = useSkinTrend();

  const [routine, setRoutine] = useState<SkinRoutine | null>(null);
  const [saving, setSaving] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (routineData) setRoutine(routineData);
  }, [routineData]);

  const toggleTask = (period: "morning" | "night", id: string) => {
    setRoutine((prev) =>
      prev
        ? {
            ...prev,
            [period]: prev[period].map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
          }
        : prev,
    );
  };

  const handleSave = async (log: SkinFeelingLog) => {
    setSaving(true);
    await api.saveSkinFeelingLog(log);
    setSaving(false);
    setLogged(true);
    toast.success("今日肤感已记录，AI 正在更新方案");
  };

  return (
    <>
      <AIHeader />

      <div className="space-y-8">
        {routine ? (
          <RoutineCard routine={routine} onToggle={toggleTask} />
        ) : (
          <Skeleton className="h-96 w-full rounded-3xl" />
        )}

        {suggestion ? (
          <AIInsightCard suggestion={suggestion} />
        ) : (
          <Skeleton className="h-56 w-full rounded-3xl" />
        )}

        <SkinFeelingRecorder onSave={handleSave} saving={saving} />

        {logged && summary ? <AISummaryCard summary={summary} /> : null}

        {trend ? (
          <SkinTrendChart points={trend} />
        ) : (
          <Skeleton className="h-64 w-full rounded-3xl" />
        )}
      </div>
    </>
  );
}
