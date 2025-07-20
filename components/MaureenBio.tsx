import { getMaureenImage } from "@/lib/image-actions";
import { getCopyContent } from "@/lib/hardcoded-copy";
import { imagekitConfig } from "@/lib/imagekit";
import ImageFrame from "@/components/ui/ImageFrame";

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default async function MaureenBio() {
  const maurImage = await getMaureenImage();

  return (
    <section
      className="px-8"
      style={{
        backgroundColor: "var(--color-background)",
        paddingTop: "var(--spacing-3xl)",
        paddingBottom: "var(--spacing-3xl)",
      }}
    >
      <div
        style={{ maxWidth: "var(--container-max-width)" }}
        className="mx-auto"
      >
        {/* Main Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-primary)",
            marginBottom: "var(--spacing-md)",
          }}
        >
          C. Maureen Rice
        </h1>

        {/* Subtitle */}
        <h2
          className="text-center font-medium"
          style={{
            color: "var(--color-text)",
            fontFamily: "var(--font-secondary)",
            fontSize: "var(--font-size-xl)",
            marginBottom: "var(--spacing-3xl)",
            opacity: 0.8,
          }}
        >
          Certified Interior Decorator
        </h2>

        <div
          className="grid grid-cols-1 lg:[grid-template-columns:auto_1fr] items-start place-items-start"
          style={{ gap: "var(--spacing-about-image-gap-tight)" }}
        >
          {/* Image Section */}
          <div
            className="mb-8 lg:mb-0 flex justify-center lg:justify-start items-start lg:pr-4 lg:md:pr-8 lg:lg:pr-12"
            style={{
              marginBottom: "var(--spacing-2xl)",
              width: "100%",
            }}
          >
            {maurImage ? (
              <ImageFrame variant="default">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(maurImage.imagekitUrl)}?tr=w-300,h-300,q-90`}
                  alt={
                    maurImage.alt ||
                    "Maureen Rice, certified interior decorator"
                  }
                  className="h-auto"
                  style={{
                    maxWidth: "var(--image-about-medium-max-width)",
                    display: "block",
                  }}
                />
              </ImageFrame>
            ) : (
              <div
                className="h-48 flex items-center justify-center"
                style={{
                  maxWidth: "var(--image-about-medium-max-width)",
                  opacity: 0.1,
                }}
              >
                <p
                  className="text-center"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--font-size-base)",
                  }}
                >
                  Set a Maureen image in the gallery manager
                </p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div
            className="flex flex-col w-full lg:w-3/4"
            style={{ gap: "var(--spacing-lg)" }}
          >
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  getCopyContent("about-maureen-bio-paragraph-1") ||
                  "After graduating with honours from the Residential Décor program at Algonquin college Maureen embarked on a career that has spanned over two decades.",
              }}
            />
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  getCopyContent("about-maureen-bio-paragraph-2") ||
                  "Maureen brings a true passion for creativity to every project she takes on.",
              }}
            />
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  getCopyContent("about-maureen-bio-paragraph-3") ||
                  "Over the years Maureen has leant her skills and expertise to a number of companies and organizations.",
              }}
            />
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  getCopyContent("about-maureen-bio-paragraph-4") ||
                  "Maureen values the great relationships that develop while working with her clients.",
              }}
            />
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  getCopyContent("about-maureen-bio-paragraph-5") ||
                  "In addition to being a wife and proud mom of two boys Maureen finds joy in gardening, unwinding through yoga and meditation, and exploring new destinations through travel.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
