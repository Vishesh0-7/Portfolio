import { SectionWrapper } from "./SectionWrapper";
import { TabHero } from "./TabHero";

/**
 * Hero section component
 * Main landing section with multi-tab content switcher
 * Clean, text-only, typography-focused design
 */
export function HeroSection() {
  return (
    <SectionWrapper id="home" className="bg-black relative">
      <TabHero />
    </SectionWrapper>
  );
}
