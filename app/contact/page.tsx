import ContactForm from "./components/ContactForm";


export default function ContactPage() {


  return (
    <div
      className="min-h-screen"
      style={{
        paddingTop: "calc(var(--navbar-height) + var(--spacing-2xl))",
        paddingBottom: "var(--spacing-3xl)",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div
        className="container mx-auto"
        style={{
          maxWidth: "var(--container-max-width)",
          padding: "0 var(--spacing-xl)",
        }}
      >


        <div
          className="flex flex-col lg:flex-row"
          style={{
            gap: "var(--spacing-lg)",
            alignItems: "stretch",
          }}
        >
          {/* Contact Form Section */}
          <div
            className="flex flex-col"
            style={{
              gap: "var(--spacing-lg)",
              flex: "1",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ContactForm />
            </div>

            <div
              className="rounded-lg overflow-hidden shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
                flex: "1",
              }}
            >
              <img
                src="https://ik.imagekit.io/crimsonstack/tada/Assets/sink.png?tr=w-450,q-90"
                alt="Interior design sink showcase"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "center",
                }}
              />
            </div>
          </div>

          {/* Right Column - Images and Services */}
          <div
            className="flex flex-col"
            style={{
              gap: "var(--spacing-lg)",
              flex: "1",
            }}
          >
            {/* Vase Image */}
            <div
              className="rounded-lg overflow-hidden shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
                flex: "1",
              }}
            >
              <img
                src="https://ik.imagekit.io/crimsonstack/tada/Assets/bluevase.jpg?tr=w-450,h-500,q-90,c-fill,g-south"
                alt="Interior design blue vase showcase"
                className="w-full h-full object-cover"
                style={{ objectPosition: "bottom" }}
              />
            </div>

            {/* Our Services */}
            <div
              className="rounded-lg shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
                padding: "var(--spacing-xl)",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h3
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  fontSize: "var(--font-size-2xl)",
                  fontWeight: "600",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                Our Services
              </h3>

              {/* Residential Services */}
              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <h4
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-primary)",
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "600",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  Residential Services
                </h4>
                <div
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "1.6",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  At TaDa! Interiors, we take pride in sourcing the finest
                  products and materials the market has to offer. From custom
                  window treatments and unique lighting solutions to beautiful
                  furniture and distinctive accessories, we work with trusted
                  suppliers to bring you quality pieces that enhance your
                  space.
                </div>
                <div
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--font-size-base)",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  Time and expertise for residential services are billed at an
                  hourly rate of <strong>$150.00/hour plus HST</strong>
                </div>
              </div>

              {/* Commercial Services */}
              <div>
                <h4
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-primary)",
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "600",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  Commercial Services
                </h4>
                <div
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "1.6",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  TaDa! Interiors creates dynamic, high performing commercial
                  spaces that elevate the customer and employee experience. From
                  bars and restaurants to offices, condominiums and retail
                  environments, we blend functionality with distinctive style to
                  deliver spaces that work beautifully and leave a lasting
                  impression.
                </div>
                <div
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-secondary)",
                    fontSize: "var(--font-size-base)",
                    fontWeight: "600",
                    lineHeight: "1.5",
                  }}
                >
                  Time and expertise for commercial services are billed at an
                  hourly rate of <strong>$165.00/hour plus hst</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
