import type {
  Declaration,
  EvidenceDocument,
  Market,
  Material,
  Organization,
  PackagingUnit,
  ProductFamily,
  RuleResult,
  Scenario,
  SKU,
  Supplier,
  TechnicalFile,
  UserRole,
} from "./model";

const today = () => new Date().toISOString().slice(0, 10);

export const seedOrganization: Organization = {
  id: "org_anka_demo",
  legalName: "Example EU Market Operator B.V.",
  displayName: "Example EU Market Operator",
  euMarketRoleNotes:
    "This workspace models the operator view: packaging BOM, responsibilities, evidence, and technical file readiness.",
  defaultMarketCodes: ["NL", "DE", "FR"],
};

export const seedMarkets: Market[] = [
  {
    id: "m_nl",
    code: "NL",
    name: "Netherlands",
    euMemberState: true,
    active: true,
    overlays: { eprNotes: "Overlay placeholder: national EPR nuances live here." },
  },
  {
    id: "m_de",
    code: "DE",
    name: "Germany",
    euMemberState: true,
    active: true,
    overlays: { eprNotes: "Overlay placeholder: registry + reporting specifics." },
  },
  {
    id: "m_fr",
    code: "FR",
    name: "France",
    euMemberState: true,
    active: true,
    overlays: { eprNotes: "Overlay placeholder: eco-modulation and evidence expectations." },
  },
];

export const seedSuppliers: Supplier[] = [
  {
    id: "s_acme",
    name: "Acme Packaging Components Ltd.",
    countryCode: "TR",
    contact: { name: "Supplier Ops", email: "ops@acme.example" },
    status: "active",
    evidenceSlaDays: 10,
  },
  {
    id: "s_fibra",
    name: "Fibra Board & Paper GmbH",
    countryCode: "DE",
    contact: { name: "Compliance Desk", email: "compliance@fibra.example" },
    status: "onboarding",
    evidenceSlaDays: 14,
  },
];

export const seedMaterials: Material[] = [
  { id: "mat_pet", name: "PET", family: "plastic", recycledContentPct: 25 },
  { id: "mat_pp", name: "PP", family: "plastic", recycledContentPct: 10 },
  { id: "mat_paper", name: "Fibre-based board", family: "paper_fibre", recycledContentPct: 70 },
];

export const seedPackagingUnits: PackagingUnit[] = [
  {
    id: "pu_bottle_500ml",
    name: "Bottle 500ml (primary)",
    level: "primary",
    components: [
      {
        id: "pc_bottle",
        name: "Bottle body",
        materialId: "mat_pet",
        weightGrams: 26.5,
        supplierId: "s_acme",
        tags: ["primary", "rigid"],
      },
      {
        id: "pc_cap",
        name: "Cap",
        materialId: "mat_pp",
        weightGrams: 2.2,
        supplierId: "s_acme",
        tags: ["closure"],
      },
      {
        id: "pc_label",
        name: "Label",
        materialId: "mat_pp",
        weightGrams: 0.8,
        supplierId: "s_acme",
        tags: ["label"],
      },
    ],
  },
  {
    id: "pu_bottle_500ml_light",
    name: "Bottle 500ml (lightweight alt.)",
    level: "primary",
    components: [
      {
        id: "pc_bottle_alt",
        name: "Bottle body (lightweight)",
        materialId: "mat_pet",
        weightGrams: 23.0,
        supplierId: "s_acme",
        tags: ["primary", "rigid", "alt"],
      },
      {
        id: "pc_cap_alt",
        name: "Cap",
        materialId: "mat_pp",
        weightGrams: 2.2,
        supplierId: "s_acme",
        tags: ["closure"],
      },
      {
        id: "pc_label_alt",
        name: "Label",
        materialId: "mat_pp",
        weightGrams: 0.8,
        supplierId: "s_acme",
        tags: ["label"],
      },
    ],
  },
];

export const seedProductFamilies: ProductFamily[] = [
  { id: "pf_bev", name: "Beverage", brand: "Private Label", category: "Soft Drinks" },
];

