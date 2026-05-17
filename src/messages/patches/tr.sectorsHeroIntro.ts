import type { JsonObject } from "@/lib/merge-messages";

export const trSectorsHeroIntroPatch: JsonObject = {
  sectorsPage: {
    detail: {
      focusStripLabel: "Odak alanlarımız",
    },
    sectorDetails: {
      "textile-fashion": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Tekstil ve moda sektöründe Avrupa pazarı; DPP hazırlığı, ürün sürdürülebilirliği verisi, malzeme kompozisyonu ve tedarik zinciri görünürlüğünü aynı ürün kaydı üzerinden yönetmeyi zorunlu kılıyor. Ürün beyanları, kimyasal uygunluk kayıtları ve tedarikçi veri disiplini satın alma ve regülasyon kararlarında doğrudan kanıt katmanı haline geliyor.",
              "Tipik teknik zorluk; SKU ve varyant mantığının BOM, malzeme ve tedarikçi katmanlarıyla eşleşmemesi, kimyasal beyanların güncel kanıta bağlanmaması ve DPP ile uyum çalışmalarının farklı ekiplerde parçalı ilerlemesidir. ANKA bu sektörde ürün kimliği, malzeme yapısı ve tedarik zinciri verisini tek bir kontrol çerçevesinde yapılandırır.",
            ],
          },
        },
      },
      "agriculture-food": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Tarım ve gıda zincirinde menşe, izlenebilirlik ve tedarikçi verisi; EUDR hazırlığı, çevresel performans ve hammadde kaynağı kanıtı ile birlikte değerlendiriliyor. Su, karbon ve operasyonel veri disiplini; lot, coğrafi kapsam ve tedarikçi beyanı düzeyinde tutarlı bir kayıt modeli gerektiriyor.",
              "Kurumlar çoğu zaman saha verisini toplar ancak kanıt dosyası, tesis veya tedarikçi seviyesinde doğrulanabilir bir yapı kuramaz. ANKA bu sektörde izlenebilirlik, tedarikçi veri talepleri ve regülasyon hazırlığını aynı veri mimarisi altında yönetir.",
            ],
          },
        },
      },
      "packaging-plastics-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Ambalaj, plastik ve malzeme sektöründe PPWR; ürün ve ambalaj verisi, malzeme kompozisyonu, geri dönüştürülebilirlik ve pazar beyan gerekliliklerini aynı ürün envanterine bağlıyor. LCA ve EPD beklentileri ile tedarikçi beyanları; tasarım, satın alma ve uyum ekipleri arasında ortak bir veri dili gerektiriyor.",
              "Teknik risk; ambalaj BOM'unun ürün master verisinden kopuk tutulması, malzeme oranlarının güncellenmemesi ve geri dönüşüm iddialarının kanıt dosyasına bağlanmamasıdır. ANKA bu sektörde ambalaj envanteri, malzeme disiplini ve uyum beyanlarını tek yapı altında hizalar.",
            ],
          },
        },
      },
      "building-materials": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Yapı malzemelerinde Avrupa pazarı; LCA, EPD, ürün karbon ayak izi ve teknik beyanların kanıta dayalı ürün bilgisi olarak sunulmasını bekliyor. Ürün ailesi, varyant yönetimi ve tesis bazlı üretim verisi; aynı ürün portföyünde farklı pazar taleplerine yanıt vermek için yapılandırılmış olmalıdır.",
              "Sık görülen zorluk; EPD ve karbon verisinin ürün hiyerarşisiyle eşleşmemesi, teknik dosyaların güncel tutulmaması ve tedarikçi/hammadde katmanında veri boşluklarıdır. ANKA bu sektörde ürün ailesi mantığı, çevresel veri ve teknik dokümantasyonu birlikte yönetir.",
            ],
          },
        },
      },
      "metal-aluminium-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Metal, alüminyum ve endüstriyel üretimde CBAM; ürün bazlı gömülü emisyon, üretim rotası, elektrik ve yakıt verisi ile prekürsör kayıtlarını aynı hesaplama çerçevesinde toplamayı gerektiriyor. ASI hazırlığı ve tedarikçi verisi; saha verisinin doğrulanabilir ve denetlenebilir biçimde tutulmasına bağlıdır.",
              "Teknik zorluk; tesis ve ürün kırılımının tutarsız tanımlanması, varsayılan değerlerle gerçek üretim verisinin karışması ve tedarikçi beyanlarının metodoloji ile eşleştirilmemesidir. ANKA bu sektörde emisyon verisi, üretim rotası ve tedarik zinciri kanıtını savunulabilir bir yapıda kurgular.",
            ],
          },
        },
      },
      "automotive-mobility": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Otomotiv ve mobilite tedarik zincirinde müşteri ve OEM veri talepleri; ürün karbon ayak izi, malzeme uyumu, Scope 3 ve izlenebilirlik gereksinimlerini bileşen ve tedarikçi düzeyinde birleştiriyor. Ürün bazlı çevresel veri; parça numarası, malzeme sınıfı ve tedarikçi katmanında tutarlı tanımlanmalıdır.",
              "Kurumlar genelde anket tabanlı toplama yapar ancak veri yapısı, doğrulama ve revizyon izi kurulmadan talepler her model yılında yeniden açılır. ANKA bu sektörde tedarikçi veri talepleri, malzeme uyumu ve ürün düzeyinde çevresel veriyi sürdürülebilir bir akışa dönüştürür.",
            ],
          },
        },
      },
      "chemicals-industrial": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Kimya ve endüstriyel kimyasallarda ürün uygunluğu; teknik dokümantasyon, çevresel veri ve güvenlik/uygunluk beyanlarının REACH ve CLP farkındalığı ile birlikte yönetilmesini gerektiriyor. Tedarikçi beyanları ve formülasyon verisi; müşteri, pazar ve iç uyum kontrollerinde merkezi referans haline geliyor.",
              "Tipik sorun; SDS ve uygunluk dosyalarının ürün portföyüyle eşleşmemesi, çevresel verinin ürün ailesi düzeyinde toplanmaması ve tedarikçi değişikliklerinde kanıt zincirinin kırılmasıdır. ANKA bu sektörde ürün uygunluğu, teknik dosya ve tedarikçi verisini kontrollü bir kayıt modelinde birleştirir.",
            ],
          },
        },
      },
      "tourism-hospitality": {
        hero: {
          technicalIntro: {
            paragraphs: [
              "Turizm ve konaklamada GSTC ve sürdürülebilir turizm programları; çevresel ve kültürel sürdürülebilirlik, operasyonel izleme ve aksiyon planını kanıt dosyası ile birlikte değerlendiriyor. Tesis, destinasyon veya marka düzeyinde veri ve kanıt düzeni; denetim ve sertifikasyon süreçlerinde belirleyici hale geliyor.",
              "Sık karşılaşılan zorluk; göstergelerin operasyonel veriye bağlanmaması, aksiyon planı ile kanıt dosyasının ayrı yürütülmesi ve çok lokasyonlu yapılarda sorumluluk haritasının net olmamasıdır. ANKA bu sektörde sürdürülebilirlik programı, izleme ve kanıt yapısını yönetilebilir bir çerçevede kurgular.",
            ],
          },
        },
      },
    },
  },
};
