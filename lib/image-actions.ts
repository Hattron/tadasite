"use server";

import { db } from "@/lib/db";
import { tadaImages, tadaImageFolders } from "@/lib/schema";
import { eq, isNull, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getHeroImage() {
  try {
    const heroImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isHero, true))
      .limit(1);

    return heroImages.length > 0 ? heroImages[0] : null;
  } catch (error) {
    console.error("Error fetching hero image:", error);
    return null;
  }
}

export async function getMobileHeroImage() {
  try {
    const mobileHeroImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isMobileHero, true))
      .limit(1);

    return mobileHeroImages.length > 0 ? mobileHeroImages[0] : null;
  } catch (error) {
    console.error("Error fetching mobile hero image:", error);
    return null;
  }
}

export async function getFirstImage() {
  try {
    const firstImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
        firstImageTitle: tadaImages.firstImageTitle,
        firstImageSubtitle: tadaImages.firstImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isFirstImage, true))
      .limit(1);

    return firstImages.length > 0 ? firstImages[0] : null;
  } catch (error) {
    console.error("Error fetching first image:", error);
    return null;
  }
}

export async function getAboutUsImage() {
  try {
    const aboutUsImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isAboutUsImage, true))
      .limit(1);

    return aboutUsImages.length > 0 ? aboutUsImages[0] : null;
  } catch (error) {
    console.error("Error fetching about us image:", error);
    return null;
  }
}

export async function getMaureenImage() {
  try {
    const maureeenImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isMaureenImage, true))
      .limit(1);

    return maureeenImages.length > 0 ? maureeenImages[0] : null;
  } catch (error) {
    console.error("Error fetching Maureen image:", error);
    return null;
  }
}

export async function getJoannaImage() {
  try {
    const joannaImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isJoannaImage, true))
      .limit(1);

    return joannaImages.length > 0 ? joannaImages[0] : null;
  } catch (error) {
    console.error("Error fetching Joanna image:", error);
    return null;
  }
}

export async function getTeamImage() {
  try {
    const teamImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isTeamImage, true))
      .limit(1);

    return teamImages.length > 0 ? teamImages[0] : null;
  } catch (error) {
    console.error("Error fetching team image:", error);
    return null;
  }
}

export async function getSecondImage() {
  try {
    const secondImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
        secondImageTitle: tadaImages.secondImageTitle,
        secondImageSubtitle: tadaImages.secondImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isSecondImage, true))
      .limit(1);

    return secondImages.length > 0 ? secondImages[0] : null;
  } catch (error) {
    console.error("Error fetching second image:", error);
    return null;
  }
}

export async function getThirdImage() {
  try {
    const thirdImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
        thirdImageTitle: tadaImages.thirdImageTitle,
        thirdImageSubtitle: tadaImages.thirdImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isThirdImage, true))
      .limit(1);

    return thirdImages.length > 0 ? thirdImages[0] : null;
  } catch (error) {
    console.error("Error fetching third image:", error);
    return null;
  }
}

// Alias for backward compatibility
export const getMainImage = getHeroImage;

export async function getResidentialCoverImage() {
  try {
    const coverImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isResidentialCover, true))
      .limit(1);

    return coverImages.length > 0 ? coverImages[0] : null;
  } catch (error) {
    console.error("Error fetching residential cover image:", error);
    return null;
  }
}

export async function getCommercialCoverImage() {
  try {
    const coverImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isCommercialCover, true))
      .limit(1);

    return coverImages.length > 0 ? coverImages[0] : null;
  } catch (error) {
    console.error("Error fetching commercial cover image:", error);
    return null;
  }
}

