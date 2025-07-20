"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Move, Upload, Info } from "lucide-react";
import { imagekitConfig } from "@/lib/imagekit";
import { ImageData, FolderData } from "./types";
import ImageSectionManager from "./ImageSectionManager";

interface ImageGridProps {
  images: ImageData[];
  folders: FolderData[];
  selectedFolder: string | null;
  onImageSelect: (image: ImageData) => void;
  onMoveImage: (image: ImageData) => void;
  onUploadClick: () => void;
  onSectionUploadClick?: (imageType: string) => void;
  refreshKey?: number;
}

export default function ImageGrid({
  images,
  folders,
  selectedFolder,
  onImageSelect,
  onMoveImage,
  onUploadClick,
  onSectionUploadClick,
  refreshKey,
}: ImageGridProps) {
  const getFolderById = (id: string) => folders.find((f) => f.id === id);

  const getImagePath = (fullUrl: string) => {
    const path = fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
    return path;
  };

  const filteredImages = selectedFolder
    ? images.filter((img) => img.folderId === selectedFolder)
    : images.filter((img) => !img.folderId);

  const selectedFolderData = selectedFolder
    ? getFolderById(selectedFolder)
    : null;

  // Show specialized section manager for main folder
  if (selectedFolderData?.folderType === "main") {
    return (
      <ImageSectionManager
        onUploadClick={onSectionUploadClick || (() => {})}
        refreshKey={refreshKey}
      />
    );
  }

  // Show info message for residential and commercial folders
  if (
    selectedFolderData?.folderType === "residential" ||
    selectedFolderData?.folderType === "commercial"
  ) {
    return (
      <div className="lg:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle style={{ color: "var(--color-secondary)" }}>
              {selectedFolderData.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-8 text-center">
              <Info className="h-12 w-12 text-blue-500 flex-shrink-0" />
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Images cannot be directly uploaded to this folder
                </h3>
                <p className="text-gray-600">
                  {selectedFolderData.folderType === "residential"
                    ? "Residential images should be uploaded to specific project folders within this section."
                    : "Commercial images should be uploaded to specific project folders within this section."}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Select a project folder from the left panel to upload images.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Default grid view for project folders and other types
  return (
    <div className="lg:col-span-3">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle style={{ color: "var(--color-secondary)" }}>
              {selectedFolder
                ? getFolderById(selectedFolder)?.name
                : "All Images"}
              <span className="text-sm font-normal ml-2">
                ({filteredImages.length} images)
              </span>
            </CardTitle>
            <Button
              onClick={onUploadClick}
              className="flex items-center gap-2"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <Upload className="h-4 w-4" />
              Upload Images
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer"
                  onClick={() => onImageSelect(image)}
                >
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-200,h-200,q-80`}
                    alt={image.alt || "Gallery image"}
                    className="w-48 h-48 object-cover rounded-lg border-2 border-transparent hover:border-blue-500 transition-colors"
                    onError={(e) => {
                      console.error(
                        "Image failed to load:",
                        image.imagekitUrl,
                        e,
                      );
                    }}
                  />

                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {image.isHero && (
                      <Badge
                        className="text-xs"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      >
                        Hero
                      </Badge>
                    )}
                    {image.isFirstImage && (
                      <Badge
                        className="text-xs"
                        style={{ backgroundColor: "var(--color-secondary)" }}
                      >
                        First Image
                      </Badge>
                    )}
                    {image.isAboutUsImage && (
                      <Badge
                        className="text-xs"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      >
                        About Us
                      </Badge>
                    )}
                    {image.isSecondImage && (
                      <Badge className="text-xs" variant="outline">
                        Second Image
                      </Badge>
                    )}
                    {image.isThirdImage && (
                      <Badge className="text-xs" variant="secondary">
                        Third Image
                      </Badge>
                    )}
                    {image.isResidentialCover && (
                      <Badge className="text-xs" variant="secondary">
                        Residential
                      </Badge>
                    )}
                    {image.isCommercialCover && (
                      <Badge className="text-xs" variant="secondary">
                        Commercial
                      </Badge>
                    )}
                    {image.isProjectCover && (
                      <Badge className="text-xs" variant="outline">
                        Project Cover
                      </Badge>
                    )}
                  </div>

                  {/* Move button */}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveImage(image);
                    }}
                  >
                    <Move className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
