import { getTranslations } from "next-intl/server";

import { AppButton } from "@/components/ui/app-button";
import { Link } from "@/i18n/navigation";
import {
  seedEvidenceDocuments,
  seedRuleResults,
  seedScenarios,
  seedSkus,
  seedTechnicalFiles,
} from "@/pcos/domain";
import { computeEvidenceOverview } from "@/pcos/workflows/evidence/service";
import { KpiCard } from "@/components/pcos/ui/kpi-card";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { StatusChip } from "@/components/pcos/ui/status-chip";
import { DataTable, TableShell } from "@/components/pcos/ui/table";

export default async function PCOSOverviewPage() {
  const t = await getTranslations("pcos");

  const evidenceCounts = computeEvidenceOverview(seedEvidenceDocuments);

  const openRiskCount = seedRuleResults.filter((r) => r.status === "open").length;
  const blockedTfCount = seedTechnicalFiles.filter((tf) => tf.status === "blocked").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("overview.title")}
        description={t("overview.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton asChild size="sm" variant="outline">
              <Link href="/pcos/evidence-pack">{t("overview.actions.openEvidence")}</Link>
            </AppButton>
            <AppButton asChild size="sm">
              <Link href="/pcos/scenarios">{t("overview.actions.newScenario")}</Link>
            </AppButton>
          </div>
        }
      />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title={t("overview.kpis.skus")} value={`${seedSkus.length}`} hint={t("overview.kpis.skusHint")} />
        <KpiCard
          title={t("overview.kpis.evidence")}
          value={`${evidenceCounts.ready}/${seedEvidenceDocuments.length}`}
          hint={t("overview.kpis.evidenceHint")}
        />
        <KpiCard
          title={t("overview.kpis.risks")}
          value={`${openRiskCount}`}
          hint={t("overview.kpis.risksHint")}
        />
        <KpiCard
          title={t("overview.kpis.technicalFiles")}
          value={`${seedTechnicalFiles.length}`}
          hint={
            blockedTfCount > 0
              ? t("overview.kpis.technicalFilesBlocked", { count: blockedTfCount })
              : t("overview.kpis.technicalFilesHint")
          }
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <TableShell
          title={t("overview.tables.risksTitle")}
          subtitle={t("overview.tables.risksSubtitle")}
          toolbar={
            <AppButton asChild size="sm" variant="outline">
              <Link href="/pcos/compliance-risks">{t("overview.tables.viewAll")}</Link>
            </AppButton>
          }
        >
          <DataTable
            columns={[
              { key: "severity", header: t("common.severity"), className: "w-[140px]" },
              { key: "title", header: t("common.title") },
              { key: "market", header: t("common.market"), className: "w-[100px]" },
              { key: "status", header: t("common.status"), className: "w-[120px]" },
            ]}
            rows={seedRuleResults.slice(0, 5).map((r) => ({
              severity: (
                <StatusChip
                  label={r.severity.toUpperCase()}
                  tone={r.severity === "critical" ? "danger" : r.severity === "warning" ? "warning" : "info"}
                />
              ),
              title: (
                <div className="min-w-0">
                  <div className="truncate font-medium text-foreground">{r.title}</div>
                  <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{r.summary}</div>
                </div>
              ),
              market: r.marketCode ?? "—",
              status: <StatusChip label={r.status} tone={r.status === "open" ? "warning" : "neutral"} />,
            }))}
            rowKey={(row, idx) => `risk_${idx}`}
          />
        </TableShell>

        <TableShell
          title={t("overview.tables.scenariosTitle")}
          subtitle={t("overview.tables.scenariosSubtitle")}
          toolbar={
            <AppButton asChild size="sm" variant="outline">
              <Link href="/pcos/scenarios">{t("overview.tables.open")}</Link>
            </AppButton>
          }
        >
          <DataTable
            columns={[
              { key: "name", header: t("common.scenario") },
              { key: "status", header: t("common.status"), className: "w-[140px]" },
              { key: "created", header: t("common.created"), className: "w-[140px]" },
            ]}
            rows={seedScenarios.slice(0, 5).map((s) => ({
              name: (
                <div className="min-w-0">
                  <div className="truncate font-medium text-foreground">{s.name}</div>
                  {s.commercialNotes ? (
                    <div className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                      {s.commercialNotes}
                    </div>
                  ) : null}
                </div>
              ),
              status: (
                <StatusChip
                  label={s.status}
                  tone={s.status === "approved" ? "success" : s.status === "under_review" ? "info" : "neutral"}
                />
              ),
              created: s.createdAt,
            }))}
            rowKey={(row, idx) => `scenario_${idx}`}
          />
        </TableShell>
      </div>
    </div>
  );
}

