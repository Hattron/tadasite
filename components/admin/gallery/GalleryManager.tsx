'use client';

import { useState, useEffect } from 'react';
import { uploadImageToImageKit, deleteImage } from '@/app/admin/gallery/actions';
import { 
  getAllImages, 
  getAllFolders, 
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
  setProjectCoverImage,
  createFolder, 
  deleteFolder, 
  moveImageToFolder,
  updateFolderDetails,
  updateHeroText,
  updateFirstImageText,
  updateSecondImageText,
  updateThirdImageText
} from '@/lib/image-actions';

// Component imports
import FolderTree from './FolderTree';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import FolderDialogs from './FolderDialogs';
import ImageDetailsDialog from './ImageDetailsDialog';
import ImageTextEditDialog from './ImageTextEditDialog';
import MoveImageDialog from './MoveImageDialog';
import { ImageData, FolderData } from './types';

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
  const [textEditImage, setTextEditImage] = useState<ImageData | null>(null);
  const [textEditType, setTextEditType] = useState<'hero' | 'first' | 'second' | 'third' | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  // Set default folder when folders are loaded
  useEffect(() => {
    if (folders.length > 0 && selectedFolder === null) {
      const mainFolder = folders.find(f => f.folderType === 'main');
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
      alert(error instanceof Error ? error.message : 'Upload failed');
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

    // Validate that a parent is selected
    if (!parentId) {
      alert('Please select a section (Residential or Commercial) for this project.');
      return;
    }

    // Validate parent is allowed
    const parentFolder = folders.find(f => f.id === parentId);
    if (!parentFolder || (parentFolder.folderType !== 'residential' && parentFolder.folderType !== 'commercial')) {
      alert('Projects can only be created under Residential or Commercial sections.');
      return;
    }

    try {
      await createFolder(name, description, parentId);
      await loadData();
      setIsCreateFolderOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to create project:', error);
      alert(error instanceof Error ? error.message : 'Failed to create project');
    }
  };

  const handleEditFolderClick = (folder: FolderData) => {
    // Only allow editing project folders
    if (folder.folderType !== 'project') {
      alert('System folders cannot be edited.');
      return;
    }
    setEditingFolder(folder);
    setIsEditFolderOpen(true);
  };

  const handleEditFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingFolder) return;

    // Double check that we're only editing project folders
    if (editingFolder.folderType !== 'project') {
      alert('System folders cannot be edited.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    try {
      await updateFolderDetails(editingFolder.id, name, description);
      await loadData();
      setIsEditFolderOpen(false);
      setEditingFolder(null);
    } catch (error) {
      console.error('Failed to update project:', error);
      alert(error instanceof Error ? error.message : 'Failed to update project');
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;

    // Prevent deletion of system folders
    if (folder.folderType !== 'project') {
      alert('System folders cannot be deleted.');
      return;
    }

    if (!confirm(`Are you sure you want to delete the project "${folder.name}"?`)) return;

    try {
      await deleteFolder(folderId);
      await loadData();
      
      // If the deleted folder was selected, reset selection
      if (selectedFolder === folderId) {
        setSelectedFolder(null);
      }
    } catch (error) {
      console.error('Failed to delete project:', error);
      alert(error instanceof Error ? error.message : 'Failed to delete project');
    }
  };

  // Image management handlers
  const handleSetHero = async (imageId: string) => {
    try {
      await setHeroImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set hero image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set hero image');
    }
  };

  const handleSetFirstImage = async (imageId: string) => {
    try {
      await setFirstImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set first image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set first image');
    }
  };

  const handleSetAboutUsImage = async (imageId: string) => {
    try {
      await setAboutUsImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set about us image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set about us image');
    }
  };

  const handleSetMaureenImage = async (imageId: string) => {
    try {
      await setMaureenImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set Maureen image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set Maureen image');
    }
  };

  const handleSetJoannaImage = async (imageId: string) => {
    try {
      await setJoannaImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set Joanna image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set Joanna image');
    }
  };

  const handleSetTeamImage = async (imageId: string) => {
    try {
      await setTeamImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set team image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set team image');
    }
  };

  const handleSetSecondImage = async (imageId: string) => {
    try {
      await setSecondImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set second image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set second image');
    }
  };

  const handleSetThirdImage = async (imageId: string) => {
    try {
      await setThirdImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set third image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set third image');
    }
  };

  const handleSetResidentialCover = async (imageId: string) => {
    try {
      await setResidentialCoverImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set residential cover image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set residential cover image');
    }
  };

  const handleSetCommercialCover = async (imageId: string) => {
    try {
      await setCommercialCoverImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set commercial cover image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set commercial cover image');
    }
  };

  const handleSetProjectCover = async (imageId: string, projectId: string) => {
    try {
      await setProjectCoverImage(imageId, projectId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error('Failed to set project cover image:', error);
      alert(error instanceof Error ? error.message : 'Failed to set project cover image');
    }
  };

  const handleMoveImageClick = (image: ImageData) => {
    setMovingImage(image);
    setIsMoveImageOpen(true);
  };

  const handleMoveImage = async (imageId: string, folderId: string | null) => {
    try {
      await moveImageToFolder(imageId, folderId);
      await loadData();
      setIsMoveImageOpen(false);
      setMovingImage(null);
    } catch (error) {
      console.error('Failed to move image:', error);
      alert(error instanceof Error ? error.message : 'Failed to move image');
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
      alert(error instanceof Error ? error.message : 'Failed to delete image');
    }
  };

  // Text editing handlers
  const handleEditText = (imageType: 'hero' | 'first' | 'second' | 'third') => {
    setTextEditImage(selectedImage);
    setTextEditType(imageType);
  };

  const handleUpdateText = async (imageId: string, title?: string, subtitle?: string) => {
    if (!textEditType) return;

    try {
      switch (textEditType) {
        case 'hero':
          await updateHeroText(imageId, title, subtitle);
          break;
        case 'first':
          await updateFirstImageText(imageId, title, subtitle);
          break;
        case 'second':
          await updateSecondImageText(imageId, title, subtitle);
          break;
        case 'third':
          await updateThirdImageText(imageId, title, subtitle);
          break;
      }
      await loadData();
      setTextEditImage(null);
      setTextEditType(null);
    } catch (error) {
      console.error('Failed to update text:', error);
      alert(error instanceof Error ? error.message : 'Failed to update text');
    }
  };

  const handleCloseTextEdit = () => {
    setTextEditImage(null);
    setTextEditType(null);
  };

  if (isLoading) {
    return <div className="p-8 text-center">Loading gallery...</div>;
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
        onSetFirstImage={handleSetFirstImage}
        onSetAboutUsImage={handleSetAboutUsImage}
        onSetMaureenImage={handleSetMaureenImage}
        onSetJoannaImage={handleSetJoannaImage}
        onSetTeamImage={handleSetTeamImage}
        onSetSecondImage={handleSetSecondImage}
        onSetThirdImage={handleSetThirdImage}
        onSetResidentialCover={handleSetResidentialCover}
        onSetCommercialCover={handleSetCommercialCover}
        onSetProjectCover={handleSetProjectCover}
        onMoveImage={handleMoveImageClick}
        onDeleteImage={handleDeleteImage}
        onEditText={handleEditText}
      />

      {/* Image Text Edit Dialog */}
      <ImageTextEditDialog
        selectedImage={textEditImage}
        imageType={textEditType}
        onClose={handleCloseTextEdit}
        onUpdate={handleUpdateText}
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