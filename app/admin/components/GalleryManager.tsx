'use client';

import { useState, useEffect } from 'react';
import { uploadImageToImageKit, deleteImage } from '@/app/admin/gallery/actions';
import { 
  getAllImages, 
  getAllFolders, 
  setHeroImage, 
  createFolder, 
  deleteFolder, 
  moveImageToFolder,
  updateFolderDetails 
} from '@/lib/image-actions';

// Component imports
import FolderTree from './FolderTree';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import FolderDialogs from './FolderDialogs';
import ImageDetailsDialog from './ImageDetailsDialog';
import MoveImageDialog from './MoveImageDialog';

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

export default function GalleryManager() {
  // Data states
  const [images, setImages] = useState<ImageData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  
  // Loading states
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Dialog states
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isEditFolderOpen, setIsEditFolderOpen] = useState(false);
  const [editingFolder, setEditingFolder] = useState<FolderData | null>(null);
  const [isMoveImageOpen, setIsMoveImageOpen] = useState(false);
  const [movingImage, setMovingImage] = useState<ImageData | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  // Set default folder when folders are loaded
  useEffect(() => {
    if (folders.length > 0 && selectedFolder === null) {
      const mainFolder = folders.find(f => f.name === 'Main');
      setSelectedFolder(mainFolder?.id || folders[0]?.id || null);
    }
  }, [folders, selectedFolder]);

  const loadData = async () => {
    try {
      const [imagesData, foldersData] = await Promise.all([
        getAllImages(),
        getAllFolders()
      ]);
      setImages(imagesData as ImageData[]);
      setFolders(foldersData as FolderData[]);
    } catch (error) {
      console.error('Failed to load gallery data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // File upload handler
  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add selected folder to form data
      if (selectedFolder) {
        formData.append('folderId', selectedFolder);
      }
      
      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      await uploadImageToImageKit(formData);
      
      clearInterval(progressInterval);
      setUploadProgress(100);
      
      // Reload data
      await loadData();
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // Folder management handlers
  const handleCreateFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const parentId = formData.get('parentId') as string;

    try {
      await createFolder(name, description, parentId || undefined);
      await loadData();
      setIsCreateFolderOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to create folder:', error);
    }
  };

  const handleEditFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingFolder) return;

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    try {
      await updateFolderDetails(editingFolder.id, name, description);
      await loadData();
      setIsEditFolderOpen(false);
      setEditingFolder(null);
    } catch (error) {
      console.error('Failed to update folder:', error);
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    if (!confirm('Are you sure you want to delete this folder?')) return;

    try {
      await deleteFolder(folderId);
      await loadData();
      if (selectedFolder === folderId) {
        setSelectedFolder(null);
      }
    } catch (error) {
      console.error('Failed to delete folder:', error);
      alert(error instanceof Error ? error.message : 'Failed to delete folder');
    }
  };

  // Image management handlers
  const handleMoveImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!movingImage) return;

    const formData = new FormData(e.currentTarget);
    const targetFolderId = formData.get('targetFolder') as string;

    try {
      await moveImageToFolder(movingImage.id, targetFolderId || null);
      await loadData();
      setIsMoveImageOpen(false);
      setMovingImage(null);
    } catch (error) {
      console.error('Failed to move image:', error);
    }
  };

  const handleSetHero = async (imageId: string) => {
    try {
      await setHeroImage(imageId);
      await loadData();
    } catch (error) {
      console.error('Failed to set hero image:', error);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    
    try {
      await deleteImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  // Dialog handlers
  const handleEditFolderClick = (folder: FolderData) => {
    setEditingFolder(folder);
    setIsEditFolderOpen(true);
  };

  const handleMoveImageClick = (image: ImageData) => {
    setMovingImage(image);
    setIsMoveImageOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: 'var(--color-primary)' }}></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Folder Tree */}
        <FolderTree
          folders={folders}
          images={images}
          selectedFolder={selectedFolder}
          onFolderSelect={setSelectedFolder}
          onCreateFolder={() => setIsCreateFolderOpen(true)}
          onEditFolder={handleEditFolderClick}
          onDeleteFolder={handleDeleteFolder}
        />

        {/* Upload Form */}
        <UploadForm
          selectedFolder={selectedFolder}
          folders={folders}
          isUploading={isUploading}
          uploadProgress={uploadProgress}
          onFileUpload={handleFileUpload}
        />

        {/* Image Grid */}
        <ImageGrid
          images={images}
          folders={folders}
          selectedFolder={selectedFolder}
          onImageSelect={setSelectedImage}
          onMoveImage={handleMoveImageClick}
        />
      </div>

      {/* Folder Dialogs */}
      <FolderDialogs
        folders={folders}
        isCreateFolderOpen={isCreateFolderOpen}
        isEditFolderOpen={isEditFolderOpen}
        editingFolder={editingFolder}
        onCreateFolderOpenChange={setIsCreateFolderOpen}
        onEditFolderOpenChange={setIsEditFolderOpen}
        onCreateFolder={handleCreateFolder}
        onEditFolder={handleEditFolder}
      />

      {/* Image Details Dialog */}
      <ImageDetailsDialog
        selectedImage={selectedImage}
        folders={folders}
        onClose={() => setSelectedImage(null)}
        onSetHero={handleSetHero}
        onMoveImage={handleMoveImageClick}
        onDeleteImage={handleDeleteImage}
      />

      {/* Move Image Dialog */}
      <MoveImageDialog
        movingImage={movingImage}
        folders={folders}
        isOpen={isMoveImageOpen}
        onClose={() => setIsMoveImageOpen(false)}
        onMoveImage={handleMoveImage}
      />
    </div>
  );
} 