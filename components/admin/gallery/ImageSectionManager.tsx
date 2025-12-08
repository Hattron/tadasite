"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Upload, Image as ImageIcon } from "lucide-react";
import { imagekitConfig } from "@/lib/imagekit";
import {
  getHeroImage,
  getMobileHeroImage,
  getFirstImage,
  getAboutUsImage,
  getMaureenImage,
  getJoannaImage,
  getTeamImage,
  getSecondImage,
  getThirdImage,
  getResidentialCoverImage,
  getCommercialCoverImage,
} from "@/lib/image-actions";

interface ImageSectionManagerProps {
  onUploadClick: (imageType: string) => void;
  refreshKey?: number;
}

interface SectionImage {
  id: string;
  imagekitUrl: string;
  alt: string | null;
  caption: string | null;
}

interface ImageSection {
  id: string;
  title: string;
  description: string;
  image: SectionImage | null;
}

interface GroupedSections {
  homepage: ImageSection[];
  about: ImageSection[];
  gallery: ImageSection[];
}

export default function ImageSectionManager({
  onUploadClick,
  refreshKey,
}: ImageSectionManagerProps) {
  const [sections, setSections] = useState<GroupedSections>({
    homepage: [],
    about: [],
    gallery: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const hasLoadedRef = useRef(false);
  const currentRefreshKeyRef = useRef(refreshKey);

  const getImagePath = (fullUrl: string) => {
    return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
  };

  const loadSectionImages = useCallback(async () => {
    // Only load if we haven't loaded yet, or if refreshKey has actually changed
    if (hasLoadedRef.current && refreshKey === currentRefreshKeyRef.current) {
      return;
    }

    hasLoadedRef.current = true;
    currentRefreshKeyRef.current = refreshKey;

    try {
      const [
        heroImage,
        mobileHeroImage,
        firstImage,
        aboutUsImage,
        maureeenImage,
        joannaImage,
        teamImage,
        secondImage,
        thirdImage,
        residentialCoverImage,
        commercialCoverImage,
      ] = await Promise.all([
        getHeroImage(),
        getMobileHeroImage(),
        getFirstImage(),
        getAboutUsImage(),
        getMaureenImage(),
        getJoannaImage(),
        getTeamImage(),
        getSecondImage(),
        getThirdImage(),
        getResidentialCoverImage(),
        getCommercialCoverImage(),
      ]);

      // Group sections by page in order of appearance
      const imageSections = {
        homepage: [
          {
            id: "hero",
            title: "Hero Image",
            description:
              "Main banner image displayed at the top of the homepage",
            image: heroImage
              ? {
                id: heroImage.id,
                imagekitUrl: heroImage.imagekitUrl,
                alt: heroImage.alt,
                caption: heroImage.caption,
              }
              : null,
          },
          {
            id: "mobileHero",
            title: "Mobile Hero Image",
            description: "Hero image displayed on mobile devices (optional)",
            image: mobileHeroImage
              ? {
                id: mobileHeroImage.id,
                imagekitUrl: mobileHeroImage.imagekitUrl,
                alt: mobileHeroImage.alt,
                caption: mobileHeroImage.caption,
              }
              : null,
          },
          {
            id: "first",
            title: "First Parallax Image",
            description: "First parallax section image on homepage",
            image: firstImage
              ? {
                id: firstImage.id,
                imagekitUrl: firstImage.imagekitUrl,
                alt: firstImage.alt,
                caption: firstImage.caption,
              }
              : null,
          },
          {
            id: "about",
            title: "About Us Image",
            description: "Image displayed in the About Us section on homepage",
            image: aboutUsImage
              ? {
                id: aboutUsImage.id,
                imagekitUrl: aboutUsImage.imagekitUrl,
                alt: aboutUsImage.alt,
                caption: aboutUsImage.caption,
              }
              : null,
          },
          {
            id: "second",
            title: "Second Parallax Image",
            description: "Second parallax section image on homepage",
            image: secondImage
              ? {
                id: secondImage.id,
                imagekitUrl: secondImage.imagekitUrl,
                alt: secondImage.alt,
                caption: secondImage.caption,
              }
              : null,
          },
          {
            id: "third",
            title: "Third Parallax Image",
            description: "Third parallax section image on homepage",
            image: thirdImage
              ? {
                id: thirdImage.id,
                imagekitUrl: thirdImage.imagekitUrl,
                alt: thirdImage.alt,
                caption: thirdImage.caption,
              }
              : null,
          },
        ],
        about: [
          {
            id: "maureen",
            title: "Maureen Profile Image",
            description: "Profile image for Maureen on the About/Team page",
            image: maureeenImage
              ? {
                id: maureeenImage.id,
                imagekitUrl: maureeenImage.imagekitUrl,
                alt: maureeenImage.alt,
                caption: maureeenImage.caption,
              }
              : null,
          },
          {
            id: "joanna",
            title: "Joanna Profile Image",
            description: "Profile image for Joanna on the About/Team page",
            image: joannaImage
              ? {
                id: joannaImage.id,
                imagekitUrl: joannaImage.imagekitUrl,
                alt: joannaImage.alt,
                caption: joannaImage.caption,
              }
              : null,
          },
          {
            id: "team",
            title: "Team Section Image",
            description: "Main team section image on the About page",
            image: teamImage
              ? {
                id: teamImage.id,
                imagekitUrl: teamImage.imagekitUrl,
                alt: teamImage.alt,
                caption: teamImage.caption,
              }
              : null,
          },
        ],
        gallery: [
          {
            id: "residential",
            title: "Residential Cover Image",
            description: "Cover image for the residential gallery section",
            image: residentialCoverImage
              ? {
                id: residentialCoverImage.id,
                imagekitUrl: residentialCoverImage.imagekitUrl,
                alt: residentialCoverImage.alt,
                caption: residentialCoverImage.caption,
              }
              : null,
          },
          {
            id: "commercial",
            title: "Commercial Cover Image",
            description: "Cover image for the commercial gallery section",
            image: commercialCoverImage
              ? {
                id: commercialCoverImage.id,
                imagekitUrl: commercialCoverImage.imagekitUrl,
                alt: commercialCoverImage.alt,
                caption: commercialCoverImage.caption,
              }
              : null,
          },
        ],
      };

      setSections(imageSections);
    } catch (error) {
      console.error("Failed to load section images:", error);
    } finally {
      setIsLoading(false);
    }
  }, [refreshKey]);

  useEffect(() => {
    loadSectionImages();
  }, [loadSectionImages]);

  if (isLoading) {
    return <div className="p-8 text-center">Loading sections...</div>;
  }

  const getTotalSections = () => {
    return (
      sections.homepage.length + sections.about.length + sections.gallery.length
    );
  };

  const getConfiguredSections = () => {
    return [
      ...sections.homepage,
      ...sections.about,
      ...sections.gallery,
    ].filter((s) => s.image).length;
  };

  const renderSection = (section: ImageSection) => (
    <div key={section.id} className="border rounded-lg p-4 relative">
      {/* Top right - Action Buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button
          onClick={() => onUploadClick(section.id)}
          variant={section.image ? "outline" : "default"}
          className="flex items-center gap-2"
          style={
            !section.image ? { backgroundColor: "var(--color-primary)" } : {}
          }
        >
          <Upload className="h-4 w-4" />
          {section.image ? "Change Image" : "Set Image"}
        </Button>
      </div>

      <div className="flex gap-6">
        {/* Left side - Image */}
        <div className="w-40 h-32 flex-shrink-0">
          {section.image ? (
            <img
              src={`${imagekitConfig.urlEndpoint}${getImagePath(section.image.imagekitUrl)}?tr=w-300,h-200,q-80`}
              alt={section.image.alt || section.title}
              className="w-full h-full object-cover rounded border"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 rounded border flex items-center justify-center">
              <ImageIcon className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>

        {/* Center - Text Content */}
        <div className="flex-1 flex flex-col justify-center pr-32">
          <h3
            className="font-semibold text-lg mb-2"
            style={{ color: "var(--color-primary)" }}
          >
            {section.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{section.description}</p>

          {/* Image metadata */}
          {section.image && section.image.alt && (
            <div className="space-y-1">
              <p className="text-xs text-gray-500">Alt: {section.image.alt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:col-span-3">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: "var(--color-secondary)" }}>
            Site Image Sections
            <span className="text-sm font-normal ml-2">
              ({getConfiguredSections()} of {getTotalSections()} configured)
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-8">
              {/* Homepage Section */}
              <div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Homepage
                  </h2>
                  <p className="text-sm text-gray-500">
                    Images displayed on the main homepage in order of appearance
                  </p>
                </div>
                <div className="space-y-4">
                  {sections.homepage.map(renderSection)}
                </div>
              </div>

              {/* Section Break */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* About/Team Section */}
              <div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    About & Team Page
                  </h2>
                  <p className="text-sm text-gray-500">
                    Profile and team images displayed on the About page
                  </p>
                </div>
                <div className="space-y-4">
                  {sections.about.map(renderSection)}
                </div>
              </div>

              {/* Section Break */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Gallery Section */}
              <div>
                <div className="mb-4">
                  <h2
                    className="text-xl font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Gallery Pages
                  </h2>
                  <p className="text-sm text-gray-500">
                    Cover images for gallery category pages
                  </p>
                </div>
                <div className="space-y-4">
                  {sections.gallery.map(renderSection)}
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
