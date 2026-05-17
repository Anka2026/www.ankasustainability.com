import type { JsonObject } from "@/lib/merge-messages";

export const nlServicesDigitalSolutionPatch: JsonObject = {
  servicesPage: {
    overview: {
      eyebrow: "Onze servicebenadering",
      title: "Van regelgevingsdruk naar een werkbaar ritme voor uw teams",
      text: "In programma’s rond CO₂, ESG, product, toeleveringsketen en marktgerichte trajecten verbinden we prioriteiten, eigenaarschap van data, bewijsdiscipline en uitvoerbare workflows—zodat duurzaamheid werkbaar, traceerbaar en verdedigbaar blijft wanneer eisen veranderen.",
      strip: [
        { title: "Scope en prioriteit" },
        { title: "Data-eigenaarschap" },
        { title: "Bewijs en traceerbaarheid" },
        { title: "Beheersbare workflows" },
      ],
    },
    relatedDigitalSolution: {
      eyebrow: "DIGITALE WERKONDERSTEUNING",
      mainTitle: "Digitale Structuur Ter Ondersteuning Van Deze Werkzaamheden",
      intro:
        "De hier genoemde digitale oplossingen vervangen het adviestraject niet. Ze helpen data-inwinning, bewijsdiscipline, opvolging van ontbrekende velden en voorbereidingszichtbaarheid te structureren—zodat technische evaluatie binnen uw organisatie een beter traceerbaar, verdedigbaar en beheersbaar werkritme wordt.",
      moduleCta: "Bekijk De Softwareoplossing",
      allSoftwareCta: "Bekijk Alle Softwareoplossingen",
      cta: "Bekijk De Softwareoplossing",
      previewBadge: "Digitale ondersteuning",
      modules: {
        cbam: {
          title: "Beheer CBAM-Berekening En Compliance-Operatie Samen",
          description:
            "CBAM-werk gaat niet alleen om berekening; product-, installatie- en leveranciersgegevens, bewijsdossiers en verklaringvoorbereiding moeten binnen dezelfde werkstructuur worden beheerd. De Calculation Engine ondersteunt de berekeningskant, terwijl de Compliance Console leveranciersdataflows en compliance-operaties ondersteunt.",
          submodules: [
            "Arvenza CBAM Calculation Engine",
            "Arvenza CBAM Compliance Console",
          ],
          submoduleFocus: [
            "Ondersteunt product- en installatiegebonden berekeningen van ingebedde emissies en methodologiecontrole.",
            "Ondersteunt leveranciersdataworkflows, bewijsdossiers, opvolging van ontbrekende velden en compliance-operaties voor verklaringvoorbereiding.",
          ],
          chips: [
            "Berekening ingebedde emissies",
            "Leveranciersdataworkflow",
            "Bewijs- en voorbereidingsopvolging",
          ],
        },
      },
      categoryBand: {
        productCircularity: {
          extraNote:
            "Deze digitale structuur wordt niet gepositioneerd als LCA- of EPD-berekeningssoftware; zij ondersteunt productdata, verpakkingsinformatie, verklaringsvelden en traceerbaarheid.",
        },
      },
      digitalModules: {
        "cbam-calculation-engine": {
          title: "Arvenza CBAM Calculation Engine",
          description:
            "Ondersteunt berekening van ingebedde emissies met product- en installatiegegevens en methodologiecontrole.",
          chips: [
            "Berekening ingebedde emissies",
            "Product- en installatiegegevens",
            "Methodologiecontrole",
          ],
        },
        "cbam-compliance-console": {
          title: "Arvenza CBAM Compliance Console",
          description:
            "Ondersteunt leveranciersdataworkflow, bewijsdossier, opvolging van ontbrekende velden en verklaringvoorbereiding.",
          chips: ["Leveranciersdataworkflow", "Bewijsdossier", "Verklaringvoorbereiding"],
        },
        "eudr-due-diligence-traceability": {
          title: "Arvenza EUDR Due Diligence- en Traceerbaarheidsplatform",
          description:
            "Helpt om product- en ketendata binnen de EUDR-scope traceerbaar te beheren voor herkomst, geolocatie, risicobeoordeling en verklaringvoorbereiding.",
          chips: ["Herkomst en geolocatie", "Risicobeoordeling", "Verklaringvoorbereiding"],
        },
        "digital-product-passport-platform": {
          title: "Arvenza DPP Productpaspoortplatform",
          description:
            "Ondersteunt datastructuur voor productdata, verklaringsvelden, traceerbaarheid en paspoortvoorbereiding. Zij vervangt geen LCA- of EPD-technisch werk.",
          chips: ["Productdatamodel", "Traceerbaarheid", "Verklaringsvelden"],
        },
        "packaging-compliance-tool": {
          title: "Arvenza PPWR- en Verpakkingscomplianceplatform",
          description:
            "Helpt om verpakkingsinventaris, materiaalsamenstelling en compliancebewijs in een gestructureerde data- en documentworkflow te beheren.",
          chips: ["Verpakkingsinventaris", "Materiaalsamenstelling", "Compliancebewijs"],
        },
        "supplier-data-evidence-workflow": {
          title: "Arvenza Leveranciersdata- en Bewijsworkflow",
          description:
            "Helpt om dataverzoeken, opvolging van ontbrekende velden en goedkeurings- en revisiestappen samen met traceerbaarheid en bewijsdiscipline te beheren.",
          chips: ["Dataverzoeken", "Opvolging ontbrekende velden", "Goedkeuring en revisie"],
        },
        "esg-evidence-reporting-workspace": {
          title: "Arvenza ESG Bewijs- en Rapportagewerkruimte",
          description:
            "Ondersteunt bewijsbibliotheken, verantwoordelijkheidsopvolging en rapportagevoorbereiding in een traceerbaardere workflow voor CSRD/ESRS en corporate reporting.",
          chips: [
            "Bewijsbibliotheek",
            "Verantwoordelijkheidsopvolging",
            "Voorbereidingszichtbaarheid",
          ],
        },
      },
    },
  },
};
