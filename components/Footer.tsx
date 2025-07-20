import Link from "next/link";
import { imagekitConfig } from "@/lib/imagekit";

export default function Footer() {
  return (
    <footer
      className="py-6"
      style={{
        backgroundColor: "var(--color-primary, #485775)",
        color: "var(--color-background, #fafafa)",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: "var(--spacing-lg, 1rem)" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* Company Logo */}
          <img
            src={`${imagekitConfig.urlEndpoint}/tada/Assets/logo.png?tr=h-320,q-90`}
            alt="TaDa! Interior Design"
            className="h-64 flex-shrink-0"
          />

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold"
              style={{
                marginBottom: "var(--spacing-sm, 0.5rem)",
                color: "var(--color-background, #fafafa)",
              }}
            >
              Quick Links
            </h4>
            <div
              className="grid grid-cols-2 gap-x-8"
              style={{ gap: "var(--spacing-sm, 0.5rem)" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-sm, 0.5rem)",
                }}
              >
                <Link
                  href="/"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Services
                </Link>
                <Link
                  href="/gallery"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Contact
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-sm, 0.5rem)",
                }}
              >
                <Link
                  href="/gallery/residential"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Residential Projects
                </Link>
                <Link
                  href="/gallery/commercial"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Commercial Projects
                </Link>
                <Link
                  href="/admin"
                  className="block transition-colors hover:text-white"
                  style={{
                    color: "var(--color-footer-text, #dcdfe5)",
                    textDecoration: "none",
                  }}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="text-center"
          style={{
            borderTop: `1px solid var(--color-footer-text, #dcdfe5)`,
            marginTop: "var(--spacing-md, 1rem)",
            paddingTop: "var(--spacing-md, 1rem)",
          }}
        >
          <p style={{ color: "var(--color-footer-text, #dcdfe5)" }}>
            © {new Date().getFullYear()} TaDa! Interior Design. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
