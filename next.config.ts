import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const LOCALES = ["tr", "en", "nl"] as const;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    const list: { source: string; destination: string; permanent: boolean }[] = [];
    for (const locale of LOCALES) {
      list.push(
        {
          source: `/${locale}/software-solutions`,
          destination: `/${locale}/software`,
          permanent: true,
        },
        {
          source: `/${locale}/sector-expertise`,
          destination: `/${locale}/sectors`,
          permanent: true,
        },
        {
          source: `/${locale}/sectorexpertise`,
          destination: `/${locale}/sectors`,
          permanent: true,
        },
      );
    }
    list.push(
      {
        source: "/en/services/reportingEsg",
        destination: "/en/services/esg-corporate-reporting",
        permanent: true,
      },
      {
        source: "/en/services/carbonClimate",
        destination: "/en/services/carbon-climate-decarbonisation",
        permanent: true,
      },
    );
    return list;
  },
};

export default withNextIntl(nextConfig);
