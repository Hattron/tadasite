'use client';

import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GalleryManager from '@/app/admin/components/GalleryManager';
import { ImageKitProvider } from '@/components/ImageKitProvider';
import StyleSettings from './components/StyleSettings';

export default function AdminPage() {
  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ color: 'var(--color-primary)' }}
          >
            Admin Panel
          </h1>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Manage site settings and customization
          </p>
          <Separator className="mt-6" />
        </div>

        <Tabs defaultValue="styles" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="styles">Style Settings</TabsTrigger>
            <TabsTrigger value="gallery">Gallery Settings</TabsTrigger>
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