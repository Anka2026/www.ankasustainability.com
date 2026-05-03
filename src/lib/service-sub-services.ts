import type { AppLocale } from "@/i18n/routing";
import type { ServicesCategoryId } from "@/lib/services-categories";

export type ServiceSubService = Readonly<{
  title: string;
  body: string;
}>;

type Bundle = Record<ServicesCategoryId, readonly ServiceSubService[]>;

/** First four items are used on service detail hero panels and align across locales. */
const TR: Bundle = {
  reportingEsg: [
    {
      title: "TSRS Danışmanlığı",
      body: "TSRS 1 ve TSRS 2 için kapsam, veri seti, yönetişim ve iklim açıklamalarını birlikte netleştiriyoruz.",
    },
    {
      title: "CSRD / ESRS Hazırlığı",
      body: "Avrupa raporlama beklentilerine göre çifte önemlilik, açıklama başlıkları ve veri ihtiyaçlarını düzenliyoruz.",
    },
    {
      title: "GRI / ISSB Raporlama",
      body: "Kurumsal sürdürülebilirlik raporlaması için gösterge, açıklama ve kanıt düzenini hazırlıyoruz.",
    },
    {
      title: "Çifte Önemlilik Analizi",
      body: "Etki, risk ve fırsat başlıklarını paydaş ve finansal önceliklerle birlikte değerlendiriyoruz.",
    },
  ],
  carbonClimate: [
    {
      title: "Kurumsal Karbon Ayak İzi / ISO 14064-1",
      body: "Kapsam 1, 2 ve uygun kapsam 3 emisyonlarını veri, sınır ve hesaplama mantığıyla hesaplıyoruz.",
    },
    {
      title: "Ürün Karbon Ayak İzi / ISO 14067",
      body: "Ürün bazlı karbon ayak izi çalışmalarında fonksiyonel birim, sistem sınırı ve veri yapısını kuruyoruz.",
    },
    {
      title: "SKDM / CBAM Danışmanlığı",
      body: "Ürün ve tesis bazlı gömülü emisyon, veri toplama, varsayım yönetimi ve raporlama hazırlığını düzenliyoruz.",
    },
    {
      title: "Su Ayak İzi / ISO 14046",
      body: "Ürün veya faaliyet bazlı su kullanımı ve su etkisi değerlendirmesi için veri ve metodoloji yapısını hazırlıyoruz.",
    },
  ],
  productCircularity: [
    {
      title: "LCA / Yaşam Döngüsü Analizi",
      body: "Ürünlerin çevresel etkilerini yaşam döngüsü yaklaşımıyla, veri ve modelleme mantığıyla değerlendiriyoruz.",
    },
    {
      title: "EPD Hazırlığı",
      body: "EN 15804 ve ilgili PCR gerekliliklerine göre LCA raporu ve EPD dosyası hazırlığını yürütüyoruz.",
    },
    {
      title: "Ürün Karbon Ayak İzi",
      body: "Ürün seviyesinde karbon etkisini ISO 14067 yaklaşımıyla hesaplanabilir ve raporlanabilir hale getiriyoruz.",
    },
    {
      title: "Dijital Ürün Pasaportu Hazırlığı",
      body: "Ürün verisi, malzeme içeriği, izlenebilirlik ve beyan alanlarını DPP beklentilerine göre düzenliyoruz.",
    },
  ],
  regulatorySupplyChain: [
    {
      title: "PPWR Ambalaj Uyumu",
      body: "Ambalaj verisi, malzeme bilgisi, geri dönüştürülebilirlik ve pazar bazlı beyan ihtiyaçlarını netleştiriyoruz.",
    },
    {
      title: "ESPR ve Dijital Ürün Pasaportu",
      body: "Ürün verisi, teknik kayıtlar ve izlenebilirlik alanlarını ESPR / DPP beklentileriyle uyumlu hale getiriyoruz.",
    },
    {
      title: "EUDR Hazırlığı",
      body: "Menşe, tedarik zinciri, izlenebilirlik ve durum tespiti verilerini düzenli bir kontrol yapısına taşıyoruz.",
    },
    {
      title: "CSDDD ve Tedarik Zinciri Durum Tespiti",
      body: "Tedarikçi riskleri, politika, kontrol ve izleme yapılarını durum tespiti beklentilerine göre değerlendiriyoruz.",
    },
  ],
  sustainableFinance: [
    {
      title: "Alıcı Veri Taleplerine Hazırlık",
      body: "Müşteri, marka veya ithalatçı taleplerine verilecek ESG, karbon, ürün ve tedarik zinciri yanıtlarını düzenliyoruz.",
    },
    {
      title: "ESG Durum Tespiti",
      body: "Kurumun mevcut ESG uygulamalarını, belge setini ve risk alanlarını alıcı beklentileri açısından değerlendiriyoruz.",
    },
    {
      title: "İhale ve Müşteri Yanıt Dosyaları",
      body: "Sürdürülebilirlik, karbon, ürün verisi ve uygunluk başlıklarında kullanılacak yanıt dosyalarını hazırlıyoruz.",
    },
    {
      title: "Pazar Güveni Hazırlığı",
      body: "Beyanların, raporların ve ürün bilgilerinin alıcı tarafında güven yaratacak bir kanıt düzenine dayanmasını sağlıyoruz.",
    },
  ],
  certificationTraceability: [
    {
      title: "ASI / Aluminium Stewardship Initiative Hazırlığı",
      body: "Alüminyum değer zincirinde ASI beklentilerine yönelik boşluk analizi, izlenebilirlik ve kanıt dosyası hazırlığını birlikte yürütüyoruz.",
    },
    {
      title: "Sertifikasyon Hazırlığı",
      body: "Belgelendirme veya değerlendirme süreçleri öncesinde kriter, kapsam, kanıt ve sorumlulukları netleştiriyoruz.",
    },
    {
      title: "Chain of Custody ve İzlenebilirlik",
      body: "Tedarikçi, malzeme, ürün ve işlem kayıtlarını izlenebilir bir kontrol düzenine taşıyoruz.",
    },
    {
      title: "Kütle Dengesi / Mass Balance",
      body: "Malzeme giriş-çıkış, stok, üretim ve beyan akışlarını savunulabilir bir kayıt düzenine dönüştürüyoruz.",
    },
  ],
  sustainableTourismGstc: [
    {
      title: "GSTC Kriterlerine Hazırlık",
      body: "Mevcut uygulamaları GSTC kriterleriyle karşılaştırıyor, eksik alanları ve öncelikli adımları görünür hale getiriyoruz.",
    },
    {
      title: "Türkiye Çevresel ve Kültürel Sürdürülebilirlik Programı",
      body: "Program beklentilerine göre belge, kayıt, saha uygulaması ve aksiyon düzenini oluşturuyoruz.",
    },
    {
      title: "Turizm İşletmeleri İçin Boşluk Analizi",
      body: "Otel, tur operatörü ve destinasyon yapılarında mevcut durum, belge seti ve saha uygulamalarını değerlendiriyoruz.",
    },
    {
      title: "Kanıt Dosyası ve Değerlendirme Hazırlığı",
      body: "Politika, prosedür, kayıt, gösterge, fotoğraf, eğitim ve saha kanıtlarını değerlendirme sürecine uygun hale getiriyoruz.",
    },
  ],
};

