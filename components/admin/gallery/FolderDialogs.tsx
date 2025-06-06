'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface FolderData {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  sortOrder: number;
}

interface FolderDialogsProps {
  folders: FolderData[];
  isCreateFolderOpen: boolean;
  isEditFolderOpen: boolean;
  editingFolder: FolderData | null;
  onCreateFolderOpenChange: (open: boolean) => void;
  onEditFolderOpenChange: (open: boolean) => void;
  onCreateFolder: (e: React.FormEvent<HTMLFormElement>) => void;
  onEditFolder: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FolderDialogs({
  folders,
  isCreateFolderOpen,
  isEditFolderOpen,
  editingFolder,
  onCreateFolderOpenChange,
  onEditFolderOpenChange,
  onCreateFolder,
  onEditFolder
}: FolderDialogsProps) {
  return (
    <>
      {/* Create Folder Dialog */}
      <Dialog open={isCreateFolderOpen} onOpenChange={onCreateFolderOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
          </DialogHeader>
          <form onSubmit={onCreateFolder} className="space-y-4">
            <div>
              <Label htmlFor="name">Folder Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
            <div>
              <Label htmlFor="parentId">Parent Folder</Label>
              <Select name="parentId">
                <SelectTrigger>
                  <SelectValue placeholder="Select parent (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">No Parent (Root Level)</SelectItem>
                  {folders.filter(f => f.name === 'Retail' || f.name === 'Commercial').map(folder => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Create Folder</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Folder Dialog */}
      <Dialog open={isEditFolderOpen} onOpenChange={onEditFolderOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Folder</DialogTitle>
          </DialogHeader>
          {editingFolder && (
            <form onSubmit={onEditFolder} className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Folder Name</Label>
                <Input 
                  id="edit-name" 
                  name="name" 
                  defaultValue={editingFolder.name}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Description</Label>
                <Textarea 
                  id="edit-description" 
                  name="description" 
                  defaultValue={editingFolder.description || ''}
                />
              </div>
              <Button type="submit">Update Folder</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 