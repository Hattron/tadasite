"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imagekitConfig } from "@/lib/imagekit";

// Hook for swipe gestures
const useSwipeable = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

interface Image {
  id: string;
  imagekitUrl: string;
  alt?: string | null;
  caption?: string | null;
  isProjectCover?: boolean | null;
}

interface InteractiveImageGalleryProps {
  images: Image[];
  projectName: string;
}

export default function InteractiveImageGallery({
  images,
  projectName,
}: InteractiveImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Map<number, boolean>>(
    new Map(),
  );
  const [preloadProgress, setPreloadProgress] = useState(0);

  const preloadImage = useCallback(
    (index: number) => {
      if (preloadedImages.has(index)) return;

      const img = new Image();
      img.onload = () => {
        setPreloadedImages((prev) => {
          const newMap = new Map(prev).set(index, true);
          setPreloadProgress(newMap.size);
          return newMap;
        });
      };
      img.src = `${imagekitConfig.urlEndpoint}${getImagePath(images[index].imagekitUrl)}?tr=w-1920,q-95`;
    },
    [images, preloadedImages],
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsLoading(!preloadedImages.get(index));
    document.body.style.overflow = "hidden";

    // Preload adjacent images
    if (index > 0) preloadImage(index - 1);
    if (index < images.length - 1) preloadImage(index + 1);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setIsLoading(false);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
      setIsLoading(!preloadedImages.get(newIndex));

      // Preload next adjacent image
      if (newIndex > 0) preloadImage(newIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
      setIsLoading(!preloadedImages.get(newIndex));

      // Preload next adjacent image
      if (newIndex < images.length - 1) preloadImage(newIndex + 1);
    }
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable(goToNext, goToPrevious);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (event.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    },
    [selectedImageIndex],
  );

  // Preload first few images on component mount
  useEffect(() => {
    const preloadInitialImages = () => {
      const imagesToPreload = Math.min(5, images.length);
      for (let i = 0; i < imagesToPreload; i++) {
        preloadImage(i);
      }
    };

    if (images.length > 0) {
      setPreloadProgress(0);
      preloadInitialImages();
    }
  }, [images, preloadImage]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedImageIndex, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all group-hover:shadow-xl group-hover:scale-105">
              <img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-600,h-450,q-85`}
                alt={image.alt || `${projectName} - Image ${index + 1}`}
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
            </div>

            {/* Image Caption */}
            {image.caption && (
              <p
                className="mt-3 text-sm text-center"
                style={{ color: "var(--color-text-muted)" }}
              >
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-60 p-2 rounded-full transition-all hover:bg-white hover:bg-opacity-20"
              style={{ color: "white" }}
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-3 rounded-full transition-all hover:bg-white hover:bg-opacity-20"
                style={{ color: "white" }}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-3 rounded-full transition-all hover:bg-white hover:bg-opacity-20"
                style={{ color: "white" }}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            )}

            {/* Image Container */}
            <div
              className="relative max-w-full max-h-full flex items-center justify-center p-4 sm:p-8"
              onClick={(e) => e.stopPropagation()}
              {...swipeHandlers}
            >
              <motion.div
                key={selectedImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Loading Indicator */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                      <span className="text-white text-sm">
                        Loading image...
                      </span>
                    </div>
                  </div>
                )}

                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(selectedImage.imagekitUrl)}?tr=w-1920,q-95`}
                  alt={
                    selectedImage.alt ||
                    `${projectName} - Image ${selectedImageIndex + 1}`
                  }
                  className="max-w-full max-h-[85vh] object-contain"
                  onLoad={() => {
                    setIsLoading(false);
                    setPreloadedImages((prev) =>
                      new Map(prev).set(selectedImageIndex!, true),
                    );
                  }}
                  style={{
                    opacity: isLoading ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                />

                {/* Image Caption in Modal */}
                {selectedImage.caption && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4 text-center"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.8))",
                      color: "white",
                    }}
                  >
                    <p className="text-sm sm:text-base">
                      {selectedImage.caption}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-60">
              <div
                className="px-4 py-2 rounded-full text-white text-sm"
                style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
              >
                {selectedImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Touch/Swipe Instructions for Mobile */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-60 sm:hidden">
              <div
                className="px-3 py-1 rounded-full text-white text-xs opacity-75"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              >
                Swipe left/right to navigate
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
