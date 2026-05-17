import type { JsonObject } from "@/lib/merge-messages";

export const enResourcesInsightsPatch: JsonObject = {
  insightsPage: {
    detail: {
      backToResources: "Back To Resources",
      sectionLabels: {
        whyMatters: "Why This Topic Matters",
        whoItConcerns: "Who It Concerns",
        criticalAreas: "Critical Data and Process Areas",
        commonMistakes: "Common Mistakes",
        ankaApproach: "ANKA's Approach",
      },
      hero: {
        metaFormat: "Expert brief",
        metaFocus: "Readiness and data discipline",
      },
      sidebar: {
        eyebrow: "Advisory",
        title: "How We Work With ANKA",
        highlightLabel: "Working focus",
        description:
          "This resource is designed to help you assess readiness, clarify priority data areas, and build a more traceable working discipline.",
        steps: [
          "Clarify current position, scope and priorities together",
          "Structure data domains, ownership and evidence logic",
          "Move toward an actionable, traceable working rhythm",
        ],
        primaryCta: "Book A Call",
        secondaryCta: "Contact Us",
      },
    },
    featured: {
      collectionLabel: "Selected expert insights",
      items: {
        "csrd-double-materiality": {
          category: "CSRD",
          title: "Where to Start with CSRD and Double Materiality Readiness",
          description:
            "Key preparation areas for building a stronger, more traceable and manageable starting point for corporate reporting.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "Corporate sustainability reporting is not a drafting exercise alone. It requires governance clarity, defined data ownership, topic prioritisation, stakeholder perspective, and an evidence structure that can be reviewed and defended.",
                "Double materiality brings financial materiality and impact materiality into the same decision frame. When these are treated separately—or reduced to a template topic list—the reporting process becomes difficult to manage and harder to explain internally.",
              ],
            },
            whoItConcerns: {
              paragraphs: [
                "This topic is relevant for organisations preparing for CSRD-aligned disclosure, especially where sustainability, finance, risk, legal, and operations need a shared working model.",
              ],
              bullets: [
                "Sustainability and ESG teams leading topic assessment and reporting preparation",
                "Finance and controlling functions involved in financial materiality and data consolidation",
                "Legal and compliance teams reviewing disclosure boundaries and governance",
                "Operations and business units responsible for site-level data and evidence",
              ],
            },
            criticalAreas: {
              paragraphs: [
                "A workable starting point typically combines scope definition, topic logic, ownership mapping, and evidence design—not a one-off workshop summary.",
              ],
              bullets: [
                "Reporting boundary, entity scope, and stakeholder engagement logic",
                "Topic universe, impact pathways, and financial linkage where relevant",
                "Data ownership, collection rhythm, and quality controls by topic",
                "Evidence links, review steps, and internal sign-off discipline",
                "Prioritisation criteria that can be explained to management and auditors",
              ],
            },
            commonMistakes: {
              bullets: [
                "Copying a generic topic list without company-specific assessment",
                "Running materiality workshops without assigning data owners",
                "Leaving evidence structure and document control until late in the cycle",
                "Treating financial and impact materiality as separate tracks with no reconciliation",
                "Building narrative before the underlying data and governance model is clear",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA typically structures CSRD readiness around a current-state review, a governed topic pool, stakeholder and data mapping, and a prioritised action plan that teams can operate—not a one-off slide deck.",
                "The focus is on making topic decisions traceable, assigning clear responsibilities, and aligning reporting preparation with how data is actually collected and reviewed.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline for corporate reporting preparation.",
              ],
            },
          },
        },
        "cbam-data-financial-impact": {
          category: "CBAM",
          title: "How to Structure Data and Financial Impact Readiness for CBAM",
          description:
            "A more controlled readiness framework covering not only reporting, but also financial impact, data quality and supplier information flows.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "CBAM preparation is not only an emissions calculation task. It connects product scope, installation boundaries, production routes, energy and fuel data, precursor inputs, supplier information, and the financial implications of exposure.",
                "Where data is not traceable and methodology choices are not governed, teams risk late corrections, inconsistent submissions, and weak management visibility.",
              ],
            },
            whoItConcerns: {
              paragraphs: [
                "This topic matters for importers, manufacturers, and suppliers in carbon-intensive value chains where embedded emissions data must be collected, reviewed, and explained with discipline.",
              ],
              bullets: [
                "Carbon and environment teams managing methodology and data quality",
                "Production and plant teams responsible for installation-level activity data",
                "Procurement and supplier management coordinating upstream information",
                "Finance teams translating exposure into scenarios and decision support",
              ],
            },
            criticalAreas: {
              bullets: [
                "Product and installation scope, including production route logic",
                "Electricity, fuel, and process emissions data with clear boundaries",
                "Precursor and input data where relevant to embedded emissions",
                "Supplier data requests, format standards, and quality review",
                "Default-value use, assumptions, and documented methodological choices",
                "Financial impact scenarios linked to emissions positions—not isolated spreadsheets",
              ],
            },
            commonMistakes: {
              bullets: [
                "Relying on energy invoices alone without validating product-level allocation",
                "Defining product boundaries inconsistently across sites or product families",
                "Requesting supplier data too late, without format or quality expectations",
                "Treating reporting preparation separately from financial impact review",
                "Allowing uncontrolled spreadsheet versions without ownership or review steps",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA structures CBAM readiness around product scope definition, data templates, supplier communication, methodological control, and financial impact scenarios that management can use for planning.",
                "The aim is a repeatable data and review flow—not last-minute data chasing during reporting windows.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline across emissions and financial preparation.",
              ],
            },
          },
        },
        "digital-product-passport-data": {
          category: "Product",
          title: "Critical Data Areas in Digital Product Passport Readiness",
          description:
            "Core records, traceability and declaration areas to consider when strengthening product-level data management.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "Digital Product Passport readiness is a product-level data discipline. It depends on consistent product identity, material structure, technical attributes, compliance declarations, traceability records, and—where relevant—circularity-related information such as repair, reuse, or end-of-life handling.",
                "Treating the passport as a surface layer without underlying data governance creates rework and weakens credibility with customers and partners.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Product management and R&D teams defining product records and variants",
                "Quality, compliance, and regulatory affairs teams managing declarations",
                "Procurement and supply teams responsible for material and supplier data",
                "IT and data teams supporting master data, integrations, and access control",
              ],
            },
            criticalAreas: {
              bullets: [
                "Product identity, SKU logic, and variant relationships",
                "Bill of materials, material composition, and sourcing information",
                "Technical specifications and performance attributes required for disclosure",
                "Compliance and declaration data linked to standards and verification status",
                "Traceability records and supplier documentation with review discipline",
                "Circularity-related data where repair, maintenance, or reuse information applies",
              ],
            },
            commonMistakes: {
              bullets: [
                "Equating DPP readiness with a QR code or product page alone",
                "Collecting fields without defining owners, update rules, or evidence links",
                "Mixing marketing claims with governed compliance data in the same record",
                "Ignoring variant logic and publishing incomplete product family coverage",
                "Starting digital sharing scenarios before the underlying data model is stable",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA approaches DPP readiness through a product data model, a clear split between mandatory and voluntary fields, defined data owners, evidence links, and a practical digital preparation path aligned with how teams already manage product information.",
                "The focus is on governed records and traceability—not isolated document folders.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline for product-level passport preparation.",
              ],
            },
          },
        },
        "ppwr-product-packaging-data": {
          category: "Packaging",
          title: "How PPWR Changes Product and Packaging Data",
          description:
            "An assessment of why packaging and product information is becoming more visible, measurable and evidence-based in the European market.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "Packaging is no longer only a procurement or logistics topic. Material composition, weight, recyclability, reuse potential, supplier declarations, and market-specific requirements increasingly need structured product-linked data.",
                "Where packaging information sits in unstructured descriptions or disconnected files, teams struggle to respond to customer, importer, and compliance questions with confidence.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Packaging and product teams managing SKU-level packaging structures",
                "Procurement teams coordinating supplier declarations and material evidence",
                "Sustainability and compliance teams translating obligations into data requirements",
                "Commercial teams facing customer and market-specific information requests",
              ],
            },
            criticalAreas: {
              bullets: [
                "Packaging inventory linked to product and SKU logic",
                "Material composition, weight, and component-level records",
                "Recyclability, reuse, and design-for-circularity attributes where applicable",
                "Supplier declarations and supporting documentation with review status",
                "Market and country requirement overlays without duplicating core product records",
                "Gap assessment between current data and expected disclosure fields",
              ],
            },
            commonMistakes: {
              bullets: [
                "Keeping packaging information as a single line in a product description",
                "Managing packaging data separately from product master data without linkage",
                "Collecting declarations without validation rules or update triggers",
                "Treating fee or cost logic as finance-only, disconnected from material data",
                "Prioritising format over ownership and evidence discipline",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA structures PPWR-oriented preparation around packaging inventory, defined data fields, supplier declarations, compliance gaps, and a prioritised action list that teams can execute incrementally.",
                "The approach connects packaging records to product context so information stays usable across functions.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline for product and packaging data management.",
              ],
            },
          },
        },
        "scope-3-supplier-data": {
          category: "Supply Chain",
          title: "How to Structure Supplier Data Collection for Scope 3",
          description:
            "Practical approaches for making fragmented supplier data flows more organised, traceable and manageable.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "Scope 3 work is as much about supplier communication and data quality management as it is about calculation. Without category prioritisation, clear data requests, and review discipline, supplier programmes become expensive and difficult to sustain.",
                "Fragmented spreadsheets and one-off questionnaires rarely create data that finance, procurement, and sustainability can reuse with confidence.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Sustainability teams leading Scope 3 assessment and reporting preparation",
                "Procurement and supplier relationship teams managing engagement and follow-up",
                "Finance teams reviewing spend-based approaches and material categories",
                "Data and analytics teams supporting consolidation and quality scoring",
              ],
            },
            criticalAreas: {
              bullets: [
                "Category prioritisation based on materiality and data feasibility",
                "Spend and activity data structures with clear definitions",
                "Emission factor selection logic and documentation of assumptions",
                "Supplier-specific data requests scaled to supplier segment and capability",
                "Quality scoring, exception handling, and closure discipline",
                "Calculation readiness checks before numbers enter management reporting",
              ],
            },
            commonMistakes: {
              bullets: [
                "Requesting the same detailed data from all suppliers at once",
                "Sending questionnaires without field definitions or examples",
                "No follow-up rhythm, ownership, or escalation path for incomplete responses",
                "Mixing supplier-specific data with generic factors without transparency",
                "Treating collection as a one-off project rather than an ongoing data flow",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA typically designs Scope 3 supplier programmes around prioritised supplier segmentation, simplified data requests, a defined follow-up rhythm, data quality controls, and calculation preparation that aligns with how procurement already works.",
                "The objective is manageable engagement—not maximum form complexity on day one.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline for Scope 3 supplier data collection.",
              ],
            },
          },
        },
        "digital-workspace-reporting": {
          category: "Digital Workflow",
          title: "Why a Digital Workspace Matters in Sustainability Reporting",
          description:
            "The role of digital support in improving progress tracking, visibility, evidence management and overall work quality.",
          cta: "Read The Insight",
          sections: {
            whyMatters: {
              paragraphs: [
                "Sustainability reporting managed through email threads and scattered spreadsheets creates version risk, weak accountability, and slow evidence retrieval—especially when multiple functions contribute to the same disclosure cycle.",
                "A structured workspace supports task tracking, evidence storage, responsibility mapping, version control, and management visibility without replacing professional judgement.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Sustainability and reporting teams coordinating multi-topic disclosure cycles",
                "Finance and controlling contributors providing consolidated figures and review",
                "Legal and compliance reviewers checking statements and supporting evidence",
                "Programme and transformation leads needing progress visibility across workstreams",
              ],
            },
            criticalAreas: {
              bullets: [
                "Task ownership, deadlines, and status tracking by topic or workstream",
                "Evidence repository with links, review state, and access control",
                "Responsibility matrix across entities, sites, and functions",
                "Version control for data files, narratives, and review comments",
                "Management dashboards for progress and open items—not only final reports",
                "Repeatable reporting cycles with templates and quality checkpoints",
              ],
            },
            commonMistakes: {
              bullets: [
                "Drafting the report first and collecting evidence afterwards",
                "Storing files in personal drives without shared naming or review rules",
                "No clear owner for data updates, evidence approval, or narrative sign-off",
                "Adopting tools without aligning them to the actual reporting workflow",
                "Expecting software to replace governance conversations and methodological decisions",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA designs reporting workspaces around how data and evidence actually move: workspace structure, data and evidence flow, task and responsibility tracking, and reporting preparation checkpoints that teams can repeat each cycle.",
                "Digital tools should strengthen the delivery model—consulting judgement and governance remain central.",
                "This work helps organisations assess readiness, define priority data areas, and establish a more traceable working discipline for sustainability reporting delivery.",
              ],
            },
          },
        },
      },
    },
  },
};