export const seedSkus: SKU[] = [
  {
    id: "sku_500ml",
    familyId: "pf_bev",
    skuCode: "PL-BEV-500",
    name: "Sparkling Beverage 500ml",
    gtin: "0000000000000",
    markets: ["NL", "DE", "FR"],
    status: "active",
    packagingUnitId: "pu_bottle_500ml",
  },
  {
    id: "sku_500ml_draft",
    familyId: "pf_bev",
    skuCode: "PL-BEV-500-ALT",
    name: "Sparkling Beverage 500ml (alt. pack)",
    markets: ["NL"],
    status: "draft",
    packagingUnitId: "pu_bottle_500ml_light",
  },
];

export const seedEvidenceDocuments: EvidenceDocument[] = [
  {
    id: "ed_pet_rc",
    title: "Recycled content statement (PET)",
    type: "recycled_content_statement",
    supplierId: "s_acme",
    relatedPackagingComponentIds: ["pc_bottle", "pc_bottle_alt"],
    status: "received",
    requestedAt: "2026-03-18",
    receivedAt: "2026-03-25",
    notes: "Pending review for market coverage and validity period.",
  },
  {
    id: "ed_pp_declaration",
    title: "Supplier declaration (PP components)",
    type: "supplier_declaration",
    supplierId: "s_acme",
    relatedPackagingComponentIds: ["pc_cap", "pc_label", "pc_cap_alt", "pc_label_alt"],
    status: "in_review",
    requestedAt: "2026-03-18",
    receivedAt: "2026-03-24",
    reviewedAt: today(),
  },
  {
    id: "ed_board_spec",
    title: "Board material specification",
    type: "material_spec",
    supplierId: "s_fibra",
    status: "requested",
    requestedAt: today(),
    notes: "Supplier onboarding ongoing; request created in Evidence Pack.",
  },
];

export const seedDeclarations: Declaration[] = [
  {
    id: "dec_supplier_pp",
    kind: "supplier",
    title: "Supplier declaration coverage: PP caps & labels",
    supplierId: "s_acme",
    signedAt: "2026-03-24",
    evidenceDocumentId: "ed_pp_declaration",
  },
];

export const seedRuleResults: RuleResult[] = [
  {
    id: "rr_missing_board_spec",
    ruleId: "rule_evidence_board_spec",
    category: "evidence",
    severity: "warning",
    title: "Missing material specification for fibre-based packaging",
    summary:
      "At least one fibre-based packaging component is missing a supplier material specification document.",
    marketCode: "DE",
    status: "open",
    effectiveFrom: "2026-01-01",
  },
  {
    id: "rr_review_rc",
    ruleId: "rule_evidence_recycled_content_statement",
    category: "evidence",
    severity: "info",
    title: "Recycled content statement received — review required",
    summary: "A supplier statement was received but is not yet reviewed/approved.",
    status: "open",
  },
];

export const seedScenarios: Scenario[] = [
  {
    id: "sc_lightweight",
    name: "Lightweight primary pack",
    skuId: "sku_500ml",
    baselinePackagingUnitId: "pu_bottle_500ml",
    alternativePackagingUnitId: "pu_bottle_500ml_light",
    createdAt: today(),
    status: "under_review",
    commercialNotes: "Target: reduce packaging weight without compromising shelf stability.",
  },
];

export const seedTechnicalFiles: TechnicalFile[] = [
  {
    id: "tf_500ml",
    skuId: "sku_500ml",
    status: "in_progress",
    readinessScore: 68,
    missingEvidenceCount: 1,
    lastUpdatedAt: today(),
  },
];

export const seedRoles: UserRole[] = [
  {
    id: "role_admin",
    code: "admin",
    name: "Admin",
    permissions: [
      "pcos.read",
      "pcos.write",
      "products.manage",
      "bom.manage",
      "suppliers.manage",
      "evidence.manage",
      "technical_file.manage",
      "scenarios.manage",
      "rules.manage",
      "settings.manage",
    ],
  },
  {
    id: "role_compliance_manager",
    code: "compliance_manager",
    name: "Compliance Manager",
    permissions: ["pcos.read", "pcos.write", "evidence.manage", "technical_file.manage", "rules.manage"],
  },
];

