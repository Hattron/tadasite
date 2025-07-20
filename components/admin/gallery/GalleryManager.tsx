"use client";

import { useState, useEffect } from "react";
import { deleteImage } from "@/app/admin/gallery/actions";
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
} from "@/lib/image-actions";

// Component imports
import FolderTree from "./FolderTree";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import FolderDialogs from "./FolderDialogs";
import ImageDetailsDialog from "./ImageDetailsDialog";

import MoveImageDialog from "./MoveImageDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle, Trash2, Info } from "lucide-react";
import { ImageData, FolderData } from "./types";

export default function GalleryManager() {
  // Data states
  const [images, setImages] = useState<ImageData[]>([]);
  const [folders, setFolders] = useState<FolderData[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Loading states
  const [isLoading, setIsLoading] = useState(true);

  // Dialog states
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isEditFolderOpen, setIsEditFolderOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isSectionUploadOpen, setIsSectionUploadOpen] = useState(false);
  const [sectionUploadType, setSectionUploadType] = useState<string | null>(
    null,
  );
  const [editingFolder, setEditingFolder] = useState<FolderData | null>(null);
  const [isMoveImageOpen, setIsMoveImageOpen] = useState(false);
  const [movingImage, setMovingImage] = useState<ImageData | null>(null);

  // Alert dialog states
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    title: "",
    description: "",
    type: "info" as "info" | "warning" | "error",
    confirmText: "OK",
    onConfirm: () => {},
    showCancel: false,
    cancelText: "Cancel",
  });

  // Confirm dialog states
  const [confirmConfig, setConfirmConfig] = useState({
    isOpen: false,
    title: "",
    description: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
    onConfirm: () => {},
    onCancel: () => {},
  });

  useEffect(() => {
    loadData();
  }, []);

  // Set default folder when folders are loaded
  useEffect(() => {
    if (folders.length > 0 && selectedFolder === null) {
      const mainFolder = folders.find((f) => f.folderType === "main");
      const newSelectedFolder = mainFolder?.id || folders[0]?.id || null;
      setSelectedFolder(newSelectedFolder);
    }
  }, [folders, selectedFolder]);

  const loadData = async () => {
    try {
      const [imagesData, foldersData] = await Promise.all([
        getAllImages(),
        getAllFolders(),
      ]);
      setImages(imagesData as ImageData[]);
      setFolders(foldersData as FolderData[]);
    } catch (error) {
      console.error("Failed to load gallery data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions for alerts
  const showAlert = (
    title: string,
    description: string,
    type: "info" | "warning" | "error" = "info",
  ) => {
    setAlertConfig({
      isOpen: true,
      title,
      description,
      type,
      confirmText: "OK",
      onConfirm: () => setAlertConfig((prev) => ({ ...prev, isOpen: false })),
      showCancel: false,
      cancelText: "Cancel",
    });
  };

  const showConfirm = (
    title: string,
    description: string,
    onConfirm: () => void,
    confirmText = "Confirm",
    cancelText = "Cancel",
  ) => {
    setConfirmConfig({
      isOpen: true,
      title,
      description,
      confirmText,
      cancelText,
      onConfirm: () => {
        setConfirmConfig((prev) => ({ ...prev, isOpen: false }));
        onConfirm();
      },
      onCancel: () => setConfirmConfig((prev) => ({ ...prev, isOpen: false })),
    });
  };

  // Handle upload completion
  const handleUploadComplete = async () => {
    await loadData();
  };

  // Handle section upload clicks
  const handleSectionUploadClick = (imageType: string) => {
    setSectionUploadType(imageType);
    setIsSectionUploadOpen(true);
  };

  const handleSectionUploadComplete = async () => {
    await loadData();
    setRefreshKey((prev) => prev + 1);
    setIsSectionUploadOpen(false);
    setSectionUploadType(null);
  };

  // Folder management handlers
  const handleCreateFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const parentId = formData.get("parentId") as string;

    // Validate that a parent is selected
    if (!parentId) {
      showAlert(
        "Selection Required",
        "Please select a section (Residential or Commercial) for this project.",
        "warning",
      );
      return;
    }

    // Validate parent is allowed
    const parentFolder = folders.find((f) => f.id === parentId);
    if (
      !parentFolder ||
      (parentFolder.folderType !== "residential" &&
        parentFolder.folderType !== "commercial")
    ) {
      showAlert(
        "Invalid Selection",
        "Projects can only be created under Residential or Commercial sections.",
        "warning",
      );
      return;
    }

    try {
      await createFolder(name, description, parentId);
      await loadData();
      setIsCreateFolderOpen(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Failed to create project:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to create project",
        "error",
      );
    }
  };

  const handleEditFolderClick = (folder: FolderData) => {
    // Only allow editing project folders
    if (folder.folderType !== "project") {
      showAlert(
        "Cannot Edit System Folder",
        "System folders cannot be edited.",
        "warning",
      );
      return;
    }
    setEditingFolder(folder);
    setIsEditFolderOpen(true);
  };

  const handleEditFolder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingFolder) return;

    // Double check that we're only editing project folders
    if (editingFolder.folderType !== "project") {
      showAlert(
        "Cannot Edit System Folder",
        "System folders cannot be edited.",
        "warning",
      );
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    try {
      await updateFolderDetails(editingFolder.id, name, description);
      await loadData();
      setIsEditFolderOpen(false);
      setEditingFolder(null);
    } catch (error) {
      console.error("Failed to update project:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to update project",
        "error",
      );
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    const folder = folders.find((f) => f.id === folderId);
    if (!folder) return;

    // Prevent deletion of system folders
    if (folder.folderType !== "project") {
      showAlert(
        "Cannot Delete System Folder",
        "System folders cannot be deleted.",
        "warning",
      );
      return;
    }

    showConfirm(
      "Delete Project",
      `Are you sure you want to delete the project "${folder.name}"? This action cannot be undone.`,
      async () => {
        try {
          await deleteFolder(folderId);
          await loadData();

          // If the deleted folder was selected, reset selection
          if (selectedFolder === folderId) {
            setSelectedFolder(null);
          }
        } catch (error) {
          console.error("Failed to delete project:", error);
          showAlert(
            "Error",
            error instanceof Error ? error.message : "Failed to delete project",
            "error",
          );
        }
      },
      "Delete",
      "Cancel",
    );
  };

  // Image management handlers
  const handleSetHero = async (imageId: string) => {
    try {
      await setHeroImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set hero image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set hero image",
        "error",
      );
    }
  };

  const handleSetFirstImage = async (imageId: string) => {
    try {
      await setFirstImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set first image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set first image",
        "error",
      );
    }
  };

  const handleSetAboutUsImage = async (imageId: string) => {
    try {
      await setAboutUsImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set about us image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set about us image",
        "error",
      );
    }
  };

  const handleSetMaureenImage = async (imageId: string) => {
    try {
      await setMaureenImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set Maureen image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set Maureen image",
        "error",
      );
    }
  };

  const handleSetJoannaImage = async (imageId: string) => {
    try {
      await setJoannaImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set Joanna image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set Joanna image",
        "error",
      );
    }
  };

  const handleSetTeamImage = async (imageId: string) => {
    try {
      await setTeamImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set team image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set team image",
        "error",
      );
    }
  };

  const handleSetSecondImage = async (imageId: string) => {
    try {
      await setSecondImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set second image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set second image",
        "error",
      );
    }
  };

  const handleSetThirdImage = async (imageId: string) => {
    try {
      await setThirdImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set third image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to set third image",
        "error",
      );
    }
  };

  const handleSetResidentialCover = async (imageId: string) => {
    try {
      await setResidentialCoverImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set residential cover image:", error);
      showAlert(
        "Error",
        error instanceof Error
          ? error.message
          : "Failed to set residential cover image",
        "error",
      );
    }
  };

  const handleSetCommercialCover = async (imageId: string) => {
    try {
      await setCommercialCoverImage(imageId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set commercial cover image:", error);
      showAlert(
        "Error",
        error instanceof Error
          ? error.message
          : "Failed to set commercial cover image",
        "error",
      );
    }
  };

  const handleSetProjectCover = async (imageId: string, projectId: string) => {
    try {
      await setProjectCoverImage(imageId, projectId);
      await loadData();
      setSelectedImage(null);
    } catch (error) {
      console.error("Failed to set project cover image:", error);
      showAlert(
        "Error",
        error instanceof Error
          ? error.message
          : "Failed to set project cover image",
        "error",
      );
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
      console.error("Failed to move image:", error);
      showAlert(
        "Error",
        error instanceof Error ? error.message : "Failed to move image",
        "error",
      );
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    showConfirm(
      "Delete Image",
      "Are you sure you want to delete this image? This action cannot be undone.",
      async () => {
        try {
          await deleteImage(imageId);
          await loadData();
          setSelectedImage(null);
        } catch (error) {
          console.error("Failed to delete image:", error);
          showAlert(
            "Error",
            error instanceof Error ? error.message : "Failed to delete image",
            "error",
          );
        }
      },
      "Delete",
      "Cancel",
    );
  };

  // Text editing handlers

  if (isLoading) {
    return <div className="p-8 text-center">Loading gallery...</div>;
  }

  const getAlertIcon = () => {
    switch (alertConfig.type) {
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "error":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

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

        {/* Image Grid */}
        <ImageGrid
          images={images}
          folders={folders}
          selectedFolder={selectedFolder}
          onImageSelect={setSelectedImage}
          onMoveImage={handleMoveImageClick}
          onUploadClick={() => setIsUploadOpen(true)}
          onSectionUploadClick={handleSectionUploadClick}
          refreshKey={refreshKey}
        />
      </div>

      {/* Upload Form Dialog */}
      <UploadForm
        selectedFolder={selectedFolder}
        folders={folders}
        isOpen={isUploadOpen}
        onOpenChange={setIsUploadOpen}
        onUploadComplete={handleUploadComplete}
      />

      {/* Section Upload Form Dialog */}
      {isSectionUploadOpen && (
        <UploadForm
          selectedFolder={null}
          folders={folders}
          isOpen={isSectionUploadOpen}
          onOpenChange={(open) => {
            setIsSectionUploadOpen(open);
            if (!open) setSectionUploadType(null);
          }}
          onUploadComplete={handleSectionUploadComplete}
          sectionType={sectionUploadType}
        />
      )}

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
      />

      {/* Move Image Dialog */}
      <MoveImageDialog
        movingImage={movingImage}
        folders={folders}
        isOpen={isMoveImageOpen}
        onClose={() => setIsMoveImageOpen(false)}
        onMoveImage={handleMoveImage}
      />

      {/* Alert Dialog */}
      <AlertDialog
        open={alertConfig.isOpen}
        onOpenChange={(open) =>
          setAlertConfig((prev) => ({ ...prev, isOpen: open }))
        }
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {getAlertIcon()}
              {alertConfig.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {alertConfig.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={alertConfig.onConfirm}>
              {alertConfig.confirmText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Confirm Dialog */}
      <AlertDialog
        open={confirmConfig.isOpen}
        onOpenChange={(open) =>
          setConfirmConfig((prev) => ({ ...prev, isOpen: open }))
        }
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-red-500" />
              {confirmConfig.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {confirmConfig.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={confirmConfig.onCancel}>
              {confirmConfig.cancelText}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmConfig.onConfirm}
              className="bg-red-600 hover:bg-red-700"
            >
              {confirmConfig.confirmText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
