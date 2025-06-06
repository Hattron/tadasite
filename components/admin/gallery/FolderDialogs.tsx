'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FolderData } from './types';

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
  // Only allow creating folders under Residential or Commercial sections
  const allowedParentFolders = folders.filter(f => 
    f.folderType === 'residential' || f.folderType === 'commercial'
  );

  return (
    <>
      {/* Create Project Dialog */}
      <Dialog open={isCreateFolderOpen} onOpenChange={onCreateFolderOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={onCreateFolder} className="space-y-4">
            <div>
              <Label htmlFor="name">Project Name</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="e.g., Modern Family Home, Corporate Office Redesign"
                required 
              />
            </div>
            <div>
              <Label htmlFor="description">Project Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Brief description of the project..."
              />
            </div>
            <div>
              <Label htmlFor="parentId">Section</Label>
              <Select name="parentId" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {allowedParentFolders.map(folder => (
                    <SelectItem key={folder.id} value={folder.id}>
                      {folder.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Projects can only be created under Residential or Commercial sections.
              </p>
            </div>
            <Button type="submit">Create Project</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Project Dialog */}
      <Dialog open={isEditFolderOpen} onOpenChange={onEditFolderOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          {editingFolder && (
            <form onSubmit={onEditFolder} className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Project Name</Label>
                <Input 
                  id="edit-name" 
                  name="name" 
                  defaultValue={editingFolder.name}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="edit-description">Project Description</Label>
                <Textarea 
                  id="edit-description" 
                  name="description" 
                  defaultValue={editingFolder.description || ''}
                />
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Section:</strong> {folders.find(f => f.id === editingFolder.parentId)?.name || 'Unknown'}
                </p>
              </div>
              <Button type="submit">Update Project</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 