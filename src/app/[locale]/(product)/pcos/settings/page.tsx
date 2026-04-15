import { getTranslations } from "next-intl/server";

import { EmptyState } from "@/components/pcos/ui/empty-state";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { TableShell } from "@/components/pcos/ui/table";

export default async function PCOSSettingsPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader title={t("settings.title")} description={t("settings.subtitle")} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TableShell title={t("settings.sections.workspace.title")} subtitle={t("settings.sections.workspace.subtitle")}>
          <div className="space-y-3 px-5 py-4">
            <EmptyState
              title={t("settings.sections.workspace.cards.roles.title")}
              description={t("settings.sections.workspace.cards.roles.description")}
              actions={<AppButton size="sm">Manage roles</AppButton>}
            />
            <EmptyState
              title={t("settings.sections.workspace.cards.markets.title")}
              description={t("settings.sections.workspace.cards.markets.description")}
              actions={
                <AppButton size="sm" variant="outline">
                  Configure markets
                </AppButton>
              }
            />
          </div>
        </TableShell>

        <TableShell title={t("settings.sections.rules.title")} subtitle={t("settings.sections.rules.subtitle")}>
          <div className="space-y-3 px-5 py-4">
            <EmptyState
              title={t("settings.sections.rules.cards.catalogs.title")}
              description={t("settings.sections.rules.cards.catalogs.description")}
              actions={
                <>
                  <AppButton size="sm">Open rule catalog</AppButton>
                  <AppButton size="sm" variant="outline">
                    Manage overlays
                  </AppButton>
                </>
              }
            />
            <EmptyState
              title={t("settings.sections.rules.cards.effectiveDates.title")}
              description={t("settings.sections.rules.cards.effectiveDates.description")}
              actions={<AppButton size="sm" variant="outline">Set effective date</AppButton>}
            />
          </div>
        </TableShell>
      </div>
    </div>
  );
}

