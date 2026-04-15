import type { JsonObject } from "@/lib/merge-messages";

export const trSoftwarePortfolioPatch: JsonObject = {
  softwarePage: {
    portfolio: {
      title: "Ürün portföyü",
      description:
        "Uyum, ürün verisi ve regülasyon-odaklı raporlama için tasarlanmış, iş akışı odaklı yazılım çözümleri.",
      statusLabels: {
        core: "Seçili Kullanımda",
        in_development: "Pilot Kapsamında",
        coming_soon: "Yol Haritasında",
      },
      ctas: {
        viewProduct: "Ürünü İncele",
        requestDemo: "Demo Talep Et",
        talkToTeam: "Ekibimizle Görüşün",
        requestEarlyAccess: "Erken Erişim Talep Et",
      },
      products: {
        "agri-climate-platform": {
          status: "core",
          category: "Tarım ve Arazi",
          title: "Agri-Climate Platform",
          kicker: "Arazi bazlı veri, hesaplama ve doğrulama mantığı",
          cardDescription:
            "Arazi ve faaliyet verisini tek bir kayıt disiplininde toplayan; hesaplama, kanıt ve doğrulama hazırlığını yapılandıran platform.",
          heroText:
            "Arazi bazlı iklim verisini, faaliyet kayıtlarını, hesaplama süreçlerini, kanıt akışlarını ve doğrulama hazırlığını tek bir ürün mantığında bir araya getiren yapılandırılmış dijital platform.",
          value:
            "Arazi bazlı iklim verisini, faaliyet kayıtlarını, hesaplama süreçlerini, kanıt akışlarını ve doğrulama hazırlığını tek bir ürün mantığında bir araya getiren yapılandırılmış dijital platform.",
          solves: [
            "Arazi, faaliyet ve üretim verileri çoğu kurumda dağınık kalır; hesaplama ve doğrulama için gerekli iz bırakma (evidence) yapısı geç oluşur.",
            "Agri-Climate Platform, kayıt disiplinini, hesaplama akışlarını ve doğrulama hazırlığını tek bir sistem mantığında birleştirerek portföy görünürlüğünü güçlendirir.",
            "Veri kalitesi, revizyon takibi ve kanıt bağlantıları kontrol altına alındığında; hem iç karar alma hem de dış doğrulama süreci daha yönetilebilir hale gelir.",
          ],
          capabilities: [
            {
              title: "Arazi ve Faaliyet Kayıtları",
              description:
                "Parsel, üretim ve faaliyet verilerini tutarlı bir kayıt mantığında toplayın; dönemsel takip ve revizyonları kontrol altında yönetin.",
            },
            {
              title: "Hesaplama İş Akışları",
              description:
                "Veri → hesaplama → kontrol adımlarını yapılandırılmış bir akışta yönetin; tekrar eden hesaplamalarda tutarlılık sağlayın.",
            },
            {
              title: "Doğrulama Hazırlığı",
              description:
                "Kayıtlar ve kanıtlar üzerinden izlenebilir bir denetim izi oluşturun; doğrulama sürecini daha yönetilebilir hale getirin.",
            },
            {
              title: "Kanıt ve Doküman Akışı",
              description:
                "Kanıt dokümanlarını kayıtlarla ilişkilendirin; eksik/uyumsuz alanları görünür kılın ve düzenli kapanış sağlayın.",
            },
            {
              title: "Kredi ve Portföy Hazırlığı",
              description:
                "Kredi bağlantılı raporlama ve portföy perspektifi için gerekli veri ve kayıt yapısını tek çatı altında yönetin.",
            },
          ],
          howItWorks: [
            {
              title: "Kayıt Yapısını Kurma",
              description:
                "Arazi/parsel, faaliyet ve dönem mantığı tanımlanır; veri alanları ve sorumluluklar netleştirilir.",
            },
            {
              title: "Veri Toplama ve Kontrol",
              description:
                "Kaynaklardan veri girişleri alınır; eksik/çelişkili alanlar tespit edilerek kontrol döngüsü işletilir.",
            },
            {
              title: "Hesaplama ve Sonuç Üretimi",
              description:
                "Hesaplama adımları çalıştırılır; çıktılar karar destek ve raporlama formatlarına uygun şekilde üretilir.",
            },
            {
              title: "Doğrulama ve Kanıt Hazırlığı",
              description:
                "Kanıtlar kayıtlarla bağlanır; denetim izi ve hazır olma seviyesi görünür hale getirilir.",
            },
          ],
          whoItsFor: [
            "Sürdürülebilirlik ve ESG ekipleri",
            "Tarım operasyonları ve saha ekipleri",
            "Veri yönetimi ve raporlama sahipleri",
            "Doğrulama ve güvence (assurance) hazırlığı yapan ekipler",
          ],
          outputs: [
            "Arazi ve faaliyet kayıtları",
            "Hesaplama ve doğrulama akışı",
            "Kredi ve portföy hazırlığı",
            "Kanıt ve denetim izi (audit trail) yapısı",
          ],
        },
        "cbam-calculation-engine": {
          status: "in_development",
          category: "CBAM",
          title: "CBAM Calculation Engine",
          kicker: "Gömülü emisyon hesaplama ve raporlama hazırlığı",
          cardDescription:
            "CBAM kapsamında veri toplama, metodoloji seçimi ve ürün/tesis kırılımında hesaplama mantığını yapılandıran hesaplama altyapısı.",
          heroText:
            "CBAM kapsamında veri toplama, gömülü emisyon hesaplama ve raporlama hazırlığını daha kontrollü ve sistematik hale getiren hesaplama altyapısı.",
          value:
            "CBAM kapsamında veri toplama, gömülü emisyon hesaplama ve raporlama hazırlığını daha kontrollü ve sistematik hale getiren hesaplama altyapısı.",
          solves: [
            "CBAM hesaplamaları; tedarikçi verisi, varsayılan değerler, metodoloji seçimleri ve ürün/tesis kırılımı nedeniyle hızla karmaşıklaşır.",
            "CBAM Calculation Engine, veri girişini ve hesaplama mantığını standartlaştırarak raporlama-uyum çıktılarının güvenilirliğini artırır.",
            "Girdi kalitesi, varsayılan kullanım sınırları ve hesaplama izlenebilirliği netleştiğinde; raporlama riski ve tekrar iş yükü azalır.",
          ],
          capabilities: [
            {
              title: "Ürün ve Tesis Bazlı Hesaplama",
              description:
                "Ürün/tesis kırılımı için hesaplama yapısını kurun; metodolojiye uygun sonuç üretimini disipline edin.",
            },
            {
              title: "Tedarikçi Verisi Yapısı",
              description:
                "Tedarikçi girdilerini tutarlı formatlara çekin; eksik alanları ve kalite sorunlarını görünür kılın.",
            },
            {
              title: "Varsayılan Değer Yönetimi",
              description:
                "Default value kullanımını kontrollü yönetin; nerede varsayılan, nerede birincil veri kullanıldığını şeffaflaştırın.",
            },
            {
              title: "Hesaplama İzlenebilirliği",
              description:
                "Girdi → hesaplama → çıktı izini koruyun; denetim ve inceleme için savunulabilir bir yapı kurun.",
            },
            {
              title: "Raporlama Hazırlığı",
              description:
                "CBAM yükümlülükleri için raporlama çıktılarının tutarlı üretimini sağlayın; kalite kontrol adımlarını standardize edin.",
            },
          ],
          howItWorks: [
            {
              title: "Kapsam ve Veri Haritası",
              description:
                "Ürün/tesis kapsamı belirlenir; tedarikçi ve iç veri kaynakları için alan haritası çıkarılır.",
            },
            {
              title: "Veri Toplama ve Normalizasyon",
              description:
                "Tedarikçi girdileri alınır; format/kalite kontrolleri uygulanır; varsayılan değer mantığı tanımlanır.",
            },
            {
              title: "Hesaplama Çalıştırma",
              description:
                "Metodolojiye uygun hesaplama adımları çalıştırılır; sonuçlar ürün ve tesis kırılımında üretilir.",
            },
            {
              title: "Kontrol ve Raporlama Çıktısı",
              description:
                "Tutarlılık kontrolleri yapılır; raporlama için kullanılabilir çıktı paketleri hazırlanır.",
            },
          ],
          whoItsFor: [
            "CBAM uyum ekipleri",
            "Sürdürülebilirlik ve karbon uzmanları",
            "Tedarik zinciri ve satınalma ekipleri",
            "Finans ve yönetim raporlama sahipleri",
          ],
          outputs: [
            "Ürün ve tesis bazlı hesaplamalar",
            "Tedarikçi verisi ve varsayılan değer yönetimi",
            "Raporlamaya hazır çıktı yapısı",
            "Hesaplama izlenebilirliği ve kontrol adımları",
          ],
        },
        "cbam-financial-impact-engine": {
          status: "in_development",
          category: "CBAM",
          title: "CBAM Financial Impact Engine",
          kicker: "Maliyet görünürlüğü ve senaryo bazlı karar destek",
          cardDescription:
            "CBAM maruziyetini mali etki perspektifiyle görünür kılan; senaryoları karşılaştırarak planlamayı destekleyen karar destek çözümü.",
          heroText:
            "CBAM maliyet etkisini görünür kılmak, senaryoları karşılaştırmak ve ihracat odaklı kararları daha sağlam bir zemine oturtmak için geliştirilen karar destek çözümü.",
          value:
            "CBAM maliyet etkisini görünür kılmak, senaryoları karşılaştırmak ve ihracat odaklı kararları daha sağlam bir zemine oturtmak için geliştirilen karar destek çözümü.",
          solves: [
            "CBAM konusu yalnızca raporlama değil; fiyat baskısı, marj etkisi ve senaryo bazlı planlama gerektirir.",
            "CBAM Financial Impact Engine, maruziyeti görünür kılar; alternatif senaryoları karşılaştırılabilir bir çerçevede sunar.",
            "Finans, ticari ekipler ve uyum sahipleri aynı veriyi aynı çerçevede okuyabildiğinde; karar süreci hızlanır ve belirsizlik azalır.",
          ],
          capabilities: [
            {
              title: "Maruziyet ve Maliyet Görünürlüğü",
              description:
                "Ürün/akış bazında CBAM maruziyetini finansal etkiyle birlikte izleyin; risk alanlarını erken görünür kılın.",
            },
            {
              title: "Senaryo Bazlı Simülasyon",
              description:
                "Farklı veri/varsayım senaryolarını karşılaştırın; maliyet etkisini yönetim seviyesinde netleştirin.",
            },
            {
              title: "Fiyat ve Planlama Desteği",
              description:
                "İhracat odaklı planlama için maliyet baskısını görünür kılın; karar süreçlerini hızlandırın.",
            },
            {
              title: "Karar Hazırlıklı Özetler",
              description:
                "Yönetim sunumları için kısa ve net özet çıktılar üretin; stratejik kararları destekleyin.",
            },
          ],
          howItWorks: [
            {
              title: "Maliyet Modeli Kurulumu",
              description:
                "Maruziyet alanları tanımlanır; veri yapısı ve finansal model mantığı netleştirilir.",
            },
            {
              title: "Senaryo Tanımı",
              description:
                "Varsayımlar ve alternatif senaryolar belirlenir; karşılaştırma çerçevesi hazırlanır.",
            },
            {
              title: "Simülasyon ve Karşılaştırma",
              description:
                "Senaryolar çalıştırılır; maliyet etkisi ve farklar görünür hale getirilir.",
            },
            {
              title: "Yönetim Çıktısı",
              description:
                "Karar destek çıktıları ve özet raporlar üretimiyle planlama süreci desteklenir.",
            },
          ],
          whoItsFor: [
            "Finans ve fiyatlama ekipleri",
            "Yönetim ve strateji ekipleri",
            "CBAM uyum ve sürdürülebilirlik sahipleri",
            "İhracat ve ticari planlama ekipleri",
          ],
          outputs: [
            "Finansal maruziyet simülasyonu",
            "Senaryo bazlı maliyet karşılaştırması",
            "Yönetim için karar desteği",
            "Ürün/akış bazlı risk alanı görünürlüğü",
          ],
        },
        "digital-product-passport-platform": {
          status: "coming_soon",
          category: "Dijital Ürün Pasaportu",
          title: "Digital Product Passport Platform",
          kicker: "Ürün veri mimarisi ve pasaport-ready kayıt yapısı",
          cardDescription:
            "Ürün verisini, teknik kayıtları ve izlenebilirlik mantığını pasaport gerekliliklerine uyumlu bir şemada yapılandırmak için tasarlanan platform.",
          heroText:
            "Ürün verisini, teknik kayıtları ve izlenebilirlik mantığını gelecekteki dijital ürün pasaportu gerekliliklerine uyumlu şekilde yapılandırmak için tasarlanan platform.",
          value:
            "Ürün verisini, teknik kayıtları ve izlenebilirlik mantığını gelecekteki dijital ürün pasaportu gerekliliklerine uyumlu şekilde yapılandırmak için tasarlanan platform.",
          solves: [
            "Ürün verisi ve izlenebilirlik kayıtları çoğu zaman farklı sistemlere dağılır; teknik dokümantasyon pasaport gerekliliklerine göre yapılandırılmamıştır.",
            "Bu platform; veri mimarisi, kayıt mantığı ve pasaport hazır içerik üretimi için kontrollü bir çerçeve sağlar.",
            "Doğru şema, sorumluluk ve güncellik kontrolü kurulduğunda; pasaport hazırlığı “dosya toplama” değil işletilebilir bir süreç haline gelir.",
          ],
          capabilities: [
            {
              title: "Ürün Veri Mimarisini Kurma",
              description:
                "Ürün alanlarını ve ilişkilerini pasaport mantığına göre yapılandırın; tekrar kullanılabilir kayıt şeması oluşturun.",
            },
            {
              title: "İzlenebilirlik ve Kayıt Mantığı",
              description:
                "Kritik izlenebilirlik kayıtlarını ve kanıt bağlantılarını düzenleyin; şeffaflık beklentilerini yönetin.",
            },
            {
              title: "Teknik Dokümantasyon Yapısı",
              description:
                "Teknik kayıtları ve dokümanları pasaport-ready bir düzen içinde yönetin; güncellik kontrolü sağlayın.",
            },
            {
              title: "Hazır İçerik ve Paylaşım",
              description:
                "Pasaport için gerekli içerik paketlerini üretin; ilgili paydaşlarla kontrollü paylaşım sağlayın.",
            },
          ],
          howItWorks: [
            {
              title: "Veri Alanları ve Şema",
              description:
                "Ürün veri alanları belirlenir; pasaport şeması ve ilişki mantığı tanımlanır.",
            },
            {
              title: "Kayıt ve Doküman Bağlantısı",
              description:
                "Kayıtlar ve kanıt/dokümanlar bağlanır; tutarlılık kontrolleri oluşturulur.",
            },
            {
              title: "Pasaport Hazır Paket",
              description:
                "Pasaport-ready içerik paketleri üretilir; yayın/erişim senaryoları planlanır.",
            },
          ],
          whoItsFor: [
            "Ürün veri sahipleri",
            "Kalite ve teknik dokümantasyon ekipleri",
            "Uyum ve sürdürülebilirlik ekipleri",
            "Tedarik zinciri ve izlenebilirlik sorumluları",
          ],
          outputs: [
            "Ürün veri mimarisi",
            "İzlenebilirlik ve kayıt mantığı",
            "Pasaporta hazır yapı",
            "Paylaşım ve yayınlama için kontrollü paketler",
          ],
        },
        "packaging-compliance-cost-os": {
          status: "coming_soon",
          category: "Ambalaj Uyumu",
          title: "Packaging Compliance & Cost OS",
          kicker: "Uyum, maliyet görünürlüğü ve karar akışı",
          cardDescription:
            "Ambalaj verisini, uyum yükümlülüklerini ve maliyet mantığını tek bir bağlantılı yapıda yönetmek için tasarlanan platform.",
          heroText:
            "Ambalaj bileşimini, uyum yükümlülüklerini, ücret mantığını ve maliyet etkilerini tek bir dijital işletim katmanında bir araya getiren çözüm.",
          value:
            "Ambalaj bileşimini, uyum yükümlülüklerini, ücret mantığını ve maliyet etkilerini tek bir dijital işletim katmanında bir araya getiren çözüm.",
          solves: [
            "Ambalaj kompozisyonu, envanter ve uyum yükümlülükleri farklı tablolarda kalır; fee mantığı ve maliyet etkisi netleşmez.",
            "Bu çözüm; veri, uyum ve maliyet görünürlüğünü tek bir işletim mantığında toplayarak karar süreçlerini güçlendirir.",
            "Ürün tasarımı, tedarik ve finans ekipleri aynı “ambalaj gerçekliğini” paylaşabildiğinde; uyum riski ve maliyet sürprizleri azalır.",
          ],
          capabilities: [
            {
              title: "Ambalaj Envanter Yapısı",
              description:
                "Ambalaj bileşenlerini ve kompozisyonu yapılandırın; ürünlerle ilişkilendirilebilir bir envanter mantığı kurun.",
            },
            {
              title: "Uyum ve Yükümlülük Görünürlüğü",
              description:
                "Uyum gerekliliklerini veri alanlarıyla eşleyin; eksik alanları ve riskleri görünür kılın.",
            },
            {
              title: "Fee ve Maliyet Mantığı",
              description:
                "Fee/ücret mantığını görünür hale getirin; maliyet etkisini ürün ve tasarım kararlarına bağlayın.",
            },
            {
              title: "Karar Destek Çıktıları",
              description:
                "Tasarım/tedarik değişikliklerinin etkisini kıyaslayın; yönetim kararları için net özetler üretin.",
            },
          ],
          howItWorks: [
            {
              title: "Envanter ve Alanlar",
              description:
                "Ambalaj envanter alanları tanımlanır; ürünlerle ilişki mantığı kurulur.",
            },
            {
              title: "Uyum Mantığı",
              description:
                "Uyum kuralları ve veri gereklilikleri eşlenir; kontrol adımları oluşturulur.",
            },
            {
              title: "Maliyet ve Karar Çıktısı",
              description:
                "Fee/maliyet görünürlüğü sağlanır; karar destek çıktıları üretilir.",
            },
          ],
          whoItsFor: [
            "Ambalaj ve ürün ekipleri",
            "Uyum ve regülasyon sahipleri",
            "Finans ve maliyet yönetimi",
            "Tedarik zinciri ve satınalma",
          ],
          outputs: [
            "Ambalaj envanteri yapısı",
            "Uyum ve ücret görünürlüğü",
            "Maliyet ve tasarım karar desteği",
            "Ürün bazlı uyum ve maliyet özetleri",
          ],
        },
        "sustainable-supply-chain-platform": {
          status: "coming_soon",
          category: "Tedarik Zinciri",
          title: "Sustainable Supply Chain Platform",
          kicker: "Tedarikçi verisi, kanıt akışı ve hazır olma görünürlüğü",
          cardDescription:
            "Tedarikçi etkileşimini, veri toplama ve belge akışını tek bir izlenebilir iş akışında yönetecek şekilde tasarlanan platform.",
          heroText:
            "Tedarikçi verisini, belge akışını, izlenebilirliği ve hazırlık görünürlüğünü daha sistematik hale getirmek için tasarlanan tedarik zinciri platformu.",
          value:
            "Tedarikçi verisini, belge akışını, izlenebilirliği ve hazırlık görünürlüğünü daha sistematik hale getirmek için tasarlanan tedarik zinciri platformu.",
          solves: [
            "Tedarikçi verisi ve kanıt dokümanları dağınık ilerler; takip ve hazır olma görünürlüğü zayıf kalır.",
            "Bu platform; tedarikçi etkileşimini, veri/kanıt akışını ve izlenebilirlik mantığını tek bir yapı içinde düzenler.",
            "Kontrol adımları ve kapanış disiplini kurulduğunda; tedarik zinciri hazırlığı ölçülebilir ve yönetilebilir hale gelir.",
          ],
          capabilities: [
            {
              title: "Tedarikçi Onboarding",
              description:
                "Tedarikçi profilleri ve sorumlulukları yapılandırın; veri toplama sürecini standartlaştırın.",
            },
            {
              title: "Veri Toplama ve İstek Yönetimi",
              description:
                "İstekleri ve yanıtları takip edin; eksik alanları ve gecikmeleri görünür kılın.",
            },
            {
              title: "Doküman ve Kanıt Akışı",
              description:
                "Dokümanları kayıtlarla ilişkilendirin; denetim izi ve kontrol adımlarını güçlendirin.",
            },
            {
              title: "Hazır Olma Görünürlüğü",
              description:
                "Tedarik zinciri düzeyinde hazır olma ve risk görünürlüğü sağlayın; öncelikleri netleştirin.",
            },
          ],
          howItWorks: [
            {
              title: "Tedarikçi Yapısı",
              description:
                "Onboarding mantığı kurulur; veri alanları ve doküman gereklilikleri tanımlanır.",
            },
            {
              title: "Toplama ve Kontrol",
              description:
                "Veri/kanıt akışı takip edilir; kalite ve tamamlanma kontrolleri işletilir.",
            },
            {
              title: "Görünürlük ve Raporlama",
              description:
                "Hazır olma ve risk görünürlüğü üretilir; yönetişim için rapor çıktıları hazırlanır.",
            },
          ],
          whoItsFor: [
            "Satınalma ve tedarik zinciri ekipleri",
            "Uyum ve sürdürülebilirlik sahipleri",
            "Tedarikçi ilişkileri ekipleri",
            "Raporlama ve yönetişim fonksiyonları",
          ],
          outputs: [
            "Tedarikçi onboarding ve veri toplama",
            "Belge ve kanıt akışı",
            "Tedarik zinciri hazırlık görünürlüğü",
            "Kontrol listeleri ve durum takibi",
          ],
        },
        "eudr-due-diligence-platform": {
          status: "coming_soon",
          category: "EUDR",
          title: "EUDR Due Diligence Platform",
          kicker: "Geolocation, menşe ve due diligence kayıt disiplini",
          cardDescription:
            "Coğrafi konum ve menşe kayıtlarını; belge kontrolü ve durum tespiti akışıyla birlikte yönetmek için tasarlanan platform.",
          heroText:
            "Coğrafi konum, menşe bağlantısı, belge kontrolü ve durum tespiti kayıtlarını EUDR hazırlığı çerçevesinde yapılandırmak için geliştirilen platform.",
          value:
            "Coğrafi konum, menşe bağlantısı, belge kontrolü ve durum tespiti kayıtlarını EUDR hazırlığı çerçevesinde yapılandırmak için geliştirilen platform.",
          solves: [
            "EUDR kapsamındaki due diligence; geolocation, köken kayıtları ve doküman akışının kontrollü yönetimini gerektirir.",
            "Bu platform; kayıt mantığını, izlenebilirliği ve hazır olma takibini tek bir sistem disiplininde birleştirir.",
            "Coğrafi veri–menşe bağlantısı ve kanıt akışı tek bir yerde görünür olduğunda; beyan hazırlığı daha savunulabilir hale gelir.",
          ],
          capabilities: [
            {
              title: "Geolocation ve Köken Kayıtları",
              description:
                "Geolocation verisini köken kayıtlarıyla ilişkilendirin; kayıt mantığını tutarlı hale getirin.",
            },
            {
              title: "Due Diligence Doküman Akışı",
              description:
                "Dokümanları süreç adımlarına bağlayın; eksik/uyumsuz alanları görünür kılın.",
            },
            {
              title: "Risk Görünürlüğü",
              description:
                "Risk alanlarını görünür kılın; önceliklendirme ve kapanış disiplinini güçlendirin.",
            },
            {
              title: "Hazır Olma Takibi",
              description:
                "Süreç tamamlanma ve statement-ready hazırlık seviyesini izleyin; denetim izi oluşturun.",
            },
          ],
          howItWorks: [
            {
              title: "Kayıt Şeması",
              description:
                "Geolocation, köken ve tedarik zinciri ilişki mantığı tanımlanır; veri alanları netleştirilir.",
            },
            {
              title: "Doküman ve Kontrol",
              description:
                "Due diligence dokümanları bağlanır; kontrol/kanıt akışı işletilir.",
            },
            {
              title: "Statement Readiness",
              description:
                "Hazır olma görünürlüğü üretilir; statement-ready çıktılar için yapı kurulur.",
            },
          ],
          whoItsFor: [
            "Uyum ve regülasyon ekipleri",
            "Tedarik zinciri ve satınalma",
            "Risk ve yönetişim fonksiyonları",
            "Veri ve doküman sahipleri",
          ],
          outputs: [
            "Coğrafi konum ve menşe kayıtları",
            "Durum tespiti belge akışı",
            "EUDR hazırlık takibi",
            "Risk ve eksik alan görünürlüğü",
          ],
        },
      },
    },
    detail: {
      comingSoonPositioning: [
        "Şu anda seçili kullanım senaryoları ve gerçek uyum ihtiyaçları doğrultusunda şekillendirilmektedir.",
      ],
      sections: {
        whatItSolves: "Ne Sorunu Çözer",
        keyCapabilities: "Temel Yetkinlikler",
        howItWorks: "Nasıl Çalışır",
        whoItsFor: "Kimler İçin Uygun",
        outputs: "Çıktılar",
      },
      whoSupportingNote:
        "Bu ürünler; danışmanlığın yerini almak için değil, uyum ve raporlama iş akışlarında veri disiplini, izlenebilirlik ve karar hazırlığını güçlendirmek için konumlanır.",
      backToSoftware: "Yazılıma dön",
      comingSoonPanelTitle: "Çok yakında — erken erişim ve planlama",
      finalCta: {
        title: "Doğru ürün yapısını birlikte netleştirelim",
        description:
          "Önceliklerinizi ve kullanım senaryolarınızı hızlıca değerlendirip en uygun başlangıç çerçevesini birlikte belirleyelim.",
      },
    },
  },
};
