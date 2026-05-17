import type { JsonObject } from "@/lib/merge-messages";

export const nlSectorsHeroIntroPatch: JsonObject = {
  sectorsPage: {
    detail: {
      focusStripLabel: "Onze focusgebieden",
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In textiel en mode vereist de Europese markt steeds vaker DPP-voorbereiding, productsustainabilitydata, materiaalsamenstelling en supplychainzichtbaarheid in één productrecord. Productverklaringen, chemische compliance en leveranciersdatadiscipline worden beoordeeld als gestructureerd bewijs—not als losse marketingclaims.",
              "Typische technische frictie ontstaat wanneer SKU- en variantlogica niet aan BOM, materiaal en leverancierslagen is gekoppeld; wanneer chemische claims niet aan actueel bewijs hangen; en wanneer DPP- en compliancewerk in aparte teams loopt. ANKA structureert productidentiteit, materiaaldata en supplychainbewijs in één controlekader voor deze sector.",
            ],
          },
        },
      },
      "agriculture-food": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In landbouw en voedsel worden herkomst, traceerbaarheid en leveranciersdata samen beoordeeld met EUDR-voorbereiding, milieuprestatie en bewijs van grondstofbron. Water-, koolstof- en operationele datadiscipline vereist een consistent recordmodel op lot-, geografisch- en leveranciersverklaringsniveau.",
              "Organisaties verzamelen vaak velddata maar bouwen geen verifieerbaar bewijs op locatie- of leveranciersniveau. ANKA verbindt traceerbaarheid, leveranciersdataverzoeken en regelgevingsvoorbereiding onder één data-architectuur voor deze sector.",
            ],
          },
        },
      },
      "packaging-plastics-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In verpakking, kunststof en materialen koppelt PPWR product- en verpakkingsdata, materiaalsamenstelling, recycleerbaarheid en marktverklaringseisen aan dezelfde productinventaris. LCA- en EPD-verwachtingen, samen met leveranciersverklaringen, vragen een gedeelde datataal tussen design, inkoop en compliance.",
              "Technisch risico ontstaat wanneer verpakkings-BOM losstaat van productmasterdata, materiaalpercentages niet worden bijgehouden en recycleclaims niet aan bewijsdossiers zijn gekoppeld. ANKA brengt verpakkingsinventaris, materiaaldiscipline en complianceverklaringen in één structuur.",
            ],
          },
        },
      },
      "building-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In bouwmaterialen verwacht de Europese markt LCA, EPD, productcarbonfootprint en technische verklaringen als evidence-based productinformatie. Productfamilielogica, variantbeheer en productiedata op locatieniveau moeten gestructureerd zijn om binnen één portfolio aan verschillende marktvragen te voldoen.",
              "Veelvoorkomende frictie: EPD- en koolstofdata niet gekoppeld aan producthiërarchie, verouderde technische dossiers en datagaten bij leveranciers of grondstoffen. ANKA beheert productfamilielogica, milieudata en technische documentatie samen voor deze sector.",
            ],
          },
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In metaal, aluminium en industriële productie vereist CBAM ingebedde emissies op productniveau, productieroute, elektriciteits- en brandstofdata en precursorregistraties in één rekenkader. ASI-voorbereiding en leveranciersdata hangen af van veldgegevens die verifieerbaar en auditeerbaar zijn.",
              "Technische moeilijkheid ontstaat vaak door inconsistente definitie van locatie en product, menging van defaultwaarden met werkelijke productiedata, en leveranciersverklaringen zonder methodologiekoppeling. ANKA structureert emissiedata, productieroute en supplychainbewijs verdedigbaar voor deze sector.",
            ],
          },
        },
      },
      "automotive-mobility": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In automotive- en mobiliteitsketens combineren klant- en OEM-dataverzoeken productcarbonfootprint, materiaalcompliance, Scope 3 en traceerbaarheid op component- en leveranciersniveau. Milieudata op productniveau moeten consistent zijn gedefinieerd per onderdeelnummer, materiaalklasse en leverancierslaag.",
              "Teams werken vaak met enquêtes zonder datastructuur, validatie of revisiespoor—waardoor verzoeken elk modelyear opnieuw openen. ANKA maakt van leveranciersdataverzoeken, materiaalcompliance en milieudata op productniveau een herhaalbare flow.",
            ],
          },
        },
      },
      "chemicals-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In chemie en industriële chemicaliën vereist productcompliance dat technische documentatie, milieudata en veiligheids- of complianceverklaringen met REACH- en CLP-bewustzijn worden beheerd. Leveranciersverklaringen en formulatiegegevens worden centrale referenties in klant-, markt- en interne compliancecontroles.",
              "Typische problemen: SDS- en compliancedossiers niet gekoppeld aan het productportfolio, milieudata niet op productfamilieniveau, en gebroken bewijsketens bij leverancierswissels. ANKA verenigt productcompliance, technische dossiers en leveranciersdata in één gecontroleerd recordmodel.",
            ],
          },
        },
      },
      "tourism-hospitality": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "In toerisme en hospitality beoordelen GSTC en duurzame toerismeprogramma's milieu- en culturele duurzaamheid, operationele monitoring en actieplannen samen met een bewijsdossier. Data- en bewijsstructuur op property-, bestemmings- of merkniveau is doorslaggevend in audit- en certificeringsprocessen.",
              "Veelvoorkomende frictie: indicatoren niet gekoppeld aan operationele data, actieplannen los van bewijsdossiers, en onduidelijke verantwoordelijkheidskaarten bij multi-site operaties. ANKA structureert programma, monitoring en bewijs in een beheersbaar kader voor deze sector.",
            ],
          },
        },
      },
    },
  },
};
