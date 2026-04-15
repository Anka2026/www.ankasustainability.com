import type { JsonObject } from "@/lib/merge-messages";

export const enSoftwarePortfolioPatch: JsonObject = {
  softwarePage: {
    portfolio: {
      title: "Product portfolio",
      description:
        "Workflow-oriented software products designed for compliance, product data, and regulation-led reporting.",
      statusLabels: {
        core: "Selected use",
        in_development: "Pilot",
        coming_soon: "On roadmap",
      },
      ctas: {
        viewProduct: "View product",
        requestDemo: "Request demo",
        talkToTeam: "Talk to our team",
        requestEarlyAccess: "Request early access",
      },
      products: {
        "agri-climate-platform": {
          status: "core",
          category: "Agriculture & Land",
          title: "Agri-Climate Platform",
          kicker: "Land data, calculation, and verification logic",
          cardDescription:
            "A platform that structures land and activity data into a consistent record model—supporting calculations, evidence, and verification readiness.",
          heroText:
            "A structured digital platform that brings together land-based climate data, activity records, calculation processes, evidence workflows, and verification readiness in one product environment.",
          value:
            "A structured digital platform that brings together land-based climate data, activity records, calculation processes, evidence workflows, and verification readiness in one product environment.",
          solves: [
            "Land, activity, and production data often stays fragmented; an evidence-grade audit trail for calculations and verification forms too late.",
            "Agri-Climate Platform unifies record discipline, calculation flows, and verification readiness in one system logic—strengthening portfolio visibility.",
            "When data quality, revision tracking, and evidence links are controlled, both internal decision-making and external verification become materially more manageable.",
          ],
          capabilities: [
            {
              title: "Land and activity records",
              description:
                "Collect parcel, production, and activity data in a consistent record model; manage seasonal tracking and revisions with control.",
            },
            {
              title: "Calculation workflows",
              description:
                "Run data → calculation → control as a structured flow; improve repeatability and consistency across portfolios.",
            },
            {
              title: "Verification readiness",
              description:
                "Build a defensible audit trail from records and evidence; make verification cycles more manageable.",
            },
            {
              title: "Evidence and document flow",
              description:
                "Link evidence documents to records; surface gaps/mismatches and drive clean closure.",
            },
            {
              title: "Credit and portfolio preparation",
              description:
                "Manage the data and record structure needed for credit-linked reporting and portfolio-level views.",
            },
          ],
          howItWorks: [
            {
              title: "Define the record model",
              description:
                "Land/parcel, activity, and period logic is defined; data fields and ownership are clarified.",
            },
            {
              title: "Collect data and run controls",
              description:
                "Inputs are captured from sources; missing/inconsistent fields are detected and resolved in a control loop.",
            },
            {
              title: "Run calculations and produce outputs",
              description:
                "Calculation steps are executed; outputs are produced in formats suited to decision support and reporting.",
            },
            {
              title: "Prepare verification evidence",
              description:
                "Evidence is linked to records; audit trail and readiness levels become visible.",
            },
          ],
          whoItsFor: [
            "Sustainability and ESG teams",
            "Agriculture operations and field teams",
            "Data management and reporting owners",
            "Teams preparing assurance and verification readiness",
          ],
          outputs: [
            "Land and activity records",
            "Calculation and verification workflow",
            "Credit and portfolio readiness",
            "Evidence and audit trail structure",
          ],
        },
        "cbam-calculation-engine": {
          status: "in_development",
          title: "CBAM Calculation Engine",
          category: "CBAM",
          kicker: "Embedded emissions calculation and reporting readiness",
          cardDescription:
            "A calculation layer that structures data collection, methodology choices, and product/facility breakdowns for CBAM reporting readiness.",
          heroText:
            "A calculation infrastructure that makes CBAM data collection, embedded emissions calculation, and reporting readiness more controlled and systematic.",
          value:
            "A calculation infrastructure that makes CBAM data collection, embedded emissions calculation, and reporting readiness more controlled and systematic.",
          solves: [
            "CBAM calculations become complex quickly—supplier data, defaults, methodology choices, and product/installation splits multiply risk.",
            "CBAM Calculation Engine standardizes inputs and calculation logic to improve the reliability of compliance and reporting outputs.",
            "When input quality, default boundaries, and traceability are clear, reporting risk drops—and rework decreases.",
          ],
          capabilities: [
            {
              title: "Product- and installation-level calculation",
              description:
                "Set up calculation structure by product/installation split; enforce methodology-consistent outputs.",
            },
            {
              title: "Supplier data structure",
              description:
                "Normalize supplier inputs into consistent formats; surface missing fields and data quality issues.",
            },
            {
              title: "Default value governance",
              description:
                "Control where defaults apply; make the boundary between primary data and defaults transparent.",
            },
            {
              title: "Calculation traceability",
              description:
                "Preserve input → calculation → output trace; build a defensible position for review and audit.",
            },
            {
              title: "Reporting preparation",
              description:
                "Produce consistent reporting outputs for CBAM obligations; standardize quality control steps.",
            },
          ],
          howItWorks: [
            {
              title: "Scope and data mapping",
              description:
                "Define product/installation scope and build a field map for supplier and internal sources.",
            },
            {
              title: "Collect and normalize inputs",
              description:
                "Ingest supplier submissions, apply format/quality checks, and define default-value logic where needed.",
            },
            {
              title: "Execute calculations",
              description:
                "Run methodology-aligned calculation steps; generate results by product and installation.",
            },
            {
              title: "Control and reporting outputs",
              description:
                "Run consistency checks; prepare usable reporting packages.",
            },
          ],
          whoItsFor: [
            "CBAM compliance teams",
            "Sustainability and carbon specialists",
            "Supply chain and procurement teams",
            "Finance and management reporting owners",
          ],
          outputs: [
            "Product and installation-based calculations",
            "Supplier data and default value handling",
            "Reporting-ready output structure",
            "Calculation traceability and control steps",
          ],
        },
        "cbam-financial-impact-engine": {
          status: "in_development",
          title: "CBAM Financial Impact Engine",
          category: "CBAM",
          kicker: "Cost visibility and scenario-based decision support",
          cardDescription:
            "A decision-support solution that makes CBAM exposure visible in financial terms and enables comparable scenario planning.",
          heroText:
            "A decision-support solution designed to make CBAM cost exposure visible, compare scenarios, and support stronger export-oriented decisions.",
          value:
            "A decision-support solution designed to make CBAM cost exposure visible, compare scenarios, and support stronger export-oriented decisions.",
          solves: [
            "CBAM is not only a reporting topic—it creates pricing pressure, margin effects, and the need for scenario-based planning.",
            "CBAM Financial Impact Engine makes exposure visible and compares alternative scenarios in a consistent management frame.",
            "When finance, commercial teams, and compliance owners read the same data in the same frame, decisions become faster and uncertainty decreases.",
          ],
          capabilities: [
            {
              title: "Exposure and cost visibility",
              description:
                "Track CBAM exposure alongside financial impact by product/flow; surface risk areas early.",
            },
            {
              title: "Scenario simulation",
              description:
                "Compare alternative data/assumption scenarios; clarify cost effects for leadership decisions.",
            },
            {
              title: "Pricing and planning support",
              description:
                "Make cost pressure visible for export-oriented planning; accelerate decision cycles.",
            },
            {
              title: "Executive-ready summaries",
              description:
                "Produce crisp summaries for management reviews; support strategic trade-offs with clarity.",
            },
          ],
          howItWorks: [
            {
              title: "Define the cost model",
              description:
                "Clarify exposure drivers, data inputs, and financial model logic.",
            },
            {
              title: "Define scenarios",
              description:
                "Set assumptions and alternatives; prepare a comparison framework.",
            },
            {
              title: "Simulate and compare",
              description:
                "Run scenarios; quantify cost deltas and drivers.",
            },
            {
              title: "Management outputs",
              description:
                "Package decision-support outputs and short-form leadership briefs.",
            },
          ],
          whoItsFor: [
            "Finance and pricing teams",
            "Leadership and strategy teams",
            "CBAM compliance and sustainability owners",
            "Export and commercial planning teams",
          ],
          outputs: [
            "Financial exposure simulation",
            "Scenario-based cost comparison",
            "Management-ready decision support",
            "Product/flow level risk visibility",
          ],
        },
        "digital-product-passport-platform": {
          status: "coming_soon",
          title: "Digital Product Passport Platform",
          category: "Digital Product Passport",
          kicker: "Product data architecture and passport-ready records",
          cardDescription:
            "A platform designed to structure product data, technical records, and traceability logic in a passport-ready schema.",
          heroText:
            "A platform designed to structure product data, technical records, and traceability logic in line with future digital product passport requirements.",
          value:
            "A platform designed to structure product data, technical records, and traceability logic in line with future digital product passport requirements.",
          solves: [
            "Product data and traceability records often live across systems; technical documentation is not passport-ready by design.",
            "This platform provides a controlled framework for data architecture, record logic, and passport-ready content production.",
            "With the right schema, ownership, and freshness controls, passport readiness becomes an executable process—not a last-minute document chase.",
          ],
          capabilities: [
            {
              title: "Passport-ready product data architecture",
              description:
                "Structure product fields and relationships for passport logic; build a reusable record schema.",
            },
            {
              title: "Traceability and record logic",
              description:
                "Organize critical traceability records and evidence links; manage transparency expectations with discipline.",
            },
            {
              title: "Technical documentation structure",
              description:
                "Manage technical records and documents in a passport-ready layout; enforce freshness controls.",
            },
            {
              title: "Controlled publishing and sharing",
              description:
                "Produce required content packages; share with stakeholders through a governed access model.",
            },
          ],
          howItWorks: [
            {
              title: "Define fields and schema",
              description:
                "Clarify product data fields; define passport schema and relationship logic.",
            },
            {
              title: "Link records and documents",
              description:
                "Connect records to evidence and documents; implement consistency checks.",
            },
            {
              title: "Produce passport-ready packages",
              description:
                "Generate passport-ready content bundles; plan publishing and access scenarios.",
            },
          ],
          whoItsFor: [
            "Product data owners",
            "Quality and technical documentation teams",
            "Compliance and sustainability teams",
            "Supply chain and traceability owners",
          ],
          outputs: [
            "Product data architecture",
            "Traceability and record logic",
            "Passport-ready structure",
            "Governed publishing and sharing packages",
          ],
        },
        "packaging-compliance-cost-os": {
          status: "coming_soon",
          title: "Packaging Compliance & Cost OS",
          category: "Packaging compliance",
          kicker: "Compliance, cost visibility, and decision flow",
          cardDescription:
            "A platform designed to manage packaging data, compliance obligations, and cost logic in one connected structure.",
          heroText:
            "A solution that brings packaging composition, compliance obligations, fee logic, and cost impacts together in one digital operating layer.",
          value:
            "A solution that brings packaging composition, compliance obligations, fee logic, and cost impacts together in one digital operating layer.",
          solves: [
            "Packaging composition, inventory, and compliance requirements often sit in separate tables—fee logic and cost impact stay unclear.",
            "This solution brings data, compliance, and cost visibility into one operating logic to strengthen decision-making.",
            "When product, procurement, and finance teams share the same packaging reality, compliance risk drops and cost surprises reduce.",
          ],
          capabilities: [
            {
              title: "Packaging inventory structure",
              description:
                "Model packaging components and composition; link inventory logic to products.",
            },
            {
              title: "Compliance and obligation mapping",
              description:
                "Map requirements to data fields; surface gaps and risk areas.",
            },
            {
              title: "Fee and cost logic",
              description:
                "Make fee/charge mechanics visible; connect cost impact to product and design decisions.",
            },
            {
              title: "Decision-support outputs",
              description:
                "Compare design/procurement changes; produce crisp summaries for leadership decisions.",
            },
          ],
          howItWorks: [
            {
              title: "Inventory and fields",
              description:
                "Define packaging inventory fields and product relationships.",
            },
            {
              title: "Compliance logic",
              description:
                "Align rules with required data; implement control steps.",
            },
            {
              title: "Cost and decision outputs",
              description:
                "Expose fee/cost drivers; generate decision-support outputs.",
            },
          ],
          whoItsFor: [
            "Packaging and product teams",
            "Compliance and regulatory owners",
            "Finance and cost management",
            "Supply chain and procurement",
          ],
          outputs: [
            "Packaging inventory structure",
            "Compliance and fee visibility",
            "Cost and design decision support",
            "Product-level compliance and cost summaries",
          ],
        },
        "sustainable-supply-chain-platform": {
          status: "coming_soon",
          title: "Sustainable Supply Chain Platform",
          category: "Supply chain",
          kicker: "Supplier data, evidence flow, and readiness visibility",
          cardDescription:
            "A platform designed to run supplier engagement, data collection, and document flows in a traceable workflow.",
          heroText:
            "A supply chain platform designed to make supplier data, document flow, traceability, and readiness visibility more systematic.",
          value:
            "A supply chain platform designed to make supplier data, document flow, traceability, and readiness visibility more systematic.",
          solves: [
            "Supplier evidence and documents progress in fragments—readiness and traceability visibility stays weak.",
            "This platform organizes supplier interactions, data/evidence flows, and traceability logic in one coherent structure.",
            "With clear control steps and closure discipline, supply chain readiness becomes measurable and manageable.",
          ],
          capabilities: [
            {
              title: "Supplier onboarding",
              description:
                "Structure supplier profiles and responsibilities; standardize data collection.",
            },
            {
              title: "Requests and response tracking",
              description:
                "Track requests and responses; surface delays and missing fields.",
            },
            {
              title: "Document and evidence flow",
              description:
                "Link documents to records; strengthen audit trail and control steps.",
            },
            {
              title: "Readiness visibility",
              description:
                "Provide supply-chain level readiness and risk visibility; clarify priorities.",
            },
          ],
          howItWorks: [
            {
              title: "Define supplier structure",
              description:
                "Set onboarding logic; define required fields and documents.",
            },
            {
              title: "Collect and control",
              description:
                "Run the data/evidence flow with quality and completeness controls.",
            },
            {
              title: "Visibility and reporting",
              description:
                "Produce readiness/risk visibility and governance reporting outputs.",
            },
          ],
          whoItsFor: [
            "Procurement and supply chain teams",
            "Compliance and sustainability owners",
            "Supplier relationship teams",
            "Reporting and governance functions",
          ],
          outputs: [
            "Supplier onboarding and data collection",
            "Document and evidence flow",
            "Supply chain readiness visibility",
            "Checklists and status tracking",
          ],
        },
        "eudr-due-diligence-platform": {
          status: "coming_soon",
          title: "EUDR Due Diligence Platform",
          category: "EUDR",
          kicker: "Geolocation, origin, and due diligence discipline",
          cardDescription:
            "A platform designed to manage geolocation and origin records together with document control and due diligence workflows.",
          heroText:
            "A platform designed to structure geolocation, origin linkage, document control, and due diligence records for EUDR readiness.",
          value:
            "A platform designed to structure geolocation, origin linkage, document control, and due diligence records for EUDR readiness.",
          solves: [
            "EUDR due diligence requires controlled management of geolocation, origin records, and evidence-heavy document flows.",
            "This platform unifies record logic, traceability, and readiness tracking in one disciplined system.",
            "When geolocation–origin linkage and evidence flow are visible in one place, statement readiness becomes more defensible.",
          ],
          capabilities: [
            {
              title: "Geolocation and origin records",
              description:
                "Relate geolocation data to origin records; enforce consistent record logic.",
            },
            {
              title: "Due diligence document flow",
              description:
                "Bind documents to process steps; surface missing or inconsistent items.",
            },
            {
              title: "Risk visibility",
              description:
                "Make risk areas visible; strengthen prioritization and closure discipline.",
            },
            {
              title: "Readiness tracking",
              description:
                "Track completion and statement-ready preparation; build a defensible audit trail.",
            },
          ],
          howItWorks: [
            {
              title: "Record schema",
              description:
                "Define geolocation, origin, and supply-chain relationship logic; clarify required fields.",
            },
            {
              title: "Documents and controls",
              description:
                "Attach due diligence documents; run evidence and control workflows.",
            },
            {
              title: "Statement readiness",
              description:
                "Produce readiness visibility and structure outputs for statement-ready preparation.",
            },
          ],
          whoItsFor: [
            "Compliance and regulatory teams",
            "Supply chain and procurement",
            "Risk and governance functions",
            "Data and document owners",
          ],
          outputs: [
            "Geolocation and origin records",
            "Due diligence document flow",
            "EUDR readiness tracking",
            "Risk and gap visibility",
          ],
        },
      },
    },
    detail: {
      comingSoonPositioning: [
        "Currently being shaped around selected use cases and practical compliance needs.",
      ],
      sections: {
        whatItSolves: "What It Solves",
        keyCapabilities: "Key Capabilities",
        howItWorks: "How It Works",
        whoItsFor: "Who It’s For",
        outputs: "Outputs",
      },
      whoSupportingNote:
        "These products are positioned to strengthen consultancy delivery—not to replace it—by improving data discipline, traceability, and decision-ready workflows for compliance and reporting.",
      backToSoftware: "Back to software",
      comingSoonPanelTitle: "Coming soon — early access & planning",
      finalCta: {
        title: "Let’s clarify the right product structure together",
        description:
          "We can quickly assess priorities and use cases and define the most suitable starting framework.",
      },
    },
  },
};
