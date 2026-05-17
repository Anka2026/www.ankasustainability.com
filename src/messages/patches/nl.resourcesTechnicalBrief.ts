import type { JsonObject } from "@/lib/merge-messages";

export const nlResourcesTechnicalBriefPatch: JsonObject = {
  insightsPage: {
    featured: {
      items: {
        "csrd-double-materiality": {
          technicalBrief: {
            paragraphs: [
              "Voor CSRD-voorbereiding is het technisch cruciaal dat materialiteitslogica vanaf het begin wordt gekoppeld aan data-eigenaarschap en bewijsvoering. Data die worden verzameld vóór scope en ESRS-onderwerpenkaart helder zijn, moeten in de rapportagecyclus opnieuw worden verwerkt.",
              "De meeste organisaties verzamelen stakeholderinput maar koppelen besliscriteria niet aan datavelden en documentatiestromen. Deze brief verduidelijkt welke technische stappen de voorbereiding beheersbaar en verdedigbaar maken.",
            ],
          },
        },
        "cbam-data-financial-impact": {
          technicalBrief: {
            paragraphs: [
              "CBAM-voorbereiding begint met consistente data over ingesloten emissies op product- en installatieniveau. Zonder gedeeld kader voor methodologie, grenzen voor standaardwaarden en leveranciersverklaringen verzwakt de verdedigbaarheid van berekeningen snel.",
              "Finance- en operationsteams behandelen financiële blootstelling vaak pas vlak voor de rapportagedeadline. Deze brief schetst hoe datakwaliteit en scenario-gebaseerde commerciële zichtbaarheid worden verbonden.",
            ],
          },
        },
        "digital-product-passport-data": {
          technicalBrief: {
            paragraphs: [
              "Digital Product Passport-voorbereiding vereist gekoppelde records voor productidentiteit, stuklijst en compliance-data—geen statische bestandsarchieven. Een veldenlijst alleen ondersteunt geen updatebeheer en bewijsketen.",
              "Teams definiëren vaak datadomeinen zonder eigenaarschap, validatie of deelregels vast te leggen. Deze brief prioriteert welke datastructuren eerst moeten worden ontworpen.",
            ],
          },
        },
        "ppwr-product-packaging-data": {
          technicalBrief: {
            paragraphs: [
              "Onder PPWR moeten verpakkingsdata in dezelfde architectuur staan als productmasterdata en complianceverklaringen. Versnipperde materiaalsamenstelling, gewicht en verantwoordelijkheidsmapping verhogen het risico op marktplaatsing.",
              "Ontwerp- en inkoopbeslissingen worden vaak genomen vóórdat compliancedata zijn bijgewerkt. Deze brief legt uit hoe verpakkingsinventaris en regelgeving worden afgestemd.",
            ],
          },
        },
        "scope-3-supplier-data": {
          technicalBrief: {
            paragraphs: [
              "De technische uitdaging bij Scope 3 is leveranciersinformatie omzetten in een herhaalbare datastroom. Eenmalige enquêtes zonder segmentatie en kwaliteitscontroles leveren geen duurzame inventarisdata op.",
              "Organisaties starten met verzamelen voordat definities en bewijsregels zijn afgesproken, wat elke rapportagecyclus opnieuw onderhandeling vereist. Deze brief verduidelijkt een geprioriteerde leveranciersdatastructuur.",
            ],
          },
        },
        "digital-workspace-reporting": {
          technicalBrief: {
            paragraphs: [
              "In duurzaamheidsrapportage is het grootste technische risico data en bewijs via ongestructureerde e-mail en bestandsdeling te beheren. Zonder revisiespoor en helder eigenaarschap raken multidisciplinaire projecten uit controle.",
              "Een digitale werkomgeving is geen softwarebelofte—het is een procesarchitectuur die verzamelen, review en oplevering zichtbaar maakt. Deze brief vat samen welke bouwstenen eerst moeten worden ingericht.",
            ],
          },
        },
      },
    },
  },
};
