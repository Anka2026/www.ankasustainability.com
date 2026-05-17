import type { JsonObject } from "@/lib/merge-messages";

export const enSoftwarePortfolioPatch: JsonObject = {
  home: {
    software: {
      description:
        "Eight digital workspaces structure data, compliance, traceability and declaration readiness—so advisory stays defensible, repeatable and practical with your teams.",
      portfolioTitle: "A software set aligned with how ANKA delivers advisory",
      portfolioSupport:
        "CBAM, EUDR, DPP, PPWR, supplier evidence, ESG reporting and agri-climate modules are tuned to European compliance realities and delivered in the same cadence as ANKA advisory.",
      items: [
        "CBAM Calculation Engine",
        "CBAM Compliance Console",
        "EUDR due diligence & traceability",
        "PPWR & packaging compliance",
        "Digital Product Passport platform",
        "Supplier data & evidence workflow",
        "ESG evidence & reporting workspace",
        "Agri-Climate platform",
      ],
    },
  },
  softwarePage: {
    hero: {
      panel: {
        items: [
          "CBAM Calculation Engine",
          "CBAM Compliance Console",
          "EUDR due diligence & traceability",
          "PPWR / packaging compliance",
          "Digital Product Passport",
          "Supplier data & evidence",
          "ESG evidence workspace",
          "Agri-Climate",
        ],
      },
    },
    portfolio: {
      description:
        "Eight modules shaped by operational use cases bring data models, traceable workflows and disciplined outputs together in one portfolio. Card visuals are real product screenshots.",
      previewBadge: "Digital support",
      cardPreview: {
        "cbam-calculation-engine": {
          chips: [
            "Embedded emissions calculation",
            "Product and installation data",
            "Methodology control",
          ],
        },
        "cbam-compliance-console": {
          chips: ["Supplier data workflow", "Evidence file", "Declaration readiness"],
        },
        "eudr-due-diligence-traceability": {
          chips: ["Origin and geolocation", "Risk assessment", "Declaration readiness"],
        },
        "digital-product-passport-platform": {
          chips: ["Product data model", "Traceability", "Declaration fields"],
        },
        "packaging-compliance-tool": {
          chips: ["Packaging inventory", "Material composition", "Compliance evidence"],
        },
        "supplier-data-evidence-workflow": {
          chips: ["Data requests", "Missing-field tracking", "Approval and revision"],
        },
        "esg-evidence-reporting-workspace": {
          chips: ["Evidence library", "Responsibility tracking", "Readiness visibility"],
        },
        "agri-climate-platform": {
          chips: ["Land and activity records", "Calculation workflow", "Evidence visibility"],
        },
      },
      products: {
        "eudr-due-diligence-traceability": {
          pill: "EUDR",
          status: "selected_use",
          title: "Arvenza EUDR Due Diligence & Traceability Platform",
          summary:
            "Helps manage supplier, origin, geolocation, risk assessment and declaration readiness workflows for products within the EUDR scope.",
          modalTagline:
            "Helps manage supplier, origin, geolocation, risk assessment and declaration readiness workflows for products within the EUDR scope.",
          modalWhatFor:
            "As EUDR declaration and due diligence requirements become a more critical operational topic from 1 January 2027, collecting product information alone will not be sufficient. Supplier declarations, product and batch matching, origin information, plot or production-area data, risk assessment results and evidence files need to be managed in a structured and traceable way.",
          modalTeamValue:
            "The Arvenza EUDR module helps companies organise EUDR-related product and supply chain data, monitor missing information, document risk assessment steps and strengthen the record structure required for declaration readiness.",
          modalPrimaryCta: "Plan EUDR Readiness",
          modalSecondaryCta: "Explore Platform Structure",
          detailPrimaryCta: "Plan EUDR Readiness",
          detailSecondaryCta: "Explore Platform Structure",
          bullets: [
            "Product and HS code scope tracking",
            "Supplier and origin data management",
            "Geolocation and production-area records",
            "Risk assessment and status classification",
            "Evidence file and document tracking",
            "Record structure for EUDR declaration readiness",
            "Missing data, revision and approval workflows",
            "Management dashboard and readiness visibility",
          ],
          screenshotAlt: "Arvenza EUDR platform dashboard preview",
          modalVisualCaption:
            "Controlled dashboard preview for EUDR due diligence and traceability workflows",
          heroText:
            "As EUDR declaration and due diligence requirements become a more critical operational topic from 1 January 2027, collecting product information alone will not be sufficient. Supplier declarations, product and batch matching, origin information, plot or production-area data, risk assessment results and evidence files need to be managed in a structured and traceable way. The Arvenza EUDR module helps companies organise EUDR-related product and supply chain data, monitor missing information, document risk assessment steps and strengthen the record structure required for declaration readiness.",
          solves: [
            "EUDR-scope product and supply chain data is spread across disconnected files.",
            "Origin, geolocation and risk assessment steps are not held in one traceable record model.",
            "Evidence and revision flows for declaration readiness must stay visible.",
          ],
          capabilities: [
            {
              title: "Product and HS code scope tracking",
              description: "Maintains structured records for in-scope products and code mappings.",
            },
            {
              title: "Supplier and origin data management",
              description: "Links supplier declarations and origin data at product and batch level.",
            },
            {
              title: "Geolocation and production-area records",
              description: "Manages plot or production-area data together with supporting evidence.",
            },
            {
              title: "Risk assessment and status classification",
              description: "Documents risk outcomes with status classes and ownership.",
            },
            {
              title: "Evidence file and document tracking",
              description: "Keeps documents traceable against products, suppliers and control steps.",
            },
            {
              title: "Record structure for EUDR declaration readiness",
              description: "Consolidates pre-declaration data fields and gaps in one readiness view.",
            },
            {
              title: "Missing data, revision and approval workflows",
              description: "Manages gaps, revisions and approvals in a controlled workflow.",
            },
            {
              title: "Management dashboard and readiness visibility",
              description: "Makes readiness status and priorities visible at management level.",
            },
          ],
          howItWorks: [
            {
              title: "Scope and product records",
              description: "Define in-scope products, codes and supplier relationships.",
            },
            {
              title: "Data and risk assessment",
              description: "Collect origin, geolocation, risk outcomes and evidence in structured records.",
            },
            {
              title: "Readiness and declaration structure",
              description: "Strengthen gaps, revisions and the record base for declaration readiness.",
            },
          ],
          whoItsFor: [
            "Companies placing EUDR-scope products on the EU market",
            "Importers, exporters, manufacturers and trading companies",
            "Organisations with complex raw material or product supply chains",
            "Teams collecting supplier declarations, evidence and origin data",
          ],
          outputs: [
            "Structured EUDR product and supply chain records",
            "Risk assessment and evidence file visibility",
            "Gap and status tracking for declaration readiness",
          ],
        },
        "supplier-data-evidence-workflow": {
          pill: "Supplier data",
          title: "Arvenza Supplier Data Collection & Evidence Workflow",
          summary:
            "Helps manage supplier data requests, missing-field tracking, approval and revision steps together with evidence file discipline.",
          modalTagline:
            "Helps manage supplier data requests, missing-field tracking, approval and revision steps together with evidence file discipline.",
          modalWhatFor:
            "Used to collect and track supplier data, declarations and evidence in a structured flow for Scope 3, buyer requests and supply chain compliance.",
          modalTeamValue:
            "Reduces scattered email and file traffic; makes missing fields, revisions and approval steps visible.",
          bullets: [
            "Structured data request and response flow",
            "Missing-field and revision tracking",
            "Evidence file and approval discipline",
            "Supplier communication visibility",
            "Readiness status panel",
            "Support for buyer and compliance requests",
          ],
          screenshotAlt:
            "Arvenza Supplier Data Collection and Evidence Workflow dashboard screenshot",
          heroText:
            "Supplier data collection and evidence workflow is a digital operating layer that strengthens data discipline and traceability alongside advisory work.",
        },
        "esg-evidence-reporting-workspace": {
          pill: "ESG",
          title: "Arvenza ESG Evidence & Reporting Workspace",
          summary:
            "Makes evidence libraries, responsibility tracking and reporting readiness visibility more traceable in CSRD/ESRS-focused processes.",
          modalTagline:
            "Makes evidence libraries, responsibility tracking and reporting readiness visibility more traceable in CSRD/ESRS-focused processes.",
          modalWhatFor:
            "Used to manage evidence, responsibilities and data fields in a structured workspace for corporate reporting, double materiality and disclosure readiness.",
          modalTeamValue:
            "Helps reporting teams track evidence, gaps and approval steps in one record discipline.",
          bullets: [
            "Evidence library and document linking",
            "Responsibility and ownership tracking",
            "Missing-field and readiness visibility",
            "Disclosure and data field structure",
            "Approval and revision workflow",
            "Reporting readiness panel",
          ],
          screenshotAlt: "Arvenza ESG Evidence and Reporting Workspace dashboard screenshot",
          heroText:
            "The ESG evidence and reporting workspace strengthens record quality and readiness discipline without replacing technical assessment.",
        },
        "packaging-compliance-tool": {
          title: "Arvenza PPWR & Packaging Compliance Platform",
        },
        "digital-product-passport-platform": {
          title: "Arvenza DPP Product Passport Platform",
        },
        "cbam-calculation-engine": {
          title: "Arvenza CBAM Calculation Engine",
        },
        "cbam-compliance-console": {
          title: "Arvenza CBAM Compliance Console",
        },
        "agri-climate-platform": {
          title: "Agri-Climate Platform",
        },
      },
    },
  },
};
