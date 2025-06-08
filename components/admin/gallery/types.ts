export interface ImageData {
  id: string;
  imagekitUrl: string;
  fileName: string;
  originalName: string;
  alt: string | null;
  caption: string | null;
  isHero: boolean;
  heroTitle: string | null;
  heroSubtitle: string | null;
  isFirstImage: boolean;
  firstImageTitle: string | null;
  firstImageSubtitle: string | null;
  isAboutUsImage: boolean;
  isMaureenImage: boolean;
  isJoannaImage: boolean;
  isTeamImage: boolean;
  isSecondImage: boolean;
  secondImageTitle: string | null;
  secondImageSubtitle: string | null;
  isThirdImage: boolean;
  thirdImageTitle: string | null;
  thirdImageSubtitle: string | null;
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