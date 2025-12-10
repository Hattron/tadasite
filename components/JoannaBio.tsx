import { getJoannaImage } from "@/lib/image-actions";
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
            marginBottom: "var(--spacing-md)",
          }}
        >
          Joanna Dyment Carrasco
        </h1>

        {/* Subtitle */}
        <h2
          className="text-center font-bold tracking-widest uppercase"
          style={{
            color: "var(--color-secondary)",
            fontFamily: "var(--font-secondary)",
            fontSize: "var(--font-size-lg)",
            marginBottom: "var(--spacing-3xl)",
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
            {joannaImage ? (
              <ImageFrame variant="minimal">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(joannaImage.imagekitUrl)}?tr=w-600,h-750,q-90`}
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
            >
              Joanna brings a deeply people-first approach to interior
              decorating—shaped by her background in sociology and a lifelong
              love of art and design. Raised by a professional artist, she grew
              up surrounded by creativity, colour, and the belief that beautiful
              environments can transform how we feel.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              After years in hospitality, Joanna developed a sharp eye for how
              comfort and aesthetics work together in real life. Her time in the
              service industry honed her attention to detail, spatial flow, and
              the importance of design that supports human connection.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              She later formalized her skills at Algonquin College, graduating
              with honours from the Interior Decorating program. Today, she
              brings both warmth and professionalism to every project—focused on
              spaces that feel personal, welcoming, and lived-in.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Joanna’s designs are inspired by her love of travel, drawing from
              global textures, colours, and patterns to create interiors with
              character and depth. As a mother of two, she understands that
              design must work for everyday life—and her work always balances
              beauty with livability.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Her clients value not just her creative eye, but her ability to
              listen deeply and translate vision into reality. Many become
              long-term partners as their lives evolve, with Joanna adapting
              their spaces to meet changing needs while keeping the spirit of
              the original design intact.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
