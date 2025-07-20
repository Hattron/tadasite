"use client";

import { Separator } from "@/components/ui/separator";
import { GalleryManager } from "@/components/admin";
import { ImageKitProvider } from "@/components/ImageKitProvider";

export default function AdminPage() {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
        fontFamily: "var(--font-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-4xl font-bold mb-2"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-primary)",
            }}
          >
            Admin Panel
          </h1>
          <p
            className="text-lg"
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Manage site settings and customization
          </p>
          <Separator className="mt-6" />
        </div>

        <div className="w-full">
          <div className="mb-6">
            <h2
              className="text-2xl font-semibold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Gallery Management
            </h2>
            <p
              className="text-sm mt-2"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-secondary)",
              }}
            >
              Manage images and gallery folders
            </p>
          </div>

          <ImageKitProvider>
            <GalleryManager />
          </ImageKitProvider>
        </div>
      </div>
    </div>
  );
}
