'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FolderPlus, Folder, FolderOpen, Trash2, Edit2, Plus } from 'lucide-react';

interface FolderData {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  sortOrder: number;
}

interface ImageData {
  id: string;
  folderId: string | null;
}

interface FolderTreeProps {
  folders: FolderData[];
  images: ImageData[];
  selectedFolder: string | null;
  onFolderSelect: (folderId: string | null) => void;
  onCreateFolder: () => void;
  onEditFolder: (folder: FolderData) => void;
  onDeleteFolder: (folderId: string) => void;
}

export default function FolderTree({
  folders,
  images,
  selectedFolder,
  onFolderSelect,
  onCreateFolder,
  onEditFolder,
  onDeleteFolder
}: FolderTreeProps) {
  // Helper functions
  const getFolderById = (id: string) => folders.find(f => f.id === id);
  const getSubfolders = (parentId: string | null) => folders.filter(f => f.parentId === parentId);
  const getMainFolders = () => folders.filter(f => !f.parentId);
  const canCreateSubfolder = (folderId: string) => {
    const folder = getFolderById(folderId);
    return folder && (folder.name === 'Retail' || folder.name === 'Commercial');
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle style={{ color: 'var(--color-primary)' }}>
          Folders
        </CardTitle>
        <Button size="sm" variant="outline" onClick={onCreateFolder}>
          <FolderPlus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-1">
            {/* Main Folders */}
            {getMainFolders().map(folder => {
              const subfolders = getSubfolders(folder.id);
              const isSelected = selectedFolder === folder.id;
              const imagesCount = images.filter(img => img.folderId === folder.id).length;
              
              return (
                <div key={folder.id}>
                  <div 
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-100 ${
                      isSelected ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => onFolderSelect(folder.id)}
                  >
                    {subfolders.length > 0 ? (
                      <FolderOpen className="h-4 w-4" />
                    ) : (
                      <Folder className="h-4 w-4" />
                    )}
                    <span className="text-sm flex-1">{folder.name}</span>
                    <Badge variant="secondary">{imagesCount}</Badge>
                    <div className="flex gap-1">
                      {canCreateSubfolder(folder.id) && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            onCreateFolder();
                          }}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditFolder(folder);
                        }}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      {!['Main', 'Retail', 'Commercial'].includes(folder.name) && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-red-500"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteFolder(folder.id);
                          }}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Subfolders */}
                  {subfolders.map(subfolder => {
                    const subImages = images.filter(img => img.folderId === subfolder.id).length;
                    const isSubSelected = selectedFolder === subfolder.id;
                    
                    return (
                      <div 
                        key={subfolder.id}
                        className={`flex items-center gap-2 p-2 pl-8 rounded cursor-pointer hover:bg-gray-100 ${
                          isSubSelected ? 'bg-gray-100' : ''
                        }`}
                        onClick={() => onFolderSelect(subfolder.id)}
                      >
                        <Folder className="h-4 w-4" />
                        <span className="text-sm flex-1">{subfolder.name}</span>
                        <Badge variant="secondary">{subImages}</Badge>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              onEditFolder(subfolder);
                            }}
                          >
                            <Edit2 className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 text-red-500"
                            onClick={(e) => {
                              e.stopPropagation();
                              onDeleteFolder(subfolder.id);
                            }}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
} 