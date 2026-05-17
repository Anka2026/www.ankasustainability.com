import type { JsonObject } from "@/lib/merge-messages";

export const enSectorsHeroIntroPatch: JsonObject = {
  sectorsPage: {
    detail: {
      focusStripLabel: "Our focus areas",
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In textile and fashion, European market access increasingly depends on DPP readiness, product sustainability data, material composition, and supply chain visibility held in one product record. Product declarations, chemical compliance records, and supplier data discipline are now reviewed as structured evidence—not marketing narrative.",
              "Typical technical friction appears when SKU and variant logic is not mapped to BOM, material, and supplier layers; when chemical claims are not tied to current proof; and when DPP and compliance work run in separate teams. ANKA structures product identity, material data, and supply chain evidence in one control framework for this sector.",
            ],
          },
        },
      },
      "agriculture-food": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In agriculture and food, origin, traceability, and supplier data are assessed together with EUDR readiness, environmental performance, and raw-material evidence. Water, carbon, and operational data discipline requires a consistent record model at lot, geography, and supplier-declaration level.",
              "Organisations often collect field data but cannot build verifiable evidence at site or supplier tier. ANKA aligns traceability, supplier data requests, and regulatory preparation under one data architecture for this sector.",
            ],
          },
        },
      },
      "packaging-plastics-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In packaging, plastics, and materials, PPWR links product and packaging data, material composition, recyclability, and market declaration requirements to the same product inventory. LCA and EPD expectations, together with supplier declarations, require a shared data language across design, procurement, and compliance.",
              "Technical risk rises when packaging BOM is detached from product master data, material shares are not maintained, and recyclability claims are not linked to evidence files. ANKA aligns packaging inventory, material discipline, and compliance declarations in one structure.",
            ],
          },
        },
      },
      "building-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In building materials, the European market expects LCA, EPD, product carbon footprint, and technical declarations as evidence-based product information. Product family logic, variant management, and site-level production data must be structured to respond to different market requests within one portfolio.",
              "Common friction includes EPD and carbon data not mapped to product hierarchy, technical files falling out of date, and data gaps at supplier or raw-material tier. ANKA manages product family logic, environmental data, and technical documentation together for this sector.",
            ],
          },
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In metal, aluminium, and industrial production, CBAM requires product-level embedded emissions, production route, electricity and fuel data, and precursor records in one calculation framework. ASI readiness and supplier data depend on field information that is verifiable and auditable.",
              "Technical difficulty often comes from inconsistent facility and product definitions, mixing default values with actual production data, and supplier declarations not mapped to methodology. ANKA structures emissions data, production route, and supply chain evidence defensibly for this sector.",
            ],
          },
        },
      },
      "automotive-mobility": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In automotive and mobility supply chains, customer and OEM data requests combine product carbon footprint, material compliance, Scope 3, and traceability at component and supplier level. Product-level environmental data must be defined consistently by part number, material class, and supplier tier.",
              "Teams often run survey-based collection without data structure, validation, or revision control—so requests reopen every model year. ANKA turns supplier data requests, material compliance, and product-level environmental data into a repeatable flow.",
            ],
          },
        },
      },
      "chemicals-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In chemicals and industrial chemicals, product compliance requires technical documentation, environmental data, and safety or compliance declarations to be managed with REACH and CLP awareness. Supplier declarations and formulation data become central references in customer, market, and internal compliance checks.",
              "Typical issues include SDS and compliance files not mapped to the product portfolio, environmental data not held at product-family level, and broken evidence chains when suppliers change. ANKA unites product compliance, technical files, and supplier data in a controlled record model.",
            ],
          },
        },
      },
      "tourism-hospitality": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In tourism and hospitality, GSTC and sustainable tourism programmes assess environmental and cultural sustainability, operational monitoring, and action plans together with an evidence file. Data and evidence structure at property, destination, or brand level is decisive in audit and certification processes.",
              "Common friction includes indicators not linked to operational data, action plans run separately from evidence files, and unclear responsibility maps across multi-site operations. ANKA structures programme, monitoring, and evidence in a manageable framework for this sector.",
            ],
          },
        },
      },
    },
  },
};
