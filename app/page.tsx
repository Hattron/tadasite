import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import FirstParallaxSection from "@/components/FirstParallaxSection";
import SecondParallaxSection from "@/components/SecondParallaxSection";
import ThirdParallaxSection from "@/components/ThirdParallaxSection";
import AboutUsAnimated from "@/components/AboutUsAnimated";
import Testimonials from "@/components/Testimonials";
import OurApproach from "@/components/OurApproach";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import { getHeroImage, getMobileHeroImage } from "@/lib/image-actions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | TaDa! Interior Design",
  description:
    "Welcome to TaDa! Interior Design. We specialize in residential and commercial design, creating spaces that blend functionality with distinctive style.",
};

export default async function Home() {
  const heroImage = await getHeroImage();
  const mobileHeroImage = await getMobileHeroImage();

  return (
    <AnimatedPageWrapper>
      <HeroSection heroImage={heroImage} mobileHeroImage={mobileHeroImage} />

      <AnimatedSection delay={0.1} style={{ paddingTop: "var(--spacing-xl)" }}>
        <OurApproach />
      </AnimatedSection>

      <AnimatedSection delay={0.15} style={{ paddingTop: "var(--spacing-xl)" }}>
        <FirstParallaxSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2} style={{ paddingTop: "var(--spacing-xl)" }}>
        <AboutUsAnimated />
      </AnimatedSection>

      <AnimatedSection delay={0.25} style={{ paddingTop: "var(--spacing-xl)" }}>
        <SecondParallaxSection />
      </AnimatedSection>

      <AnimatedSection
        delay={0.3}
        style={{
          paddingTop: "calc(var(--spacing-xl) + var(--navbar-height))",
          marginTop: "calc(-1 * var(--navbar-height))",
        }}
        id="services"
      >
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={0.35} style={{ paddingTop: "var(--spacing-xl)" }}>
        <ThirdParallaxSection />
      </AnimatedSection>

      <AnimatedSection delay={0.4} style={{ paddingTop: "var(--spacing-xl)" }}>
        <Testimonials />
      </AnimatedSection>
    </AnimatedPageWrapper>
  );
}

