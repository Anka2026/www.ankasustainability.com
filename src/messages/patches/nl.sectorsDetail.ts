import type { JsonObject } from "@/lib/merge-messages";

export const nlSectorsDetailPatch: JsonObject = {
  sectorsPage: {
    detail: {
      backToSectors: "Terug Naar Sectoren",
      relatedWorkTitle: "Gerelateerde Werkgebieden",
      relatedServicesEyebrow: "Gerelateerde diensten",
      relatedServicesCta: "Alle diensten bekijken",
      sectionLabels: {
        reality: "Sectorrealiteit",
        criticalAreas: "Kritieke Compliance- en Datagebieden",
        challenges: "Veelvoorkomende Uitdagingen",
        ankaApproach: "ANKA's Aanpak",
      },
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          chips: ["DPP-gereedheid", "Ketenzichtbaarheid", "Productduurzaamheidsdata"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Textiel- en modebedrijven worden geconfronteerd met stijgende verwachtingen rond productmilieudata, materiaalsamenstelling, chemische compliance en transparantie in de keten—niet als losse marketingclaims, maar als gestructureerd bewijs dat afnemers en toezichthouders kunnen beoordelen.",
              "CBAM geldt niet voor elk afgewerkt kledingstuk, maar ingebedde emissies, leveranciersdata en productgerichte milieu-informatie beïnvloeden steeds vaker inkoopbeslissingen en rapportagegrenzen in de hele keten.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Datastructuren voor het digitale productpaspoort en eigenaarschap over product-, leveranciers- en documentlagen",
              "Materiaalsamenstelling, chemische compliance en conformiteitsdocumentatie gekoppeld aan SKU-records",
              "Ketenzichtbaarheid: tier-mapping, leveranciersdataverzoeken en bewijs voor herkomst- en verwerkingsclaims",
              "Productduurzaamheidsmetrics en claims ondersteund door traceerbare berekening en reviewlogica",
              "Afstemming tussen productmilieutrajecten en corporate sustainability reporting waar dat vereist is",
            ],
          },
          challenges: {
            bullets: [
              "Versnipperde product- en leveranciersdata in PLM, ERP en leveranciersspreadsheets zonder één bewijsmodel",
              "DPP-voorbereiding als documentoefening vóórdat eigenaarschap over product- en ketendata helder is",
              "Duurzaamheidsclaims zonder consistente records voor materiaalsamenstelling of chemische compliance",
              "Beperkt zicht op upstream-emissies en milieudata die afnemers of toekomstige regelgeving vragen",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA structureert textiel- en modewerk rond sectorspecifieke productdata, ketenzichtbaarheid en verdedigbare duurzaamheidscommunicatie—niet rond generieke templates die losstaan van collecties, leveranciers en compliance-dossiers.",
              "We verduidelijken prioritaire datadomeinen, wijzen eigenaarschap toe en bouwen een traceerbaar werkritme dat DPP-gereedheid, productbewijs en rapportagevoorbereiding verbindt waar uw markt- en afnemerscontext dat vraagt.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "ESG en corporaterapportage",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "agriculture-food": {
        hero: {
          chips: ["Herkomst en traceerbaarheid", "EUDR-gereedheid", "Leveranciersdatadiscipline"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Agro-foodketens combineren herkomst-, verwerkings- en distributiedata met verwachtingen over milieuprestaties rond water, koolstof, landgebruik en leverancierspraktijk—vaak over gefragmenteerde boer-, handelaar- en verwerkingsrelaties.",
              "Regelgeving zoals EUDR verhoogt de lat voor traceerbaarheid, due diligence en gedocumenteerd bewijs voor grondstoffen en afgeleide producten die de EU-markt ingaan.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Herkomst-, perceel- en chain-of-custody-logica met duidelijke grenzen voor gemengde en bewerkte producten",
              "Leveranciers- en handelsdatastructuren, inclusief hiaten, aannames en kwaliteitsreview voor traceerbaarheidsclaims",
              "Milieuprestatiedata: water, koolstof, bodem en landgerelateerde metrics waar relevant voor disclosure of afnemers",
              "EUDR-conforme due diligence-dossiers, risicobeoordeling en bewijskoppelingen—geen eenmalige leveranciersverklaringen",
              "Koppeling tussen ketendatawerk en Scope 3 of corporate reporting waar hetzelfde bewijs moet standhouden",
            ],
          },
          challenges: {
            bullets: [
              "Traceerbaarheid beperkt tot certificaten zonder geolocatie, volume- of verwerkingsbewijs dat te reviewen is",
              "Leveranciersdata laat in het seizoen verzameld of alleen voor één grondstof terwijl portfolio's gemengd zijn",
              "Milieumetrics gerapporteerd zonder consistente methodiek of eigenaarschap op locatieniveau",
              "EUDR-voorbereiding gereduceerd tot sjablonen zonder mapping van echte inkooproutes en controles",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA helpt agro-foodorganisaties te bepalen wat bekend moet zijn over herkomst, leveranciers en milieuprestaties—en hoe die informatie wordt verzameld, gecontroleerd en bewaard in een werkbaar dossier.",
              "We prioriteren EUDR- en afnemergedreven traceerbaarheid naast datadiscipline voor koolstof, water en rapportage, zodat teams geen parallelle, inconsistente bewijslijnen hoeven te draaien.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Koolstof, klimaat en decarbonisatie",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "ESG en corporaterapportage",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "packaging-plastics-materials": {
        hero: {
          chips: ["PPWR-afstemming", "Materiaal- en recycleerbaarheidsdata", "LCA / EPD"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Producenten van verpakkingen en materialen moeten samenstelling, recycleerbaarheid en milieuprestatiedata beheren en tegelijk voldoen aan PPWR en marktgerichte productverklaringen—not alleen interne specificatiebladen.",
              "LCA, EPD en productcarboninformatie staan steeds vaker naast compliancedata terwijl afnemers vergelijkbare, onderbouwde productprofielen verwachten.",
            ],
          },
          criticalAreas: {
            bullets: [
              "PPWR-relevante verpakkingsdata: formaten, componenten, gerecycled gehalte en design-for-recycling-logica",
              "Materiaalsamenstellingsrecords en leveranciersverklaringen die conformiteit en marktstatements dragen",
              "Recycleerbaarheidsinputs, aannames en documentatie afgestemd op productfamilies",
              "LCA / EPD- en productcarbonfootprint-grenzen, datasets en reviewbare berekeningsdossiers",
              "Koppeling tussen productmilieudata en klant- of autoriteitsgerichte verklaringen",
            ],
          },
          challenges: {
            bullets: [
              "Verpakkingsportfolio's op marketingniveau beschreven terwijl materiaaldata op SKU-niveau onvolledig blijft",
              "Recycleerbaarheidsclaims zonder consistente methodiek of leveranciersgedragen samenstellingsbewijs",
              "LCA- en EPD-projecten los van PPWR- en conformiteitsdatastructuren uitgevoerd",
              "Leveranciersverklaringen informeel opgeslagen zonder versiebeheer of koppeling aan eindproductrecords",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA verbindt PPWR, materiaaldata, recycleerbaarheid en productmilieuprestaties in één beheersbare architectuur—zodat teams weten welke data compliance voedt, welke marktcommunicatie, en wie updates beheert.",
              "We richten ons op traceerbare productrecords, geborgde aannames en bewijs dat klanten en interne reviewers kunnen volgen zonder elk rapportagecyclus het dossier opnieuw op te bouwen.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
          ],
        },
      },
      "building-materials": {
        hero: {
          chips: ["LCA en EPD", "Product carbon footprint", "Technische verklaringen"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Bouwproducten worden verkocht op technische prestaties en steeds vaker op milieubewijs—LCA, EPD, productcarbonfootprint en verklaringsdata die standhouden in Europese aanbestedingen en certificeringscontexten.",
              "Markttoegang hangt af van consistente productrecords, transparante modelleringskeuzes en documentatie die milieuprofielen koppelt aan specifieke productranges—not alleen generieke branchesgemiddelden.",
            ],
          },
          criticalAreas: {
            bullets: [
              "LCA- en EPD-scope, functionele eenheden en datasets afgestemd op productfamilies en productielocaties",
              "Productcarbonfootprint-logica en updates bij wijzigingen in recepten, energiemix of leveranciers",
              "Technische verklaringen en milieuproductinformatie vereist voor doelmarkten",
              "Verificatieklaar dossier: aannames, databronnen en goedkeuringsdiscipline",
              "Integratie tussen productmilieudata en klant- of platformindieningsformaten",
            ],
          },
          challenges: {
            bullets: [
              "EPD-bibliotheken hergebruikt zonder duidelijke regels wanneer locatie- of leveranciersspecifieke data nodig is",
              "Productcarboncijfers gecommuniceerd vóórdat activiteitsdata en grenzen zijn geborgd",
              "Technische dossiers verspreid over consultants, fabrieken en sales zonder één productindex",
              "Verificatiehiaten in een laat stadium omdat bewijs niet tijdens berekeningswerk is gestructureerd",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA structureert bouwmaterialenwerk rond betrouwbare productmilieuprofielen—LCA, EPD, carbon footprint en technische verklaringen gekoppeld aan hoe fabrieken, producten en klantvragen daadwerkelijk lopen.",
              "We helpen teams herhaalbare berekenings- en documentatieroutines op te bouwen die markttoegang en review ondersteunen, in plaats van eenmalige projectoutput die moeilijk over het portfolio te onderhouden is.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Certificering, traceerbaarheid en marktvertrouwen",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          chips: ["CBAM ingebedde emissies", "Productieroutedata", "ASI-gereedheid"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Metaal- en industriële productie staat onder directe druk op ingebedde emissies, transparantie over productieroutes en precursordata—vooral waar CBAM en klantvragen over koolstof samenkomen met elektriciteit, brandstof en procesinformatie op locatieniveau.",
              "Marktprogramma's zoals ASI voegen stewardship- en traceerbaarheidseisen toe bovenop regulatoire koolstofdata, met behoefte aan afgestemde—not dubbele—bewijsstructuren.",
            ],
          },
          criticalAreas: {
            bullets: [
              "CBAM product- en installatiescope, productieroutes en logica voor ingebedde emissies",
              "Elektriciteits-, brandstof- en procesactiviteitsdata met duidelijke grenzen en kwaliteitsreview",
              "Precursor- en inputdata van leveranciers, inclusief formaten, defaults en gedocumenteerde aannames",
              "Productcarbonfootprint en klantdataverzoeken gekoppeld aan dezelfde kerndatasets waar mogelijk",
              "ASI- en marktgereedheidsdossiers: beleid, controls en traceerbare records voor stewardship-claims",
            ],
          },
          challenges: {
            bullets: [
              "Locatiedata in engineeringssystemen terwijl CBAM en klanten geharmoniseerde productviews verwachten",
              "Leveranciersprecursorinformatie geaccepteerd zonder kwaliteitsniveaus of afstemming op productie",
              "Losse CBAM-, PCF- en certificeringstrajecten met inconsistente productlijsten en eigenaarschap",
              "Financiële en operationele teams ontvangen koolstofcijfers zonder traceerbare methodologiedocumentatie",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA bouwt een samenhangend data- en bewijsmodel voor metaal- en industriële producenten—CBAM, productcarbon, productieroutelogica en marktprogramma's verbonden aan gedeelde product- en locatierecords waar haalbaar.",
              "We benadrukken verifieerbare berekeningsdossiers, leveranciersdatadiscipline en governance die management en klanten kunnen volgen—not geïsoleerde spreadsheets per verzoek.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Certificering, traceerbaarheid en marktvertrouwen",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "automotive-mobility": {
        hero: {
          chips: ["Leveranciersdatamanagement", "Product carbon footprint", "EU-marktcompliance"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Automotive- en mobiliteitsleveranciers beheren intensieve klantdataverzoeken over materialen, compliance, productcarbonfootprint en Scope 3—vaak met korte deadlines en verschillende formaten per OEM-programma.",
              "EU-marktverwachtingen koppelen productmilieudata, materiaalconformiteit en ketendocumentatie tot één geloofwaardigheidstoets voor gelaagde toeleveringsbases.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Beheer van leveranciersdataverzoeken: templates, tijdlijnen, kwaliteitsreview en escalatielogica",
              "Productcarbonfootprint-grenzen en datasets afgestemd op klant- en onderdeelniveau",
              "Materiaalcompliance en stofdata gekoppeld aan onderdelen, BOM's en change control",
              "Scope 3- en categorielogica verbonden met leveranciers- en productrecords waar vereist",
              "Documentatiepakketten voor EU-markt- en klantaudits met duidelijk eigenaarschap en versiebeheer",
            ],
          },
          challenges: {
            bullets: [
              "Reactief reageren op OEM-portals zonder intern masterdatamodel voor onderdelen en leveranciers",
              "PCF-cijfers gedeeld vóórdat activiteitsdata en allocatieregels zijn afgesproken en gedocumenteerd",
              "Materiaalcompliance lokaal bijgewerkt terwijl centrale BOM-records achterlopen op engineeringwijzigingen",
              "Scope 3-inventarissen alleen op spend-data terwijl klanten leveranciersspecifiek bewijs verwachten",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA helpt automotive- en mobiliteitsleveranciers leveranciersdata, productcarbon en compliancedocumentatie te organiseren in een gecontroleerd werkritme—zodat klantvragen uit geborgde records komen, niet uit ad-hoc bestandenjacht.",
              "We stemmen EU-marktgereedheid, PCF en rapportagevoorbereiding af op hoe engineering, inkoop en duurzaamheidsteams al werken, en verminderen parallelle sporen en last-minute reconciliatie.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Koolstof, klimaat en decarbonisatie",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
          ],
        },
      },
      "chemicals-industrial": {
        hero: {
          chips: ["Productcompliance-data", "Technische documentatie", "REACH / CLP-bewustzijn"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Chemie- en industriële chemiebedrijven moeten productconformiteit, veiligheids- en milieudata en technische documentatie onderhouden die standhoudt in REACH/CLP-bewuste markten en veeleisende klantaudits.",
              "Leveranciersverklaringen en samenstellingsdata zijn even kritisch als interne formuleringsrecords wanneer producten worden verhandeld, hervormuleerd of ingekocht over regio's.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Productcompliance en datastructuren die samenstelling, classificatie en gebruiksvoorwaarden koppelen",
              "Technische documentatie, SDS-logica en update-triggers bij wijzigingen in formules of leveranciers",
              "REACH / CLP-relevante informatiestromen en rollen—not juridisch advies, maar data- en dossierdiscipline",
              "Leveranciersverklaringen, zuiverheidsgraden en onzuiverheidsdata met review- en bewaarregels",
              "Koppeling tussen productcompliance-dossiers en corporate sustainability of klantvragenlijsten",
            ],
          },
          challenges: {
            bullets: [
              "Formuleringskennis bij R&D terwijl klantgerichte dossiers apart door regulatory affairs worden beheerd",
              "Leveranciersverklaringen geaccepteerd zonder afstemming op interne specificatie of lottraceerbaarheid",
              "Technische documentatie reactief bijgewerkt na klantaudits in plaats van via change control",
              "Duurzaamheidsvragenlijsten beantwoord zonder consistente koppeling aan onderliggende product- en veiligheidsdata",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA ondersteunt chemie-organisaties bij het structureren van productcompliance, technische documentatie en leveranciersinformatie in een coherent, reviewbaar systeem—zodat markt- en klantvragen dezelfde gecontroleerde records gebruiken.",
              "We richten ons op duidelijk data-eigenaarschap, documentbeheer en bewijsketens die teams kunnen draaien tussen hervormuleringen, nieuwe leveranciers en rapportagecycli—zonder resultaten te beloven die ANKA niet certificeert.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "EU-regelgeving en ketencompliance",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Productduurzaamheid, LCA en EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "ESG en corporaterapportage",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "tourism-hospitality": {
        hero: {
          chips: ["GSTC-criteriagereedheid", "Bewijsdossiers", "Operationele monitoring"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Hotels, touroperators en bestemmingen worden beoordeeld op managementsystemen, milieuprestaties, cultureel stewardship en gastgerichte praktijk—not op één emissiecijfer alleen.",
              "Programma's zoals GSTC en het Türkiye Environmental and Cultural Sustainability Programme vragen gestructureerde gap-analyse, bewijsdossiers en operationele opvolging die teams tussen beoordelingen kunnen onderhouden.",
            ],
          },
          criticalAreas: {
            bullets: [
              "GSTC-criteriamapping, gap-analyse en geprioriteerde actieplanning over locaties of merken",
              "Milieudata: energie, water, afval en inkoopmetrics met gedefinieerde verzamelrollen",
              "Bewijsdossiers die beleid, records, training en praktijk op locatie koppelen aan criteria",
              "Documentatie van culturele en community-impact waar programmacriteria aantoonbare praktijk vragen",
              "Operationele monitoring en verantwoordelijkheden zodat voorbereiding continu is—not alleen pre-audit",
            ],
          },
          challenges: {
            bullets: [
              "Duurzaamheid als marketingmateriaal zonder operationele indicatoren en ondertekende records",
              "Bewijs per afdeling verzameld zonder criterium-geïndexeerd dossier",
              "Gap-analyses eenmalig gemaakt maar niet vertaald naar eigendom en monitoring",
              "Meerdere locaties of merken met verschillende informele standaarden zonder groepsbrede basislijn",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA werkt met toerisme- en hospitality-organisaties aan GSTC-conforme voorbereiding, programmagereedheid en bewijsorganisatie—we verduidelijken wat aangetoond moet worden, wie het verzamelt en hoe dossiers in de tijd worden onderhouden.",
              "We verstrekken geen certificaten en garanderen geen beoordelingsuitkomsten; we helpen teams een geloofwaardige, werkbare bewijsbasis en actieritme op te bouwen voor intern management en externe review.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label:
                "Duurzaam toerisme, GSTC en het Türkiye Environmental and Cultural Sustainability Programme",
              href: "/services/sustainable-tourism-gstc",
            },
            {
              label: "ESG en corporaterapportage",
              href: "/services/esg-corporate-reporting",
            },
            {
              label: "Certificering, traceerbaarheid en marktvertrouwen",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
    },
  },
};
