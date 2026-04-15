import type { RuleCatalog, RuleDefinition, RuleFinding } from "./types";

function stubRule(params: {
  id: string;
  category: RuleDefinition["category"];
  title: string;
  description: string;
  version?: string;
  applies?: RuleDefinition["applies"];
  evaluate?: RuleDefinition["evaluate"];
}): RuleDefinition {
  return {
    id: params.id,
    category: params.category,
    title: params.title,
    description: params.description,
    version: params.version ?? "0.1.0",
    applies:
      params.applies ??
      (() => {
        return true;
      }),
    evaluate:
      params.evaluate ??
      ((): RuleFinding[] => {
        return [];
      }),
  };
}

export const ppwrFoundationCatalog: RuleCatalog = {
  id: "ppwr_foundation",
  title: "PPWR foundation rule catalog",
  rules: [
    stubRule({
      id: "ppwr.applicability.packaging_present",
      category: "applicability",
      title: "Packaging data required for EU market placement",
      description:
        "Foundation applicability rule: a SKU placed on EU markets should have packaging BOM defined.",
    }),
    stubRule({
      id: "ppwr.obligation.operator_mapping",
      category: "obligation",
      title: "Economic operator responsibility mapping required",
      description:
        "Foundation obligation rule: map manufacturer/importer/private label roles by market and supply chain scenario.",
    }),
    stubRule({
      id: "ppwr.evidence.supplier_declaration",
      category: "evidence",
      title: "Supplier declarations should be collected for packaging materials/components",
      description:
        "Foundation evidence rule: ensure declarations and specifications are available for packaging components/materials.",
    }),
    stubRule({
      id: "ppwr.threshold.weight_reduction_tracking",
      category: "threshold",
      title: "Weight reduction deltas should be tracked for scenarios",
      description:
        "Foundation threshold rule: scenario comparisons should quantify weight changes and flag notable deltas.",
    }),
    stubRule({
      id: "ppwr.country_overlay.overlay_slot",
      category: "country_overlay",
      title: "Country overlays reserved for national EPR nuances",
      description:
        "Overlay slot: this is where country-specific overlays and administrative obligations will attach.",
    }),
    stubRule({
      id: "ppwr.effective_date.future_effective_date_slot",
      category: "effective_date",
      title: "Effective date evaluation slot",
      description:
        "Effective-date slot: rules can vary by effective date and transitional arrangements; engine supports this structurally.",
    }),
  ],
};

