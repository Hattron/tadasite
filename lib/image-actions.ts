'use server';

import { db } from '@/lib/db';
import { tadaImages, tadaImageFolders } from '@/lib/schema';
import { eq, isNull, and } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getHeroImage() {
  try {
    const heroImages = await db
      .select({
        id: tadaImages.id,
        imagekitUrl: tadaImages.imagekitUrl,
        alt: tadaImages.alt,
        caption: tadaImages.caption,
      })
      .from(tadaImages)
      .where(eq(tadaImages.isHero, true))
      .limit(1);

    return heroImages.length > 0 ? heroImages[0] : null;
  } catch (error) {
    console.error('Error fetching hero image:', error);
    return null;
  }
}

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
    console.error('Error fetching residential cover image:', error);
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
    console.error('Error fetching commercial cover image:', error);
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
    console.error('Error fetching images:', error);
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
    console.error('Error fetching images by folder:', error);
    return [];
  }
}

export async function getProjectsByType(type: 'residential' | 'commercial') {
  try {
    const parentFolderId = type === 'residential' ? 'folder_residential' : 'folder_commercial';
    
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
          .where(and(
            eq(tadaImages.folderId, project.id),
            eq(tadaImages.isProjectCover, true)
          ))
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
      })
    );

    return projectsWithCover;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function setHeroImage(imageId: string) {
  try {
    // First, unset any existing hero images
    await db
      .update(tadaImages)
      .set({ isHero: false })
      .where(eq(tadaImages.isHero, true));

    // Set the new hero image
    await db
      .update(tadaImages)
      .set({ isHero: true })
      .where(eq(tadaImages.id, imageId));

    return { success: true };
  } catch (error) {
    console.error('Error setting hero image:', error);
    throw new Error('Failed to set hero image');
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

    revalidatePath('/admin');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error) {
    console.error('Error setting residential cover image:', error);
    throw new Error('Failed to set residential cover image');
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

    revalidatePath('/admin');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error) {
    console.error('Error setting commercial cover image:', error);
    throw new Error('Failed to set commercial cover image');
  }
}

export async function setProjectCoverImage(imageId: string, projectId: string) {
  try {
    // First, unset any existing project cover images for this project
    await db
      .update(tadaImages)
      .set({ isProjectCover: false })
      .where(and(
        eq(tadaImages.folderId, projectId),
        eq(tadaImages.isProjectCover, true)
      ));

    // Set the new project cover image
    await db
      .update(tadaImages)
      .set({ isProjectCover: true })
      .where(eq(tadaImages.id, imageId));

    revalidatePath('/admin');
    revalidatePath('/gallery');
    return { success: true };
  } catch (error) {
    console.error('Error setting project cover image:', error);
    throw new Error('Failed to set project cover image');
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
    console.error('Error fetching folders:', error);
    return [];
  }
}

export async function createFolder(name: string, description?: string, parentId?: string) {
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
        if (parent.folderType === 'residential' || parent.folderType === 'commercial') {
          const id = `folder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          
          await db.insert(tadaImageFolders).values({
            id,
            name,
            description: description || null,
            parentId: parentId,
            folderType: 'project',
          });

          revalidatePath('/admin');
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
      folderType: 'project',
    });

    revalidatePath('/admin');
    return { success: true, id };
  } catch (error) {
    console.error('Error creating folder:', error);
    throw new Error('Failed to create folder');
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

    if (folder.length > 0 && folder[0].folderType !== 'project') {
      throw new Error('Cannot delete system folders');
    }

    // Check if folder has any images
    const imagesInFolder = await db
      .select()
      .from(tadaImages)
      .where(eq(tadaImages.folderId, folderId))
      .limit(1);

    if (imagesInFolder.length > 0) {
      throw new Error('Cannot delete folder that contains images');
    }

    // Check if folder has any subfolders
    const subfolders = await db
      .select()
      .from(tadaImageFolders)
      .where(eq(tadaImageFolders.parentId, folderId))
      .limit(1);

    if (subfolders.length > 0) {
      throw new Error('Cannot delete folder that contains subfolders');
    }

    // Delete the folder
    await db
      .delete(tadaImageFolders)
      .where(eq(tadaImageFolders.id, folderId));

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error deleting folder:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to delete folder');
  }
}

export async function moveImageToFolder(imageId: string, folderId: string | null) {
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
        if (targetFolder.folderType === 'residential' || targetFolder.folderType === 'commercial') {
          throw new Error('Images cannot be placed directly in section folders. Please move to a project folder.');
        }
      }
    }

    await db
      .update(tadaImages)
      .set({ 
        folderId: folderId,
        updatedAt: new Date()
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error moving image:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to move image');
  }
}

export async function updateFolderDetails(folderId: string, name: string, description?: string) {
  try {
    await db
      .update(tadaImageFolders)
      .set({ 
        name,
        description: description || null,
        updatedAt: new Date()
      })
      .where(eq(tadaImageFolders.id, folderId));

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error updating folder:', error);
    throw new Error('Failed to update folder');
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
    console.error('Error fetching project details:', error);
    return null;
  }
} 