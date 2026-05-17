import type { JsonObject } from "@/lib/merge-messages";

export const nlResourcesInsightsPatch: JsonObject = {
  insightsPage: {
    detail: {
      backToResources: "Terug Naar Bronnen",
      sectionLabels: {
        whyMatters: "Waarom Dit Onderwerp Belangrijk Is",
        whoItConcerns: "Voor Wie Dit Relevant Is",
        criticalAreas: "Kritieke Data- en Procesgebieden",
        commonMistakes: "Veelgemaakte Fouten",
        ankaApproach: "ANKA's Aanpak",
      },
      hero: {
        metaFormat: "Technische notitie",
        metaFocus: "Voorbereiding en datadiscipline",
      },
      sidebar: {
        eyebrow: "Advies",
        title: "Hoe Werken We Met ANKA?",
        highlightLabel: "Werkfocus",
        description:
          "Deze bron is ontworpen om u te helpen uw gereedheidsniveau te beoordelen, prioritaire datavelden te verduidelijken en een beter traceerbare werkwijze op te bouwen.",
        steps: [
          "Huidige positie, scope en prioriteiten gezamenlijk verduidelijken",
          "Datavelden, eigenaarschap en bewijslogica structureren",
          "Naar een uitvoerbare, traceerbare werkroutine gaan",
        ],
        primaryCta: "Plan Een Gesprek",
        secondaryCta: "Neem Contact Op",
      },
    },
    featured: {
      collectionLabel: "Geselecteerde expert-inzichten",
      items: {
        "csrd-double-materiality": {
          category: "CSRD",
          title: "Waar te beginnen met CSRD en dubbele materialiteit",
          description:
            "Belangrijke voorbereidingsgebieden voor een sterker, beter traceerbaar en beter beheersbaar startpunt voor corporate reporting.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "CSRD-gereedheid is meer dan het opstellen van een rapport. Zonder helderheid over wat materieel is, welke grenzen gelden en welk bewijs beslissingen ondersteunt, wordt het proces snel onwerkbaar.",
                "Dubbele materialiteit vraagt dat financiële materialiteit en impactmaterialiteit samen worden beoordeeld—niet als losse checklists, maar als beslislogica voor prioriteiten en data-inzet.",
              ],
            },
            whoItConcerns: {
              paragraphs: [
                "Relevant voor bestuur, finance, duurzaamheid, risico en compliance, en voor teams die ESRS-thema's, stakeholderinput en data-eigenaarschap moeten organiseren.",
              ],
              bullets: [
                "Organisaties die corporate reporting structureel willen opzetten",
                "Teams die van een eerste materialiteitsanalyse naar een beheersbaar werkmodel willen",
                "Bedrijven met meerdere entiteiten, waardoor grenzen en verantwoordelijkheden snel complex worden",
              ],
            },
            criticalAreas: {
              paragraphs: [
                "Een sterke start combineert governance, onderwerpprioritering en een bewijsgerichte dataflow.",
              ],
              bullets: [
                "Scope, entiteitsgrenzen en verwachtingen richting stakeholders",
                "Onderwerpenpool, impact- en financiële materialiteit en prioritering",
                "Data-eigenaarschap, definities en koppeling tussen analyse en bewijs",
                "Rollen, besluitvorming en documentatie van aannames",
              ],
            },
            commonMistakes: {
              bullets: [
                "Een onderwerpenlijst overnemen zonder eigen context en datarealiteit",
                "Data-eigenaren pas laat benoemen, waardoor verzameling achterloopt",
                "Bewijs en documentatie als laatste stap behandelen",
                "Dubbele materialiteit reduceren tot een eenmalige workshop zonder vervolgstructuur",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA koppelt materialiteitslogica aan een werkbare datastructuur: huidige situatie, onderwerpenpool, stakeholder- en datamapping, prioritering en een uitvoerbaar actieplan.",
                "Deze aanpak helpt organisaties hun gereedheidsniveau te beoordelen, prioritaire datavelden te bepalen en een beter traceerbare werkwijze voor rapportage en governance op te bouwen.",
              ],
            },
          },
        },
        "cbam-data-financial-impact": {
          category: "CBAM",
          title: "Hoe data- en financiële impactvoorbereiding voor CBAM te structureren",
          description:
            "Een beter gecontroleerd voorbereidingskader dat niet alleen rapportage omvat, maar ook financiële impact, datakwaliteit en leveranciersinformatie.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "CBAM-voorbereiding gaat verder dan emissieberekening. Productscope, installaties, productieroutes, energie- en brandstofdata, precursoren en leveranciersinformatie bepalen samen de betrouwbaarheid van de uitkomst.",
                "Financiële impact wordt pas bruikbaar wanneer emissiedata traceerbaar, verifieerbaar en in managementtaal te bespreken is—niet wanneer cijfers in losse spreadsheets eindigen.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Importeurs en producenten met CBAM-gerelateerde producten en installaties",
                "Finance en controlling die blootstelling en scenario's willen begrijpen",
                "Operations, inkoop en supply chain die leveranciersdata en productgrenzen beheren",
                "Compliance- en carbon-teams die methodologie en bewijs moeten borgen",
              ],
            },
            criticalAreas: {
              bullets: [
                "Product- en installatiegrenzen, productieroutes en allocatielogica",
                "Methodologiekeuzes, default-waarden en governance daarvan",
                "Leveranciersinvoer met format-, kwaliteits- en traceerbaarheidscontroles",
                "Koppeling tussen emissie-uitkomsten en financiële scenario's",
                "Interne review, versiebeheer en audittrail van aannames",
              ],
            },
            commonMistakes: {
              bullets: [
                "Alleen met energiefacturen werken zonder product- en routecontext",
                "Productgrenzen te ruim of te smal trekken",
                "Leveranciersdata te laat en ongestructureerd opvragen",
                "Financiële impact loskoppelen van datakwaliteit en methodologie",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA structureert CBAM-werk in productscope, datatemplate, leverancierscommunicatie, methodologische controle en financiële scenario's—als herhaalbare flow, niet als last-minute verzameling.",
                "Deze aanpak helpt organisaties gereedheid te beoordelen, prioritaire datavelden te bepalen en een traceerbare werkwijze voor rapportage en besluitvorming op te bouwen.",
              ],
            },
          },
        },
        "digital-product-passport-data": {
          category: "Product",
          title: "Kritieke datavelden bij voorbereiding op het Digitale Productpaspoort",
          description:
            "Belangrijke registraties, traceerbaarheid en verklaringselementen bij het versterken van productgericht databeheer.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "Digital Product Passport-gereedheid vraagt productdata als een beheerd recordsysteem met relaties, eigenaarschap en versheidscontroles—not als losse bestanden of een eenmalige export.",
                "Zonder productidentiteit, materiaalstructuur en onderbouwde verklaringen wordt DPP-voorbereiding vooral een IT-project in plaats van product- en compliance-discipline.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Productmanagement, R&D en technische teams",
                "Compliance en regulatory affairs rond productvereisten",
                "Inkoop en leveranciersmanagement voor herkomst- en materiaaldata",
                "IT en data-teams die records, koppelingen en toegang modelleren",
              ],
            },
            criticalAreas: {
              bullets: [
                "Productidentiteit, varianten en SKU-logica",
                "Materiaal- en componentstructuur (BOM) en herkomstinformatie",
                "Compliance- en verklaringsdata (regelgeving, normen, verificatie)",
                "Traceerbaarheid, leveranciersrecords en bewijskoppelingen",
                "Onderscheid verplichte versus vrijwillige velden en data-eigenaren",
              ],
            },
            commonMistakes: {
              bullets: [
                "DPP reduceren tot een QR-code of webpagina zonder datamodel",
                "Veldenlijsten maken zonder eigenaarschap en bewijsflow",
                "Productvarianten en leverancierswissels niet in de structuur opnemen",
                "Technische specificaties loskoppelen van compliance-verklaringen",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA werkt vanuit een productdatamodel: verplichte en vrijwillige velden, data-eigenaren, bewijskoppelingen en een uitvoerbare digitale voorbereidingsroute.",
                "Deze aanpak helpt organisaties gereedheid te beoordelen, prioritaire datavelden te bepalen en een traceerbare product- en compliancewerkwijze op te bouwen.",
              ],
            },
          },
        },
        "ppwr-product-packaging-data": {
          category: "Verpakking",
          title: "Hoe PPWR product- en verpakkingsdata verandert",
          description:
            "Een beoordeling van waarom verpakkings- en productinformatie op de Europese markt zichtbaarder, meetbaarder en beter onderbouwd wordt.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "Met PPWR wordt verpakking meer dan inkoop of logistiek: het wordt een data-, verklarings- en complianceverplichting op productniveau.",
                "Materiaalsamenstelling, gewicht, herbruikbaarheid, leveranciersverklaringen en marktvereisten moeten samen beheersbaar zijn—niet verspreid over losse spreadsheets.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Packaging- en productteams die specificaties en varianten beheren",
                "Inkoop en leveranciers die verklaringen en bewijs leveren",
                "Compliance en sustainability rond verpakkingsverplichtingen",
                "Finance en operations die kosten- en heffingslogica willen doorzien",
              ],
            },
            criticalAreas: {
              bullets: [
                "Verpakkingsinventaris gekoppeld aan producten en SKU's",
                "Materiaaldata, gewichten en herbruikbaarheid per verpakkingseenheid",
                "Leveranciersverklaringen en bewijs van samenstelling",
                "Markt- en landoverlay zonder de kernstructuur te vervuilen",
                "Gap-analyse en prioritering van verbeteracties",
              ],
            },
            commonMistakes: {
              bullets: [
                "Verpakkingsinformatie als één regel in een productomschrijving bewaren",
                "Geen eigenaar voor materiaaldata en verklaringen",
                "Varianten en private-label situaties niet modelleren",
                "Compliance pas beoordelen wanneer data al verouderd is",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA combineert verpakkingsinventaris, datavelden, leveranciersverklaringen, compliance-gaps en een prioritaire actielijst in één beheersbaar kader.",
                "Deze aanpak helpt organisaties gereedheid te beoordelen, prioritaire datavelden te bepalen en een traceerbare product- en verpakkingswerkwijze op te bouwen.",
              ],
            },
          },
        },
        "scope-3-supplier-data": {
          category: "Toeleveringsketen",
          title: "Hoe leveranciersdataverzameling voor Scope 3 te structureren",
          description:
            "Praktische benaderingen om versnipperde leveranciersdata beter georganiseerd, traceerbaar en beheersbaar te maken.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "Scope 3 is vaak een eenmalige vragenlijst; de praktische waarde ontstaat wanneer leverancierscommunicatie en datakwaliteit structureel worden beheerd.",
                "Categorieprioritering, activiteits- of spenddata, emissiefactoren en leveranciersdata vragen om duidelijke definities en een ritme van opvolging.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Sustainability- en carbon-teams die Scope 3 rapporteren",
                "Inkoop en supplier management die data opvragen en opvolgen",
                "Finance die spend- en activiteitsdata levert",
                "Data- en governance-teams die definities en kwaliteit bewaken",
              ],
            },
            criticalAreas: {
              bullets: [
                "Segmentatie en prioritering van leveranciers",
                "Veldwoordenboek, formatstandaarden en kwaliteitscontroles",
                "Onderscheid spend/activiteit, factoren en primaire leveranciersdata",
                "Document- en bewijsflow met sluitingsdiscipline",
                "Reviewritme en versiebeheer van aannames",
              ],
            },
            commonMistakes: {
              bullets: [
                "Van alle leveranciers tegelijk dezelfde detaildiepte vragen",
                "Definities niet vastleggen, waardoor antwoorden niet vergelijkbaar zijn",
                "Geen opvolgritme en geen datakwaliteitsscore",
                "Rapportage als eindpunt zien in plaats van herbruikbare ketendata",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA start met prioritaire segmentatie, eenvoudige dataverzoeken, opvolgritme, kwaliteitscontrole en voorbereiding op berekening—zodat ketendata beheersbaar blijft.",
                "Deze aanpak helpt organisaties gereedheid te beoordelen, prioritaire datavelden te bepalen en een traceerbare Scope 3-werkwijze op te bouwen.",
              ],
            },
          },
        },
        "digital-workspace-reporting": {
          category: "Digitale werkwijze",
          title: "Waarom een digitale werkruimte belangrijk is voor duurzaamheidsrapportage",
          description:
            "De rol van digitale ondersteuning bij voortgangsbewaking, zichtbaarheid, bewijsbeheer en algemene werkkwaliteit.",
          cta: "Bekijk De Inhoud",
          sections: {
            whyMatters: {
              paragraphs: [
                "Rapportageprojecten lopen vast wanneer data-eigenaarschap, revisiebeheer, bewijskoppelingen en voortgangstracking zwak zijn—vooral bij e-mail en verspreide spreadsheets.",
                "Een digitale werkruimte versterkt taakopvolging, bewijsopslag, verantwoordelijkheidsmatrix en managementzicht—zonder advies te vervangen.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Duurzaamheids- en rapportageteams met meerdere stakeholders",
                "Project- en programmamanagers die voortgang en kwaliteit bewaken",
                "Data-eigenaren in finance, operations en supply chain",
                "Bestuur en audit die traceerbaarheid en versiebeheer verwachten",
              ],
            },
            criticalAreas: {
              bullets: [
                "Taken, deadlines en verantwoordelijkheden per thema en datapunt",
                "Bewijsdepot met koppeling naar claims en indicatoren",
                "Versiebeheer van templates, aannames en reviewcycli",
                "Zichtbaarheid voor management zonder detailverlies",
                "Herhaalbare rapportageflows en kwaliteitsstandaarden",
              ],
            },
            commonMistakes: {
              bullets: [
                "Eerst de rapporttekst schrijven en bewijs achteraf zoeken",
                "Geen eigenaar per datapunt en geen sluitingscriteria",
                "Tools invoeren zonder proces- en rolontwerp",
                "Digitale middelen positioneren als vervanging van inhoudelijke begeleiding",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA ontwerpt een werkomgeving rond data- en bewijsflow, taken en verantwoordelijkheden, en rapportagevoorbereiding—zodat uitvoering controleerbaar en verdedigbaar blijft.",
                "Deze aanpak helpt organisaties gereedheid te beoordelen, prioritaire werkstromen te bepalen en een beter traceerbare rapportagewerkwijze op te bouwen.",
              ],
            },
          },
        },
      },
    },
  },
};
