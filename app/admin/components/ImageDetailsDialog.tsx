'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
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

interface ImageDetailsDialogProps {
  selectedImage: ImageData | null;
  folders: FolderData[];
  onClose: () => void;
  onSetHero: (imageId: string) => void;
  onMoveImage: (image: ImageData) => void;
  onDeleteImage: (imageId: string) => void;
}

export default function ImageDetailsDialog({
  selectedImage,
  folders,
  onClose,
  onSetHero,
  onMoveImage,
  onDeleteImage
}: ImageDetailsDialogProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);
  
  const getImagePath = (fullUrl: string) => {
    const path = fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
    return path;
  };

  if (!selectedImage) return null;

  return (
    <Dialog open={!!selectedImage} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Image Details</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={`${imagekitConfig.urlEndpoint}${getImagePath(selectedImage.imagekitUrl)}?tr=w-400,q-90`}
              alt={selectedImage.alt || 'Selected image'}
              className="w-full rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div>
              <Label>File Name</Label>
              <p className="text-sm text-muted-foreground">{selectedImage.fileName}</p>
            </div>
            <div>
              <Label>Folder</Label>
              <p className="text-sm text-muted-foreground">
                {selectedImage.folderId 
                  ? getFolderById(selectedImage.folderId)?.name || 'Unknown' 
                  : 'All Images (No Folder)'
                }
              </p>
            </div>
            <div>
              <Label>Size</Label>
              <p className="text-sm text-muted-foreground">
                {(selectedImage.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            {selectedImage.width && selectedImage.height && (
              <div>
                <Label>Dimensions</Label>
                <p className="text-sm text-muted-foreground">
                  {selectedImage.width} × {selectedImage.height}
                </p>
              </div>
            )}
            <div>
              <Label>Alt Text</Label>
              <p className="text-sm text-muted-foreground">
                {selectedImage.alt || 'No alt text'}
              </p>
            </div>
            <div>
              <Label>Caption</Label>
              <p className="text-sm text-muted-foreground">
                {selectedImage.caption || 'No caption'}
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={() => onSetHero(selectedImage.id)}
                disabled={selectedImage.isHero}
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {selectedImage.isHero ? 'Current Hero' : 'Set as Hero'}
              </Button>
              <Button 
                variant="outline"
                onClick={() => onMoveImage(selectedImage)}
              >
                <Move className="h-4 w-4 mr-2" />
                Move
              </Button>
              <Button 
                variant="destructive"
                onClick={() => onDeleteImage(selectedImage.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 