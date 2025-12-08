
import MaureenBio from "@/components/MaureenBio";
import JoannaBio from "@/components/JoannaBio";

import { getTeamImage } from "@/lib/image-actions";
import { imagekitConfig } from "@/lib/imagekit";
import ImageFrame from "@/components/ui/ImageFrame";

// Force dynamic rendering to ensure fresh content
export const revalidate = 0;

import { Metadata } from "next";

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Maureen and Joanna, the creative force behind TaDa! Interior Design. Learn about our passion for creating beautiful, functional spaces.",
};

export default async function AboutPage() {
  const teamImage = await getTeamImage();

  return (
    <div style={{ paddingTop: "var(--navbar-height)" }}>


      {/* Meet the Women Behind TaDa! Header Section */}
      <section
        style={{
          backgroundColor: "var(--color-background)",
          paddingTop: "var(--spacing-2xl)",
          paddingBottom: "var(--spacing-2xl)",
          paddingLeft: "var(--spacing-lg)",
          paddingRight: "var(--spacing-lg)",
        }}
        className="md:px-8"
      >
        <div
          style={{
            maxWidth: "var(--container-max-width)",
            margin: "0 auto",
          }}
        >
          {/* Mobile Layout */}
          <div className="block lg:hidden text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-6"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              Meet the creative force behind TaDa! Interiors
            </h2>

            <p
              className="leading-relaxed text-base md:text-lg mb-8 px-4"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                maxWidth: "500px",
                margin: "0 auto var(--spacing-xl) auto",
              }}
            >
              Get to know Maureen and Joanna—the heart, soul, and creative force
              behind every project.
            </p>

            {/* Team Image for Mobile */}
            {teamImage && (
              <div className="flex justify-center">
                <ImageFrame variant="minimal">
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(teamImage.imagekitUrl)}?tr=w-400,h-400,q-90`}
                    alt={teamImage.alt || "TaDa! Interiors Team"}
                    className="w-full h-auto"
                    style={{
                      maxWidth: "350px",
                      display: "block",
                    }}
                  />
                </ImageFrame>
              </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
            {/* Text Content */}
            <div className="col-span-7">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                Meet the creative force behind TaDa! Interiors
              </h2>

              <p
                className="leading-relaxed text-lg xl:text-xl"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  maxWidth: "100%",
                }}
              >
                Get to know Maureen and Joanna—the heart, soul, and creative
                force behind every project.
              </p>
            </div>

            {/* Team Image for Desktop */}
            <div className="col-span-5 flex justify-center lg:justify-end">
              {teamImage ? (
                <ImageFrame variant="minimal">
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(teamImage.imagekitUrl)}?tr=w-500,h-500,q-90`}
                    alt={teamImage.alt || "TaDa! Interiors Team"}
                    className="w-full h-auto"
                    style={{
                      maxWidth: "450px",
                      display: "block",
                    }}
                  />
                </ImageFrame>
              ) : (
                <div
                  className="flex items-center justify-center border-2 border-dashed rounded-lg"
                  style={{
                    height: "450px",
                    maxWidth: "450px",
                    width: "100%",
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-background-muted)",
                    opacity: 0.3,
                  }}
                >
                  <p
                    className="text-center px-4 text-sm"
                    style={{
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-secondary)",
                    }}
                  >
                    Set a team image in the gallery manager
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      <MaureenBio />

      {/* Filler Image 2 - Chair */}
      <div className="flex justify-center my-12 lg:my-24">
        <ImageFrame variant="minimal">
          <img
            src="https://ik.imagekit.io/crimsonstack/tada/Assets/chair.png?tr=w-500,h-600,q-90"
            alt="Interior design chair detail"
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              maxHeight: "400px",
              display: "block",
            }}
          />
        </ImageFrame>
      </div>

      <JoannaBio />

      {/* Bottom Filler Images - Light & Faucet */}
      <div className="flex flex-col md:flex-row justify-center gap-12 mt-12 mb-24 lg:mt-24 px-8 items-center">
        <ImageFrame variant="minimal">
          <img
            src="https://ik.imagekit.io/crimsonstack/tada/Assets/light.jpg?tr=w-500,h-600,q-90"
            alt="Interior design lighting detail"
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              maxHeight: "400px",
              display: "block",
            }}
          />
        </ImageFrame>

        <ImageFrame variant="minimal">
          <img
            src="https://ik.imagekit.io/crimsonstack/tada/Assets/faucet.jpg?tr=w-500,h-600,q-90"
            alt="Interior design faucet detail"
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{
              maxHeight: "400px",
              display: "block",
            }}
          />
        </ImageFrame>
      </div>
    </div>
  );
}
