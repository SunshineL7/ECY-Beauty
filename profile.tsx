import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { SurfaceCard } from "@/components/ui-kit/SurfaceCard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { SkinDataCard } from "@/components/profile/SkinDataCard";
import { AssetList } from "@/components/profile/AssetCard";
import { ThemeSelector } from "@/components/profile/ThemeSelector";
import { SettingsList } from "@/components/profile/SettingsList";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useAssetEntries,
  useProfileIdentity,
  useSettingItems,
  useSkinDataOverview,
} from "@/hooks/useApi";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "我的 AI 护肤空间 — BeautyAI" },
      {
        name: "description",
        content:
          "查看肌肤长期数据、产品资产与分析记录，并在六套 AI 护肤空间主题间实时切换。",
      },
      { property: "og:title", content: "我的 AI 护肤空间 — BeautyAI" },
      {
        property: "og:description",
        content: "肌肤数据沉淀、护肤资产管理与专属主题设置。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProfilePage,
});

function SectionCard({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <SurfaceCard className="mb-5">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-foreground">{title}</h2>
        {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      </div>
      {children}
    </SurfaceCard>
  );
}

function ProfilePage() {
  const { data: identity, loading: identityLoading } = useProfileIdentity();
  const { data: skinData, loading: skinLoading } = useSkinDataOverview();
  const { data: assets, loading: assetsLoading } = useAssetEntries();
  const { data: settings } = useSettingItems();

  return (
    <>
      <PageHeader
        eyebrow="My Space"
        title="我的"
        description="肌肤资产、长期数据与专属 AI 护肤空间。"
      />

      <ProfileHeader identity={identity} loading={identityLoading} />
      <SkinDataCard data={skinData} loading={skinLoading} />
      <AssetList entries={assets} loading={assetsLoading} />

      <SectionCard title="我的 AI 护肤空间" hint="选择你的专属视觉主题，切换即时生效并自动保存。">
        <ThemeSelector />
      </SectionCard>

      <SectionCard title="设置">
        {settings ? <SettingsList items={settings} /> : <Skeleton className="h-40 w-full" />}
      </SectionCard>
    </>
  );
}
