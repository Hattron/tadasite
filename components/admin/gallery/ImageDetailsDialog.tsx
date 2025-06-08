'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Move } from 'lucide-react';
import { imagekitConfig } from '@/lib/imagekit';
import { ImageData, FolderData } from './types';

interface ImageDetailsDialogProps {
  selectedImage: ImageData | null;
  folders: FolderData[];
  onClose: () => void;
  onSetHero: (imageId: string) => void;
  onSetFirstImage: (imageId: string) => void;
  onSetAboutUsImage: (imageId: string) => void;
  onSetMaureenImage: (imageId: string) => void;
  onSetJoannaImage: (imageId: string) => void;
  onSetTeamImage: (imageId: string) => void;
  onSetSecondImage: (imageId: string) => void;
  onSetThirdImage: (imageId: string) => void;
  onSetResidentialCover?: (imageId: string) => void;
  onSetCommercialCover?: (imageId: string) => void;
  onSetProjectCover?: (imageId: string, projectId: string) => void;
  onMoveImage: (image: ImageData) => void;
  onDeleteImage: (imageId: string) => void;
}

export default function ImageDetailsDialog({
  selectedImage,
  folders,
  onClose,
  onSetHero,
  onSetFirstImage,
  onSetAboutUsImage,
  onSetMaureenImage,
  onSetJoannaImage,
  onSetTeamImage,
  onSetSecondImage,
  onSetThirdImage,
  onSetResidentialCover,
  onSetCommercialCover,
  onSetProjectCover,
  onMoveImage,
  onDeleteImage
}: ImageDetailsDialogProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);
  
  const getImagePath = (fullUrl: string) => {
    const path = fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
    return path;
  };

  if (!selectedImage) return null;

  const currentFolder = selectedImage.folderId ? getFolderById(selectedImage.folderId) : null;
  const isInProjectFolder = currentFolder?.folderType === 'project';
  const isInMainFolder = currentFolder?.folderType === 'main';

  return (
    <Dialog open={!!selectedImage} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto w-full sm:max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>Image Details</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex-shrink-0">
            <img
              src={`${imagekitConfig.urlEndpoint}${getImagePath(selectedImage.imagekitUrl)}?tr=w-400,q-90`}
              alt={selectedImage.alt || 'Selected image'}
              className="w-full rounded-lg max-h-[60vh] object-contain"
            />
          </div>
          <div className="space-y-4">
            <div>
              <Label>File Name</Label>
              <p className="text-sm text-muted-foreground">{selectedImage.originalName}</p>
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
            
            <div className="space-y-2">
              <Label>Set as Cover Photo</Label>
              <div className="flex flex-wrap gap-2">
                {/* Show Hero/Gallery cover options only for images in main folder */}
                {isInMainFolder && (
                  <>
                    <Button 
                      onClick={() => onSetHero(selectedImage.id)}
                      disabled={selectedImage.isHero}
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      size="sm"
                    >
                      {selectedImage.isHero ? 'Current Hero' : 'Set as Hero'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetFirstImage(selectedImage.id)}
                      disabled={selectedImage.isFirstImage}
                      style={{ backgroundColor: 'var(--color-secondary)' }}
                      size="sm"
                    >
                      {selectedImage.isFirstImage ? 'Current First Image' : 'Set as First Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetAboutUsImage(selectedImage.id)}
                      disabled={selectedImage.isAboutUsImage}
                      style={{ backgroundColor: 'var(--color-accent)' }}
                      size="sm"
                    >
                      {selectedImage.isAboutUsImage ? 'Current About Us Image' : 'Set as About Us Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetMaureenImage(selectedImage.id)}
                      disabled={selectedImage.isMaureenImage}
                      variant="outline"
                      size="sm"
                    >
                      {selectedImage.isMaureenImage ? 'Current Maureen Image' : 'Set as Maureen Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetJoannaImage(selectedImage.id)}
                      disabled={selectedImage.isJoannaImage}
                      variant="secondary"
                      size="sm"
                    >
                      {selectedImage.isJoannaImage ? 'Current Joanna Image' : 'Set as Joanna Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetTeamImage(selectedImage.id)}
                      disabled={selectedImage.isTeamImage}
                      variant="outline"
                      size="sm"
                    >
                      {selectedImage.isTeamImage ? 'Current Team Image' : 'Set as Team Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetSecondImage(selectedImage.id)}
                      disabled={selectedImage.isSecondImage}
                      variant="outline"
                      size="sm"
                    >
                      {selectedImage.isSecondImage ? 'Current Second Image' : 'Set as Second Image'}
                    </Button>
                    
                    <Button 
                      onClick={() => onSetThirdImage(selectedImage.id)}
                      disabled={selectedImage.isThirdImage}
                      variant="secondary"
                      size="sm"
                    >
                      {selectedImage.isThirdImage ? 'Current Third Image' : 'Set as Third Image'}
                    </Button>
                    
                    {onSetResidentialCover && (
                      <Button 
                        onClick={() => onSetResidentialCover(selectedImage.id)}
                        disabled={selectedImage.isResidentialCover}
                        variant="outline"
                        size="sm"
                      >
                        {selectedImage.isResidentialCover ? 'Current Residential Cover' : 'Residential Cover'}
                      </Button>
                    )}
                    
                    {onSetCommercialCover && (
                      <Button 
                        onClick={() => onSetCommercialCover(selectedImage.id)}
                        disabled={selectedImage.isCommercialCover}
                        variant="outline"
                        size="sm"
                      >
                        {selectedImage.isCommercialCover ? 'Current Commercial Cover' : 'Commercial Cover'}
                      </Button>
                    )}
                  </>
                )}
                
                {/* Show project cover option only for images in project folders */}
                {isInProjectFolder && onSetProjectCover && currentFolder && (
                  <Button 
                    onClick={() => onSetProjectCover(selectedImage.id, currentFolder.id)}
                    disabled={selectedImage.isProjectCover}
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    size="sm"
                  >
                    {selectedImage.isProjectCover ? `Current Cover for ${currentFolder.name}` : `Set as ${currentFolder.name} Cover`}
                  </Button>
                )}

                {/* If image is not in main or project folder, show a message */}
                {!isInMainFolder && !isInProjectFolder && (
                  <p className="text-sm text-muted-foreground">
                    Move this image to Main folder to set as hero/gallery cover, or to a project folder to set as project cover.
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex gap-2">
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