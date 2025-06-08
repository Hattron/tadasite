export interface ImageData {
  id: string;
  imagekitUrl: string;
  fileName: string;
  originalName: string;
  alt: string | null;
  caption: string | null;
  isHero: boolean;
  isFirstImage: boolean;
  isAboutUsImage: boolean;
  isMaureenImage: boolean;
  isJoannaImage: boolean;
  isTeamImage: boolean;
  isSecondImage: boolean;
  isThirdImage: boolean;
  isResidentialCover: boolean;
  isCommercialCover: boolean;
  isProjectCover: boolean;
  folderId: string | null;
  size: number;
  width: number | null;
  height: number | null;
}

export interface FolderData {
  id: string;
  name: string;
  description: string | null;
  parentId: string | null;
  folderType: string;
  sortOrder: number;
} 