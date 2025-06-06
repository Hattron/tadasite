'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface FolderData {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  sortOrder: number;
}

interface UploadFormProps {
  selectedFolder: string | null;
  folders: FolderData[];
  isUploading: boolean;
  uploadProgress: number;
  onFileUpload: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadForm({
  selectedFolder,
  folders,
  isUploading,
  uploadProgress,
  onFileUpload
}: UploadFormProps) {
  const getFolderById = (id: string) => folders.find(f => f.id === id);

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ color: 'var(--color-primary)' }}>
          <Upload className="h-5 w-5 inline mr-2" />
          Upload Images
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onFileUpload} className="space-y-4">
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
              {selectedFolder ? (
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
      </CardContent>
    </Card>
  );
} 