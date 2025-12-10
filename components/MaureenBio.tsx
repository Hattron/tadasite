import { getMaureenImage } from "@/lib/image-actions";
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
            {maurImage ? (
              <ImageFrame variant="minimal">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(maurImage.imagekitUrl)}?tr=w-600,h-750,q-90`}
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
            >
              Maureen launched TaDa! Interiors in 2002, following her graduation
              with honours from Algonquin College’s Residential Décor
              program—and a lifelong dream to bring inspiring spaces to life.
              With more than two decades of hands-on experience, she blends
              creative vision, technical know-how, and deep attention to detail
              into every project.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Her approach is equal parts thoughtful and inventive. Known for
              thinking beyond the obvious, Maureen finds fresh, unexpected
              solutions that elevate a space without sacrificing function. She’s
              meticulous with the finishing touches—and never loses sight of the
              big picture.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              As a former cast member on HGTV’s Design U (seasons 2–4), Maureen
              showcased her skill under pressure, delivering high-impact
              projects on tight timelines and limited budgets. Under her first
              name Christina on the show, she put her craftsmanship to work as a
              drapery seamstress, upholsterer, and hands-on assistant to the
              carpentry team.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Clients come back to Maureen time and again—not only for her
              talent, but for the warm, collaborative relationships she builds.
              Her designs reflect the people who live and work in them,
              thoughtfully tailored to individual style, needs, and budget.
            </div>
            <div
              className="leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-lg)",
              }}
            >
              Outside the studio, Maureen is a proud wife and mom of two who
              finds joy in gardening, unwinding through yoga, and exploring her
              creativity through various craft and textile arts. These personal
              passions often inspire elements in her design work, bringing
              organic beauty and mindful tranquility to her projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
