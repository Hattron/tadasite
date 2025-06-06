'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Move } from 'lucide-react';
import { imagekitConfig } from '@/lib/imagekit';

interface ImageData {
  id: string;
  imagekitUrl: string;
  fileName: string;
  originalName: string;
  alt: string | null;
  caption: string | null;
  isHero: boolean;
  folderId: string | null;
  size: number;
  width: number | null;
  height: number | null;
}

interface FolderData {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  sortOrder: number;
}

interface ImageGridProps {
  images: ImageData[];
  folders: FolderData[];
  selectedFolder: string | null;
  onImageSelect: (image: ImageData) => void;
  onMoveImage: (image: ImageData) => void;
}

export default function ImageGrid({
  images,
  folders,
  selectedFolder,
  onImageSelect,
  onMoveImage
}: ImageGridProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);
  
  const getImagePath = (fullUrl: string) => {
    const path = fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
    return path;
  };

  const filteredImages = selectedFolder 
    ? images.filter(img => img.folderId === selectedFolder)
    : images.filter(img => !img.folderId);

  return (
    <div className="lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle style={{ color: 'var(--color-secondary)' }}>
            {selectedFolder ? getFolderById(selectedFolder)?.name : 'All Images'} 
            <span className="text-sm font-normal ml-2">({filteredImages.length} images)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map(image => (
                <div 
                  key={image.id} 
                  className="relative group cursor-pointer"
                  onClick={() => onImageSelect(image)}
                >
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-200,h-200,q-80`}
                    alt={image.alt || 'Gallery image'}
                    className="w-48 h-48 object-cover rounded-lg border-2 border-transparent hover:border-blue-500 transition-colors"
                    onError={(e) => {
                      console.error('Image failed to load:', image.imagekitUrl, e);
                    }}
                  />
                  
                  {image.isHero && (
                    <Badge 
                      className="absolute top-2 left-2"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      Hero
                    </Badge>
                  )}

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