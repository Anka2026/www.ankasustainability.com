import { Container } from "@/components/container";
import {
  HERO_EYEBROW_MARKER,
  HERO_EYEBROW_ROW,
  HERO_LEFT_RAIL,
  HERO_PAGE_PADDING,
  HERO_SECTION_SHELL_PAGE,
  HERO_SINGLE_COLUMN_SHELL,
  HERO_TEXT_STACK,
  HERO_TOP_HAIRLINE,
} from "@/lib/hero-classes";
import { HERO_EYEBROW_TEXT_DARK, LEGAL_HERO_TITLE_DARK } from "@/lib/typography-classes";

type Props = Readonly<{
  eyebrow: string;
  title: string;
  titleId: string;
}>;

export function LegalHero({ eyebrow, title, titleId }: Props) {
  return (
    <section
      className={HERO_SECTION_SHELL_PAGE}
      aria-labelledby={titleId}
    >
      <div className={HERO_TOP_HAIRLINE} aria-hidden />
      <Container className={HERO_PAGE_PADDING}>
        <div className={HERO_SINGLE_COLUMN_SHELL}>
          <div className={HERO_LEFT_RAIL}>
            <div className={HERO_TEXT_STACK}>
              <div className={HERO_EYEBROW_ROW}>
                <span className={HERO_EYEBROW_MARKER} aria-hidden />
                <p className={HERO_EYEBROW_TEXT_DARK}>
                  {eyebrow}
                </p>
              </div>
              <h1
                id={titleId}
                className={LEGAL_HERO_TITLE_DARK}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
