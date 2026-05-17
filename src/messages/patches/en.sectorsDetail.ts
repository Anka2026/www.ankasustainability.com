import type { JsonObject } from "@/lib/merge-messages";

export const enSectorsDetailPatch: JsonObject = {
  sectorsPage: {
    detail: {
      backToSectors: "Back To Sectors",
      relatedWorkTitle: "Related Work Areas",
      relatedServicesEyebrow: "Related services",
      relatedServicesCta: "View all services",
      sectionLabels: {
        reality: "Sector Reality",
        criticalAreas: "Critical Compliance and Data Areas",
        challenges: "Common Challenges",
        ankaApproach: "ANKA's Approach",
      },
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          chips: ["DPP readiness", "Supply chain visibility", "Product sustainability data"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Textile and fashion companies face rising expectations on product environmental data, material composition, chemical compliance, and supply chain transparency—not as isolated marketing claims, but as structured evidence buyers and regulators can review.",
              "CBAM may not apply to every finished garment, yet embedded emissions, supplier data, and product-level environmental information increasingly shape procurement decisions and reporting boundaries across the value chain.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Digital product passport data structures and ownership across product, supplier, and document layers",
              "Material composition, chemical compliance, and conformity documentation linked to SKU-level records",
              "Supply chain visibility: tier mapping, supplier data requests, and evidence for origin and processing claims",
              "Product sustainability metrics and claims supported by traceable calculation and review logic",
              "Alignment between product environmental workstreams and corporate sustainability reporting where required",
            ],
          },
          challenges: {
            bullets: [
              "Fragmented product and supplier data spread across PLM, ERP, and supplier spreadsheets without a single evidence model",
              "DPP preparation treated as a document exercise before product and supply chain data ownership is clear",
              "Sustainability claims advanced without consistent material composition or chemical compliance records",
              "Limited visibility into upstream emissions and environmental data requested by buyers or future regulation",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA structures textile and fashion work around sector-specific product data, supply chain visibility, and defensible sustainability communication—not generic templates disconnected from how collections, suppliers, and compliance files are actually managed.",
              "We clarify priority data domains, assign ownership, and build a traceable working rhythm that connects DPP readiness, product sustainability evidence, and reporting preparation where your market and buyer context require it.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "ESG and Corporate Reporting",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "agriculture-food": {
        hero: {
          chips: ["Origin and traceability", "EUDR readiness", "Supplier data discipline"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Agri-food chains combine origin, processing, and distribution data with environmental performance expectations on water, carbon, land use, and supplier practice—often across fragmented farm, trader, and processor relationships.",
              "Regulations such as EUDR raise the bar on traceability, due diligence, and documented evidence for commodities and derived products entering EU markets.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Origin, plot, and chain-of-custody logic with clear boundaries for mixed and processed products",
              "Supplier and trader data structures, including gaps, assumptions, and quality review for traceability claims",
              "Environmental performance data: water, carbon, soil, and land-related metrics where relevant to disclosure or buyers",
              "EUDR-aligned due diligence files, risk assessment, and evidence links—not one-off supplier declarations",
              "Connection between supply chain data work and Scope 3 or corporate reporting where the same evidence must hold",
            ],
          },
          challenges: {
            bullets: [
              "Traceability limited to certificates without geolocation, volume, or processing evidence that can be reviewed",
              "Supplier data collected late in the season or only for one commodity while portfolios are mixed",
              "Environmental metrics reported without consistent methodology or site-level data ownership",
              "EUDR preparation reduced to template forms without mapping real sourcing routes and control points",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA helps agri-food organisations define what must be known about origin, suppliers, and environmental performance—and how that information is collected, checked, and retained in a workable file structure.",
              "We prioritise EUDR and buyer-driven traceability requirements alongside data discipline for carbon, water, and reporting, so teams are not running parallel, incompatible evidence tracks.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Carbon, Climate and Decarbonisation",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "ESG and Corporate Reporting",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "packaging-plastics-materials": {
        hero: {
          chips: ["PPWR alignment", "Material and recyclability data", "LCA / EPD"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Packaging and materials producers must manage composition, recyclability, and environmental performance data while responding to PPWR and market-facing product declarations—not only internal specification sheets.",
              "LCA, EPD, and product carbon information increasingly sit alongside compliance data as buyers expect comparable, evidence-backed product profiles.",
            ],
          },
          criticalAreas: {
            bullets: [
              "PPWR-relevant packaging data: formats, components, recycled content, and design-for-recycling logic",
              "Material composition records and supplier declarations supporting conformity and market statements",
              "Recyclability assessment inputs, assumptions, and documentation aligned to product families",
              "LCA / EPD and product carbon footprint boundaries, datasets, and reviewable calculation files",
              "Linkage between product environmental data and customer or authority-facing declarations",
            ],
          },
          challenges: {
            bullets: [
              "Packaging portfolios described at marketing level while SKU-level material data remains incomplete",
              "Recyclability claims without consistent methodology or supplier-backed composition evidence",
              "LCA and EPD projects run separately from PPWR and conformity data structures",
              "Supplier declarations stored informally without version control or link to finished product records",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA connects PPWR, material data, recyclability, and product environmental performance into one manageable architecture—so teams know which data feeds compliance, which feeds market communication, and who owns updates.",
              "We focus on traceable product records, governed assumptions, and evidence that can be explained to customers and internal reviewers without rebuilding the file each reporting cycle.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
          ],
        },
      },
      "building-materials": {
        hero: {
          chips: ["LCA and EPD", "Product carbon footprint", "Technical declarations"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Construction products are sold on technical performance and increasingly on environmental evidence—LCA, EPD, product carbon footprint, and declaration data that must stand up in European procurement and certification contexts.",
              "Market access depends on consistent product records, transparent modelling choices, and documentation that links environmental profiles to specific product ranges—not generic industry averages alone.",
            ],
          },
          criticalAreas: {
            bullets: [
              "LCA and EPD scope, functional units, and datasets aligned to product families and production sites",
              "Product carbon footprint logic and updates when recipes, energy mix, or suppliers change",
              "Technical declarations and environmental product information required for target markets",
              "Verification-ready files: assumptions, data sources, and sign-off discipline",
              "Integration between product environmental data and customer or platform submission formats",
            ],
          },
          challenges: {
            bullets: [
              "EPD libraries reused without clear rules for when plant-specific or supplier-specific data is required",
              "Product carbon figures communicated before underlying activity data and boundaries are governed",
              "Technical files scattered across consultants, plants, and sales teams without a single product index",
              "Late-stage verification gaps because evidence was not structured during calculation work",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA structures building-materials work around trustworthy product environmental profiles—linking LCA, EPD, carbon footprint, and technical declaration needs to how plants, products, and customer requests actually flow.",
              "We help teams build repeatable calculation and documentation routines that support market access and review, rather than one-off project outputs that are hard to maintain across the portfolio.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Certification, Traceability and Market Confidence",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          chips: ["CBAM embedded emissions", "Production route data", "ASI readiness"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Metals and industrial manufacturing face direct pressure on embedded emissions, production-route transparency, and precursor data—especially where CBAM and customer carbon requests intersect with plant-level electricity, fuel, and process information.",
              "Market programmes such as ASI add stewardship and traceability expectations on top of regulatory carbon data, requiring aligned—not duplicate—evidence structures.",
            ],
          },
          criticalAreas: {
            bullets: [
              "CBAM product and installation scope, production routes, and embedded emissions calculation logic",
              "Electricity, fuel, and process activity data with clear boundaries and quality review",
              "Precursor and input data from suppliers, including formats, defaults, and documented assumptions",
              "Product-level carbon footprint and customer data requests mapped to the same core datasets where possible",
              "ASI and market-readiness files: policies, controls, and traceable records supporting stewardship claims",
            ],
          },
          challenges: {
            bullets: [
              "Plant data held in engineering systems while CBAM and customer requests expect harmonised product views",
              "Supplier precursor information accepted without quality tiers or reconciliation to production records",
              "Separate CBAM, PCF, and certification workstreams with inconsistent product lists and ownership",
              "Financial and operational teams receiving carbon figures without traceable methodology documentation",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA builds a coherent data and evidence model for metals and industrial producers—connecting CBAM, product carbon, production-route logic, and market programmes to shared product and site records where feasible.",
              "We emphasise verifiable calculation files, supplier data discipline, and governance that management and customers can follow—not isolated spreadsheets per request.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Certification, Traceability and Market Confidence",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "automotive-mobility": {
        hero: {
          chips: ["Supplier data management", "Product carbon footprint", "EU market compliance"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Automotive and mobility suppliers manage intense customer data requests on materials, compliance, product carbon footprint, and Scope 3—often with short deadlines and differing formats across OEM programmes.",
              "EU market expectations tie product environmental data, material conformity, and supply chain documentation into a single credibility test for tiered supply bases.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Supplier data request management: templates, timelines, quality review, and escalation logic",
              "Product carbon footprint boundaries and datasets aligned to customer and part-level reporting needs",
              "Material compliance and substance data linked to parts, BOMs, and change control",
              "Scope 3 and category logic connected to supplier and product records where required",
              "Documentation packs for EU market and customer audits with clear ownership and version control",
            ],
          },
          challenges: {
            bullets: [
              "Reactive responses to OEM portals without an internal master data model for parts and suppliers",
              "PCF figures shared before activity data and allocation rules are agreed and documented",
              "Material compliance files updated locally while central BOM records lag behind engineering changes",
              "Scope 3 inventories built from spend data alone where customers expect supplier-specific evidence",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA helps automotive and mobility suppliers organise supplier data, product carbon, and compliance documentation into a controlled operating rhythm—so customer requests are met from governed records, not ad hoc file hunts.",
              "We align EU market readiness, PCF, and reporting preparation with how engineering, procurement, and sustainability teams already work, reducing parallel tracks and last-minute reconciliation.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Carbon, Climate and Decarbonisation",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
          ],
        },
      },
      "chemicals-industrial": {
        hero: {
          chips: ["Product compliance data", "Technical documentation", "REACH / CLP awareness"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Chemical and industrial chemical businesses must maintain product conformity, safety and environmental data, and technical documentation that can be defended across REACH/CLP-aware markets and demanding customer audits.",
              "Supplier declarations and composition data are as critical as internal formulation records when products are traded, reformulated, or sourced across regions.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Product compliance and data structures linking composition, classification, and use conditions",
              "Technical documentation, SDS logic, and update triggers when formulations or suppliers change",
              "REACH / CLP-relevant information flows and roles—not legal advice, but data and file discipline",
              "Supplier declarations, purity grades, and impurity data with review and retention rules",
              "Connection between product compliance files and corporate sustainability or customer questionnaires",
            ],
          },
          challenges: {
            bullets: [
              "Formulation knowledge held by R&D while customer-facing files are maintained separately by regulatory affairs",
              "Supplier declarations accepted without matching internal specification or lot traceability",
              "Technical documentation updated reactively after customer audits rather than through governed change control",
              "Sustainability questionnaires answered without consistent links to underlying product and safety data",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA supports chemicals organisations in structuring product compliance, technical documentation, and supplier information into a coherent, reviewable system—so market and customer requests draw on the same controlled records.",
              "We focus on clear data ownership, document control, and evidence chains that teams can run between reformulations, new suppliers, and reporting cycles—without promising outcomes ANKA does not certify.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU Regulations and Supply Chain Compliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Product Sustainability, LCA and EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "ESG and Corporate Reporting",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "tourism-hospitality": {
        hero: {
          chips: ["GSTC criteria readiness", "Evidence files", "Operational monitoring"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Hotels, tour operators, and destinations are evaluated on management systems, environmental performance, cultural stewardship, and guest-facing practice—not on a single emissions number alone.",
              "Programmes such as GSTC and the Türkiye Environmental and Cultural Sustainability Programme require structured gap analysis, evidence files, and operational follow-up that teams can maintain between assessments.",
            ],
          },
          criticalAreas: {
            bullets: [
              "GSTC criteria mapping, gap analysis, and prioritised action planning across sites or brands",
              "Environmental data: energy, water, waste, and procurement metrics with defined collection roles",
              "Evidence files linking policies, records, training, and on-site practices to criterion requirements",
              "Cultural and community impact documentation where programme criteria require demonstrable practice",
              "Operational monitoring rhythms and responsibilities so preparation is continuous—not pre-audit only",
            ],
          },
          challenges: {
            bullets: [
              "Sustainability treated as marketing collateral without operational indicators and signed records",
              "Evidence gathered in folders by department without a criterion-indexed file structure",
              "Gap analyses produced once but not translated into owned actions and monitoring schedules",
              "Multiple sites or brands working to different informal standards without a group-wide baseline",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA works with tourism and hospitality organisations on GSTC-aligned preparation, programme readiness, and evidence organisation—clarifying what must be demonstrated, who collects it, and how files are maintained over time.",
              "We do not issue certificates or guarantee assessment outcomes; we help teams build a credible, workable evidence base and action rhythm that supports internal management and external review.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Sustainable Tourism, GSTC and the Türkiye Environmental and Cultural Sustainability Programme",
              href: "/services/sustainable-tourism-gstc",
            },
            {
              label: "ESG and Corporate Reporting",
              href: "/services/esg-corporate-reporting",
            },
            {
              label: "Certification, Traceability and Market Confidence",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
    },
  },
};