const EN: Bundle = {
  reportingEsg: [
    {
      title: "TSRS advisory",
      body: "We clarify scope, datasets, governance and climate disclosures for TSRS 1 and TSRS 2 together.",
    },
    {
      title: "CSRD / ESRS readiness",
      body: "We organise double materiality, disclosure topics and data needs against European reporting expectations.",
    },
    {
      title: "GRI / ISSB reporting",
      body: "We prepare indicators, narrative and evidence structures for corporate sustainability reporting.",
    },
    {
      title: "Double materiality analysis",
      body: "We assess impacts, risks and opportunities together with stakeholder and financial priorities.",
    },
  ],
  carbonClimate: [
    {
      title: "Corporate carbon footprint / ISO 14064-1",
      body: "We calculate scope 1, 2 and relevant scope 3 emissions using clear data, boundaries and calculation logic.",
    },
    {
      title: "Product carbon footprint / ISO 14067",
      body: "We establish functional unit, system boundary and data architecture for product-level carbon work.",
    },
    {
      title: "SKDM / CBAM advisory",
      body: "We structure embedded emissions at product and facility level, data collection, assumption governance and reporting readiness for EU ETS and CBAM workflows.",
    },
    {
      title: "Water footprint / ISO 14046",
      body: "We prepare data and methodology for product- or activity-level water use and impact assessment.",
    },
  ],
  productCircularity: [
    {
      title: "LCA / life cycle assessment",
      body: "We evaluate environmental impacts using lifecycle thinking, transparent data and modelling discipline.",
    },
    {
      title: "EPD preparation",
      body: "We deliver LCA reporting and EPD file preparation aligned with EN 15804 and the applicable PCR.",
    },
    {
      title: "Product carbon footprint",
      body: "We make product-level carbon results calculable and reportable under ISO 14067-style practice.",
    },
    {
      title: "Digital product passport readiness",
      body: "We organise product data, materials, traceability and claims fields for DPP expectations.",
    },
  ],
  regulatorySupplyChain: [
    {
      title: "PPWR packaging compliance",
      body: "We clarify packaging data, materials, recyclability and market-facing declaration needs.",
    },
    {
      title: "ESPR and digital product passport",
      body: "We align product data, technical records and traceability with ESPR / DPP expectations.",
    },
    {
      title: "EUDR readiness",
      body: "We move origin, supply chain, traceability and due diligence data into a controlled operating rhythm.",
    },
    {
      title: "CSDDD and supply chain due diligence",
      body: "We review supplier risk, policy, controls and monitoring against due diligence expectations.",
    },
  ],
  sustainableFinance: [
    {
      title: "Buyer data request readiness",
      body: "We structure ESG, carbon, product and supply chain responses for customers, brands and importers.",
    },
    {
      title: "ESG maturity assessment",
      body: "We review current practices, documentation and risk areas through a buyer-expectations lens.",
    },
    {
      title: "Tender and customer response packs",
      body: "We prepare response files for sustainability, carbon, product data and compliance questions.",
    },
    {
      title: "Market confidence preparation",
      body: "We anchor claims, reports and product information in a credible, buyer-facing evidence structure.",
    },
  ],
  certificationTraceability: [
    {
      title: "ASI / Aluminium Stewardship Initiative preparation",
      body: "We support gap analysis, traceability and evidence files for ASI expectations across the aluminium value chain.",
    },
    {
      title: "Certification preparation",
      body: "We clarify criteria, scope, evidence and responsibilities before certification or assessment.",
    },
    {
      title: "Chain of custody and traceability",
      body: "We move supplier, material, product and process records into a traceable control design.",
    },
    {
      title: "Mass balance",
      body: "We convert inbound/outbound flows, inventory, production and claims into a defensible record system.",
    },
  ],
  sustainableTourismGstc: [
    {
      title: "GSTC criteria readiness",
      body: "We compare current practices with GSTC criteria and make gaps and priority actions visible.",
    },
    {
      title: "Türkiye Environmental and Cultural Sustainability Programme",
      body: "We build documentation, records, field practice and action plans aligned with programme expectations.",
    },
    {
      title: "Gap analysis for tourism operators",
      body: "We assess current position, documentation and field practices for hotels, tour operators and destinations.",
    },
    {
      title: "Evidence file and assessment preparation",
      body: "We prepare policies, procedures, records, indicators, photos, training and field evidence for review.",
    },
  ],
};

