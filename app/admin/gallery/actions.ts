'use server';

import { db } from '@/lib/db';
import { tadaImages } from '@/lib/schema';
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
    throw new Error('Failed to upload image');
  }
}

export async function deleteImage(imageId: string) {
  try {
    // Get image details first
    const image = await db
      .select()
      .from(tadaImages)
      .where(eq(tadaImages.id, imageId))
      .limit(1);

    if (image.length === 0) {
      throw new Error('Image not found');
    }

    // Delete from ImageKit
    if (!imagekit) {
      throw new Error('ImageKit not initialized on server');
    }
    await imagekit.deleteFile(image[0].imagekitFileId);

    // Delete from database
    await db
      .delete(tadaImages)
      .where(eq(tadaImages.id, imageId));

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