import { getJoannaImage } from "@/lib/image-actions";
import { getCopyContent } from "@/lib/hardcoded-copy";
import { imagekitConfig } from "@/lib/imagekit";
import ImageFrame from "@/components/ui/ImageFrame";

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default async function JoannaBio() {
  const joannaImage = await getJoannaImage();

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
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-primary)",
            marginBottom: "var(--spacing-3xl)",
          }}
        >
          Joanna Dyment
        </h1>

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
            {joannaImage ? (
              <ImageFrame variant="minimal">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(joannaImage.imagekitUrl)}?tr=w-300,h-300,q-90`}
                  alt={joannaImage.alt || "Joanna, interior designer"}
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
                  Set a Joanna image in the gallery manager
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
                  getCopyContent("about-joanna-bio-paragraph-1") ||
                  "Design has always been a part of Joanna's life. Growing up with an artist father, she was constantly surrounded by creativity, color, and the belief that beautiful spaces have the power to transform how we feel and live.",
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
                  getCopyContent("about-joanna-bio-paragraph-2") ||
                  "While she studied sociology in university, Joanna found that understanding how people live, interact, and connect became the foundation for her design philosophy.",
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
                  getCopyContent("about-joanna-bio-paragraph-3") ||
                  "A people person at heart - social, intuitive, and deeply committed to creating spaces that feel personal and welcoming.",
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
                  getCopyContent("about-joanna-bio-paragraph-4") ||
                  "Joanna's years working in the hospitality industry sharpened her eye for functional beauty, especially in spaces where comfort and style must coexist seamlessly.",
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
                  getCopyContent("about-joanna-bio-paragraph-5") ||
                  "She later followed her passion and graduated with honours from the Interior Decorating program at Algonquin College.",
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
                  getCopyContent("about-joanna-bio-paragraph-6") ||
                  "Joanna loves to travel and finds endless inspiration in the colours, textures, and cultures she has experienced around the world.",
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
                  getCopyContent("about-joanna-bio-paragraph-7") ||
                  "As a mother of two, she understands how important it is for spaces to be both stylish and livable.",
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
                  getCopyContent("about-joanna-bio-paragraph-8") ||
                  "Joanna is proud to have built lasting relationships with many repeat clients, tailoring each space to evolve with their changing needs and life stages.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
