import { createFileRoute } from "@tanstack/react-router";
import { HomeHeader } from "@/components/home/HomeHeader";
import { DailySkinCard } from "@/components/home/DailySkinCard";
import { FeatureEntries } from "@/components/home/FeatureEntries";
import { RecentReports } from "@/components/home/RecentReports";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useDailySkinReport,
  useFeatureEntries,
  useNotifications,
  useRecentReports,
} from "@/hooks/useApi";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "BeautyAI — AI 美妆安全助手" },
      {
        name: "description",
        content: "BeautyAI 读懂你的肌肤状态，分析成分安全性，并生成每日个性化护肤建议。",
      },
      { property: "og:title", content: "BeautyAI — AI 美妆安全助手" },
      {
        property: "og:description",
        content: "肤质画像、成分安全分析与每日 AI 护肤建议，一处完成。",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { data: report } = useDailySkinReport();
  const { data: entries } = useFeatureEntries();
  const { data: reports } = useRecentReports();
  const { data: notifications } = useNotifications();

  return (
    <>
      <HomeHeader notifications={notifications ?? []} />

      <div className="space-y-8">
        {report ? (
          <DailySkinCard report={report} />
        ) : (
          <Skeleton className="h-80 w-full rounded-[1.75rem]" />
        )}

        {entries ? (
          <FeatureEntries entries={entries} />
        ) : (
          <Skeleton className="h-48 w-full rounded-2xl" />
        )}

        {reports ? (
          <RecentReports reports={reports} />
        ) : (
          <Skeleton className="h-32 w-full rounded-2xl" />
        )}
      </div>
    </>
  );
}
