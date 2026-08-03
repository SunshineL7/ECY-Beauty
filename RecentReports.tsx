import { Link } from "@tanstack/react-router";
import { BottleIllustration } from "@/components/home/BottleIllustration";
import type { AnalysisReport } from "@/types";

function RecentReportCard({ report }: { report: AnalysisReport }) {
  return (
    <article className="flex items-center gap-4 rounded-[1.4rem] border border-border/60 bg-card px-4 py-4 shadow-[0_10px_30px_-26px_var(--ai-effect)]">
      <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent/50">
        <BottleIllustration className="h-9 w-auto opacity-80" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm text-foreground">{report.productName}</h3>
        <p className="mt-1 truncate text-[0.7rem] text-muted-foreground">{report.analyzedAt}</p>
      </div>

      <dl className="flex shrink-0 items-start gap-5 text-right">
        <div>
          <dt className="text-[0.65rem] text-muted-foreground">安全评分</dt>
          <dd className="mt-1 text-lg font-medium leading-none text-foreground">
            {report.safetyScore}
          </dd>
        </div>
        <div>
          <dt className="text-[0.65rem] text-muted-foreground">与你匹配</dt>
          <dd className="mt-1 text-lg font-medium leading-none text-foreground">
            {report.matchRate}%
          </dd>
        </div>
      </dl>
    </article>
  );
}

export function RecentReports({ reports }: { reports: AnalysisReport[] }) {
  if (reports.length === 0) return null;

  return (
    <section>
      <div className="mb-3.5 flex items-baseline justify-between">
        <h2 className="text-sm font-medium tracking-wide text-foreground">最近分析报告</h2>
        <Link to="/analysis" className="text-[0.7rem] text-muted-foreground hover:text-foreground">
          查看全部
        </Link>
      </div>
      <div className="space-y-2.5">
        {reports.map((report) => (
          <RecentReportCard key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
}
