import type { RuleCatalog, RuleContext, RuleFinding, RuleInput } from "./types";

export interface RuleEngineRun {
  catalogId: string;
  effectiveDate: RuleContext["effectiveDate"];
  findings: RuleFinding[];
}

export class RuleEngine {
  private readonly catalogs: RuleCatalog[];

  constructor(catalogs: RuleCatalog[]) {
    this.catalogs = catalogs;
  }

  run(ctx: RuleContext, input: RuleInput): RuleEngineRun[] {
    return this.catalogs.map((catalog) => {
      const findings = catalog.rules
        .filter((r) => r.applies(ctx, input))
        .flatMap((r) => r.evaluate(ctx, input).map((f) => ({ ...f, ruleId: f.ruleId || r.id })));

      return {
        catalogId: catalog.id,
        effectiveDate: ctx.effectiveDate,
        findings,
      };
    });
  }
}

