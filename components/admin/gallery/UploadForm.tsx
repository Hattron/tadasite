'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, AlertTriangle } from 'lucide-react';
import { imagekitConfig } from '@/lib/imagekit';
import { FolderData } from './types';
import {
  setHeroImage,
  setFirstImage,
  setAboutUsImage,
  setMaureenImage,
  setJoannaImage,
  setTeamImage,
  setSecondImage,
  setThirdImage,
  setResidentialCoverImage,
  setCommercialCoverImage,
  setMobileHeroImage,
} from '@/lib/image-actions';

interface UploadFormProps {
  selectedFolder: string | null;
  folders: FolderData[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onUploadComplete: () => void;
  sectionType?: string | null;
}

export default function UploadForm({
  selectedFolder,
  folders,
  isOpen,
  onOpenChange,
  onUploadComplete,
  sectionType
}: UploadFormProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showFolderAlert, setShowFolderAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const getFolderById = (id: string) => folders.find(f => f.id === id);

  const getSectionTitle = (type: string) => {
    const SECTION_TITLES: Record<string, string> = {
      hero: 'Hero Image',
      mobileHero: 'Mobile Hero Image',
      first: 'First Image',
      about: 'About Us Image',
      maureen: 'Maureen Image',
      joanna: 'Joanna Image',
      team: 'Team Image',
      second: 'Second Image',
      third: 'Third Image',
      residential: 'Residential Cover',
      commercial: 'Commercial Cover'
    };
    return SECTION_TITLES[type] || 'Image';
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData(e.currentTarget);
      const file = formData.get('file') as File;
      const alt = formData.get('alt') as string;
      const caption = formData.get('caption') as string;

      if (!file) {
        setErrorMessage('Please select a file');
        setShowErrorAlert(true);
        return;
      }

      // Validate folder selection
      if (selectedFolder) {
        const folder = folders.find(f => f.id === selectedFolder);
        if (folder && (folder.folderType === 'residential' || folder.folderType === 'commercial')) {
          setShowFolderAlert(true);
          return;
        }
      }

      // Get authentication parameters from server
      const authResponse = await fetch('/api/imagekit-auth');
      const authData = await authResponse.json();

      // Prepare upload data
      const uploadData = new FormData();
      uploadData.append('file', file);
      uploadData.append('fileName', file.name);
      uploadData.append('folder', selectedFolder ? `/tada/folder_${selectedFolder}` : '/tada');
      uploadData.append('useUniqueFileName', 'true');
      uploadData.append('publicKey', imagekitConfig.publicKey);
      uploadData.append('signature', authData.signature);
      uploadData.append('expire', authData.expire.toString());
      uploadData.append('token', authData.token);

      // Upload directly to ImageKit
      setUploadProgress(10);
      const uploadResponse = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        console.error('ImageKit upload error:', errorData);
        throw new Error(errorData.message || 'Upload failed');
      }

      const uploadResult = await uploadResponse.json();
      setUploadProgress(70);

      // Save metadata to database via server action
      const metadataResponse = await fetch('/api/save-image-metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          folderId: selectedFolder || null,
          imagekitFileId: uploadResult.fileId,
          imagekitUrl: uploadResult.url,
          fileName: uploadResult.name,
          originalName: file.name,
          size: file.size,
          width: uploadResult.width || null,
          height: uploadResult.height || null,
          mimeType: file.type,
          alt: alt || null,
          caption: caption || null,
        }),
      });

      if (!metadataResponse.ok) {
        // If metadata save fails, we should try to delete the uploaded file
        console.error('Failed to save metadata');
        throw new Error('Failed to save image metadata');
      }

      const { imageId } = await metadataResponse.json();
      setUploadProgress(90);

      // If this is a section upload, set the appropriate section image
      if (sectionType) {
        switch (sectionType) {
          case 'hero':
            await setHeroImage(imageId);
            break;
          case 'mobileHero':
            await setMobileHeroImage(imageId);
            break;
          case 'first':
            await setFirstImage(imageId);
            break;
          case 'about':
            await setAboutUsImage(imageId);
            break;
          case 'maureen':
            await setMaureenImage(imageId);
            break;
          case 'joanna':
            await setJoannaImage(imageId);
            break;
          case 'team':
            await setTeamImage(imageId);
            break;
          case 'second':
            await setSecondImage(imageId);
            break;
          case 'third':
            await setThirdImage(imageId);
            break;
          case 'residential':
            await setResidentialCoverImage(imageId);
            break;
          case 'commercial':
            await setCommercialCoverImage(imageId);
            break;
        }
      }

      setUploadProgress(100);

      // Reset form and close dialog
      (e.target as HTMLFormElement).reset();
      onUploadComplete();
      onOpenChange(false);

    } catch (error) {
      console.error('Upload failed:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Upload failed');
      setShowErrorAlert(true);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle style={{ color: 'var(--color-primary)' }}>
              <Upload className="h-5 w-5 inline mr-2" />
              {sectionType ? `Upload ${getSectionTitle(sectionType)}` : 'Upload Images'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Select Image</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="image/*"
                  required
                  disabled={isUploading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="alt">Alt Text</Label>
                <Input
                  id="alt"
                  name="alt"
                  placeholder="Describe the image"
                  disabled={isUploading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="caption">Caption</Label>
                <Input
                  id="caption"
                  name="caption"
                  placeholder="Optional caption"
                  disabled={isUploading}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload to Folder</Label>
                <div className="text-sm text-gray-600">
                  {sectionType ? (
                    <>Setting as: <strong>{getSectionTitle(sectionType)}</strong></>
                  ) : selectedFolder ? (
                    <>Uploading to: <strong>{getFolderById(selectedFolder)?.name}</strong></>
                  ) : (
                    'Uploading to: <strong>All Images</strong> (no folder)'
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isUploading}
                className="w-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isUploading ? `Uploading... ${uploadProgress}%` : 'Upload Image'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showFolderAlert} onOpenChange={setShowFolderAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Cannot Upload to Section Folder
            </AlertDialogTitle>
            <AlertDialogDescription>
              Images cannot be uploaded directly to Residential or Commercial section folders.
              Please select a project folder within the section, or create a new project first.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowFolderAlert(false)}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showErrorAlert} onOpenChange={setShowErrorAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Upload Error
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowErrorAlert(false)}>
              Try Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
} 