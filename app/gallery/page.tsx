import {
  getResidentialCoverImage,
  getCommercialCoverImage,
} from "@/lib/image-actions";
import { imagekitConfig } from "@/lib/imagekit";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Projects",
  description:
    "View our portfolio of recent interior design projects, showcasing our residential and commercial work.",
};

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default async function GalleryPage() {
  const [residentialCover, commercialCover] = await Promise.all([
    getResidentialCoverImage(),
    getCommercialCoverImage(),
  ]);

  return (
    <div
      className="min-h-screen py-20 px-8"
      style={{
        paddingTop: "calc(var(--navbar-height) + var(--spacing-md))",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-6"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-primary)",
            }}
          >
            Recent Projects
          </h1>

          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div
              className="w-16 h-0.5"
              style={{ backgroundColor: "var(--color-secondary)" }}
            ></div>
          </div>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Explore our collection of thoughtfully designed spaces that blend
            functionality with beauty
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Residential Section */}
          <div className="group">
            <Link href="/gallery/residential" className="block">
              {residentialCover ? (
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src={`${imagekitConfig.urlEndpoint}${getImagePath(residentialCover.imagekitUrl)}?tr=w-700,h-500,q-90`}
                      alt={residentialCover.alt || "Residential Design"}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text below image */}
                  <div className="text-center">
                    <h2
                      className="text-2xl font-light mb-2"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-primary)",
                      }}
                    >
                      Residential
                    </h2>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-96 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    opacity: 0.1,
                  }}
                >
                  <p
                    className="text-center"
                    style={{ color: "var(--color-text)" }}
                  >
                    Set a residential cover image in the gallery manager
                  </p>
                </div>
              )}
            </Link>
          </div>

          {/* Commercial Section */}
          <div className="group">
            <Link href="/gallery/commercial" className="block">
              {commercialCover ? (
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <img
                      src={`${imagekitConfig.urlEndpoint}${getImagePath(commercialCover.imagekitUrl)}?tr=w-700,h-500,q-90`}
                      alt={commercialCover.alt || "Commercial Design"}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text below image */}
                  <div className="text-center">
                    <h2
                      className="text-2xl font-light mb-2"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-primary)",
                      }}
                    >
                      Commercial
                    </h2>
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-96 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    opacity: 0.1,
                  }}
                >
                  <p
                    className="text-center"
                    style={{ color: "var(--color-text)" }}
                  >
                    Set a commercial cover image in the gallery manager
                  </p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
