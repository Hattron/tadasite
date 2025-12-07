import { getAboutUsImage } from "@/lib/image-actions";

import { imagekitConfig } from "@/lib/imagekit";
import ClientMotionWrapper from "./ClientMotionWrapper";

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default async function AboutUsAnimated() {
  const aboutUsImage = await getAboutUsImage();



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
            >
              At TaDa! Interiors, we&apos;ve been bringing inspired design to
              homes and businesses across Ottawa for over 20 years. Our passion
              lies in creating spaces that are not only beautiful but also
              deeply personal and functional for the people who live and work in
              them.
            </div>

            <div
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
              }}
            >
              We&apos;re celebrated for our ability to transform and reimagine
              spaces in a way that reflects every client&apos;s unique style,
              needs, and budget. Whether it&apos;s a complete home renovation, a
              single room refresh, or a commercial project, we approach each
              design challenge with creativity, expertise, and genuine care.
            </div>

            <div
              className="text-base sm:text-lg leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
              }}
            >
              We work closely with a trusted team of skilled trades
              professionals, allowing TaDa! Interiors to deliver comprehensive
              design solutions from concept to completion. Our collaborative
              approach ensures every detail is thoughtfully considered and
              expertly executed.
            </div>

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
