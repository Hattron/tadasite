import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import ParallaxSection from "@/components/ParallaxSection";
import AboutUsAnimated from "@/components/AboutUsAnimated";
import Testimonials from "@/components/Testimonials";
import OurApproach from "@/components/OurApproach";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import {
  getFirstImage,
  getSecondImage,
  getThirdImage,
  getHeroImage,
} from "@/lib/image-actions";

export default async function Home() {
  const [heroImage, firstImage, secondImage, thirdImage] = await Promise.all([
    getHeroImage(),
    getFirstImage(),
    getSecondImage(),
    getThirdImage(),
  ]);

  return (
    <AnimatedPageWrapper>
      <HeroSection heroImage={heroImage} />

      <AnimatedSection delay={0.1} style={{ paddingTop: "var(--spacing-xl)" }}>
        <OurApproach />
      </AnimatedSection>

      <AnimatedSection delay={0.15} style={{ paddingTop: "var(--spacing-xl)" }}>
        <ParallaxSection
          title='"Designing spaces that feel like home - beautiful, thoughtful, and uniquely you"'
          subtitle=""
          imageSrc={firstImage?.imagekitUrl || undefined}
          altText={firstImage?.alt || undefined}
          position="left"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.2} style={{ paddingTop: "var(--spacing-xl)" }}>
        <AboutUsAnimated />
      </AnimatedSection>

      <AnimatedSection delay={0.25} style={{ paddingTop: "var(--spacing-xl)" }}>
        <ParallaxSection
          title='"I deeply believe that a beautiful decor can have a beneficial influence on our lives."'
          subtitle="- Albert Hadley"
          imageSrc={secondImage?.imagekitUrl || undefined}
          altText={secondImage?.alt || undefined}
          position="right"
        />
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
        <ParallaxSection
          title='"Interiors that reflect your story"'
          subtitle=""
          imageSrc={thirdImage?.imagekitUrl || undefined}
          altText={thirdImage?.alt || undefined}
          position="left"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.4} style={{ paddingTop: "var(--spacing-xl)" }}>
        <Testimonials />
      </AnimatedSection>
    </AnimatedPageWrapper>
  );
}
