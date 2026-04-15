import type { JsonObject } from "@/lib/merge-messages";

export const nlSoftwarePortfolioPatch: JsonObject = {
  softwarePage: {
    portfolio: {
      title: "Productportfolio",
      description:
        "Workflowgerichte softwareproducten voor compliance, productdata en regelgeving-gedreven rapportage.",
      statusLabels: {
        core: "Selectief in gebruik",
        in_development: "Pilot",
        coming_soon: "Op de roadmap",
      },
      ctas: {
        viewProduct: "Bekijk product",
        requestDemo: "Demo aanvragen",
        talkToTeam: "Neem contact op",
        requestEarlyAccess: "Vroege toegang aanvragen",
      },
      products: {
        "agri-climate-platform": {
          status: "core",
          title: "Agri-Climate Platform",
          category: "Landbouw & land",
          kicker: "Landdata, berekening en verificatielogica",
          cardDescription:
            "Een platform dat land- en activiteitsdata structureert in een consistent registratiemodel—met berekeningen, evidence en verificatiegereedheid.",
          heroText:
            "Een gestructureerd digitaal platform dat landgebaseerde klimaatdata, activiteitsregistraties, berekeningsprocessen, bewijsworkflows en verificatiegereedheid samenbrengt in één productomgeving.",
          value:
            "Een gestructureerd digitaal platform dat landgebaseerde klimaatdata, activiteitsregistraties, berekeningsprocessen, bewijsworkflows en verificatiegereedheid samenbrengt in één productomgeving.",
          solves: [
            "Grond-, activiteits- en productiedata blijft vaak versnipperd; een evidence-krachtige audittrail voor berekeningen en verificatie ontstaat te laat.",
            "Agri-Climate Platform verenigt registratiediscipline, berekeningsflows en verificatievoorbereiding in één systeemlogica—voor sterkere portefeuillezichtbaarheid.",
            "Wanneer datakwaliteit, revisietracking en bewijslinks onder controle zijn, worden zowel interne besluitvorming als externe verificatie aantoonbaar beter beheersbaar.",
          ],
          capabilities: [
            {
              title: "Grond- en activiteitsregistraties",
              description:
                "Verzamel perceel-, productie- en activiteitsdata in een consistent registratiemodel; beheer seizoensopvolging en revisies gecontroleerd.",
            },
            {
              title: "Berekeningsworkflows",
              description:
                "Beheer data → berekening → controle als gestructureerde flow; verhoog herhaalbaarheid en consistentie over portefeuilles.",
            },
            {
              title: "Verificatievoorbereiding",
              description:
                "Bouw een verdedigbare audittrail op basis van registraties en bewijsstukken; maak verificatiecycli beter beheersbaar.",
            },
            {
              title: "Bewijs- en documentflow",
              description:
                "Koppel bewijsdocumenten aan registraties; maak hiaten/inconsistenties zichtbaar en sluit netjes af.",
            },
            {
              title: "Krediet- en portefeuillevoorbereiding",
              description:
                "Beheer de data- en registratiestructuur die nodig is voor koppelingsgerichte rapportage en portefeuilleperspectief.",
            },
          ],
          howItWorks: [
            {
              title: "Registratiemodel definiëren",
              description:
                "Grond/perceel-, activiteits- en periodelogica worden vastgelegd; datavelden en eigenaarschap worden scherp gemaakt.",
            },
            {
              title: "Data verzamelen en controleren",
              description:
                "Invoer uit bronnen wordt vastgelegd; ontbrekende/inconsistente velden worden gedetecteerd en opgelost in een controleslus.",
            },
            {
              title: "Berekenen en output genereren",
              description:
                "Berekeningsstappen worden uitgevoerd; outputs worden geproduceerd in formats die geschikt zijn voor besluitvorming en rapportage.",
            },
            {
              title: "Verificatiebewijs voorbereiden",
              description:
                "Bewijs wordt gekoppeld aan registraties; audittrail en gereedheidsniveaus worden zichtbaar.",
            },
          ],
          whoItsFor: [
            "Duurzaamheids- en ESG-teams",
            "Landbouwoperaties en veldteams",
            "Data-eigenaren en rapportage-eigenaren",
            "Teams die assurance en verificatievoorbereiding doen",
          ],
          outputs: [
            "Land- en activiteitsregistraties",
            "Berekenings- en verificatieworkflow",
            "Gereedheid voor credits en portfolio’s",
            "Bewijs- en audittrail-structuur",
          ],
        },
        "cbam-calculation-engine": {
          status: "in_development",
          title: "CBAM Calculation Engine",
          category: "CBAM",
          kicker: "Ingebedde emissieberekening en rapportagegereedheid",
          cardDescription:
            "Een rekenlaag die dataverzameling, methodiekkeuzes en product/facility-splitsingen structureert voor CBAM-rapportagegereedheid.",
          heroText:
            "Een rekeninfrastructuur die CBAM-dataverzameling, berekening van ingebedde emissies en rapportagegereedheid beter beheersbaar en systematisch maakt.",
          value:
            "Een rekeninfrastructuur die CBAM-dataverzameling, berekening van ingebedde emissies en rapportagegereedheid beter beheersbaar en systematisch maakt.",
          solves: [
            "CBAM-berekeningen worden snel complex—leveranciersdata, defaults, methodologiekeuzes en product/installatie-splitsingen verhogen risico.",
            "CBAM Calculation Engine standaardiseert invoer en berekeningslogica om de betrouwbaarheid van compliance- en rapportageoutputs te verhogen.",
            "Als inputkwaliteit, default-grenzen en traceerbaarheid helder zijn, daalt rapportagerisico en neemt herwerk af.",
          ],
          capabilities: [
            {
              title: "Berekening op product- en installatieniveau",
              description:
                "Zet berekeningsstructuur op per product/installatie; handhaaf methodologieconsistente outputs.",
            },
            {
              title: "Leveranciersdatastructuur",
              description:
                "Normaliseer leveranciersinvoer naar consistente formats; maak ontbrekende velden en kwaliteitsissues zichtbaar.",
            },
            {
              title: "Beheer van defaultwaarden",
              description:
                "Beheer waar defaults gelden; maak de grens tussen primaire data en defaults transparant.",
            },
            {
              title: "Traceerbaarheid van berekeningen",
              description:
                "Behoud invoer → berekening → output trace; bouw een verdedigbare positie voor review en audit.",
            },
            {
              title: "Rapportagevoorbereiding",
              description:
                "Produceer consistente rapportageoutputs voor CBAM-verplichtingen; standaardiseer kwaliteitscontroles.",
            },
          ],
          howItWorks: [
            {
              title: "Scope en datamapping",
              description:
                "Definieer product/installatie-scope en maak een veldmap voor leveranciers- en interne bronnen.",
            },
            {
              title: "Invoer verzamelen en normaliseren",
              description:
                "Neem leveranciersinzendingen op, pas format/kwaliteitscontroles toe en definieer default-logica waar nodig.",
            },
            {
              title: "Berekeningen uitvoeren",
              description:
                "Voer methodologie-conforme berekeningsstappen uit; genereer resultaten per product en installatie.",
            },
            {
              title: "Controle en rapportage-output",
              description:
                "Voer consistentiecontroles uit; bereid bruikbare rapportagepakketten voor.",
            },
          ],
          whoItsFor: [
            "CBAM compliance-teams",
            "Duurzaamheids- en koolstofspecialisten",
            "Supply chain en inkoopteams",
            "Finance en managementrapportage-eigenaren",
          ],
          outputs: [
            "Berekeningen op product- en installatieniveau",
            "Beheer van leveranciersdata en standaardwaarden",
            "Rapportageklare outputstructuur",
            "Traceerbaarheid van berekeningen en controlestappen",
          ],
        },
        "cbam-financial-impact-engine": {
          status: "in_development",
          title: "CBAM Financial Impact Engine",
          category: "CBAM",
          kicker: "Kosteninzicht en scenariogebaseerde besluitvorming",
          cardDescription:
            "Een beslissingsondersteunende oplossing die CBAM-blootstelling financieel zichtbaar maakt en scenario’s vergelijkbaar maakt voor planning.",
          heroText:
            "Een beslissingsondersteunende oplossing die CBAM-kostenimpact zichtbaar maakt, scenario’s vergelijkt en exportgerichte beslissingen versterkt.",
          value:
            "Een beslissingsondersteunende oplossing die CBAM-kostenimpact zichtbaar maakt, scenario’s vergelijkt en exportgerichte beslissingen versterkt.",
          solves: [
            "CBAM is niet alleen rapportage—het creëert prijsdruk, margerisico en de behoefte aan scenario-gebaseerde planning.",
            "CBAM Financial Impact Engine maakt blootstelling zichtbaar en vergelijkt alternatieve scenario’s in een consistent managementkader.",
            "Wanneer finance, commerciële teams en compliance-eigenaren dezelfde data in hetzelfde kader lezen, worden besluiten sneller en neemt onzekerheid af.",
          ],
          capabilities: [
            {
              title: "Blootstelling en kostenzichtbaarheid",
              description:
                "Volg CBAM-blootstelling naast financiële impact per product/stroom; signaleer risicogebieden vroeg.",
            },
            {
              title: "Scenario-simulatie",
              description:
                "Vergelijk alternatieve data/aannamescenario’s; maak kosteneffecten helder voor leiderschap.",
            },
            {
              title: "Ondersteuning voor prijs en planning",
              description:
                "Maak kostendruk zichtbaar voor exportgerichte planning; versnel besluitvorming.",
            },
            {
              title: "Executive-samenvattingen",
              description:
                "Produceer heldere samenvattingen voor managementreviews; ondersteun strategische afwegingen met duidelijkheid.",
            },
          ],
          howItWorks: [
            {
              title: "Kostenmodel opzetten",
              description:
                "Verduidelijk blootstellingsdrivers, datainvoer en financiële modellogica.",
            },
            {
              title: "Scenario’s definiëren",
              description:
                "Leg aannames en alternatieven vast; bereid een vergelijkingskader voor.",
            },
            {
              title: "Simuleren en vergelijken",
              description:
                "Run scenario’s; kwantificeer kostendifferenties en drivers.",
            },
            {
              title: "Managementoutputs",
              description:
                "Verpak beslissingsondersteunende outputs en korte leadership briefs.",
            },
          ],
          whoItsFor: [
            "Finance en pricing teams",
            "Leiderschap en strategie",
            "CBAM compliance en duurzaamheidseigenaren",
            "Export en commerciële planning",
          ],
          outputs: [
            "Simulatie van financiële blootstelling",
            "Scenario-gebaseerde kostenvergelijking",
            "Beslissingsondersteuning voor management",
            "Risicozichtbaarheid op product/stroomniveau",
          ],
        },
        "digital-product-passport-platform": {
          status: "coming_soon",
          title: "Digital Product Passport Platform",
          category: "Digital Product Passport",
          kicker: "Productdata-architectuur en passport-ready registraties",
          cardDescription:
            "Een platform om productdata, technische registraties en traceerbaarheidslogica te structureren in een passport-ready schema.",
          heroText:
            "Een platform dat productdata, technische registraties en traceerbaarheidslogica structureert in lijn met toekomstige vereisten voor het digitale productpaspoort.",
          value:
            "Een platform dat productdata, technische registraties en traceerbaarheidslogica structureert in lijn met toekomstige vereisten voor het digitale productpaspoort.",
          solves: [
            "Productdata en traceerbaarheidsrecords leven vaak verspreid over systemen; technische documentatie is niet by design passport-ready.",
            "Dit platform biedt een gecontroleerd kader voor data-architectuur, recordlogica en passport-klare contentproductie.",
            "Met het juiste schema, eigenaarschap en versheidscontroles wordt passport-gereedheid een uitvoerbaar proces—geen last-minute documentjacht.",
          ],
          capabilities: [
            {
              title: "Passport-klare productdata-architectuur",
              description:
                "Structureer productvelden en relaties voor passport-logica; bouw een herbruikbaar registratieschema.",
            },
            {
              title: "Traceerbaarheid en recordlogica",
              description:
                "Organiseer kritieke traceerbaarheidsrecords en bewijskoppelingen; beheer transparantieverwachtingen met discipline.",
            },
            {
              title: "Structuur voor technische documentatie",
              description:
                "Beheer technische records en documenten in een passport-ready layout; handhaaf versheidscontroles.",
            },
            {
              title: "Gecontroleerde publicatie en delen",
              description:
                "Produceer vereiste contentpakketten; deel met stakeholders via een governed toegangsmodel.",
            },
          ],
          howItWorks: [
            {
              title: "Velden en schema definiëren",
              description:
                "Verduidelijk productdatavelden; definieer passport-schema en relatielogica.",
            },
            {
              title: "Records en documenten koppelen",
              description:
                "Koppel records aan bewijs en documenten; implementeer consistentiecontroles.",
            },
            {
              title: "Passport-klare pakketten produceren",
              description:
                "Genereer passport-klare contentbundels; plan publicatie- en toegangsscenario’s.",
            },
          ],
          whoItsFor: [
            "Eigenaren van productdata",
            "Kwaliteit en technische documentatie",
            "Compliance en duurzaamheid",
            "Supply chain en traceerbaarheidseigenaren",
          ],
          outputs: [
            "Productdata-architectuur",
            "Traceerbaarheids- en registratielogica",
            "Paspoortklare structuur",
            "Governed publicatie- en deelpakketten",
          ],
        },
        "packaging-compliance-cost-os": {
          status: "coming_soon",
          title: "Packaging Compliance & Cost OS",
          category: "Packaging compliance",
          kicker: "Compliance, kosteninzicht en decision flow",
          cardDescription:
            "Een platform om verpakkingsdata, complianceverplichtingen en kostlogica in één verbonden structuur te beheren.",
          heroText:
            "Een oplossing die verpakkingssamenstelling, complianceverplichtingen, heffingslogica en kosteneffecten samenbrengt in één digitale operationele laag.",
          value:
            "Een oplossing die verpakkingssamenstelling, complianceverplichtingen, heffingslogica en kosteneffecten samenbrengt in één digitale operationele laag.",
          solves: [
            "Packaging-samenstelling, inventaris en compliance-eisen zitten vaak in losse tabellen—fee-logica en kosteneffect blijven onduidelijk.",
            "Deze oplossing brengt data, compliance en kostenzichtbaarheid samen in één operationele logica om besluitvorming te versterken.",
            "Als product-, inkoop- en finance-teams dezelfde packaging-realiteit delen, dalen compliancerisico’s en nemen kostverrassingen af.",
          ],
          capabilities: [
            {
              title: "Packaging-inventarisstructuur",
              description:
                "Modelleer packagingcomponenten en samenstelling; koppel inventarislogica aan producten.",
            },
            {
              title: "Mapping van compliance en verplichtingen",
              description:
                "Map vereisten naar datavelden; maak hiaten en risico’s zichtbaar.",
            },
            {
              title: "Fee- en kostlogica",
              description:
                "Maak fee/heffingsmechaniek zichtbaar; verbind kosteneffect aan product- en ontwerpbeslissingen.",
            },
            {
              title: "Beslissingsoutputs",
              description:
                "Vergelijk ontwerp/inkoopwijzigingen; produceer heldere samenvattingen voor leiderschap.",
            },
          ],
          howItWorks: [
            {
              title: "Inventaris en velden",
              description:
                "Definieer packaging-inventarisvelden en productrelaties.",
            },
            {
              title: "Compliancelogica",
              description:
                "Lijn regels af op vereiste data; implementeer controlestappen.",
            },
            {
              title: "Kosten- en beslisoutputs",
              description:
                "Maak fee/kostendrivers zichtbaar; genereer beslissingsondersteunende outputs.",
            },
          ],
          whoItsFor: [
            "Packaging- en productteams",
            "Compliance en regelgevings eigenaren",
            "Finance en kostenbeheer",
            "Supply chain en inkoop",
          ],
          outputs: [
            "Structuur van verpakkingsinventaris",
            "Inzicht in compliance en heffingen",
            "Ondersteuning bij kosten- en ontwerpbeslissingen",
            "Samenvattingen per product voor compliance en kosten",
          ],
        },
        "sustainable-supply-chain-platform": {
          status: "coming_soon",
          title: "Sustainable Supply Chain Platform",
          category: "Supply chain",
          kicker: "Leveranciersdata, evidenceflow en gereedheidszichtbaarheid",
          cardDescription:
            "Een platform om leveranciersinteractie, dataverzameling en documentflows in één traceerbare workflow te runnen.",
          heroText:
            "Een supply-chainplatform dat leveranciersdata, documentstromen, traceerbaarheid en inzicht in gereedheid systematischer maakt.",
          value:
            "Een supply-chainplatform dat leveranciersdata, documentstromen, traceerbaarheid en inzicht in gereedheid systematischer maakt.",
          solves: [
            "Leveranciersbewijs en documenten verlopen versnipperd—gereedheid en traceerbaarheid blijven zwak zichtbaar.",
            "Dit platform organiseert leveranciersinteracties, data/bewijsflows en traceerbaarheidslogica in één samenhangende structuur.",
            "Met duidelijke controlestappen en sluitingsdiscipline wordt ketengereedheid meetbaar en beheersbaar.",
          ],
          capabilities: [
            {
              title: "Leveranciers-onboarding",
              description:
                "Structureer leveranciersprofielen en verantwoordelijkheden; standaardiseer datacollectie.",
            },
            {
              title: "Tracking van vragen en antwoorden",
              description:
                "Volg verzoeken en reacties; signaleer vertragingen en ontbrekende velden.",
            },
            {
              title: "Document- en bewijsflow",
              description:
                "Koppel documenten aan records; versterk audittrail en controles.",
            },
            {
              title: "Gereedheidszichtbaarheid",
              description:
                "Lever supply-chain gereedheid en risicozichtbaarheid; maak prioriteiten helder.",
            },
          ],
          howItWorks: [
            {
              title: "Leveranciersstructuur definiëren",
              description:
                "Zet onboarding-logica vast; definieer vereiste velden en documenten.",
            },
            {
              title: "Verzamelen en controleren",
              description:
                "Run data/bewijsflow met kwaliteits- en volledigheidscontroles.",
            },
            {
              title: "Zichtbaarheid en rapportage",
              description:
                "Produceer gereedheid/risico-zichtbaarheid en governance-rapportageoutputs.",
            },
          ],
          whoItsFor: [
            "Inkoop en supply chain",
            "Compliance en duurzaamheidseigenaren",
            "Leveranciersrelatie-teams",
            "Rapportage en governance",
          ],
          outputs: [
            "Leveranciersonboarding en dataverzameling",
            "Document- en bewijsstroom",
            "Inzicht in gereedheid van de keten",
            "Checklists en statustracking",
          ],
        },
        "eudr-due-diligence-platform": {
          status: "coming_soon",
          title: "EUDR Due Diligence Platform",
          category: "EUDR",
          kicker: "Geolocatie, herkomst en due diligence discipline",
          cardDescription:
            "Een platform om geolocatie- en herkomstregistraties te beheren in combinatie met documentcontrole en due diligence workflows.",
          heroText:
            "Een platform dat geolocatie, herkomstkoppeling, documentcontrole en due diligence-registraties structureert voor EUDR-gereedheid.",
          value:
            "Een platform dat geolocatie, herkomstkoppeling, documentcontrole en due diligence-registraties structureert voor EUDR-gereedheid.",
          solves: [
            "EUDR due diligence vereist gecontroleerd beheer van geolocatie, herkomstrecords en evidence-intensieve documentflows.",
            "Dit platform verenigt recordlogica, traceerbaarheid en gereedheidstracking in één gedisciplineerd systeem.",
            "Wanneer geolocatie–herkomstkoppeling en bewijsflow op één plek zichtbaar zijn, wordt statement-gereedheid beter verdedigbaar.",
          ],
          capabilities: [
            {
              title: "Geolocatie en herkomstrecords",
              description:
                "Relateer geolocatiedata aan herkomstrecords; handhaaf consistente recordlogica.",
            },
            {
              title: "Due diligence documentflow",
              description:
                "Koppel documenten aan processtappen; maak ontbrekende/inconsistente items zichtbaar.",
            },
            {
              title: "Risicozichtbaarheid",
              description:
                "Maak risicogebieden zichtbaar; versterk prioritering en sluitingsdiscipline.",
            },
            {
              title: "Gereedheidstracking",
              description:
                "Volg voltooiing en statement-ready voorbereiding; bouw een verdedigbare audittrail.",
            },
          ],
          howItWorks: [
            {
              title: "Recordschema",
              description:
                "Definieer geolocatie-, herkomst- en supply-chain relatielogica; verduidelijk vereiste velden.",
            },
            {
              title: "Documenten en controles",
              description:
                "Koppel due diligence-documenten; run bewijs- en controleworkflows.",
            },
            {
              title: "Statement-gereedheid",
              description:
                "Produceer gereedheidzichtbaarheid en structureer outputs voor statement-ready voorbereiding.",
            },
          ],
          whoItsFor: [
            "Compliance en regelgeving",
            "Supply chain en inkoop",
            "Risico en governance",
            "Data- en documenteigenaren",
          ],
          outputs: [
            "Geolocatie- en herkomstregistraties",
            "Documentstroom voor due diligence",
            "EUDR-gereedheidstracking",
            "Risico- en gap-zichtbaarheid",
          ],
        },
      },
    },
    detail: {
      comingSoonPositioning: [
        "Wordt momenteel vormgegeven rond geselecteerde use cases en praktische compliancebehoeften.",
      ],
      sections: {
        whatItSolves: "Welk Probleem Het Oplost",
        keyCapabilities: "Belangrijkste Mogelijkheden",
        howItWorks: "Hoe Het Werkt",
        whoItsFor: "Voor Wie Het Is",
        outputs: "Outputs",
      },
      whoSupportingNote:
        "Deze producten zijn gepositioneerd om consultancy te versterken—niet om het te vervangen—door datadiscipline, traceerbaarheid en besluitvaste workflows voor compliance en rapportage te verbeteren.",
      backToSoftware: "Terug naar software",
      comingSoonPanelTitle: "Binnenkort — vroegtijdige toegang & planning",
      finalCta: {
        title: "Laten we samen de juiste productstructuur scherp krijgen",
        description:
          "We kunnen snel prioriteiten en use cases beoordelen en het meest passende startkader bepalen.",
      },
    },
  },
};
