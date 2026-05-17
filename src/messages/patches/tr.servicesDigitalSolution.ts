import type { JsonObject } from "@/lib/merge-messages";

export const trServicesDigitalSolutionPatch: JsonObject = {
  servicesPage: {
    overview: {
      eyebrow: "Hizmet yaklaşımımız",
      title: "Regülasyon yoğunluğunu, ekiplerinizin sürdürebileceği net bir çalışma ritmine dönüştürürüz",
      text: "Karbon, ESG, ürün, tedarik zinciri ve pazar odaklı programlarda öncelikleri, veri sahipliğini, kanıt disiplinini ve uygulanabilir iş akışlarını birbirine bağlarız; böylece beklentiler değiştikçe sürdürülebilirlik çalışması izlenebilir, savunulabilir ve yönetilebilir kalır.",
      strip: [
        { title: "Kapsam ve öncelik" },
        { title: "Veri sahipliği" },
        { title: "Kanıt ve izlenebilirlik" },
        { title: "Yönetilebilir iş akışı" },
      ],
    },
    relatedDigitalSolution: {
      eyebrow: "DİJİTAL ÇALIŞMA DESTEĞİ",
      mainTitle: "Bu Çalışmayı Destekleyen Dijital Yapı",
      intro:
        "Burada yer alan dijital çözümler, danışmanlık çalışmasının yerine geçmez; veri toplama, kanıt düzeni, eksik alan takibi ve hazırlık görünürlüğünü daha kontrollü hale getirir. Böylece teknik değerlendirme süreci kurum içinde daha izlenebilir, savunulabilir ve yönetilebilir bir çalışma düzenine taşınır.",
      moduleCta: "Yazılım Çözümünü İnceleyin",
      allSoftwareCta: "Tüm Yazılım Çözümlerini Gör",
      cta: "Yazılım Çözümünü İnceleyin",
      previewBadge: "Dijital destek",
      modules: {
        cbam: {
          title: "CBAM Hesaplama ve Uyum Operasyonunu Birlikte Yönetin",
          description:
            "CBAM çalışmalarında yalnızca hesaplama yapmak yeterli değildir; ürün, tesis, tedarikçi verisi, kanıt dosyası ve beyan hazırlığı aynı çalışma düzeninde yönetilmelidir. Calculation Engine hesaplama tarafını, Compliance Console ise tedarikçi veri akışı ve uyum operasyonunu destekler.",
          submodules: [
            "Arvenza CBAM Calculation Engine",
            "Arvenza CBAM Compliance Console",
          ],
          submoduleFocus: [
            "Ürün ve tesis düzeyinde gömülü emisyon hesapları ile metodoloji kontrolünü destekler.",
            "Tedarikçi veri akışı, kanıt dosyası, eksik alan takibi ve beyan hazırlığı için uyum operasyonunu destekler.",
          ],
          chips: [
            "Gömülü emisyon hesabı",
            "Tedarikçi veri akışı",
            "Kanıt ve hazırlık takibi",
          ],
        },
      },
      categoryBand: {
        productCircularity: {
          extraNote:
            "Bu dijital yapı LCA veya EPD hesaplama yazılımı olarak konumlandırılmaz; ürün verisi, ambalaj bilgisi, beyan alanları ve izlenebilirlik düzenini güçlendirmek için kullanılır.",
        },
      },
      digitalModules: {
        "cbam-calculation-engine": {
          title: "Arvenza CBAM Calculation Engine",
          description:
            "Ürün ve tesis verisi ile metodoloji kontrolü eşliğinde gömülü emisyon hesabını destekler.",
          chips: ["Gömülü emisyon hesabı", "Ürün ve tesis verisi", "Metodoloji kontrolü"],
        },
        "cbam-compliance-console": {
          title: "Arvenza CBAM Compliance Console",
          description:
            "Tedarikçi veri akışı, kanıt dosyası, eksik alan takibi ve beyan hazırlığını destekler.",
          chips: ["Tedarikçi veri akışı", "Kanıt dosyası", "Beyan hazırlığı"],
        },
        "eudr-due-diligence-traceability": {
          title: "Arvenza EUDR Özen Yükümlülüğü ve İzlenebilirlik Platformu",
          description:
            "EUDR kapsamındaki ürün ve tedarik zinciri verilerini; menşe, geolokasyon, risk değerlendirmesi ve beyan hazırlığı için daha izlenebilir bir kayıt düzeninde yönetmeye yardımcı olur.",
          chips: ["Menşe ve geolokasyon", "Risk değerlendirme", "Beyan hazırlığı"],
        },
        "digital-product-passport-platform": {
          title: "Arvenza DPP Dijital Ürün Pasaportu Platformu",
          description:
            "Ürün verisi, beyan alanları, izlenebilirlik ve pasaport hazırlığı için veri düzenini destekler. LCA veya EPD teknik çalışmasının yerine geçmez.",
          chips: ["Ürün veri modeli", "İzlenebilirlik", "Beyan alanları"],
        },
        "packaging-compliance-tool": {
          title: "Arvenza PPWR ve Ambalaj Uyum Platformu",
          description:
            "Ambalaj envanteri, malzeme kompozisyonu ve uygunluk kanıtını yapılandırılmış veri ve belge akışında yönetmeye yardımcı olur.",
          chips: ["Ambalaj envanteri", "Malzeme kompozisyonu", "Uygunluk kanıtı"],
        },
        "supplier-data-evidence-workflow": {
          title: "Arvenza Tedarikçi Veri Toplama ve Kanıt Akışı",
          description:
            "Tedarikçi veri talepleri, eksik alan takibi, onay ve revizyon adımlarını izlenebilirlik ve kanıt disipliniyle birlikte yönetmeye yardımcı olur.",
          chips: ["Veri talebi", "Eksik alan takibi", "Onay ve revizyon"],
        },
        "esg-evidence-reporting-workspace": {
          title: "Arvenza ESG Kanıt ve Raporlama Çalışma Alanı",
          description:
            "CSRD/ESRS ve kurumsal raporlama süreçlerinde kanıt deposu, sorumluluk takibi ve hazırlık görünürlüğünü daha izlenebilir bir çalışma düzeninde destekler.",
          chips: ["Kanıt deposu", "Sorumluluk takibi", "Hazırlık görünürlüğü"],
        },
      },
    },
  },
};
