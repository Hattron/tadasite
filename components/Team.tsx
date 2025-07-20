import { getCopyContent } from "@/lib/hardcoded-copy";
import ImageFrame from "@/components/ui/ImageFrame";

export default function Team() {
  // Get hardcoded copy content
  const headingContent =
    getCopyContent("about-team-heading") || "About TaDa! Interiors";
  const paragraphContent =
    getCopyContent("about-team-paragraph-1") ||
    "At TaDa! Interiors, we've been designing inspired spaces across Ottawa for over 20 years. From colour consultations to full renovations, we offer personalized residential and commercial design services that reflect each clients unique style. With trusted trades partners and a warm, collaborative approach, we bring beautiful, functional spaces to life - seamlessly and professionally.";

  // Static ImageKit asset URLs
  const tubImageUrl =
    "https://ik.imagekit.io/crimsonstack/tada/Assets/faucet.jpg";
  const chairImageUrl =
    "https://ik.imagekit.io/crimsonstack/tada/Assets/chair.png";
  const lightImageUrl =
    "https://ik.imagekit.io/crimsonstack/tada/Assets/light.jpg";

  return (
    <section
      style={{
        backgroundColor: "var(--color-background)",
        paddingTop: "var(--spacing-3xl)",
        paddingBottom: "var(--spacing-3xl)",
        paddingLeft: "var(--spacing-lg)",
        paddingRight: "var(--spacing-lg)",
      }}
      className="md:px-8"
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
          dangerouslySetInnerHTML={{ __html: headingContent }}
        />

        {/* Mobile Layout - Alternating Images and Text */}
        <div className="block lg:hidden">
          {/* Tub Image */}
          <div
            className="flex justify-center"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <ImageFrame variant="minimal">
              <img
                src={`${tubImageUrl}?tr=w-350,h-280,q-90`}
                alt="Interior design faucet showcase"
                className="w-full h-auto"
                style={{ maxWidth: "280px", display: "block" }}
              />
            </ImageFrame>
          </div>

          {/* Main Text Block */}
          <div style={{ marginBottom: "var(--spacing-xl)" }}>
            <div
              className="leading-relaxed text-center px-4"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
              dangerouslySetInnerHTML={{ __html: paragraphContent }}
            />
          </div>

          {/* Chair Image */}
          <div
            className="flex justify-end"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <ImageFrame variant="minimal">
              <img
                src={`${chairImageUrl}?tr=w-300,h-240,q-90`}
                alt="Interior design chair showcase"
                className="w-full h-auto"
                style={{ maxWidth: "240px", display: "block" }}
              />
            </ImageFrame>
          </div>

          {/* Second Text Block */}
          <div style={{ marginBottom: "var(--spacing-xl)" }}>
            <p
              className="leading-relaxed text-center px-4"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
            >
              At TaDa! Interiors, we take pride in sourcing the finest products
              and materials the market has to offer. Backed by a trusted network
              of skilled tradespeople and a keen eye for finding the perfect
              finishing touches, we make the design process both seamless and
              enjoyable. Whether you are refreshing a room or transforming an
              entire space, we ensure the journey is as rewarding as the final
              result.
            </p>
          </div>

          {/* Light Image */}
          <div
            className="flex justify-start"
            style={{ marginBottom: "var(--spacing-xl)" }}
          >
            <ImageFrame variant="minimal">
              <img
                src={`${lightImageUrl}?tr=w-320,h-260,q-90`}
                alt="Interior design lighting showcase"
                className="w-full h-auto"
                style={{ maxWidth: "260px", display: "block" }}
              />
            </ImageFrame>
          </div>

          {/* Final Text */}
          <div>
            <p
              className="leading-relaxed text-center px-4"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
            >
              In addition to residential work, TaDa! Interiors has completed a
              wide range of commercial projects. Our portfolio includes - though
              is not limited to - restaurants, retail environments, office
              spaces and condominiums.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Alternating/Staggered Images */}
        <div className="hidden lg:block">
          <div
            className="grid grid-cols-12 gap-8"
            style={{ gap: "var(--spacing-xl)" }}
          >
            {/* Left Column - Staggered Images */}
            <div className="col-span-4">
              {/* Tub Image - Higher up */}
              <div style={{ marginBottom: "var(--spacing-2xl)" }}>
                <ImageFrame variant="minimal">
                  <img
                    src={`${tubImageUrl}?tr=w-300,h-240,q-90`}
                    alt="Interior design faucet showcase"
                    className="w-full h-auto"
                    style={{ display: "block" }}
                  />
                </ImageFrame>
              </div>

              {/* Chair Image - Lower */}
              <div style={{ marginTop: "var(--spacing-2xl)" }}>
                <ImageFrame variant="minimal">
                  <img
                    src={`${chairImageUrl}?tr=w-280,h-220,q-90`}
                    alt="Interior design chair showcase"
                    className="w-full h-auto"
                    style={{ display: "block" }}
                  />
                </ImageFrame>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div
              className="col-span-8 space-y-6"
              style={{ paddingLeft: "var(--spacing-lg)" }}
            >
              <div
                className="leading-relaxed text-lg"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-lg)",
                }}
                dangerouslySetInnerHTML={{ __html: paragraphContent }}
              />

              {/* Light Image - Inline with text */}
              <div
                className="float-right ml-6 mb-4"
                style={{
                  marginLeft: "var(--spacing-lg)",
                  marginBottom: "var(--spacing-md)",
                  maxWidth: "240px",
                }}
              >
                <ImageFrame variant="minimal">
                  <img
                    src={`${lightImageUrl}?tr=w-240,h-180,q-90`}
                    alt="Interior design lighting showcase"
                    className="w-full h-auto"
                    style={{ display: "block" }}
                  />
                </ImageFrame>
              </div>

              <p
                className="leading-relaxed text-lg"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-lg)",
                }}
              >
                At TaDa! Interiors, we take pride in sourcing the finest
                products and materials the market has to offer. Backed by a
                trusted network of skilled tradespeople and a keen eye for
                finding the perfect finishing touches, we make the design
                process both seamless and enjoyable. Whether you are refreshing
                a room or transforming an entire space, we ensure the journey is
                as rewarding as the final result.
              </p>

              <p
                className="leading-relaxed text-lg"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-lg)",
                }}
              >
                In addition to residential work, TaDa! Interiors has completed a
                wide range of commercial projects. Our portfolio includes -
                though is not limited to - restaurants, retail environments,
                office spaces and condominiums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
