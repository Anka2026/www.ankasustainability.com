import type { JsonObject } from "@/lib/merge-messages";

export const trResourcesInsightsPatch: JsonObject = {
  insightsPage: {
    detail: {
      backToResources: "Kaynaklara Dön",
      sectionLabels: {
        whyMatters: "Konu Neden Önemli?",
        whoItConcerns: "Kimleri İlgilendirir?",
        criticalAreas: "Hazırlıkta Kritik Veri ve Süreç Alanları",
        commonMistakes: "Sık Yapılan Hatalar",
        ankaApproach: "ANKA'nın Yaklaşımı",
      },
      hero: {
        metaFormat: "Teknik rehber",
        metaFocus: "Hazırlık ve veri disiplini",
      },
      sidebar: {
        eyebrow: "Danışmanlık",
        title: "ANKA ile Nasıl Çalışılır?",
        highlightLabel: "Çalışma odağı",
        description:
          "Bu kaynak, hazırlık seviyenizi değerlendirmenize, öncelikli veri alanlarını netleştirmenize ve daha izlenebilir bir çalışma düzeni kurmanıza yardımcı olacak şekilde tasarlanmıştır.",
        steps: [
          "Mevcut durum, kapsam ve öncelikleri birlikte netleştirme",
          "Veri alanları, sorumluluklar ve kanıt yapısını kurgulama",
          "Uygulanabilir ve izlenebilir bir çalışma düzenine geçiş",
        ],
        primaryCta: "Görüşme Planlayın",
        secondaryCta: "İletişime Geçin",
      },
    },
    featured: {
      collectionLabel: "Seçilmiş teknik rehberler",
      items: {
        "csrd-double-materiality": {
          category: "Rehber",
          title: "CSRD ve Çift Önemlilik Hazırlığında Nereden Başlanmalı?",
          description:
            "Kurumsal raporlama sürecine daha sağlam, izlenebilir ve yönetilebilir bir başlangıç yapmak için temel hazırlık adımları.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "CSRD hazırlığı yalnızca rapor metni üretmek değildir. Avrupa’da açıklama beklentileri; kapsam, önemlilik mantığı, veri sahipliği ve kanıt düzeni netleşmeden süreç hızla dağılır.",
                "Çifte önemlilik; etki ve finansal önemlilik boyutlarını birlikte ele alan bir karar çerçevesidir. Bu çerçeve olmadan veri toplama ve konu seçimi tekrarlanabilir bir modele oturmaz.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Kurumsal sürdürülebilirlik, ESG ve raporlama ekipleri",
                "Finans, risk ve strateji birimleri",
                "İK, tedarik, ürün ve operasyon veri sahipleri",
                "Avrupa pazarına açık veya tedarik zincirinde CSRD kapsamına giren işletmeler",
              ],
            },
            criticalAreas: {
              paragraphs: [
                "Sağlam bir başlangıç için önce kapsam, raporlama sınırları ve paydaş beklentilerini netleştirmek gerekir. Ardından önemlilik değerlendirmesini veri ve kanıt ihtiyaçlarıyla eşleştirmek kritik hale gelir.",
              ],
              bullets: [
                "Kapsam, sınırlar ve ESRS konu haritası ile uyumlu önceliklendirme",
                "Çifte önemlilik için etki ve finansal boyutların karar mantığı",
                "Konu başına veri sahipliği, tanım sözlüğü ve kalite kontrolleri",
                "Kanıt akışı: kaynak belge, onay adımı ve revizyon izi",
                "Raporlama takvimi ile veri toplama döngüsünün senkronizasyonu",
              ],
            },
            commonMistakes: {
              bullets: [
                "Önemlilik analizini veri ve dokümantasyon çalışmasından ayrı yürütmek",
                "Paydaş görüşlerini toplamak ancak karar kriterlerini yazılı hale getirmemek",
                "Veri sahipliğini raporlama dönemine yakın atamak",
                "Kanıt bağlantılarını son aşamada Excel ve e-posta arşivlerine bırakmak",
                "Çifte önemliliği statik bir liste olarak ele alıp yıllık güncelleme disiplini kurmamak",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, önemlilik mantığını doğrudan veri yapısı ve çalışma modeliyle ilişkilendirir. Konu seçimi, veri alanları ve kanıt gereksinimleri aynı çerçevede ilerler; böylece raporlama dönemi öncesi hazırlık görünür kalır.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, öncelikli veri alanlarını netleştirme ve daha savunulabilir bir raporlama düzeni kurma imkânı sunar—abartılı vaatler veya tek seferlik liste üretimi yerine sürdürülebilir bir metodoloji odağında.",
              ],
            },
          },
        },
        "cbam-data-financial-impact": {
          category: "Karbon",
          title: "CBAM İçin Veri ve Mali Etki Hazırlığı Nasıl Yapılandırılmalı?",
          description:
            "Sadece raporlama değil; mali etki, veri kalitesi ve tedarikçi bilgisi açısından daha kontrollü bir hazırlık çerçevesi.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "CBAM; gömülü emisyon verisini ticari ve mali kararlarla ilişkilendirmeyi gerektirir. Yalnızca raporlama penceresinde toplanan veri, hem hesaplama güvenilirliğini hem de yönetim görünürlüğünü zayıflatır.",
                "Tedarikçi verisi, metodoloji seçimleri ve varsayılan değer sınırları şeffaf yönetilmediğinde mali etki senaryoları savunulamaz hale gelir.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "İhracat ve ithalat operasyonları yöneten ekipler",
                "Karbon, enerji ve sürdürülebilirlik uzmanları",
                "Finans, fiyatlama ve ticari planlama birimleri",
                "Tedarik zinciri ve tedarikçi ilişkileri yöneticileri",
                "Avrupa’ya yönelik üretim veya satış yapan üreticiler",
              ],
            },
            criticalAreas: {
              bullets: [
                "Ürün, tesis ve üretim hattı kırılımında veri standardizasyonu",
                "Gömülü emisyon hesabı için metodoloji seçimi ve dokümantasyonu",
                "Tedarikçi beyanlarında format, kalite ve izlenebilirlik kontrolleri",
                "Varsayılan değer kullanımının sınırları ve onay mekanizması",
                "Emisyon verisinin mali etki senaryolarıyla ilişkilendirilmesi",
                "Raporlama döngüsü öncesi veri doğrulama ve kapanış disiplini",
              ],
            },
            commonMistakes: {
              bullets: [
                "Hesaplama ve mali etki analizini ayrı ekiplerde kopuk yürütmek",
                "Tedarikçi verisini e-posta ekleriyle, versiyonsuz biriktirmek",
                "Varsayılan değerleri geçici çözüm olarak kalıcılaştırmak",
                "Ürün kırılımını raporlama döneminde ilk kez tanımlamak",
                "Senaryo mantığını yönetim kuruluna taşımadan teknik ekipte bırakmak",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, CBAM hazırlığını iki katmanlı ele alır: veri ve metodoloji disiplini ile mali etkiyi yönetim diline taşıyan görünürlük. Hesaplama akışı tekrarlanabilir kurulur; tedarikçi ve tesis verisi aynı yapı altında yönetilir.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, veri kalitesi boşluklarını önceliklendirme ve raporlama dönemine bağımlı olmayan kontrollü bir karar destek düzeni kurma imkânı sunar.",
              ],
            },
          },
        },
        "digital-product-passport-data": {
          category: "Ürün",
          title: "Dijital Ürün Pasaportu Hazırlığında Kritik Veri Alanları",
          description:
            "Ürün düzeyinde veri yönetimini güçlendirmek için dikkat edilmesi gereken temel kayıt, izlenebilirlik ve beyan alanları.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "Dijital Ürün Pasaportu (DPP), ürün bilgisini statik dosyalar yerine ilişkili ve güncellenebilir kayıtlar olarak ele almayı gerektirir. Pazara sunulan ürünlerde beyan, izlenebilirlik ve paylaşım beklentileri giderek veri mimarisi sorusuna dönüşüyor.",
                "Alan listesi oluşturmak tek başına yeterli değildir; veri sahipliği, kanıt bağlantıları ve paylaşım senaryoları birlikte tasarlanmalıdır.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Ürün yönetimi, Ar-Ge ve teknik dokümantasyon ekipleri",
                "Uyum, kalite ve sürdürülebilirlik fonksiyonları",
                "Tedarik zinciri ve tedarikçi veri yönetimi",
                "IT ve veri platformu ekipleri",
                "Avrupa pazarına ürün sunan üreticiler ve marka sahipleri",
              ],
            },
            criticalAreas: {
              bullets: [
                "Ürün kimliği, varyant ve SKU mantığının tutarlı tanımı",
                "Malzeme ve bileşen yapısı (BOM) ile kaynak bilgisi",
                "Uyum ve beyan verisi: standart, doğrulama ve geçerlilik",
                "Tedarikçi ve parti düzeyinde izlenebilirlik kayıtları",
                "Kanıt ve belge bağlantıları ile onay akışı",
                "Paylaşım senaryoları: alıcı, pazar ve erişim düzeyleri",
              ],
            },
            commonMistakes: {
              bullets: [
                "DPP’yi yalnızca PDF veya statik veri sayfası olarak planlamak",
                "BOM ve tedarikçi verisini farklı sistemlerde senkronize etmemek",
                "Beyan alanlarını tanımlamak ancak güncellik sorumluluğu atamamak",
                "Kanıt belgelerini ürün kaydından kopuk arşivlemek",
                "Pilot ürün seçimini uyum riski ve veri olgunluğu kriterleriyle yapmamak",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, DPP hazırlığını ürün veri mimarisi ve kanıt düzeni üzerinden kurgular. Kritik alanlar önceliklendirilir; sahiplik, doğrulama ve paylaşım akışları işletilebilir bir modele dönüştürülür.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, öncelikli veri alanlarını netleştirme ve ürün düzeyinde daha izlenebilir bir beyan yapısı kurma imkânı sunar.",
              ],
            },
          },
        },
        "ppwr-product-packaging-data": {
          category: "Ambalaj",
          title: "PPWR İle Ürün ve Ambalaj Verisi Nasıl Değişiyor?",
          description:
            "Ambalaj ve ürün bilgisinin Avrupa pazarında neden daha görünür, ölçülebilir ve kanıta dayalı hale geldiğine dair kısa değerlendirme.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "PPWR ile ambalaj; tasarım ve maliyetin ötesinde veri, beyan ve uyum yükümlülüğü haline gelir. Ürün düzeyinde ambalaj bileşenleri, malzeme yapısı ve sorumluluk haritası birlikte yönetilmek zorundadır.",
                "Ölçülebilir ve kanıta dayalı açıklama beklentisi; ambalaj envanteri ile uyum mantığının aynı veri modelinde buluşmasını gerektirir.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Ambalaj tasarımı ve tedarik ekipleri",
                "Ürün, marka ve portföy yönetimi",
                "Uyum, EPR ve sürdürülebilirlik fonksiyonları",
                "Satın alma ve tedarikçi ilişkileri",
                "Avrupa’da ürün yerleştiren üreticiler, ithalatçılar ve perakendeciler",
              ],
            },
            criticalAreas: {
              bullets: [
                "Ambalaj birimleri ve bileşen yapısının ürün/SKU ile eşleştirilmesi",
                "Malzeme kompozisyonu, geri dönüşüm içeriği ve ağırlık verisi",
                "Pazar ve ekonomik işletici sorumluluk haritası",
                "Uyum gerekliliklerinin somut veri alanlarına çevrilmesi",
                "Ücret ve maliyet mantığının izlenebilir senaryolarla modellenmesi",
                "Kanıt, tedarikçi beyanı ve teknik dosya hazırlığı",
              ],
            },
            commonMistakes: {
              bullets: [
                "Ambalaj verisini ürün master verisinden kopuk tutmak",
                "Tasarım kararlarını uyum verisi güncellenmeden almak",
                "EPR ve PPWR alanlarını farklı ekiplerde çift veri girişiyle yönetmek",
                "Senaryo karşılaştırması yapmadan malzeme değişikliği uygulamak",
                "Tedarikçi kanıtlarını ambalaj birimi düzeyinde ilişkilendirmemek",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, ambalaj verisini envanter, uyum ve karar destek akışıyla birlikte ele alır. Ürün–ambalaj ilişkisi, sorumluluk haritası ve kanıt düzeni aynı çalışma modelinde ilerler.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, öncelikli veri alanlarını netleştirme ve ambalaj uyumunu daha yönetilebilir bir yapıya taşıma imkânı sunar.",
              ],
            },
          },
        },
        "scope-3-supplier-data": {
          category: "Tedarik Zinciri",
          title: "Scope 3 İçin Tedarikçi Verisi Toplarken Hangi Yapı Kurulmalı?",
          description:
            "Dağınık veri akışını daha düzenli, izlenebilir ve yönetilebilir hale getirmek için kullanılabilecek yaklaşım önerileri.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "Scope 3 verisi çoğu kurumda tek seferlik anketlerle toplanır; bu yaklaşım tekrar kullanılabilir bir veri akışı üretmez. Tedarik zinciri emisyonları ve sürdürülebilirlik performansı, segmentasyon ve kalite disiplini olmadan yönetilemez.",
                "Alıcı ve yatırımcı beklentileri; tedarikçi verisinin tanımlı, izlenebilir ve kapanışı olan bir süreçle sunulmasını gerektirir.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Tedarik zinciri ve satın alma ekipleri",
                "Karbon muhasebesi ve sürdürülebilirlik raporlama",
                "Tedarikçi ilişkileri ve kalite yönetimi",
                "Ürün ve operasyon veri sahipleri",
                "Çok tedarikçili üretim ve dağıtım modelleri",
              ],
            },
            criticalAreas: {
              bullets: [
                "Tedarikçi segmentasyonu ve önceliklendirme kriterleri",
                "Alan sözlüğü: tanımlar, birimler ve kapsam kuralları",
                "Format standardı ve veri kalite kontrolleri",
                "Doküman ve kanıt akışı ile kapanış disiplini",
                "Yıllık güncelleme döngüsü ve sapma yönetimi",
                "Raporlama ile operasyonel iyileştirme arasında geri besleme",
              ],
            },
            commonMistakes: {
              bullets: [
                "Tüm tedarikçilere aynı formu, önceliksiz göndermek",
                "Veri tanımlarını netleştirmeden toplama başlamak",
                "Kanıt belgesi istememek veya belgeyi veri kaydından ayırmak",
                "İlk yanıtı kalıcı veri olarak kabul etmek, doğrulama adımı atlamak",
                "Scope 3’ü yalnızca rapor satırı olarak görmek, tedarikçi diyaloğunu kurmamak",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, Scope 3 verisini sürdürülebilir bir tedarikçi veri akışı olarak tasarlar. Segmentasyon, alan sözlüğü ve kanıt düzeni baştan kurulur; böylece her raporlama dönemi sıfırdan başlamaz.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, öncelikli tedarikçi gruplarını netleştirme ve tedarik zinciri verisini izlenebilir ve tekrar kullanılabilir hale getirme imkânı sunar.",
              ],
            },
          },
        },
        "digital-workspace-reporting": {
          category: "Dijital Çalışma",
          title: "Sürdürülebilirlik Raporlamasında Dijital Çalışma Alanı Neden Önemli?",
          description:
            "İlerleme takibi, veri görünürlüğü, kanıt düzeni ve çalışma kalitesi açısından dijital desteğin sağladığı fark.",
          cta: "İçeriği İnceleyin",
          sections: {
            whyMatters: {
              paragraphs: [
                "Raporlama projeleri; veri sahipliği, revizyon yönetimi, kanıt bağlantıları ve ilerleme takibi zayıf olduğunda hızla dağılır. E-posta, paylaşılan dosyalar ve dağınık listeler uzun vadede savunulabilir bir süreç üretmez.",
                "Dijital çalışma alanı; toplama, kontrol ve teslim adımlarını görünür kılar. Danışmanlık ve iç ekipler aynı gerçeklik üzerinden çalışır.",
              ],
            },
            whoItConcerns: {
              bullets: [
                "Sürdürülebilirlik ve raporlama proje ekipleri",
                "Çok fonksiyonlu veri sahipleri ve konu uzmanları",
                "İç denetim, risk ve uyum fonksiyonları",
                "Dış danışman ve denetçiyle koordinasyon yürüten ekipler",
                "Yıllık veya dönemsel raporlama döngüsü olan kurumlar",
              ],
            },
            criticalAreas: {
              bullets: [
                "Veri toplama görevleri, sorumluluk ve son tarih takibi",
                "Revizyon geçmişi ve onay adımları",
                "Kanıt ve kaynak belgenin veri alanına bağlanması",
                "Kontrol listeleri ve kalite kapıları",
                "İlerleme panosu ve risk/eksiklik görünürlüğü",
                "Önceki dönem verisinin taşınması ve karşılaştırma",
              ],
            },
            commonMistakes: {
              bullets: [
                "Dijital aracı yalnızca dosya deposu olarak kullanmak",
                "Veri sahipliğini platformda tanımlamadan toplama başlamak",
                "Kanıt bağlantılarını raporlama son haftasına bırakmak",
                "Revizyon ve onay izini tutmamak",
                "Danışmanlık modeli ile dijital model arasında çift veri girişi oluşturmak",
              ],
            },
            ankaApproach: {
              paragraphs: [
                "ANKA, dijital çalışma alanını danışmanlığın yerine değil; süreci daha kontrollü ve savunulabilir kılan bir katman olarak konumlandırır. Veri, kanıt ve ilerleme aynı yapıda izlenir.",
                "Bu çalışma şirketlere hazırlık seviyelerini değerlendirme, raporlama döngüsünü daha izlenebilir yürütme ve ekipler arası koordinasyonu güçlendirme imkânı sunar.",
              ],
            },
          },
        },
      },
    },
  },
};
