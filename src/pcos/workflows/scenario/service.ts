import type { PackagingUnit, Scenario } from "@/pcos/domain";
import { getPackagingUnitTotalWeightGrams } from "@/pcos/domain/selectors";

export interface ScenarioComparison {
  scenarioId: string;
  baselineWeightGrams: number;
  alternativeWeightGrams: number;
  weightDeltaGrams: number;
  weightDeltaPct: number | null;
  complianceDeltaSummary: string;
  documentationDeltaSummary: string;
}

export function compareScenario(params: {
  scenario: Scenario;
  baseline: PackagingUnit;
  alternative: PackagingUnit;
}): ScenarioComparison {
  const baselineWeightGrams = getPackagingUnitTotalWeightGrams(params.baseline);
  const alternativeWeightGrams = getPackagingUnitTotalWeightGrams(params.alternative);
  const weightDeltaGrams = alternativeWeightGrams - baselineWeightGrams;
  const weightDeltaPct =
    baselineWeightGrams > 0 ? (weightDeltaGrams / baselineWeightGrams) * 100 : null;

  return {
    scenarioId: params.scenario.id,
    baselineWeightGrams,
    alternativeWeightGrams,
    weightDeltaGrams,
    weightDeltaPct,
    complianceDeltaSummary:
      "Compliance delta is reserved for rule-engine output (PPWR-first). This foundation wires the comparison slot without hard-coded legal logic.",
    documentationDeltaSummary:
      "Documentation delta is derived from evidence coverage changes; this foundation reserves a structured slot for it.",
  };
}

