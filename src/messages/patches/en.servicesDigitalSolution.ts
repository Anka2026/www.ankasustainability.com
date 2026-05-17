import type { JsonObject } from "@/lib/merge-messages";

export const enServicesDigitalSolutionPatch: JsonObject = {
  servicesPage: {
    overview: {
      eyebrow: "Our service approach",
      title: "We turn regulatory complexity into an operating rhythm your teams can run",
      text: "Across carbon, ESG, product, supply chain and market-facing programmes, we connect priorities, owned data, evidence discipline and practical workflows—so sustainability work stays traceable, defensible and manageable as requirements evolve.",
      strip: [
        { title: "Scope and priority" },
        { title: "Data ownership" },
        { title: "Evidence and traceability" },
        { title: "Manageable workflows" },
      ],
    },
    relatedDigitalSolution: {
      eyebrow: "DIGITAL WORKFLOW SUPPORT",
      mainTitle: "Digital Structure Supporting This Work",
      intro:
        "The digital solutions referenced here do not replace the advisory programme. They help organise data collection, evidence discipline, missing-field follow-up and readiness visibility—so technical evaluation becomes a more traceable, defensible and manageable workflow inside your organisation.",
      moduleCta: "Explore The Software Solution",
      allSoftwareCta: "View All Software Solutions",
      cta: "Explore The Software Solution",
      previewBadge: "Digital support",
      modules: {
        cbam: {
          title: "Manage CBAM Calculation and Compliance Operations Together",
          description:
            "CBAM work is not only about calculation; product, installation, supplier data, evidence files and declaration readiness need to be managed within the same operating structure. The Calculation Engine supports the calculation side, while the Compliance Console supports supplier data workflows and compliance operations.",
          submodules: [
            "Arvenza CBAM Calculation Engine",
            "Arvenza CBAM Compliance Console",
          ],
          submoduleFocus: [
            "Supports product- and installation-level embedded emissions calculations and methodology control.",
            "Supports supplier data workflows, evidence files, missing-field tracking and compliance operations for declaration readiness.",
          ],
          chips: [
            "Embedded emissions calculation",
            "Supplier data workflow",
            "Evidence and readiness tracking",
          ],
        },
      },
      categoryBand: {
        productCircularity: {
          extraNote:
            "This digital structure is not positioned as LCA or EPD calculation software; it supports product data, packaging information, declaration fields and traceability organisation.",
        },
      },
      digitalModules: {
        "cbam-calculation-engine": {
          title: "Arvenza CBAM Calculation Engine",
          description:
            "Supports embedded emissions calculation with product and installation data and methodology control.",
          chips: ["Embedded emissions calculation", "Product and installation data", "Methodology control"],
        },
        "cbam-compliance-console": {
          title: "Arvenza CBAM Compliance Console",
          description:
            "Supports supplier data workflow, evidence files, missing-field tracking and declaration readiness.",
          chips: ["Supplier data workflow", "Evidence file", "Declaration readiness"],
        },
        "eudr-due-diligence-traceability": {
          title: "Arvenza EUDR Due Diligence & Traceability Platform",
          description:
            "Helps manage EUDR-scope product and supply chain data with a more traceable record structure for origin, geolocation, risk assessment and declaration readiness.",
          chips: ["Origin and geolocation", "Risk assessment", "Declaration readiness"],
        },
        "digital-product-passport-platform": {
          title: "Arvenza DPP Product Passport Platform",
          description:
            "Supports data structure for product data, declaration fields, traceability and passport readiness. It does not replace LCA or EPD technical work.",
          chips: ["Product data model", "Traceability", "Declaration fields"],
        },
        "packaging-compliance-tool": {
          title: "Arvenza PPWR & Packaging Compliance Platform",
          description:
            "Helps manage packaging inventory, material composition and compliance evidence in a structured data and document workflow.",
          chips: ["Packaging inventory", "Material composition", "Compliance evidence"],
        },
        "supplier-data-evidence-workflow": {
          title: "Arvenza Supplier Data Collection & Evidence Workflow",
          description:
            "Helps manage supplier data requests, missing-field tracking, approval and revision steps together with traceability and evidence discipline.",
          chips: ["Data requests", "Missing-field tracking", "Approval and revision"],
        },
        "esg-evidence-reporting-workspace": {
          title: "Arvenza ESG Evidence & Reporting Workspace",
          description:
            "Supports evidence libraries, responsibility tracking and reporting readiness visibility in a more traceable workflow for CSRD/ESRS and corporate reporting.",
          chips: ["Evidence library", "Responsibility tracking", "Readiness visibility"],
        },
      },
    },
    landing: {
      services: {
        carbonClimate: {
          benchmark: {
            how: {
              eyebrow: "How we work",
              kicker: "Scope → Data → Control → Decision",
            },
          },
        },
      },
    },
  },
};
