import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { CommunityHeader } from "@/components/community/CommunityHeader";
import { SearchBar } from "@/components/community/SearchBar";
import { RankingCard } from "@/components/community/RankingCard";
import { ProductFeedbackCard } from "@/components/community/ProductFeedbackCard";
import { RiskWarningCard } from "@/components/community/RiskWarningCard";
import { UserPostCard } from "@/components/community/UserPostCard";
import { CreatePostButton } from "@/components/community/CreatePostButton";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCommunitySearchSuggestions,
  useFeedbackDigests,
  useRankingBoards,
  useRiskAlerts,
  useUserNotes,
} from "@/hooks/useApi";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "肌肤社区 — BeautyAI" },
      {
        name: "description",
        content: "真实用户反馈结合 AI 总结：热门榜单、分肤质满意度与 AI 避雷榜，帮你判断产品是否适合。",
      },
      { property: "og:title", content: "肌肤社区 — BeautyAI" },
      {
        property: "og:description",
        content: "真实反馈 + AI 总结，帮你判断产品是否适合你的肌肤。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const searchInput = useRef<HTMLInputElement>(null);
  const { data: suggestions, loading: loadingSuggestions } = useCommunitySearchSuggestions();
  const { data: boards, loading: loadingBoards } = useRankingBoards();
  const { data: digests, loading: loadingDigests } = useFeedbackDigests();
  const { data: alerts, loading: loadingAlerts } = useRiskAlerts();
  const { data: notes, loading: loadingNotes } = useUserNotes();

  return (
    <>
      <CommunityHeader
        onSearch={() => {
          searchInput.current?.focus();
          searchInput.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      />

      {loadingSuggestions || !suggestions ? (
        <Skeleton className="mb-8 h-24 w-full rounded-2xl" />
      ) : (
        <SearchBar ref={searchInput} suggestions={suggestions} />
      )}

      {loadingBoards || !boards ? (
        <Skeleton className="mb-10 h-64 w-full rounded-2xl" />
      ) : (
        <RankingCard boards={boards} />
      )}

      {loadingDigests || !digests?.[0] ? (
        <Skeleton className="mb-10 h-72 w-full rounded-2xl" />
      ) : (
        <ProductFeedbackCard digest={digests[0]} />
      )}

      {loadingAlerts || !alerts ? (
        <Skeleton className="mb-10 h-64 w-full rounded-2xl" />
      ) : (
        <RiskWarningCard items={alerts} />
      )}

      {loadingNotes || !notes ? (
        <Skeleton className="h-48 w-full rounded-2xl" />
      ) : (
        <UserPostCard notes={notes} />
      )}

      <CreatePostButton onClick={() => toast("发布护肤记录即将上线")} />
    </>
  );
}
