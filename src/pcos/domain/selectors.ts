import type { EvidenceDocument, PackagingUnit, SKU } from "./model";

export function getPackagingUnitTotalWeightGrams(packagingUnit: PackagingUnit) {
  return packagingUnit.components.reduce((sum, c) => sum + c.weightGrams, 0);
}

export function getSkuDisplayName(sku: SKU) {
  return `${sku.skuCode} · ${sku.name}`;
}

export function getEvidenceStatusSortKey(status: EvidenceDocument["status"]) {
  switch (status) {
    case "missing":
      return 0;
    case "requested":
      return 1;
    case "received":
      return 2;
    case "in_review":
      return 3;
    case "rejected":
      return 4;
    case "approved":
      return 5;
    case "expired":
      return 6;
    default:
      return 99;
  }
}

