'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

interface MoveImageDialogProps {
  movingImage: ImageData | null;
  folders: FolderData[];
  isOpen: boolean;
  onClose: () => void;
  onMoveImage: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function MoveImageDialog({
  movingImage,
  folders,
  isOpen,
  onClose,
  onMoveImage
}: MoveImageDialogProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Move Image</DialogTitle>
        </DialogHeader>
        {movingImage && (
          <form onSubmit={onMoveImage} className="space-y-4">
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
                  <SelectItem value="">All Images (No Folder)</SelectItem>
                  {folders.map(folder => (
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