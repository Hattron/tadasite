import { getAboutUsImage } from "@/lib/image-actions";
import { getCopyContents } from "@/lib/hardcoded-copy";
import { imagekitConfig } from "@/lib/imagekit";
import ClientMotionWrapper from "./ClientMotionWrapper";

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default async function AboutUsAnimated() {
  const aboutUsImage = await getAboutUsImage();

  // Get hardcoded copy content
  const copyContent = getCopyContents([
    "home-about-us-paragraph-1",
    "home-about-us-paragraph-2",
    "home-about-us-paragraph-3",
  ]);

  return (
    <section
      className="md:px-8"
      style={{
        backgroundColor: "var(--color-background)",
        paddingTop: "var(--spacing-3xl)",
        paddingBottom: "var(--spacing-3xl)",
        paddingLeft: "var(--spacing-lg)",
        paddingRight: "var(--spacing-lg)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <ClientMotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-8 sm:mb-16"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-primary)",
            }}
          >
            About Us
          </h2>
        </ClientMotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <ClientMotionWrapper
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {aboutUsImage ? (
              <img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(aboutUsImage.imagekitUrl)}?tr=w-600,h-600,q-90`}
                alt={aboutUsImage.alt || "About TaDa! Interiors"}
                className="rounded-2xl shadow-lg h-auto w-full max-w-xs sm:max-w-md lg:max-w-lg"
              />
            ) : (
              <div
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96 rounded-2xl shadow-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  opacity: 0.1,
                }}
              >
                <p
                  className="text-center text-sm sm:text-base px-4"
                  style={{ color: "var(--color-text)" }}
                >
                  Set an About Us image in the gallery manager
                </p>
              </div>
            )}
          </ClientMotionWrapper>

          {/* Content Section */}
          <ClientMotionWrapper
            className="flex flex-col w-full order-2 lg:order-2 mx-auto lg:mx-0"
            style={{
              rowGap: "clamp(var(--spacing-lg), 4vw, var(--spacing-xl))",
              maxWidth: "var(--content-max-width)",
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  copyContent["home-about-us-paragraph-1"] ||
                  "At TaDa! Interiors, we&apos;ve been bringing inspired design to homes and businesses across Ottawa for over 20 years.",
              }}
            />

            <div
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  copyContent["home-about-us-paragraph-2"] ||
                  "We&apos;re celebrated for our ability to transform and reimagine spaces in a way that reflects every client&apos;s personality, style and lifestyle.",
              }}
            />

            <div
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  copyContent["home-about-us-paragraph-3"] ||
                  "We work closely with a trusted team of skilled trades professionals, allowing TaDa! Interiors to deliver exceptional craftsmanship and seamless results every step of the way.",
              }}
            />

            {/* Call to Action */}
            <div className="pt-4 sm:pt-6 text-center lg:text-left">
              <a
                href="mailto:hello@tadainteriordesign.com"
                className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                  fontFamily: "var(--font-secondary)",
                }}
              >
                Start Your Project
              </a>
            </div>
          </ClientMotionWrapper>
        </div>
      </div>
    </section>
  );
}
