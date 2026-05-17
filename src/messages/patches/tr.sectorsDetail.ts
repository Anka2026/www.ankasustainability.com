import type { JsonObject } from "@/lib/merge-messages";

export const trSectorsDetailPatch: JsonObject = {
  sectorsPage: {
    detail: {
      backToSectors: "Sektörlere Dön",
      relatedWorkTitle: "İlgili Çalışma Başlıkları",
      relatedServicesEyebrow: "İlgili hizmetler",
      relatedServicesCta: "Tüm hizmetleri görüntüleyin",
      sectionLabels: {
        reality: "Sektör Gerçekliği",
        criticalAreas: "Kritik Uyum ve Veri Alanları",
        challenges: "Sık Karşılaşılan Zorluklar",
        ankaApproach: "ANKA'nın Yaklaşımı",
      },
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          chips: ["DPP ve ürün verisi", "Tedarik zinciri görünürlüğü", "Malzeme ve kimyasal uyum"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Tekstil ve moda sektöründe Avrupa pazarı; ürün düzeyinde sürdürülebilirlik verisi, malzeme kompozisyonu ve tedarik zinciri şeffaflığını satın alma ve regülasyon kararlarının merkezine taşıyor.",
              "Dijital Ürün Pasaportu hazırlığı, sürdürülebilirlik beyanları ve tedarik zinciri verisi aynı ürün kaydı üzerinden yönetilmediğinde ekipler parçalı dosyalar ve tedarikçi mail trafiğine mahkûm kalır. CBAM her tekstil ürünü için doğrudan geçerli olmasa da, tedarik zinciri ve ürün çevresel verisi hazırlığı giderek önem kazanıyor.",
            ],
          },
          criticalAreas: {
            bullets: [
              "DPP için ürün kimliği, varyant mantığı ve malzeme yapısı (BOM)",
              "Malzeme kompozisyonu ve kimyasal uygunluk kayıtları",
              "Tedarik zinciri görünürlüğü ve tedarikçi veri talepleri",
              "Ürün sürdürülebilirliği ve çevresel performans metrikleri",
              "Tedarik zinciri ve ürün çevresel verisi ile CBAM hazırlık bağlantısı",
            ],
          },
          challenges: {
            bullets: [
              "Ürün verisinin SKU ve tedarikçi katmanlarında parçalı tutulması",
              "Kimyasal ve malzeme beyanlarının güncel kanıta bağlanmaması",
              "Tedarik zinciri verisinin sezon baskısı altında toplanması",
              "DPP, uyum ve raporlama çalışmalarının ayrı takımlarda ilerlemesi",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, tekstil odaklı çalışmada önce ürün ve tedarik zinciri veri haritasını netleştirir; DPP, malzeme uyumu ve sürdürülebilirlik beyanları için ortak bir kayıt ve sorumluluk yapısı kurar.",
              "Hazırlığı rapor dönemine değil, yıl içinde izlenebilir veri ve kanıt ritmine taşırız; böylece pazar ve regülasyon talepleri kontrollü ve savunulabilir biçimde karşılanır.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "ESG ve Kurumsal Raporlama",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "agriculture-food": {
        hero: {
          chips: ["Menşe ve izlenebilirlik", "EUDR hazırlığı", "Su ve karbon verisi"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Tarım ve gıda zincirlerinde menşe, izlenebilirlik ve tedarikçi verisi; hem regülasyon hem de alıcı due diligence beklentilerinin temelini oluşturuyor.",
              "EUDR ve benzeri tedarik zinciri gereklilikleri; coğrafi menşe, tedarikçi kayıtları ve çevresel performans verisinin aynı kanıt yapısında tutulmasını zorunlu kılıyor.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Menşe, parsel ve tedarikçi eşleştirme kayıtları",
              "EUDR kapsamı, due diligence ve risk değerlendirme mantığı",
              "Tedarik zinciri veri yapısı ve tedarikçi beyan disiplini",
              "Su, karbon ve çevresel performans verisi",
              "Scope 3 ve kurumsal raporlama ile veri hizalaması",
            ],
          },
          challenges: {
            bullets: [
              "Çok katmanlı tedarik zincirinde menşe kanıtının zayıf kalması",
              "Tedarikçi verisinin standart format ve kalite kontrolü olmadan toplanması",
              "Çevresel metriklerin operasyonel kayıtlarla bağlantısının kurulmaması",
              "EUDR hazırlığının mevzuat okumasından veri ve kanıt tasarımına taşınmaması",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, tarım-gıda çalışmalarında önce kapsam ve tedarik haritasını netleştirir; menşe, izlenebilirlik ve çevresel veri alanlarını aynı due diligence çerçevesinde yapılandırır.",
              "EUDR ve raporlama hazırlığını tedarikçi veri ritmi, sorumluluk ataması ve kanıt dosyası disipliniyle birleştirir; süreci yönetilebilir bir operasyon modeline dönüştürürüz.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Karbon, İklim ve Dekarbonizasyon",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "ESG ve Kurumsal Raporlama",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "packaging-plastics-materials": {
        hero: {
          chips: ["PPWR uyum", "Malzeme kompozisyonu", "LCA ve EPD"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Ambalaj, plastik ve malzeme sektöründe PPWR; ambalaj verisi, malzeme kompozisyonu, geri dönüştürülebilirlik ve pazar beyanlarını ölçülebilir bir uyum gündemine taşıyor.",
              "Ürün ve ambalaj bilgisi ayrı sistemlerde tutulduğunda LCA, EPD ve ücret/uyum mantığı arasında tutarsızlık hızla büyür.",
            ],
          },
          criticalAreas: {
            bullets: [
              "PPWR kapsamı ve ürün-ambalaj eşleştirme mantığı",
              "Malzeme kompozisyonu ve geri dönüştürülebilirlik verisi",
              "LCA, EPD ve ürün çevresel performans kayıtları",
              "Tedarikçi beyanları ve teknik dosya bağlantıları",
              "Pazar odaklı ürün ve ambalaj açıklamaları",
            ],
          },
          challenges: {
            bullets: [
              "Ambalaj envanterinin ürün SKU yapısıyla hizalanmaması",
              "Geri dönüşüm ve malzeme oranlarının kanıtsız beyan edilmesi",
              "LCA varsayımlarının ürün portföyünde tekrarlanabilir olmaması",
              "PPWR yükümlülüklerinin tasarım ekibinden veri ekibine geç taşınması",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, ambalaj ve malzeme çalışmalarında ürün-ambalaj veri mimarisini kurar; PPWR, LCA ve beyan gereksinimlerini aynı teknik dosya mantığında toplar.",
              "Hesaplama, beyan ve kanıt akışını portföy düzeyinde yönetilebilir kılar; pazar ve regülasyon beklentilerine karşı tutarlı bir hazırlık ritmi oluştururuz.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "PPWR ve ambalaj uyum verisi",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
          ],
        },
      },
      "building-materials": {
        hero: {
          chips: ["LCA ve EPD", "Ürün karbon ayak izi", "Teknik beyan"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Yapı malzemelerinde Avrupa pazarı; LCA, EPD, ürün karbon ayak izi ve teknik beyanların kanıta dayalı ürün bilgisi olarak değerlendirilmesini bekliyor.",
              "Ürün verisi, performans beyanı ve çevresel hesaplama aynı yapıda tutulmadığında pazar erişimi ve alıcı güveni zayıflar.",
            ],
          },
          criticalAreas: {
            bullets: [
              "LCA ve EPD metodoloji, kapsam ve veri kaynağı disiplini",
              "Ürün karbon ayak izi ve gömülü emisyon kayıtları",
              "Teknik beyan ve uygunluk dokümantasyonu",
              "Ürün ailesi, varyant ve tesis verisi eşlemesi",
              "Doğrulama ve pazar paylaşımına hazır kanıt yapısı",
            ],
          },
          challenges: {
            bullets: [
              "EPD ve PCF çalışmalarının ürün portföyünde tutarsız ilerlemesi",
              "Tesis ve ürün verisinin hesaplamaya geç bağlanması",
              "Teknik dosyaların revizyon ve onay izinin zayıf olması",
              "Alıcı taleplerine yanıt için son dakika veri derlemesi",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, yapı malzemeleri çalışmalarında ürün, tesis ve hesaplama verisini tek çerçevede hizalar; LCA, EPD ve teknik beyan süreçlerini izlenebilir bir modele taşır.",
              "Pazar erişimi için gerekli kanıt dosyasını, kurum içinde tekrarlanabilir bir hazırlık ve kontrol düzeniyle destekleriz.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Sertifikasyon, İzlenebilirlik ve Pazar Güveni",
              href: "/services/certification-traceability-market-confidence",
            },
            {
              label: "Teknik beyan ve doğrulama hazırlığı",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          chips: ["CBAM ve gömülü emisyon", "Üretim rotası verisi", "ASI hazırlığı"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Metal, alüminyum ve endüstriyel üretimde CBAM; ürün bazlı gömülü emisyon, üretim rotası ve enerji verisinin doğrulanabilir biçimde sunulmasını gerektiriyor.",
              "Elektrik ve yakıt verisi, prekürsör girdileri ve tedarikçi beyanları aynı metodoloji çerçevesinde yönetilmediğinde hem raporlama hem de ASI gibi pazar beklentileri risk altına girer.",
            ],
          },
          criticalAreas: {
            bullets: [
              "CBAM kapsamı, ürün-installation ayrımı ve metodoloji seçimleri",
              "Üretim rotası, elektrik ve yakıt emisyon verisi",
              "Prekürsör ve tedarikçi girdi verisi",
              "Ürün karbon ayak izi ve gömülü emisyon hesapları",
              "ASI ve veri doğrulanabilirliği için kanıt yapısı",
            ],
          },
          challenges: {
            bullets: [
              "Tesis verisinin ürün kırılımına tutarlı dağıtılamaması",
              "Tedarikçi emisyon verisinin format ve kalite kontrolü olmadan kullanılması",
              "Varsayılan değer sınırlarının dokümante edilmemesi",
              "CBAM ve ASI hazırlığının birbirinden kopuk yürütülmesi",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, metal ve alüminyum çalışmalarında önce veri sınırı ve üretim rotası mantığını netleştirir; CBAM hesaplamasını tesis, ürün ve tedarikçi katmanlarında izlenebilir hale getirir.",
              "ASI ve pazar beklentileriyle uyumlu bir kanıt dosyası ve kontrol ritmi kurarak; finansal etki görünürlüğünü destekleyen yönetilebilir bir hazırlık modeli oluştururuz.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "Sertifikasyon, İzlenebilirlik ve Pazar Güveni",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
      "automotive-mobility": {
        hero: {
          chips: ["Tedarikçi veri talepleri", "Ürün karbon ayak izi", "Scope 3"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Otomotiv ve mobilite tedarik zincirinde alıcılar; malzeme uyumu, ürün karbon ayak izi ve Scope 3 verisi için giderek daha yapılandırılmış talepler yönlendiriyor.",
              "Çok katmanlı tedarik yapısında veri toplama disiplini kurulmadığında AB pazar uyumu ve müşteri raporlama beklentileri karşılanamaz hale gelir.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Tedarikçi veri talepleri, format standartları ve kapanış disiplini",
              "Ürün karbon ayak izi ve malzeme uyum kayıtları",
              "Scope 3 kategorileri ve önceliklendirme mantığı",
              "AB pazar uyumu ve müşteri veri paketleri",
              "Kurumsal raporlama ile ürün verisi hizalaması",
            ],
          },
          challenges: {
            bullets: [
              "Tedarikçi anketlerinin tek seferlik veri toplama aracına dönüşmesi",
              "Malzeme uyum verisinin ürün BOM yapısıyla eşleşmemesi",
              "PCF hesaplarının tedarik zinciri güncellemelerini yansıtmaması",
              "Müşteri taleplerine yanıtta kanıt ve sorumluluk izinin zayıf kalması",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, otomotiv odaklı çalışmada tedarikçi segmentasyonu, veri sözlüğü ve kanıt akışını birlikte kurar; PCF ve uyum taleplerini sürdürülebilir bir veri ritmine taşır.",
              "AB pazar ve müşteri beklentilerine yanıtı, kurum içinde tekrarlanabilir bir tedarik zinciri veri yönetimi modeliyle destekleriz.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Karbon, İklim ve Dekarbonizasyon",
              href: "/services/carbon-climate-decarbonisation",
            },
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
          ],
        },
      },
      "chemicals-industrial": {
        hero: {
          chips: ["Ürün uygunluğu", "REACH / CLP farkındalığı", "Teknik dokümantasyon"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Kimya ve endüstriyel kimyasallarda ürün uygunluğu, teknik dokümantasyon ve tedarikçi beyanları; hem regülasyon hem de müşteri due diligence süreçlerinin omurgasını oluşturur.",
              "REACH ve CLP farkındalığı, güvenlik ve çevresel verinin ürün dosyasında tutarlı sunulmasını gerektirir; parçalı kayıtlar uyum riskini büyütür.",
            ],
          },
          criticalAreas: {
            bullets: [
              "Ürün uygunluğu ve teknik dosya yapısı",
              "REACH / CLP kapsamı ve tedarikçi bilgi talepleri",
              "Güvenlik ve çevresel veri kayıtları",
              "Tedarikçi beyanları ve kanıt bağlantıları",
              "Kurumsal sürdürülebilirlik raporlaması ile veri hizası",
            ],
          },
          challenges: {
            bullets: [
              "Teknik dokümantasyonun revizyon kontrolü olmadan güncellenmesi",
              "Tedarikçi SDS ve uygunluk verisinin ürün kaydına bağlanmaması",
              "Ürün portföyünde uyum sorumluluğunun belirsiz kalması",
              "Müşteri taleplerine yanıtta kanıt dosyasının geç derlenmesi",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, kimya odaklı çalışmada ürün veri yapısını ve teknik dosya disiplinini netleştirir; uygunluk, tedarikçi beyanı ve raporlama verisini aynı çerçevede yönetir.",
              "REACH / CLP farkındalığını operasyonel bir kontrol ritmine dönüştürerek; müşteri ve regülasyon taleplerine karşı savunulabilir bir hazırlık modeli kurarız.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "AB Regülasyonları ve Tedarik Zinciri Uyumu",
              href: "/services/eu-regulations-supply-chain-compliance",
            },
            {
              label: "Ürün Sürdürülebilirliği, LCA ve EPD",
              href: "/services/product-sustainability-lca-epd",
            },
            {
              label: "ESG ve Kurumsal Raporlama",
              href: "/services/esg-corporate-reporting",
            },
          ],
        },
      },
      "tourism-hospitality": {
        hero: {
          chips: ["GSTC kriterleri", "Türkiye sürdürülebilirlik programı", "Kanıt dosyası"],
        },
        sections: {
          reality: {
            paragraphs: [
              "Turizm ve konaklamada GSTC kriterleri ile Türkiye Çevresel ve Kültürel Sürdürülebilirlik Programı; çevresel, sosyal ve operasyonel performansın belgelenmesini merkeze alıyor.",
              "Kanıt dosyası ve operasyonel izleme düzeni kurulmadığında değerlendirme hazırlığı dağınık doküman toplama sürecine dönüşür.",
            ],
          },
          criticalAreas: {
            bullets: [
              "GSTC kriterleri ve boşluk analizi mantığı",
              "Türkiye Çevresel ve Kültürel Sürdürülebilirlik Programı hazırlığı",
              "Çevresel ve kültürel sürdürülebilirlik veri alanları",
              "Operasyonel izleme ve periyodik kayıt disiplini",
              "Değerlendirme öncesi kanıt dosyası ve aksiyon planı",
            ],
          },
          challenges: {
            bullets: [
              "Kanıtların departmanlar arasında tutarsız arşivlenmesi",
              "Operasyonel göstergelerin periyodik takip edilmemesi",
              "GSTC ve program gerekliliklerinin ekip rollerine dağılmaması",
              "Değerlendirme öncesi son dakika doküman derlemesi",
            ],
          },
          ankaApproach: {
            paragraphs: [
              "ANKA, turizm ve konaklama çalışmalarında önce kapsam ve kriter haritasını netleştirir; GSTC ve program beklentilerini operasyonel kanıt yapısına bağlar.",
              "Boşluk analizi, aksiyon planı ve izleme ritmini birlikte kurarak; değerlendirme hazırlığını sürdürülebilir bir yönetim modeline taşırız.",
            ],
          },
        },
        relatedWork: {
          items: [
            {
              label: "Sürdürülebilir Turizm, GSTC ve Türkiye Çevresel ve Kültürel Sürdürülebilirlik Programı",
              href: "/services/sustainable-tourism-gstc",
            },
            {
              label: "ESG ve Kurumsal Raporlama",
              href: "/services/esg-corporate-reporting",
            },
            {
              label: "Sertifikasyon, İzlenebilirlik ve Pazar Güveni",
              href: "/services/certification-traceability-market-confidence",
            },
          ],
        },
      },
    },
  },
};
