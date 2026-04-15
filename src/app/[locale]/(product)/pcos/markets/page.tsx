import { getTranslations } from "next-intl/server";

import { MarketsTable } from "@/components/pcos/pages/markets-table";
import { PageHeader } from "@/components/pcos/ui/page-header";
import { AppButton } from "@/components/ui/app-button";
import { seedMarkets } from "@/pcos/domain";

export default async function MarketsPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("markets.title")}
        description={t("markets.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Overlay library
            </AppButton>
            <AppButton size="sm">Add market</AppButton>
          </div>
        }
      />

      <MarketsTable title={t("markets.table.title")} subtitle={t("markets.table.subtitle")} markets={seedMarkets} />
    </div>
  );
}

