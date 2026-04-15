import { getTranslations } from "next-intl/server";

import { PageHeader } from "@/components/pcos/ui/page-header";
import { ProductsTable } from "@/components/pcos/pages/products-table";
import { AppButton } from "@/components/ui/app-button";
import { seedSkus } from "@/pcos/domain";

export default async function ProductsAndSkusPage() {
  const t = await getTranslations("pcos");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("products.title")}
        description={t("products.subtitle")}
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <AppButton size="sm" variant="outline">
              Import
            </AppButton>
            <AppButton size="sm">New SKU</AppButton>
          </div>
        }
      />

      <ProductsTable
        title={t("products.table.title")}
        subtitle={t("products.table.subtitle")}
        skus={seedSkus}
      />
    </div>
  );
}