const NL: Bundle = {
  reportingEsg: [
    {
      title: "TSRS-advies",
      body: "We brengen kader, datasets, governance en klimaatdisclosures voor TSRS 1 en TSRS 2 samen scherp in beeld.",
    },
    {
      title: "CSRD / ESRS-voorbereiding",
      body: "We ordenen dubbele materialiteit, disclosure-onderwerpen en data-eisen volgens Europese rapportageverwachtingen.",
    },
    {
      title: "GRI / ISSB-rapportage",
      body: "We bereiden indicatoren, verhaallijn en bewijsstructuur voor maatschappelijk verantwoord ondernemen voor.",
    },
    {
      title: "Analyse dubbele materialiteit",
      body: "We beoordelen impact, risico en kansen samen met stakeholder- en financiële prioriteiten.",
    },
  ],
  carbonClimate: [
    {
      title: "Bedrijfscarbonfootprint / ISO 14064-1",
      body: "We berekenen scope 1, 2 en relevante scope 3 met heldere data, grenzen en rekenlogica.",
    },
    {
      title: "Productcarbonfootprint / ISO 14067",
      body: "We zetten functionele eenheid, systeemgrens en data-architectuur neer voor productniveau.",
    },
    {
      title: "SKDM / CBAM-advies",
      body: "We structureren ingebedde emissies op product- en vestigingsniveau, dataverzameling, aannames en rapportagegereedheid voor EU ETS- en CBAM-werkwijzen.",
    },
    {
      title: "Waterfootprint / ISO 14046",
      body: "We bouwen data en methodiek voor watergebruik en -impact op product- of activiteitenniveau.",
    },
  ],
  productCircularity: [
    {
      title: "LCA / levenscyclusanalyse",
      body: "We beoordelen milieueffecten met levenscyclusdenken, transparante data en modelleringsdiscipline.",
    },
    {
      title: "EPD-voorbereiding",
      body: "We verzorgen LCA-rapportage en EPD-dossier conform EN 15804 en de toepasselijke PCR.",
    },
    {
      title: "Productcarbonfootprint",
      body: "We maken productniveau-resultaten berekenbaar en rapporteerbaar volgens ISO 14067-praktijk.",
    },
    {
      title: "Voorbereiding digitaal productpaspoort",
      body: "We ordenen productdata, materialen, traceerbaarheid en claimvelden voor DPP-verwachtingen.",
    },
  ],
  regulatorySupplyChain: [
    {
      title: "PPWR-verpakking",
      body: "We verduidelijken verpakkingsdata, materialen, recycleerbaarheid en marktgerichte verklaringen.",
    },
    {
      title: "ESPR en digitaal productpaspoort",
      body: "We brengen productdata, technische registraties en traceerbaarheid in lijn met ESPR / DPP.",
    },
    {
      title: "EUDR-voorbereiding",
      body: "We brengen herkomst, keten, traceerbaarheid en due diligence-data naar een beheerste werkwijze.",
    },
    {
      title: "CSDDD en keten due diligence",
      body: "We beoordelen leveranciersrisico’s, beleid, controles en monitoring tegen due diligence-eisen.",
    },
  ],
  sustainableFinance: [
    {
      title: "Gereedheid kopersdataverzoeken",
      body: "We structureren antwoorden over ESG, koolstof, product en keten voor klanten, merken en importeurs.",
    },
    {
      title: "ESG-due diligence",
      body: "We beoordelen huidige werkwijze, documentatie en risico’s tegen kopersverwachtingen.",
    },
    {
      title: "Aanbestedings- en klantdossiers",
      body: "We bereiden antwoorddossiers voor op duurzaamheid, koolstof, productdata en compliance.",
    },
    {
      title: "Marktvertrouwen",
      body: "We verankeren claims, rapporten en productinformatie in een geloofwaardige, kopersgerichte bewijsstructuur.",
    },
  ],
  certificationTraceability: [
    {
      title: "ASI / Aluminium Stewardship Initiative-voorbereiding",
      body: "We ondersteunen gap-analyse, traceerbaarheid en bewijsdossiers voor ASI in de aluminiumketen.",
    },
    {
      title: "Certificeringsvoorbereiding",
      body: "We verduidelijken criteria, kader, bewijs en rollen vóór certificering of beoordeling.",
    },
    {
      title: "Chain of custody en traceerbaarheid",
      body: "We brengen leverancier-, materiaal-, product- en procesregistraties naar een traceerbare controleset-up.",
    },
    {
      title: "Massabalans",
      body: "We zetten in- en uitstromen, voorraad, productie en claims om naar een verdedigbaar registratiesysteem.",
    },
  ],
  sustainableTourismGstc: [
    {
      title: "Voorbereiding op GSTC-criteria",
      body: "We vergelijken de praktijk met GSTC-criteria en maken hiaten en prioriteiten zichtbaar.",
    },
    {
      title: "Türkiye Environmental and Cultural Sustainability Programme",
      body: "We bouwen documentatie, registraties, veldpraktijk en actieplannen volgens programmaverwachtingen.",
    },
    {
      title: "Gap-analyse toerisme",
      body: "We beoordelen huidige situatie, documentatie en veldpraktijk voor hotels, touroperators en bestemmingen.",
    },
    {
      title: "Bewijsdossier en beoordelingsvoorbereiding",
      body: "We maken beleid, procedures, registraties, indicatoren, foto’s, training en praktijkbewijs reviewklaar.",
    },
  ],
};

const byLocale: Record<AppLocale, Bundle> = {
  tr: TR,
  en: EN,
  nl: NL,
};

export function getHeroSubServices(
  categoryId: ServicesCategoryId,
  locale: AppLocale,
): readonly ServiceSubService[] {
  return byLocale[locale][categoryId];
}

export function getHeroSubServiceTitlesForMenu(
  categoryId: ServicesCategoryId,
  locale: AppLocale,
  count: number,
): string[] {
  return getHeroSubServices(categoryId, locale)
    .slice(0, count)
    .map((s) => s.title);
}
