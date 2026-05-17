import type { JsonObject } from "@/lib/merge-messages";

export const enResourcesTechnicalBriefPatch: JsonObject = {
  insightsPage: {
    featured: {
      items: {
        "csrd-double-materiality": {
          technicalBrief: {
            paragraphs: [
              "For CSRD readiness, the technical priority is to align materiality logic with data ownership and evidence design from the start. Data collected before scope and ESRS topic mapping are clear will be reworked during the reporting cycle.",
              "Most organisations gather stakeholder input but fail to link decision criteria to data fields and documentation flows. This brief clarifies which technical steps make preparation manageable and defensible.",
            ],
          },
        },
        "cbam-data-financial-impact": {
          technicalBrief: {
            paragraphs: [
              "CBAM preparation begins with consistent embedded emissions data at product and installation level. Without a shared framework for methodology choices, default value limits, and supplier declarations, calculation defensibility weakens quickly.",
              "Finance and operations teams often address financial exposure only near reporting deadlines. This brief outlines how to connect data quality discipline with scenario-based commercial visibility.",
            ],
          },
        },
        "digital-product-passport-data": {
          technicalBrief: {
            paragraphs: [
              "Digital Product Passport readiness depends on linked records for product identity, bill of materials, and compliance data—not static file repositories. A field list alone cannot support update control and evidence traceability.",
              "Teams frequently define data domains without assigning ownership, validation, or sharing rules. This brief prioritises which data structures should be designed first.",
            ],
          },
        },
        "ppwr-product-packaging-data": {
          technicalBrief: {
            paragraphs: [
              "Under PPWR, packaging data must sit in the same architecture as product master data and compliance statements. Fragmented material composition, weight, and responsibility mapping increases market placement risk.",
              "Design and procurement decisions are often taken before compliance data is updated. This brief explains how to align packaging inventory with regulatory expectations.",
            ],
          },
        },
        "scope-3-supplier-data": {
          technicalBrief: {
            paragraphs: [
              "The technical challenge in Scope 3 is turning supplier information into a repeatable data flow. One-off surveys without segmentation and quality controls do not produce sustainable inventory data.",
              "Organisations start collection before definitions and evidence rules are agreed, which forces renegotiation every reporting cycle. This brief clarifies a prioritised supplier data structure.",
            ],
          },
        },
        "digital-workspace-reporting": {
          technicalBrief: {
            paragraphs: [
              "In sustainability reporting, the main technical risk is managing data and evidence through unstructured email and file sharing. Without revision traceability and clear ownership, cross-functional projects lose control.",
              "A digital workspace is not a software promise—it is a process architecture that makes collection, review, and delivery visible. This brief summarises which building blocks to establish first.",
            ],
          },
        },
      },
    },
  },
};
