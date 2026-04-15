export type Id = string;

export type ISODate = string; // YYYY-MM-DD

export type LanguageCode = "en" | "tr" | "nl";

export type MarketCode = string; // e.g. "NL", "DE"

export type EvidenceStatus =
  | "missing"
  | "requested"
  | "received"
  | "in_review"
  | "approved"
  | "rejected"
  | "expired";

export type TechnicalFileStatus = "not_started" | "in_progress" | "ready" | "blocked";

export type RuleSeverity = "info" | "warning" | "critical";

export type RuleCategory =
  | "applicability"
  | "obligation"
  | "evidence"
  | "threshold"
  | "country_overlay"
  | "effective_date";

export type Permission =
  | "pcos.read"
  | "pcos.write"
  | "products.manage"
  | "bom.manage"
  | "suppliers.manage"
  | "evidence.manage"
  | "technical_file.manage"
  | "scenarios.manage"
  | "rules.manage"
  | "settings.manage";

export interface UserRole {
  id: Id;
  code: "admin" | "compliance_manager" | "packaging_engineer" | "buyer" | "viewer";
  name: string;
  permissions: Permission[];
}

export interface Organization {
  id: Id;
  legalName: string;
  displayName: string;
  euMarketRoleNotes?: string;
  defaultMarketCodes: MarketCode[];
}

export interface Market {
  id: Id;
  code: MarketCode;
  name: string;
  euMemberState: boolean;
  active: boolean;
  overlays: {
    eprNotes?: string;
    localAuthorityNotes?: string;
  };
}

export interface Supplier {
  id: Id;
  name: string;
  countryCode?: string;
  contact?: {
    name?: string;
    email?: string;
  };
  status: "active" | "onboarding" | "inactive";
  evidenceSlaDays?: number;
}

export interface Material {
  id: Id;
  name: string;
  family:
    | "plastic"
    | "paper_fibre"
    | "glass"
    | "metal"
    | "wood"
    | "composite"
    | "other";
  recycledContentPct?: number;
}

export interface PackagingComponent {
  id: Id;
  name: string;
  materialId: Id;
  weightGrams: number;
  supplierId?: Id;
  tags?: string[];
}

export interface PackagingUnit {
  id: Id;
  name: string;
  level: "primary" | "secondary" | "tertiary" | "transport";
  components: PackagingComponent[];
}

export interface ProductFamily {
  id: Id;
  name: string;
  brand?: string;
  category?: string;
  defaultPackagingUnitId?: Id;
}

export interface SKU {
  id: Id;
  familyId: Id;
  skuCode: string;
  name: string;
  gtin?: string;
  markets: MarketCode[];
  status: "draft" | "active" | "archived";
  packagingUnitId?: Id;
}

export interface EvidenceDocument {
  id: Id;
  title: string;
  type:
    | "supplier_declaration"
    | "test_report"
    | "material_spec"
    | "recycled_content_statement"
    | "conformity_declaration"
    | "other";
  supplierId?: Id;
  relatedSkuIds?: Id[];
  relatedPackagingComponentIds?: Id[];
  status: EvidenceStatus;
  requestedAt?: ISODate;
  receivedAt?: ISODate;
  reviewedAt?: ISODate;
  approvedAt?: ISODate;
  expiresAt?: ISODate;
  notes?: string;
}

export interface Declaration {
  id: Id;
  kind: "supplier" | "internal";
  title: string;
  supplierId?: Id;
  signedAt?: ISODate;
  coverageNotes?: string;
  evidenceDocumentId?: Id;
}

export interface TestResult {
  id: Id;
  testType: "migration" | "heavy_metals" | "recycled_content" | "compostability" | "other";
  sampleRef?: string;
  performedAt?: ISODate;
  result: "pass" | "fail" | "inconclusive";
  evidenceDocumentId?: Id;
}

export interface RuleResult {
  id: Id;
  ruleId: Id;
  category: RuleCategory;
  severity: RuleSeverity;
  title: string;
  summary: string;
  marketCode?: MarketCode;
  skuId?: Id;
  packagingUnitId?: Id;
  componentId?: Id;
  evidenceDocumentId?: Id;
  effectiveFrom?: ISODate;
  effectiveTo?: ISODate;
  status: "open" | "acknowledged" | "resolved" | "suppressed";
}

export interface Scenario {
  id: Id;
  name: string;
  skuId: Id;
  baselinePackagingUnitId: Id;
  alternativePackagingUnitId: Id;
  createdAt: ISODate;
  status: "draft" | "under_review" | "approved" | "rejected";
  decisionNotes?: string;
  commercialNotes?: string;
}

export interface TechnicalFile {
  id: Id;
  skuId: Id;
  status: TechnicalFileStatus;
  readinessScore: number; // 0..100
  missingEvidenceCount: number;
  lastUpdatedAt: ISODate;
}

