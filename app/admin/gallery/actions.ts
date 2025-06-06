'use server';

import { db } from '@/lib/db';
import { tadaImages, tadaImageFolders } from '@/lib/schema';
import { imagekit } from '@/lib/imagekit';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function uploadImageToImageKit(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const folderId = formData.get('folderId') as string;
    const alt = formData.get('alt') as string;
    const caption = formData.get('caption') as string;

    if (!file) {
      throw new Error('No file provided');
    }

    // Check if target folder allows direct image uploads
    if (folderId) {
      const folder = await db
        .select()
        .from(tadaImageFolders)
        .where(eq(tadaImageFolders.id, folderId))
        .limit(1);

      if (folder.length > 0) {
        const targetFolder = folder[0];
        // Prevent uploading images to residential/commercial folders directly
        if (targetFolder.folderType === 'residential' || targetFolder.folderType === 'commercial') {
          throw new Error('Images cannot be uploaded directly to section folders. Please select a project folder or create a new project.');
        }
      }
    }

    if (!imagekit) {
      throw new Error('ImageKit not initialized on server');
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Upload to ImageKit - all images go in /tada/ folder
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: folderId ? `/tada/folder_${folderId}` : '/tada',
      useUniqueFileName: true,
    });

    // Save to database
    const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await db.insert(tadaImages).values({
      id: imageId,
      folderId: folderId || null,
      imagekitFileId: uploadResponse.fileId,
      imagekitUrl: uploadResponse.url,
      fileName: uploadResponse.name,
      originalName: file.name,
      size: file.size,
      width: uploadResponse.width || null,
      height: uploadResponse.height || null,
      mimeType: file.type,
      alt: alt || null,
      caption: caption || null,
    });

    revalidatePath('/admin');
    return { success: true, imageId, url: uploadResponse.url };
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to upload image');
  }
}

export async function deleteImage(imageId: string) {
  try {
    // Get image details first
    const images = await db
      .select({
        imagekitFileId: tadaImages.imagekitFileId,
      })
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    if (images.length === 0) {
      throw new Error('Image not found');
    }

    const image = images[0];

    // Delete from ImageKit
    if (imagekit && image.imagekitFileId) {
      try {
        await imagekit.deleteFile(image.imagekitFileId);
      } catch (error) {
        console.error('Error deleting from ImageKit:', error);
        // Continue with database deletion even if ImageKit deletion fails
      }
    }

    // Delete from database
    await db.delete(tadaImages).where(eq(tadaImages.id, imageId));

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error deleting image:', error);
    throw new Error('Failed to delete image');
  }
}

export async function updateImageDetails(imageId: string, alt: string, caption: string) {
  try {
    await db
      .update(tadaImages)
      .set({ 
        alt: alt || null, 
        caption: caption || null,
        updatedAt: new Date()
      })
      .where(eq(tadaImages.id, imageId));

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error('Error updating image:', error);
    throw new Error('Failed to update image');
  }
} 