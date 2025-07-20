import ContactForm from "./components/ContactForm";
import { getCopyContents } from "@/lib/hardcoded-copy";

export default function ContactPage() {
  // Get hardcoded copy content
  const copyContent = getCopyContents([
    "contact-business-hours-title",
    "contact-business-hours-schedule",
    "contact-business-hours-closure",
    "contact-services-title",
    "contact-services-residential-title",
    "contact-services-residential-description",
    "contact-services-residential-pricing",
    "contact-services-commercial-title",
    "contact-services-commercial-description",
    "contact-services-commercial-pricing",
  ]);
  return (
    <div
      className="min-h-screen py-16"
      style={{
        paddingTop: "calc(var(--navbar-height) + var(--spacing-md))",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-primary)",
        paddingBottom: "calc(var(--spacing-xl) * 4)",
      }}
    >
      <div
        className="container mx-auto"
        style={{ padding: "var(--spacing-md)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>

            {/* Apples Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div
                  className="rounded-lg overflow-hidden shadow-sm"
                  style={{
                    backgroundColor: "var(--color-background)",
                    border: `1px solid var(--color-text-muted)`,
                  }}
                >
                  <img
                    src="https://ik.imagekit.io/crimsonstack/tada/Assets/vase.jpg?tr=w-600,h-400,q-90,c-fill"
                    alt="Interior design apples showcase"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div
              className="rounded-lg p-6 shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
                padding: "var(--spacing-lg)",
              }}
            >
              <h3
                className="text-xl font-medium mb-4"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    copyContent["contact-business-hours-title"] ||
                    "Business Hours",
                }}
              />
              <div className="space-y-2" style={{ color: "var(--color-text)" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-business-hours-schedule"] ||
                      "Office hours are <strong>Monday to Friday 9:00 - 5:00pm</strong>.",
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-business-hours-closure"] ||
                      "We are <strong>closed on weekends and holidays</strong>.",
                  }}
                />
              </div>
            </div>

            {/* Vase Image */}
            <div
              className="rounded-lg overflow-hidden shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
              }}
            >
              <img
                src="https://ik.imagekit.io/crimsonstack/tada/Assets/apples.jpg?tr=w-600,h-300,q-90,c-fill"
                alt="Interior design vase showcase"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Our Services */}
            <div
              className="rounded-lg p-6 shadow-sm"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
                padding: "var(--spacing-lg)",
              }}
            >
              <h3
                className="text-xl font-medium mb-4"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    copyContent["contact-services-title"] || "Our Services",
                }}
              />

              {/* Residential Services */}
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <h4
                  className="text-lg font-medium mb-3"
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-primary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-residential-title"] ||
                      "Residential Services",
                  }}
                />
                <div
                  className="mb-4 leading-relaxed"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-secondary)",
                    marginBottom: "var(--spacing-md)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-residential-description"] ||
                      "At TaDa! Interiors, we take pride in sourcing the finest products and materials the market has to offer.",
                  }}
                />
                <div
                  className="text-sm"
                  style={{
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-secondary)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-residential-pricing"] ||
                      "Time and expertise for residential services are billed at an hourly rate of <strong>$150.00/hour plus HST</strong>",
                  }}
                />
              </div>

              {/* Commercial Services */}
              <div>
                <h4
                  className="text-lg font-medium mb-3"
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-primary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-commercial-title"] ||
                      "Commercial Services",
                  }}
                />
                <div
                  className="mb-4 leading-relaxed"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-secondary)",
                    marginBottom: "var(--spacing-md)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-commercial-description"] ||
                      "In addition to residential work, TaDa! Interiors has completed a wide range of commercial projects.",
                  }}
                />
                <div
                  className="text-sm"
                  style={{
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-secondary)",
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      copyContent["contact-services-commercial-pricing"] ||
                      "Time and expertise for commercial services are billed at an hourly rate of <strong>$165.00/hour plus hst</strong>",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
