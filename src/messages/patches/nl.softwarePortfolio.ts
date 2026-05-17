import type { JsonObject } from "@/lib/merge-messages";

export const nlSoftwarePortfolioPatch: JsonObject = {
  home: {
    software: {
      description:
        "Acht digitale werkomgevingen brengen structuur in data, naleving, traceerbaarheid en verklaringsvoorbereiding—zodat advies aantoonbaar, herhaalbaar en goed uitvoerbaar blijft met uw teams.",
      portfolioTitle: "Softwareset die aansluit op de ANKA-advieslevering",
      portfolioSupport:
        "CBAM, EUDR, DPP, PPWR, leveranciersbewijs, ESG-rapportage en agri-klimaatmodules zijn afgestemd op Europese compliance-realiteit en worden in hetzelfde ritme geleverd als het ANKA-advies.",
      items: [
        "CBAM Calculation Engine",
        "CBAM Compliance Console",
        "EUDR due diligence & traceerbaarheid",
        "PPWR & verpakkingscompliance",
        "Digital Product Passport-platform",
        "Leveranciersdata & bewijsworkflow",
        "ESG-bewijs & rapportagewerkruimte",
        "Agri-Climate-platform",
      ],
    },
  },
  softwarePage: {
    hero: {
      panel: {
        items: [
          "CBAM Calculation Engine",
          "CBAM Compliance Console",
          "EUDR due diligence & traceerbaarheid",
          "PPWR / verpakkingscompliance",
          "Digital Product Passport",
          "Leveranciersdata & bewijs",
          "ESG-bewijs workspace",
          "Agri-Climate",
        ],
      },
    },
    portfolio: {
      description:
        "Acht modules, gevormd door operationele use-cases, brengen datamodellen, traceerbare workflows en outputdiscipline samen in één portfolio. De kaartbeelden zijn echte productschermen.",
      previewBadge: "Digitale ondersteuning",
      cardPreview: {
        "cbam-calculation-engine": {
          chips: [
            "Berekening ingebedde emissies",
            "Product- en installatiegegevens",
            "Methodologiecontrole",
          ],
        },
        "cbam-compliance-console": {
          chips: ["Leveranciersdataworkflow", "Bewijsdossier", "Verklaringvoorbereiding"],
        },
        "eudr-due-diligence-traceability": {
          chips: ["Herkomst en geolocatie", "Risicobeoordeling", "Verklaringvoorbereiding"],
        },
        "digital-product-passport-platform": {
          chips: ["Productdatamodel", "Traceerbaarheid", "Verklaringsvelden"],
        },
        "packaging-compliance-tool": {
          chips: ["Verpakkingsinventaris", "Materiaalsamenstelling", "Compliancebewijs"],
        },
        "supplier-data-evidence-workflow": {
          chips: ["Dataverzoeken", "Opvolging ontbrekende velden", "Goedkeuring en revisie"],
        },
        "esg-evidence-reporting-workspace": {
          chips: [
            "Bewijsbibliotheek",
            "Verantwoordelijkheidsopvolging",
            "Voorbereidingszichtbaarheid",
          ],
        },
        "agri-climate-platform": {
          chips: ["Land- en activiteitsregistratie", "Berekeningsworkflow", "Bewijszichtbaarheid"],
        },
      },
      products: {
        "eudr-due-diligence-traceability": {
          pill: "EUDR",
          status: "selected_use",
          title: "Arvenza EUDR Due Diligence- en Traceerbaarheidsplatform",
          summary:
            "Helpt bij het beheren van leveranciersdata, herkomst, geolocatie, risicobeoordeling en verklaringvoorbereiding voor producten binnen de EUDR-scope.",
          modalTagline:
            "Helpt bij het beheren van leveranciersdata, herkomst, geolocatie, risicobeoordeling en verklaringvoorbereiding voor producten binnen de EUDR-scope.",
          modalWhatFor:
            "Naarmate EUDR-verklaringen en due diligence-verplichtingen vanaf 1 januari 2027 operationeel belangrijker worden, is het verzamelen van productinformatie alleen niet voldoende. Leveranciersverklaringen, product- en batchkoppelingen, herkomstgegevens, perceel- of productielocatiegegevens, risicobeoordelingen en bewijsdossiers moeten gestructureerd en traceerbaar worden beheerd.",
          modalTeamValue:
            "De Arvenza EUDR-module helpt bedrijven om product- en ketendata binnen de EUDR-scope te ordenen, ontbrekende informatie op te volgen, risicobeoordelingsstappen te documenteren en de registratiestructuur voor verklaringvoorbereiding te versterken.",
          modalPrimaryCta: "Plan EUDR-voorbereiding",
          modalSecondaryCta: "Bekijk Platformstructuur",
          detailPrimaryCta: "Plan EUDR-voorbereiding",
          detailSecondaryCta: "Bekijk Platformstructuur",
          bullets: [
            "Product- en HS-code scope tracking",
            "Leveranciers- en herkomstgegevensbeheer",
            "Geolocatie- en productielocatieregistraties",
            "Risicobeoordeling en statusclassificatie",
            "Bewijsdossier- en documentbeheer",
            "Registratiestructuur voor EUDR-verklaringvoorbereiding",
            "Ontbrekende data, revisie- en goedkeuringsflows",
            "Managementdashboard en voorbereidingszichtbaarheid",
          ],
          screenshotAlt: "Dashboardvoorbeeld van het Arvenza EUDR-platform",
          modalVisualCaption:
            "Gecontroleerde dashboardvoorbeeld voor EUDR due diligence- en traceerbaarheidsworkflows",
          heroText:
            "Naarmate EUDR-verklaringen en due diligence-verplichtingen vanaf 1 januari 2027 operationeel belangrijker worden, is het verzamelen van productinformatie alleen niet voldoende. Leveranciersverklaringen, product- en batchkoppelingen, herkomstgegevens, perceel- of productielocatiegegevens, risicobeoordelingen en bewijsdossiers moeten gestructureerd en traceerbaar worden beheerd. De Arvenza EUDR-module helpt bedrijven om product- en ketendata binnen de EUDR-scope te ordenen, ontbrekende informatie op te volgen, risicobeoordelingsstappen te documenteren en de registratiestructuur voor verklaringvoorbereiding te versterken.",
          solves: [
            "Product- en ketendata binnen de EUDR-scope verspreidt zich over losse bestanden.",
            "Herkomst, geolocatie en risicobeoordeling worden niet in één traceerbaar registratiemodel beheerd.",
            "Bewijs- en revisieflows voor verklaringvoorbereiding moeten zichtbaar blijven.",
          ],
          capabilities: [
            {
              title: "Product- en HS-code scope tracking",
              description: "Beheert gestructureerde registraties voor producten binnen scope en codekoppelingen.",
            },
            {
              title: "Leveranciers- en herkomstgegevensbeheer",
              description: "Koppelt leveranciersverklaringen en herkomstgegevens op product- en batchniveau.",
            },
            {
              title: "Geolocatie- en productielocatieregistraties",
              description: "Beheert perceel- of productielocatiegegevens samen met ondersteunend bewijs.",
            },
            {
              title: "Risicobeoordeling en statusclassificatie",
              description: "Documenteert risicoresultaten met statusklassen en eigenaarschap.",
            },
            {
              title: "Bewijsdossier- en documentbeheer",
              description: "Houdt documenten traceerbaar aan producten, leveranciers en controlestappen.",
            },
            {
              title: "Registratiestructuur voor EUDR-verklaringvoorbereiding",
              description: "Bundelt velden en hiaten vóór verklaring in één voorbereidingsoverzicht.",
            },
            {
              title: "Ontbrekende data, revisie- en goedkeuringsflows",
              description: "Beheert hiaten, revisies en goedkeuringen in een gecontroleerde workflow.",
            },
            {
              title: "Managementdashboard en voorbereidingszichtbaarheid",
              description: "Maakt voorbereidingsstatus en prioriteiten zichtbaar op managementniveau.",
            },
          ],
          howItWorks: [
            {
              title: "Scope en productregistratie",
              description: "Definieer producten binnen scope, codes en leveranciersrelaties.",
            },
            {
              title: "Data en risicobeoordeling",
              description: "Verzamel herkomst, geolocatie, risicoresultaten en bewijs in gestructureerde registraties.",
            },
            {
              title: "Voorbereiding en verklaringsstructuur",
              description: "Versterk hiaten, revisies en de registratiebasis voor verklaringvoorbereiding.",
            },
          ],
          whoItsFor: [
            "Bedrijven die EUDR-scope producten op de EU-markt brengen",
            "Importeurs, exporteurs, producenten en handelsbedrijven",
            "Organisaties met complexe grondstof- of productketens",
            "Teams die leveranciersverklaringen, bewijs en herkomstdata verzamelen",
          ],
          outputs: [
            "Gestructureerde EUDR product- en ketenregistraties",
            "Zichtbaarheid van risicobeoordeling en bewijsdossiers",
            "Opvolging van hiaten en status voor verklaringvoorbereiding",
          ],
        },
        "supplier-data-evidence-workflow": {
          pill: "Leveranciersdata",
          title: "Arvenza Leveranciersdata- en Bewijsworkflow",
          summary:
            "Helpt om dataverzoeken, opvolging van ontbrekende velden en goedkeurings- en revisiestappen samen met bewijsdiscipline te beheren.",
          modalTagline:
            "Helpt om dataverzoeken, opvolging van ontbrekende velden en goedkeurings- en revisiestappen samen met bewijsdiscipline te beheren.",
          modalWhatFor:
            "Gebruikt om leveranciersdata, verklaringen en bewijs in een gestructureerde flow te verzamelen en op te volgen voor Scope 3, kopervragen en ketencompliance.",
          modalTeamValue:
            "Vermindert verspreide e-mail- en bestandsstromen; maakt ontbrekende velden, revisies en goedkeuringsstappen zichtbaar.",
          bullets: [
            "Gestructureerde dataverzoek- en antwoordflow",
            "Opvolging ontbrekende velden en revisies",
            "Bewijsdossier- en goedkeuringsdiscipline",
            "Zichtbaarheid leverancierscommunicatie",
            "Voorbereidingsstatuspaneel",
            "Ondersteuning voor koper- en compliancevragen",
          ],
          screenshotAlt: "Arvenza leveranciersdata- en bewijsworkflow dashboardweergave",
          heroText:
            "De leveranciersdata- en bewijsworkflow is een digitale werklaag die datadiscipline en traceerbaarheid naast advies versterkt.",
        },
        "esg-evidence-reporting-workspace": {
          pill: "ESG",
          title: "Arvenza ESG Bewijs- en Rapportagewerkruimte",
          summary:
            "Maakt bewijsbibliotheken, verantwoordelijkheidsopvolging en rapportagevoorbereiding traceerbaarder in CSRD/ESRS-gerichte processen.",
          modalTagline:
            "Maakt bewijsbibliotheken, verantwoordelijkheidsopvolging en rapportagevoorbereiding traceerbaarder in CSRD/ESRS-gerichte processen.",
          modalWhatFor:
            "Gebruikt om bewijs, verantwoordelijkheden en datavelden te beheren in een gestructureerde werkruimte voor corporate reporting, dubbele materialiteit en disclosure readiness.",
          modalTeamValue:
            "Helpt rapportageteams bewijs, hiaten en goedkeuringsstappen in één registratiediscipline op te volgen.",
          bullets: [
            "Bewijsbibliotheek en documentkoppeling",
            "Verantwoordelijkheids- en eigenaarschapopvolging",
            "Zichtbaarheid ontbrekende velden en voorbereiding",
            "Structuur voor disclosure- en datavelden",
            "Goedkeurings- en revisieworkflow",
            "Rapportagevoorbereidingspaneel",
          ],
          screenshotAlt: "Arvenza ESG bewijs- en rapportagewerkruimte dashboardweergave",
          heroText:
            "De ESG bewijs- en rapportagewerkruimte versterkt registratiekwaliteit en voorbereidingsdiscipline zonder technische beoordeling te vervangen.",
        },
        "packaging-compliance-tool": {
          title: "Arvenza PPWR- en Verpakkingscomplianceplatform",
        },
        "digital-product-passport-platform": {
          title: "Arvenza DPP Productpaspoortplatform",
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
