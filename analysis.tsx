import { useCallback, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { AnalysisHeader } from "@/components/analysis/AnalysisHeader";
import { ScanHome } from "@/components/analysis/ScanHome";
import { UploadCard } from "@/components/analysis/UploadCard";
import { AnalysisProgress } from "@/components/analysis/AnalysisProgress";
import { ResultView } from "@/components/analysis/ResultView";
import { api } from "@/services/api";
import type { AnalysisResultDetail, AnalysisStage, ScanEntryId } from "@/types/analysis";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "AI 分析中心 — BeautyAI" },
      { name: "description", content: "上传护肤品，AI 解析成分风险并结合你的肌肤画像给出适配建议。" },
      { property: "og:title", content: "AI 分析中心 — BeautyAI" },
      { property: "og:description", content: "成分安全分析与个人肤质适配评分。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AnalysisPage,
});

function AnalysisPage() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<AnalysisStage>("scan");
  const [entry, setEntry] = useState<ScanEntryId>("camera");
  const [productName, setProductName] = useState("理肤泉 B5 修护霜");
  const [result, setResult] = useState<AnalysisResultDetail | null>(null);

  const handleDone = useCallback(async () => {
    const res = await api.runAnalysis({ source: entry, query: productName });
    setResult(res.data);
    setStage("result");
  }, [entry, productName]);

  return (
    <>
      {stage === "scan" || stage === "upload" ? (
        <AnalysisHeader onHistory={() => toast("历史报告即将上线")} />
      ) : null}

      {stage === "scan" ? (
        <ScanHome
          onSelect={(id) => {
            setEntry(id);
            setStage("upload");
          }}
        />
      ) : null}

      {stage === "upload" ? (
        <UploadCard
          entry={entry}
          onBack={() => setStage("scan")}
          onSubmit={(query) => {
            setProductName(query);
            setStage("analyzing");
          }}
        />
      ) : null}

      {stage === "analyzing" ? (
        <AnalysisProgress productName={productName} onDone={handleDone} />
      ) : null}

      {stage === "result" && result ? (
        <ResultView
          result={result}
          onRestart={() => {
            setResult(null);
            setStage("scan");
          }}
          onSave={() => toast.success("已加入我的产品库")}
          onSupervise={() => navigate({ to: "/coach" })}
        />
      ) : null}
    </>
  );
}
