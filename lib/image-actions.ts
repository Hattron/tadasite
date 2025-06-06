'use server';

import { db } from '@/lib/db';
import { tadaImages, tadaImageFolders } from '@/lib/schema';
import { eq, isNull } from 'drizzle-orm';
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
    const id = `folder_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await db.insert(tadaImageFolders).values({
      id,
      name,
      description: description || null,
      parentId: parentId || null,
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
    throw new Error('Failed to move image');
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