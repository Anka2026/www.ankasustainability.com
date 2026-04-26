import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const softwarePageEn = {
  meta: {
    title: "Software Solutions",
    description:
      "Digital workspaces for structured sustainability, compliance, and technical delivery.",
  },
  hero: {
    eyebrow: "Software Solutions",
    title: "Digital Workflows That Strengthen Sustainability And Compliance Delivery",
    description:
      "ANKA supports sustainability, compliance, and technical workstreams not only through advisory services, but also through digital workspaces designed for structured data collection, calculations, traceability, and reporting readiness.",
    primaryCta: "Book A Call",
    secondaryCta: "View portfolio",
    panel: {
      title: "Structured digital execution",
      description:
        "Practical workspaces that complement advisory: clearer data, stronger traceability, and more manageable outputs.",
      items: ["Data collection", "Calculation discipline", "Traceability", "Reporting readiness"],
    },
  },
  portfolio: {
    title: "Our Software Portfolio",
    description:
      "Explore digital solutions shaped by real operational use cases and advisory needs. Each product is designed to make data more structured, processes more traceable, and outputs more manageable.",
    viewSolutionCta: "View solution",
    modalClose: "Close",
    products: {
      "cbam-calculation-engine": {
        pill: "CBAM",
        status: "selected_use",
        title: "CBAM Calculation Engine",
        summary:
          "A digital workspace that structures CBAM data collection, methodology choice, and product- and site-level calculation logic into a clearer, more traceable operating model.",
        bullets: [
          "Product- and site-level calculation structure",
          "Supplier data and assumption management",
          "Reporting-ready output logic",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Calculation Engine is a digital workflow infrastructure that makes data collection, calculation, traceability and reporting preparation more controlled and repeatable—without replacing expert CBAM advisory.",
        solves: [
          "Disparate supplier inputs need one governed working logic.",
          "Traceable assumptions, sources, and evidence handling.",
          "Methodology-disciplined embedded-emissions calculation flow.",
        ],
        capabilities: [
          {
            title: "Input and control frame",
            description: "Structured flow for supplier data, ownership, and evidence.",
          },
          {
            title: "Calculation logic",
            description: "Controlled handling of inputs and assumptions.",
          },
          {
            title: "Output preparation",
            description: "Explainable outputs for reporting and buyer requests.",
          },
        ],
        howItWorks: [
          {
            title: "Scope and data model",
            description: "Clarify product, facility, and supplier scope with data needs.",
          },
          {
            title: "Supplier validation",
            description: "Strengthen data quality with checks and evidence flow.",
          },
          {
            title: "Calculation and outputs",
            description: "Run the workflow and prepare reporting-ready outputs.",
          },
        ],
        whoItsFor: ["Export teams", "Sustainability teams", "Compliance teams", "Supply chain teams"],
        outputs: [
          "Product- and site-level calculation structure",
          "Supplier data and assumptions",
          "Reporting-ready output package",
        ],
      },
      "agri-climate-platform": {
        pill: "Agriculture",
        status: "selected_use",
        title: "Agri-Climate Platform",
        summary:
          "A digital platform that unifies land, activity, evidence, and verification readiness in one working discipline.",
        bullets: [
          "Land and activity records",
          "Calculation and verification flow",
          "Portfolio and readiness visibility",
        ],
        screenshotAlt: "Agri-Climate Platform product interface",
        heroText:
          "Agri-Climate Platform connects field data and traceability logic into a governed workflow for land-based climate work.",
        solves: [
          "Consistent field data collection",
          "Traceable records",
          "Verification-ready portfolio signals",
        ],
        capabilities: [
          {
            title: "Field-data discipline",
            description: "Record logic and validation points that improve data quality.",
          },
        ],
        howItWorks: [
          {
            title: "Records and traceability",
            description: "Define structured data flow and record design.",
          },
        ],
        whoItsFor: ["Supply chain teams", "Sustainability teams"],
        outputs: [
          "Land and activity records",
          "Calculation and verification flow",
          "Portfolio preparation",
        ],
      },
      "cbam-compliance-console": {
        pill: "Compliance",
        status: "selected_use",
        title: "CBAM Compliance Console",
        summary:
          "Line-level and batch-ready CBAM calculations, supplier data intake, reference-backed validation, and exposure visibility for importer teams.",
        bullets: [
          "Line-level and batch CBAM calculations",
          "Supplier data intake flows",
          "Reference-backed validation logic",
          "Visibility for importer teams",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Compliance Console supports importer teams with line-level and batch calculations, disciplined supplier data intake, reference-backed validation, and clearer exposure visibility.",
        solves: [
          "Importer teams need consistent CBAM calculation logic across lines and batches.",
          "Supplier evidence and reference checks must stay disciplined as volumes grow.",
          "Exposure and liability signals should stay visible to decision-makers.",
        ],
        capabilities: [
          {
            title: "Batch-ready calculation view",
            description: "Operate across lines with consistent methodology and controls.",
          },
          {
            title: "Supplier intake and checks",
            description: "Structured data requests with validation and evidence links.",
          },
          {
            title: "Exposure visibility",
            description: "Clear views for finance and compliance stakeholders.",
          },
        ],
        howItWorks: [
          {
            title: "Consolidate",
            description: "Bring supplier inputs and reference data into one control surface.",
          },
          {
            title: "Validate",
            description: "Apply reference-backed checks before final calculations.",
          },
          {
            title: "Report-ready outputs",
            description: "Package outputs for internal review and external requests.",
          },
        ],
        whoItsFor: ["Importer teams", "Finance teams", "Compliance teams", "Trade operations"],
        outputs: ["Batch calculation outputs", "Validation notes", "Exposure summaries"],
      },
    },
  },
  workflows: {
    eyebrow: "Execution patterns",
    title: "Digital disciplines that sharpen delivery",
    description:
      "Structured ways of working across data collection, controls, calculations, and reporting—aligned with how advisory teams deliver.",
    c1: "Data collection",
    c2: "Traceability",
    c3: "Calculation and scenarios",
    c4: "Reporting preparation",
    c5: "Decision support",
    c6: "Team coordination",
  },
  consultingSoftware: {
    title: "Advisory expertise with a disciplined digital layer",
    description:
      "Digital workspaces strengthen data ownership, controls, and evidence so advisory engagements stay practical, traceable, and easier to run end to end.",
  },
  detail: {
    backToSoftware: "All software",
    roadmapPanelTitle: "Scope and access note",
    sections: {
      whatItSolves: "Why it exists",
      keyCapabilities: "Key capabilities",
      howItWorks: "Core workflow",
      whoItsFor: "Who it is for",
      outputs: "Outputs",
    },
    whoSupportingNote:
      "Digital infrastructure is a complementary layer. It aims to make data and evidence workflows more controlled—not to replace expert advisory.",
    finalCta: {
      title: "Let’s align the digital scope",
      description: "Let’s review your use-case, data reality and the right access model.",
    },
  },
  finalCta: {
    title: "Let’s Define The Right Digital Setup For Your Needs",
    description:
      "Let’s assess your compliance requirements, data structure, and operational priorities together to define the right digital workflow for your organization.",
    primaryCta: "Book A Call",
    secondaryCta: "Contact Us",
  },
};

const softwarePageTr = {
  meta: {
    title: "Yazılım Çözümleri",
    description:
      "Sürdürülebilirlik, uyum ve teknik teslimat için yapılandırılmış dijital çalışma alanları.",
  },
  hero: {
    eyebrow: "Yazılım Çözümleri",
    title: "Danışmanlık Çalışmalarını Güçlendiren Dijital Çözüm Altyapıları",
    description:
      "ANKA, sürdürülebilirlik, uyum ve teknik çalışma süreçlerini yalnızca danışmanlıkla değil; veri toplama, hesaplama, izlenebilirlik ve raporlama disiplinini destekleyen dijital çalışma alanlarıyla güçlendirir.",
    primaryCta: "Görüşme Planlayın",
    secondaryCta: "Portföyü inceleyin",
    panel: {
      title: "Disiplinli dijital icra",
      description:
        "Danışmanlığı tamamlayan pratik çalışma alanları: daha net veri, daha güçlü izlenebilirlik ve daha yönetilebilir çıktılar.",
      items: ["Veri toplama", "Hesaplama disiplini", "İzlenebilirlik", "Raporlama hazırlığı"],
    },
  },
  portfolio: {
    title: "Yazılım Portföyümüz",
    description:
      "Gerçek kullanım senaryoları ve saha ihtiyaçları doğrultusunda şekillenen dijital çözümlerimizi inceleyin. Her ürün, veri yapısını daha düzenli, süreci daha izlenebilir ve çıktıları daha yönetilebilir hale getirmeyi amaçlar.",
    viewSolutionCta: "Çözümü İnceleyin",
    modalClose: "Kapat",
    products: {
      "cbam-calculation-engine": {
        pill: "CBAM",
        status: "selected_use",
        title: "CBAM Calculation Engine",
        summary:
          "CBAM kapsamında veri toplama, metodoloji seçimi, ürün ve tesis bazlı hesaplama kurgusunu daha düzenli ve izlenebilir hale getiren dijital çalışma alanı.",
        bullets: [
          "Ürün ve tesis bazlı hesaplama yapısı",
          "Tedarikçi verisi ve varsayım yönetimi",
          "Raporlamaya hazır çıktı mantığı",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Calculation Engine; uzman CBAM danışmanlığının yerini almaz. Veri toplama, hesaplama, izlenebilirlik ve raporlama hazırlığını daha kontrollü ve tekrarlanabilir kılan dijital bir iş akışı altyapısıdır.",
        solves: [
          "Dağınık tedarikçi girdileri tek bir yönetilen çalışma mantığında birleşmelidir.",
          "İzlenebilir varsayımlar, kaynaklar ve kanıt yönetimi.",
          "Metodoloji disiplinli gömülü emisyon hesaplama akışı.",
        ],
        capabilities: [
          {
            title: "Girdi ve kontrol çerçevesi",
            description: "Tedarikçi verisi, sahiplik ve kanıt için yapılandırılmış akış.",
          },
          {
            title: "Hesaplama mantığı",
            description: "Girdi ve varsayımların kontrollü yönetimi.",
          },
          {
            title: "Çıktı hazırlığı",
            description: "Raporlama ve alıcı talepleri için açıklanabilir çıktılar.",
          },
        ],
        howItWorks: [
          {
            title: "Kapsam ve veri modeli",
            description: "Ürün, tesis ve tedarikçi kapsamını veri ihtiyaçlarıyla netleştirin.",
          },
          {
            title: "Tedarikçi doğrulama",
            description: "Kontroller ve kanıt akışıyla veri kalitesini güçlendirin.",
          },
          {
            title: "Hesaplama ve çıktılar",
            description: "İş akışını çalıştırın ve raporlamaya hazır çıktıları oluşturun.",
          },
        ],
        whoItsFor: ["İhracat ekipleri", "Sürdürülebilirlik ekipleri", "Uyum ekipleri", "Tedarik zinciri ekipleri"],
        outputs: [
          "Ürün ve tesis bazlı hesaplama yapısı",
          "Tedarikçi verisi ve varsayımlar",
          "Raporlamaya hazır çıktı paketi",
        ],
      },
      "agri-climate-platform": {
        pill: "Tarım",
        status: "selected_use",
        title: "Agri-Climate Platform",
        summary:
          "Arazi, faaliyet, kanıt ve doğrulama hazırlığını tek bir çalışma disiplininde bir araya getiren dijital platform.",
        bullets: [
          "Arazi ve faaliyet kayıtları",
          "Hesaplama ve doğrulama akışı",
          "Portföy ve hazırlık görünürlüğü",
        ],
        screenshotAlt: "Agri-Climate Platform gerçek ürün ekranı",
        heroText:
          "Agri-Climate Platform, arazi temelli iklim çalışmalarında saha verisini ve izlenebilirlik mantığını yönetilen bir iş akışında birleştirir.",
        solves: [
          "Tutarlı saha verisi toplama",
          "İzlenebilir kayıtlar",
          "Doğrulamaya hazır portföy sinyalleri",
        ],
        capabilities: [
          {
            title: "Saha veri disiplini",
            description: "Kayıt mantığı ve doğrulama noktalarıyla veri kalitesini güçlendirir.",
          },
        ],
        howItWorks: [
          {
            title: "Kayıtlar ve izlenebilirlik",
            description: "Yapılandırılmış veri akışı ve kayıt tasarımı tanımlayın.",
          },
        ],
        whoItsFor: ["Tedarik zinciri ekipleri", "Sürdürülebilirlik ekipleri"],
        outputs: ["Arazi ve faaliyet kayıtları", "Hesaplama ve doğrulama akışı", "Portföy hazırlığı"],
      },
      "cbam-compliance-console": {
        pill: "Uyum",
        status: "selected_use",
        title: "CBAM Compliance Console",
        summary:
          "İthalatçı ekipler için satır bazlı ve toplu CBAM hesaplamaları, tedarikçi veri toplama, referans destekli kontrol ve maruziyet görünürlüğü sağlayan çalışma alanı.",
        bullets: [
          "Satır bazlı ve toplu CBAM hesaplamaları",
          "Tedarikçi veri toplama akışı",
          "Referans destekli doğrulama mantığı",
          "İthalatçı ekipleri için görünürlük",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Compliance Console; satır ve toplu hesaplamalar, disiplinli tedarikçi veri girişi, referans destekli doğrulama ve daha net maruziyet görünürlüğü ile ithalatçı ekipleri destekler.",
        solves: [
          "İthalatçı ekiplerinin satırlar ve partiler arasında tutarlı CBAM hesaplama mantığına ihtiyacı vardır.",
          "Tedarikçi kanıtı ve referans kontrolleri hacim arttıkça disiplinli kalmalıdır.",
          "Maruziyet ve yükümlülük sinyalleri karar vericiler için görünür olmalıdır.",
        ],
        capabilities: [
          {
            title: "Topluma hazır hesaplama görünümü",
            description: "Satırlar arasında tutarlı metodoloji ve kontrollerle çalışın.",
          },
          {
            title: "Tedarikçi girişi ve kontroller",
            description: "Doğrulama ve kanıt bağlantılarıyla yapılandırılmış veri talepleri.",
          },
          {
            title: "Maruziyet görünürlüğü",
            description: "Finans ve uyum paydaşları için net görünümler.",
          },
        ],
        howItWorks: [
          {
            title: "Birleştir",
            description: "Tedarikçi girdilerini ve referans verisini tek kontrol yüzeyinde toplayın.",
          },
          {
            title: "Doğrula",
            description: "Nihai hesaplamalardan önce referans destekli kontrolleri uygulayın.",
          },
          {
            title: "Raporlamaya hazır çıktılar",
            description: "İç inceleme ve dış talepler için çıktıları paketleyin.",
          },
        ],
        whoItsFor: ["İthalatçı ekipleri", "Finans ekipleri", "Uyum ekipleri", "Ticari operasyon ekipleri"],
        outputs: ["Toplu hesaplama çıktıları", "Doğrulama notları", "Maruziyet özetleri"],
      },
    },
  },
  workflows: {
    eyebrow: "Çalışma düzeni",
    title: "Teslimatı keskinleştiren dijital disiplinler",
    description:
      "Veri toplama, kontroller, hesaplamalar ve raporlama boyunca yapılandırılmış çalışma biçimleri—danışmanlık ekiplerinin teslimatına uyumlu.",
    c1: "Veri toplama",
    c2: "İzlenebilirlik",
    c3: "Hesaplama ve senaryolar",
    c4: "Raporlama hazırlığı",
    c5: "Karar desteği",
    c6: "Ekip koordinasyonu",
  },
  consultingSoftware: {
    title: "Disiplinli dijital katmanla güçlenen danışmanlık uzmanlığı",
    description:
      "Dijital çalışma alanları; veri sahipliğini, kontrolleri ve kanıtı güçlendirerek danışmanlık süreçlerinin uygulanabilir, izlenebilir ve uçtan uca daha yürütülebilir kalmasını sağlar.",
  },
  detail: {
    backToSoftware: "Tüm yazılımlar",
    roadmapPanelTitle: "Kapsam ve erişim notu",
    sections: {
      whatItSolves: "Neden var",
      keyCapabilities: "Temel yetkinlikler",
      howItWorks: "Temel iş akışı",
      whoItsFor: "Kimler için",
      outputs: "Çıktılar",
    },
    whoSupportingNote:
      "Dijital altyapı tamamlayıcı bir katmandır; veri ve kanıt akışlarını daha kontrollü hale getirmeyi hedefler—uzman danışmanlığın yerini almaz.",
    finalCta: {
      title: "Dijital kapsamı birlikte netleştirelim",
      description: "Kullanım senaryonuzu, veri gerçekliğinizi ve doğru erişim modelini birlikte gözden geçirelim.",
    },
  },
  finalCta: {
    title: "İhtiyacınıza Uygun Dijital Çözümü Birlikte Belirleyelim",
    description:
      "Kurumsal veri yapınızı, uyum gerekliliklerinizi ve operasyonel ihtiyacınızı birlikte değerlendirerek size en uygun dijital çalışma kurgusunu netleştirelim.",
    primaryCta: "Görüşme Planlayın",
    secondaryCta: "İletişime Geçin",
  },
};

const softwarePageNl = {
  meta: {
    title: "Softwareoplossingen",
    description:
      "Digitale werkomgevingen voor gestructureerde duurzaamheid, compliance en technische levering.",
  },
  hero: {
    eyebrow: "Softwareoplossingen",
    title: "Digitale Werkstructuren Die Duurzaamheids- En Compliancewerk Versterken",
    description:
      "ANKA ondersteunt duurzaamheids-, compliance- en technische werkstromen niet alleen met advies, maar ook met digitale werkomgevingen die zijn ingericht voor gestructureerde dataverzameling, berekeningen, traceerbaarheid en rapportagevoorbereiding.",
    primaryCta: "Plan een gesprek",
    secondaryCta: "Bekijk portfolio",
    panel: {
      title: "Gestructureerde digitale uitvoering",
      description:
        "Praktische werkomgevingen die advies aanvullen: helderdere data, sterkere traceerbaarheid en beter beheersbare output.",
      items: ["Dataverzameling", "Berekeningsdiscipline", "Traceerbaarheid", "Rapportagevoorbereiding"],
    },
  },
  portfolio: {
    title: "Ons Softwareportfolio",
    description:
      "Bekijk digitale oplossingen die zijn gevormd door echte gebruikssituaties en adviesbehoeften. Elke oplossing is ontworpen om data beter te structureren, processen beter traceerbaar te maken en uitkomsten beter beheersbaar te maken.",
    viewSolutionCta: "Bekijk oplossing",
    modalClose: "Sluiten",
    products: {
      "cbam-calculation-engine": {
        pill: "CBAM",
        status: "selected_use",
        title: "CBAM Calculation Engine",
        summary:
          "Een digitale werkomgeving die CBAM-dataverzameling, methodologiekeuze en product- en locatiegebonden rekenlogica overzichtelijker en traceerbaarder maakt.",
        bullets: [
          "Rekenstructuur op product- en locatieniveau",
          "Leveranciersdata en aannamebeheer",
          "Rapportageklare outputlogica",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Calculation Engine is een digitale workflow-infrastructuur die dataverzameling, berekening, traceerbaarheid en rapportagevoorbereiding beheersbaarder en herhaalbaarder maakt—zonder expert CBAM-advies te vervangen.",
        solves: [
          "Verspreide leveranciersinvoer vraagt om één beheerste rekenlogica.",
          "Traceerbare aannames, bronnen en bewijsafhandeling.",
          "Methodologiegedisciplineerde stroom voor ingebedde emissies.",
        ],
        capabilities: [
          {
            title: "Invoer- en controlekader",
            description: "Gestructureerde stroom voor leveranciersdata, eigenaarschap en bewijs.",
          },
          {
            title: "Rekenlogica",
            description: "Beheerste afhandeling van invoer en aannames.",
          },
          {
            title: "Outputvoorbereiding",
            description: "Verklaarbare output voor rapportage en inkoperverzoeken.",
          },
        ],
        howItWorks: [
          {
            title: "Scope en datamodel",
            description: "Verhelder product-, locatie- en leveranciersscope met databehoeften.",
          },
          {
            title: "Leveranciersvalidatie",
            description: "Versterk datakwaliteit met controles en bewijsstroom.",
          },
          {
            title: "Berekening en output",
            description: "Doorloop de workflow en bereid rapportageklare output voor.",
          },
        ],
        whoItsFor: ["Exportteams", "Duurzaamheidsteams", "Compliance-teams", "Supplychainteams"],
        outputs: [
          "Rekenstructuur op product- en locatieniveau",
          "Leveranciersdata en aannames",
          "Rapportageklare outputset",
        ],
      },
      "agri-climate-platform": {
        pill: "Landbouw",
        status: "selected_use",
        title: "Agri-Climate Platform",
        summary:
          "Een digitaal platform dat land, activiteit, bewijs en verificatiegereedheid in één werkdiscipline samenbrengt.",
        bullets: [
          "Land- en activiteitsregistraties",
          "Berekenings- en verificatiestroom",
          "Portefeuille- en gereedheidsoverzicht",
        ],
        screenshotAlt: "Agri-Climate Platform productinterface",
        heroText:
          "Agri-Climate Platform verbindt velddata en traceerlogica in een beheerste workflow voor landgebaseerd klimaatwerk.",
        solves: [
          "Consistente velddataverzameling",
          "Traceerbare registraties",
          "Verificatiegereedheid op portefeuilleniveau",
        ],
        capabilities: [
          {
            title: "Veld-datadiscipline",
            description: "Registratielogica en validatiepunten voor betere datakwaliteit.",
          },
        ],
        howItWorks: [
          {
            title: "Registraties en traceerbaarheid",
            description: "Definieer gestructureerde datastroom en dossieropbouw.",
          },
        ],
        whoItsFor: ["Supplychainteams", "Duurzaamheidsteams"],
        outputs: ["Land- en activiteitsregistraties", "Berekenings- en verificatiestroom", "Portefeuillevoorbereiding"],
      },
      "cbam-compliance-console": {
        pill: "Compliance",
        status: "selected_use",
        title: "CBAM Compliance Console",
        summary:
          "Regel- en batchklare CBAM-berekeningen, leveranciersdatainname, referentiegestuurde validatie en zicht op blootstelling voor importteams.",
        bullets: [
          "Regel- en batch-CBAM-berekeningen",
          "Stroom voor leveranciersdatainname",
          "Referentiegestuurde validatielogica",
          "Zicht op blootstelling voor importteams",
        ],
        screenshotAlt: "",
        heroText:
          "CBAM Compliance Console ondersteunt importteams met regel- en batchberekeningen, gedisciplineerde leveranciersinname, referentiegestuurde validatie en duidelijker zicht op blootstelling.",
        solves: [
          "Importteams hebben consistente CBAM-rekenlogica nodig over regels en batches.",
          "Leveranciersbewijs en referentiecontroles moeten schaalbaar disiplinair blijven.",
          "Blootstellingsignalen moeten zichtbaar blijven voor besluitvormers.",
        ],
        capabilities: [
          {
            title: "Batchklare berekeningsweergave",
            description: "Werken over regels met consistente methodologie en controles.",
          },
          {
            title: "Leveranciersinname en controles",
            description: "Gestructureerde dataverzoeken met validatie en bewijslinks.",
          },
          {
            title: "Zicht op blootstelling",
            description: "Heldere weergaven voor finance- en compliance-stakeholders.",
          },
        ],
        howItWorks: [
          {
            title: "Consolideren",
            description: "Breng leveranciersinvoer en referentiedata samen op één controlpaneel.",
          },
          {
            title: "Valideren",
            description: "Pas referentiegestuurde controles toe vóór definitieve berekeningen.",
          },
          {
            title: "Rapportageklare output",
            description: "Bundel output voor interne review en externe verzoeken.",
          },
        ],
        whoItsFor: ["Importteams", "Financiële teams", "Compliance-teams", "Trade operations"],
        outputs: ["Batchberekeningsoutput", "Validatienotities", "Blootstellingssamenvattingen"],
      },
    },
  },
  workflows: {
    eyebrow: "Werkpatronen",
    title: "Digitale disciplines die levering scherper maken",
    description:
      "Gestructureerde manieren van werken rond dataverzameling, controles, berekeningen en rapportage—in lijn met advieslevering.",
    c1: "Dataverzameling",
    c2: "Traceerbaarheid",
    c3: "Berekening en scenario’s",
    c4: "Rapportagevoorbereiding",
    c5: "Besluitondersteuning",
    c6: "Teamcoördinatie",
  },
  consultingSoftware: {
    title: "Adviesexpertise met een gedisciplineerde digitale laag",
    description:
      "Digitale werkomgevingen versterken data-eigenaarschap, controles en bewijs, zodat adviesopdrachten praktisch, traceerbaar en beter end-to-end uitvoerbaar blijven.",
  },
  detail: {
    backToSoftware: "Alle software",
    roadmapPanelTitle: "Toelichting op scope en toegang",
    sections: {
      whatItSolves: "Waarom deze oplossing bestaat",
      keyCapabilities: "Belangrijkste mogelijkheden",
      howItWorks: "Kernworkflow",
      whoItsFor: "Voor wie bedoeld",
      outputs: "Resultaten en output",
    },
    whoSupportingNote:
      "Digitale infrastructuur is een aanvullende laag: het maakt data- en bewijsstromen beheersbaarder—het vervangt geen inhoudelijk advies.",
    finalCta: {
      title: "Laten we de digitale scope afstemmen",
      description: "We bekijken samen uw use-case, datarealiteit en het passende toegangsmodel.",
    },
  },
  finalCta: {
    title: "Laten We De Juiste Digitale Opzet Samen Bepalen",
    description:
      "Laten we samen uw compliancevereisten, datastructuur en operationele prioriteiten beoordelen om de juiste digitale werkwijze voor uw organisatie te bepalen.",
    primaryCta: "Plan een gesprek",
    secondaryCta: "Neem contact op",
  },
};

function apply(locale, softwarePage) {
  const file = path.join(root, "src", "messages", `${locale}.json`);
  const raw = fs.readFileSync(file, "utf8");
  const data = JSON.parse(raw);
  data.softwarePage = softwarePage;
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

apply("en", softwarePageEn);
apply("tr", softwarePageTr);
apply("nl", softwarePageNl);

console.log("Updated softwarePage in en.json, tr.json, nl.json");
