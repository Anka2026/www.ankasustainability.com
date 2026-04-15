import type { ISODate, MarketCode, RuleCategory, RuleSeverity } from "@/pcos/domain";

export interface RuleContext {
  marketCode?: MarketCode;
  effectiveDate: ISODate;
}

export interface RuleInput {
  organizationId: string;
  skuId?: string;
  packagingUnitId?: string;
  evidenceDocumentId?: string;
  marketCode?: MarketCode;
}

export interface RuleFinding {
  ruleId: string;
  category: RuleCategory;
  severity: RuleSeverity;
  title: string;
  summary: string;
  marketCode?: MarketCode;
  effectiveFrom?: ISODate;
  effectiveTo?: ISODate;
  refs?: {
    skuId?: string;
    packagingUnitId?: string;
    componentId?: string;
    evidenceDocumentId?: string;
  };
}

export interface RuleDefinition {
  id: string;
  category: RuleCategory;
  title: string;
  description: string;
  version: string;
  applies(ctx: RuleContext, input: RuleInput): boolean;
  evaluate(ctx: RuleContext, input: RuleInput): RuleFinding[];
}

export interface RuleCatalog {
  id: string;
  title: string;
  rules: RuleDefinition[];
}