export async function getAllImages() {
  try {
    const images = await db
      .select()
      .from(tadaImages)
      .orderBy(tadaImages.sortOrder, tadaImages.createdAt);

    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export async function getImagesByFolder(folderId: string | null) {
  try {
    const query = folderId
      ? eq(tadaImages.folderId, folderId)
      : isNull(tadaImages.folderId);

    const images = await db
      .select()
      .from(tadaImages)
      .where(query)
      .orderBy(tadaImages.sortOrder, tadaImages.createdAt);

    return images;
  } catch (error) {
    console.error("Error fetching images by folder:", error);
    return [];
  }
}

export async function getProjectsByType(type: "residential" | "commercial") {
  try {
    const parentFolderId =
      type === "residential" ? "folder_residential" : "folder_commercial";

    const projects = await db
      .select()
      .from(tadaImageFolders)
      .where(eq(tadaImageFolders.parentId, parentFolderId))
      .orderBy(tadaImageFolders.sortOrder, tadaImageFolders.name);

    // Get cover images for each project
    const projectsWithCover = await Promise.all(
      projects.map(async (project) => {
        const coverImages = await db
          .select({
            id: tadaImages.id,
            imagekitUrl: tadaImages.imagekitUrl,
            alt: tadaImages.alt,
          })
          .from(tadaImages)
          .where(
            and(
              eq(tadaImages.folderId, project.id),
              eq(tadaImages.isProjectCover, true),
            ),
          )
          .limit(1);

        const coverImage = coverImages.length > 0 ? coverImages[0] : null;

        // If no cover image, get the first image in the project
        if (!coverImage) {
          const firstImages = await db
            .select({
              id: tadaImages.id,
              imagekitUrl: tadaImages.imagekitUrl,
              alt: tadaImages.alt,
            })
            .from(tadaImages)
            .where(eq(tadaImages.folderId, project.id))
            .orderBy(tadaImages.sortOrder, tadaImages.createdAt)
            .limit(1);

          return {
            ...project,
            coverImage: firstImages.length > 0 ? firstImages[0] : null,
          };
        }

        return {
          ...project,
          coverImage,
        };
      }),
    );

    return projectsWithCover;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function setHeroImage(imageId: string) {
  try {
    // Get the current hero image's text content before unsetting
    const currentHero = await db
      .select({
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isHero, true))
      .limit(1);

    // Get the new image's current text content
    const newImage = await db
      .select({
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    // First, unset any existing hero images
    await db
      .update(tadaImages)
      .set({ isHero: false })
      .where(eq(tadaImages.isHero, true));

    // Set the new hero image, preserving existing text if new image doesn't have text
    const textToUse = {
      heroTitle: newImage[0]?.heroTitle || currentHero[0]?.heroTitle || null,
      heroSubtitle:
        newImage[0]?.heroSubtitle || currentHero[0]?.heroSubtitle || null,
    };

    await db
      .update(tadaImages)
      .set({
        isHero: true,
        heroTitle: textToUse.heroTitle,
        heroSubtitle: textToUse.heroSubtitle,
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting hero image:", error);
    throw new Error("Failed to set hero image");
  }
}

export async function setMobileHeroImage(imageId: string) {
  try {
    // Get the current hero image's text content before unsetting
    const currentHero = await db
      .select({
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isMobileHero, true))
      .limit(1);

    // Get the new image's current text content
    const newImage = await db
      .select({
        heroTitle: tadaImages.heroTitle,
        heroSubtitle: tadaImages.heroSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    // First, unset any existing mobile hero images
    await db
      .update(tadaImages)
      .set({ isMobileHero: false })
      .where(eq(tadaImages.isMobileHero, true));

    // Set the new mobile hero image
    // Note: We might want to use the same text as desktop hero, or independent text.
    // For now, let's keep it consistent with other set*Image functions and preserve text if possible.
    // If specific mobile text is needed, we might need a separate field or UI for it.
    // Assuming for now mobile hero shares hero text title/subtitle structure.

    // Check if new image has text, if not use current mobile hero text
    const textToUse = {
      heroTitle: newImage[0]?.heroTitle || currentHero[0]?.heroTitle || null,
      heroSubtitle:
        newImage[0]?.heroSubtitle || currentHero[0]?.heroSubtitle || null,
    };

    await db
      .update(tadaImages)
      .set({
        isMobileHero: true,
        // We can choose to carry over text or not. 
        // If the user wants separate text for mobile, we should probably just leave it as is on the image
        // or copy it from the previous mobile hero.
        // For simple image swapping, let's just set the flag. 
        // If text is needed, it's already on the image object (if set via other means) or we copy it.
        heroTitle: textToUse.heroTitle,
        heroSubtitle: textToUse.heroSubtitle,
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting mobile hero image:", error);
    throw new Error("Failed to set mobile hero image");
  }
}

export async function setFirstImage(imageId: string) {
  try {
    // Get the current first image's text content before unsetting
    const currentFirst = await db
      .select({
        firstImageTitle: tadaImages.firstImageTitle,
        firstImageSubtitle: tadaImages.firstImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isFirstImage, true))
      .limit(1);

    // Get the new image's current text content
    const newImage = await db
      .select({
        firstImageTitle: tadaImages.firstImageTitle,
        firstImageSubtitle: tadaImages.firstImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    // First, unset any existing first images
    await db
      .update(tadaImages)
      .set({ isFirstImage: false })
      .where(eq(tadaImages.isFirstImage, true));

    // Set the new first image, preserving existing text if new image doesn't have text
    const textToUse = {
      firstImageTitle:
        newImage[0]?.firstImageTitle ||
        currentFirst[0]?.firstImageTitle ||
        null,
      firstImageSubtitle:
        newImage[0]?.firstImageSubtitle ||
        currentFirst[0]?.firstImageSubtitle ||
        null,
    };

    await db
      .update(tadaImages)
      .set({
        isFirstImage: true,
        firstImageTitle: textToUse.firstImageTitle,
        firstImageSubtitle: textToUse.firstImageSubtitle,
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting first image:", error);
    throw new Error("Failed to set first image");
  }
}

export async function setAboutUsImage(imageId: string) {
  try {
    // First, unset any existing about us images
    await db
      .update(tadaImages)
      .set({ isAboutUsImage: false })
      .where(eq(tadaImages.isAboutUsImage, true));

    // Set the new about us image
    await db
      .update(tadaImages)
      .set({ isAboutUsImage: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting about us image:", error);
    throw new Error("Failed to set about us image");
  }
}

export async function setMaureenImage(imageId: string) {
  try {
    // First, unset any existing Maureen images
    await db
      .update(tadaImages)
      .set({ isMaureenImage: false })
      .where(eq(tadaImages.isMaureenImage, true));

    // Set the new Maureen image
    await db
      .update(tadaImages)
      .set({ isMaureenImage: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/about");
    return { success: true };
  } catch (error) {
    console.error("Error setting Maureen image:", error);
    throw new Error("Failed to set Maureen image");
  }
}

export async function setJoannaImage(imageId: string) {
  try {
    // First, unset any existing Joanna images
    await db
      .update(tadaImages)
      .set({ isJoannaImage: false })
      .where(eq(tadaImages.isJoannaImage, true));

    // Set the new Joanna image
    await db
      .update(tadaImages)
      .set({ isJoannaImage: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/about");
    return { success: true };
  } catch (error) {
    console.error("Error setting Joanna image:", error);
    throw new Error("Failed to set Joanna image");
  }
}

export async function setTeamImage(imageId: string) {
  try {
    // First, unset any existing team images
    await db
      .update(tadaImages)
      .set({ isTeamImage: false })
      .where(eq(tadaImages.isTeamImage, true));

    // Set the new team image
    await db
      .update(tadaImages)
      .set({ isTeamImage: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/about");
    return { success: true };
  } catch (error) {
    console.error("Error setting team image:", error);
    throw new Error("Failed to set team image");
  }
}

export async function setSecondImage(imageId: string) {
  try {
    // Get the current second image's text content before unsetting
    const currentSecond = await db
      .select({
        secondImageTitle: tadaImages.secondImageTitle,
        secondImageSubtitle: tadaImages.secondImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isSecondImage, true))
      .limit(1);

    // Get the new image's current text content
    const newImage = await db
      .select({
        secondImageTitle: tadaImages.secondImageTitle,
        secondImageSubtitle: tadaImages.secondImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    // First, unset any existing second images
    await db
      .update(tadaImages)
      .set({ isSecondImage: false })
      .where(eq(tadaImages.isSecondImage, true));

    // Set the new second image, preserving existing text if new image doesn't have text
    const textToUse = {
      secondImageTitle:
        newImage[0]?.secondImageTitle ||
        currentSecond[0]?.secondImageTitle ||
        null,
      secondImageSubtitle:
        newImage[0]?.secondImageSubtitle ||
        currentSecond[0]?.secondImageSubtitle ||
        null,
    };

    await db
      .update(tadaImages)
      .set({
        isSecondImage: true,
        secondImageTitle: textToUse.secondImageTitle,
        secondImageSubtitle: textToUse.secondImageSubtitle,
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting second image:", error);
    throw new Error("Failed to set second image");
  }
}

export async function setThirdImage(imageId: string) {
  try {
    // Get the current third image's text content before unsetting
    const currentThird = await db
      .select({
        thirdImageTitle: tadaImages.thirdImageTitle,
        thirdImageSubtitle: tadaImages.thirdImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isThirdImage, true))
      .limit(1);

    // Get the new image's current text content
    const newImage = await db
      .select({
        thirdImageTitle: tadaImages.thirdImageTitle,
        thirdImageSubtitle: tadaImages.thirdImageSubtitle,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    // First, unset any existing third images
    await db
      .update(tadaImages)
      .set({ isThirdImage: false })
      .where(eq(tadaImages.isThirdImage, true));

    // Set the new third image, preserving existing text if new image doesn't have text
    const textToUse = {
      thirdImageTitle:
        newImage[0]?.thirdImageTitle ||
        currentThird[0]?.thirdImageTitle ||
        null,
      thirdImageSubtitle:
        newImage[0]?.thirdImageSubtitle ||
        currentThird[0]?.thirdImageSubtitle ||
        null,
    };

    await db
      .update(tadaImages)
      .set({
        isThirdImage: true,
        thirdImageTitle: textToUse.thirdImageTitle,
        thirdImageSubtitle: textToUse.thirdImageSubtitle,
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error setting third image:", error);
    throw new Error("Failed to set third image");
  }
}

export async function setResidentialCoverImage(imageId: string) {
  try {
    // First, unset any existing residential cover images
    await db
      .update(tadaImages)
      .set({ isResidentialCover: false })
      .where(eq(tadaImages.isResidentialCover, true));

    // Set the new residential cover image
    await db
      .update(tadaImages)
      .set({ isResidentialCover: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error setting residential cover image:", error);
    throw new Error("Failed to set residential cover image");
  }
}

export async function setCommercialCoverImage(imageId: string) {
  try {
    // First, unset any existing commercial cover images
    await db
      .update(tadaImages)
      .set({ isCommercialCover: false })
      .where(eq(tadaImages.isCommercialCover, true));

    // Set the new commercial cover image
    await db
      .update(tadaImages)
      .set({ isCommercialCover: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error setting commercial cover image:", error);
    throw new Error("Failed to set commercial cover image");
  }
}

export async function setProjectCoverImage(imageId: string, projectId: string) {
  try {
    // First, unset any existing project cover images for this project
    await db
      .update(tadaImages)
      .set({ isProjectCover: false })
      .where(
        and(
          eq(tadaImages.folderId, projectId),
          eq(tadaImages.isProjectCover, true),
        ),
      );

    // Set the new project cover image
    await db
      .update(tadaImages)
      .set({ isProjectCover: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    revalidatePath("/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error setting project cover image:", error);
    throw new Error("Failed to set project cover image");
  }
}

export async function getAllFolders() {
  try {
    const folders = await db
      .select()
      .from(tadaImageFolders)
      .orderBy(tadaImageFolders.sortOrder, tadaImageFolders.name);

    return folders;
  } catch (error) {
    console.error("Error fetching folders:", error);
    return [];
  }
}

export async function createFolder(
  name: string,
  description?: string,
  parentId?: string,
) {
  try {
    // Check if parent is a section folder (residential/commercial) and prevent direct image uploads
    if (parentId) {
      const parentFolder = await db
        .select()
        .from(tadaImageFolders)
        .where(eq(tadaImageFolders.id, parentId))
        .limit(1);

      if (parentFolder.length > 0) {
        const parent = parentFolder[0];
        // If creating a subfolder under residential or commercial, it's a project
        if (
          parent.folderType === "residential" ||
          parent.folderType === "commercial"
        ) {
          const id = `folder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

          await db.insert(tadaImageFolders).values({
            id,
            name,
            description: description || null,
            parentId: parentId,
            folderType: "project",
          });

          revalidatePath("/admin");
          return { success: true, id };
        }
      }
    }

    // Default folder creation
    const id = `folder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    await db.insert(tadaImageFolders).values({
      id,
      name,
      description: description || null,
      parentId: parentId || null,
      folderType: "project",
    });

    revalidatePath("/admin");
    return { success: true, id };
  } catch (error) {
    console.error("Error creating folder:", error);
    throw new Error("Failed to create folder");
  }
}

export async function deleteFolder(folderId: string) {
  try {
    // Prevent deletion of system folders
    const folder = await db
      .select()
      .from(tadaImageFolders)
      .where(eq(tadaImageFolders.id, folderId))
      .limit(1);

    if (folder.length > 0 && folder[0].folderType !== "project") {
      throw new Error("Cannot delete system folders");
    }

    // Check if folder has any images
    const imagesInFolder = await db
      .select()
      .from(tadaImages)
      .where(eq(tadaImages.folderId, folderId))
      .limit(1);

    if (imagesInFolder.length > 0) {
      throw new Error("Cannot delete folder that contains images");
    }

    // Check if folder has any subfolders
    const subfolders = await db
      .select()
      .from(tadaImageFolders)
      .where(eq(tadaImageFolders.parentId, folderId))
      .limit(1);

    if (subfolders.length > 0) {
      throw new Error("Cannot delete folder that contains subfolders");
    }

    // Delete the folder
    await db.delete(tadaImageFolders).where(eq(tadaImageFolders.id, folderId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete folder",
    );
  }
}

export async function moveImageToFolder(
  imageId: string,
  folderId: string | null,
) {
  try {
    // Check if target folder allows direct image uploads
    if (folderId) {
      const folder = await db
        .select()
        .from(tadaImageFolders)
        .where(eq(tadaImageFolders.id, folderId))
        .limit(1);

      if (folder.length > 0) {
        const targetFolder = folder[0];
        // Prevent moving images to residential/commercial folders directly
        if (
          targetFolder.folderType === "residential" ||
          targetFolder.folderType === "commercial"
        ) {
          throw new Error(
            "Images cannot be placed directly in section folders. Please move to a project folder.",
          );
        }
      }
    }

    await db
      .update(tadaImages)
      .set({
        folderId: folderId,
        updatedAt: new Date(),
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error moving image:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to move image",
    );
  }
}

export async function updateFolderDetails(
  folderId: string,
  name: string,
  description?: string,
) {
  try {
    await db
      .update(tadaImageFolders)
      .set({
        name,
        description: description || null,
        updatedAt: new Date(),
      })
      .where(eq(tadaImageFolders.id, folderId));

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error updating folder:", error);
    throw new Error("Failed to update folder");
  }
}

export async function getProjectDetails(projectId: string) {
  try {
    // Get project folder details
    const project = await db
      .select()
      .from(tadaImageFolders)
      .where(eq(tadaImageFolders.id, projectId))
      .limit(1);

    if (project.length === 0) {
      return null;
    }

    // Get all images in the project
    const images = await db
      .select()
      .from(tadaImages)
      .where(eq(tadaImages.folderId, projectId))
      .orderBy(tadaImages.sortOrder, tadaImages.createdAt);

    return {
      ...project[0],
      images,
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return null;
  }
}
