'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Folder, FolderOpen, Trash2, Edit2, Plus } from 'lucide-react';
import { FolderData, ImageData } from './types';

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
  const getSubfolders = (parentId: string | null) => folders.filter(f => f.parentId === parentId);
  const getMainFolders = () => folders.filter(f => !f.parentId);
  
  const canCreateSubfolder = (folder: FolderData) => {
    // Only Residential and Commercial can have new projects created under them
    return folder.folderType === 'residential' || folder.folderType === 'commercial';
  };
  
  const canEditFolder = (folder: FolderData) => {
    // Only project folders can be edited
    return folder.folderType === 'project';
  };
  
  const canDeleteFolder = (folder: FolderData) => {
    // Only project folders can be deleted
    return folder.folderType === 'project';
  };

  const isSystemFolder = (folder: FolderData) => {
    return ['hero', 'residential', 'commercial'].includes(folder.folderType);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle style={{ color: 'var(--color-primary)' }}>
          Folders
        </CardTitle>
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
                    <span className="text-sm flex-1 font-medium">
                      {folder.name}
                      {isSystemFolder(folder) && (
                        <span className="ml-2 text-xs opacity-60">(System)</span>
                      )}
                    </span>
                    <Badge variant="secondary">{imagesCount}</Badge>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-1">
                      {/* Create Project Button - Only for Residential and Commercial */}
                      {canCreateSubfolder(folder) && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          title="Create Project"
                          onClick={(e) => {
                            e.stopPropagation();
                            onCreateFolder();
                          }}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      )}
                      
                      {/* Edit Button - Only for Project folders */}
                      {canEditFolder(folder) && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                          title="Edit Project"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEditFolder(folder);
                          }}
                        >
                          <Edit2 className="h-3 w-3" />
                        </Button>
                      )}
                      
                      {/* Delete Button - Only for Project folders */}
                      {canDeleteFolder(folder) && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0 text-red-500"
                          title="Delete Project"
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
                  
                  {/* Subfolders (Projects) */}
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
                        
                        {/* Project Actions - Edit and Delete only */}
                        <div className="flex gap-1">
                          {canEditFolder(subfolder) && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0"
                              title="Edit Project"
                              onClick={(e) => {
                                e.stopPropagation();
                                onEditFolder(subfolder);
                              }}
                            >
                              <Edit2 className="h-3 w-3" />
                            </Button>
                          )}
                          {canDeleteFolder(subfolder) && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-red-500"
                              title="Delete Project"
                              onClick={(e) => {
                                e.stopPropagation();
                                onDeleteFolder(subfolder.id);
                              }}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        {/* Instructions for creating projects */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700">
            <strong>Create Projects:</strong> Click the + button next to Residential or Commercial folders to create new projects.
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 