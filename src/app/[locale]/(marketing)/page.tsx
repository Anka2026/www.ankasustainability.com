import { getTranslations } from "next-intl/server";

import {
  FinalCtaSection,
  HeroSection,
  ServicesPreviewSection,
  SoftwareSectorsPairSection,
  WhySection,
} from "@/components/home";

export default async function HomePage() {
  const t = await getTranslations("home");
  const tServicesPage = await getTranslations("servicesPage");

  return (
    <>
      <HeroSection t={t} />
      <ServicesPreviewSection t={t} tServicesPage={tServicesPage} />
      <SoftwareSectorsPairSection t={t} />
      <WhySection t={t} />
      <FinalCtaSection t={t} />
    </>
  );
}

