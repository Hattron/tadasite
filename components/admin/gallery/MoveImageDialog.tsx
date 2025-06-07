'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageData, FolderData } from './types';

interface MoveImageDialogProps {
  movingImage: ImageData | null;
  folders: FolderData[];
  isOpen: boolean;
  onClose: () => void;
  onMoveImage: (imageId: string, folderId: string | null) => void;
}

export default function MoveImageDialog({
  movingImage,
  folders,
  isOpen,
  onClose,
  onMoveImage
}: MoveImageDialogProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!movingImage) return;

    const formData = new FormData(e.currentTarget);
    const targetFolderId = formData.get('targetFolder') as string;
    
    onMoveImage(movingImage.id, targetFolderId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Move Image</DialogTitle>
        </DialogHeader>
        {movingImage && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Moving: {movingImage.originalName}</Label>
            </div>
            <div>
              <Label htmlFor="targetFolder">Move to Folder</Label>
              <Select name="targetFolder" defaultValue={movingImage.folderId || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Select destination folder" />
                </SelectTrigger>
                <SelectContent>
                  {folders
                    .filter(folder => folder.folderType === 'project' || folder.folderType === 'main')
                    .map(folder => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.parentId ? `${getFolderById(folder.parentId)?.name} / ${folder.name}` : folder.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Move Image</Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
} 