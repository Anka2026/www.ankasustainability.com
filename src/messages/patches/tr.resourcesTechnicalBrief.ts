import type { JsonObject } from "@/lib/merge-messages";

export const trResourcesTechnicalBriefPatch: JsonObject = {
  insightsPage: {
    featured: {
      items: {
        "csrd-double-materiality": {
          technicalBrief: {
            paragraphs: [
              "CSRD hazırlığında teknik kritik nokta, önemlilik mantığının veri sahipliği ve kanıt düzeniyle aynı anda kurgulanmasıdır. Kapsam ve ESRS konu haritası netleşmeden toplanan veri, rapor döneminde yeniden işlenmek zorunda kalır.",
              "Kurumlar çoğu zaman paydaş girdilerini toplar ancak karar kriterlerini, veri alanlarını ve dokümantasyon akışını eşleştiremez. Bu rehber, hazırlığın hangi teknik adımlarla yönetilebilir hale getirileceğini netleştirir.",
            ],
          },
        },
        "cbam-data-financial-impact": {
          technicalBrief: {
            paragraphs: [
              "CBAM’de teknik hazırlık, gömülü emisyon verisinin ürün ve tesis kırılımında tutarlı tanımlanmasıyla başlar. Metodoloji seçimi, varsayılan değer sınırları ve tedarikçi beyanları aynı kontrol çerçevesinde yönetilmezse hesaplama savunulabilirliği düşer.",
              "Finans ve operasyon ekipleri genelde mali etkiyi raporlama dönemine yakın ele alır. Bu rehber, veri kalitesi ile mali senaryoların nasıl aynı yapı altında toplanacağını özetler.",
            ],
          },
        },
        "digital-product-passport-data": {
          technicalBrief: {
            paragraphs: [
              "Dijital Ürün Pasaportu hazırlığında kritik teknik konu, ürün kimliği, BOM ve uyum verisinin ilişkili bir kayıt modelinde tutulmasıdır. Statik dosya yaklaşımı, güncellik ve kanıt bağlantısı gereksinimlerini karşılamaz.",
              "Ekipler sıklıkla alan listesi oluşturur ancak sahiplik, doğrulama ve paylaşım senaryolarını tanımlamaz. Bu rehber, hangi veri alanlarının önce yapılandırılması gerektiğini gösterir.",
            ],
          },
        },
        "ppwr-product-packaging-data": {
          technicalBrief: {
            paragraphs: [
              "PPWR kapsamında ambalaj verisi, ürün master verisi ve uyum beyanı aynı mimaride yönetilmelidir. Malzeme kompozisyonu, ağırlık ve sorumluluk haritası parçalı tutulduğunda pazar yerleştirme riski artar.",
              "Tasarım ve satın alma kararları çoğu zaman uyum verisi güncellenmeden alınır. Bu rehber, ambalaj envanteri ile regülasyon beklentilerini nasıl eşleştireceğinizi özetler.",
            ],
          },
        },
        "scope-3-supplier-data": {
          technicalBrief: {
            paragraphs: [
              "Scope 3 için teknik zorluk, tedarikçi verisinin tekrar kullanılabilir bir akışa dönüştürülmesidir. Tek seferlik anketler, segmentasyon ve kalite kontrolü olmadan sürdürülebilir veri üretmez.",
              "Kurumlar tanım sözlüğü ve kanıt disiplinini kurmadan toplama başlatır; bu da her raporlama döneminde yeniden müzakereye yol açar. Bu rehber, önceliklendirilmiş tedarikçi veri yapısını netleştirir.",
            ],
          },
        },
        "digital-workspace-reporting": {
          technicalBrief: {
            paragraphs: [
              "Sürdürülebilirlik raporlamasında teknik risk, veri ve kanıtın e-posta ile dağınık yönetilmesidir. Revizyon izi, sorumluluk ve ilerleme görünürlüğü olmadan çok fonksiyonlu projeler kontrol dışına çıkar.",
              "Dijital çalışma alanı bir yazılım vaadi değil; toplama, kontrol ve teslim adımlarını görünür kılan bir süreç mimarisidir. Bu rehber, hangi yapı taşlarının önce kurulması gerektiğini özetler.",
            ],
          },
        },
      },
    },
  },
};
