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
          title={firstImage?.firstImageTitle || ""}
          subtitle={firstImage?.firstImageSubtitle || ""}
          imageSrc={firstImage?.imagekitUrl || undefined}
          altText={firstImage?.alt || undefined}
          position="left"
        />
      </AnimatedSection>

      <AnimatedSection
        delay={0.2}
        style={{
          paddingTop: "calc(var(--spacing-xl) + var(--navbar-height))",
          marginTop: "calc(-1 * var(--navbar-height))",
        }}
        id="services"
      >
        <Services />
      </AnimatedSection>

      <AnimatedSection delay={0.25} style={{ paddingTop: "var(--spacing-xl)" }}>
        <ParallaxSection
          title={secondImage?.secondImageTitle || ""}
          subtitle={secondImage?.secondImageSubtitle || ""}
          imageSrc={secondImage?.imagekitUrl || undefined}
          altText={secondImage?.alt || undefined}
          position="right"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.3} style={{ paddingTop: "var(--spacing-xl)" }}>
        <AboutUsAnimated />
      </AnimatedSection>

      <AnimatedSection delay={0.35} style={{ paddingTop: "var(--spacing-xl)" }}>
        <ParallaxSection
          title={thirdImage?.thirdImageTitle || ""}
          subtitle={thirdImage?.thirdImageSubtitle || ""}
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
