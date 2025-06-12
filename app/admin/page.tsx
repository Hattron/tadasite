'use client';

import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GalleryManager, StyleSettings } from '@/components/admin';
import { ImageKitProvider } from '@/components/ImageKitProvider';

export default function AdminPage() {
  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ 
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Admin Panel
          </h1>
          <p 
            className="text-lg"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Manage site settings and customization
          </p>
          <Separator className="mt-6" />
        </div>

        <Tabs defaultValue="styles" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger 
              value="styles"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Style Settings
            </TabsTrigger>
            <TabsTrigger 
              value="gallery"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Gallery Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="styles" className="mt-6">
            <StyleSettings />
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <ImageKitProvider>
              <GalleryManager />
            </ImageKitProvider>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 