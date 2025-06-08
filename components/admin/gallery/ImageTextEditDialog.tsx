'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ImageData } from './types';

interface ImageTextEditDialogProps {
  selectedImage: ImageData | null;
  imageType: 'hero' | 'first' | 'second' | 'third' | null;
  onClose: () => void;
  onUpdate: (imageId: string, title?: string, subtitle?: string) => Promise<void>;
}

export default function ImageTextEditDialog({
  selectedImage,
  imageType,
  onClose,
  onUpdate
}: ImageTextEditDialogProps) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form values whenever selectedImage or imageType changes
  useEffect(() => {
    if (!selectedImage || !imageType) {
      setTitle('');
      setSubtitle('');
      return;
    }

    switch (imageType) {
      case 'hero':
        setTitle(selectedImage.heroTitle || '');
        setSubtitle(selectedImage.heroSubtitle || '');
        break;
      case 'first':
        setTitle(selectedImage.firstImageTitle || '');
        setSubtitle(selectedImage.firstImageSubtitle || '');
        break;
      case 'second':
        setTitle(selectedImage.secondImageTitle || '');
        setSubtitle(selectedImage.secondImageSubtitle || '');
        break;
      case 'third':
        setTitle(selectedImage.thirdImageTitle || '');
        setSubtitle(selectedImage.thirdImageSubtitle || '');
        break;
    }
  }, [selectedImage, imageType]);

  // Handle dialog state change
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;

    setIsSubmitting(true);
    try {
      await onUpdate(selectedImage.id, title.trim() || undefined, subtitle.trim() || undefined);
      onClose();
    } catch (error) {
      console.error('Error updating text:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getImageTypeName = () => {
    switch (imageType) {
      case 'hero': return 'Hero Image';
      case 'first': return 'First Image';
      case 'second': return 'Second Image';
      case 'third': return 'Third Image';
      default: return 'Image';
    }
  };

  if (!selectedImage || !imageType) return null;

  return (
    <Dialog open={!!selectedImage && !!imageType} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit {getImageTypeName()} Text</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title text (optional)"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Leave empty to use default text
            </p>
          </div>

          <div>
            <Label htmlFor="subtitle">Subtitle</Label>
            <Textarea
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter subtitle text (optional)"
              rows={3}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Leave empty to use default text. Line breaks will be preserved.
            </p>
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {isSubmitting ? 'Updating...' : 'Update Text'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 