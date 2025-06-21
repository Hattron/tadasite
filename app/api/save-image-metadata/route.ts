import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { tadaImages } from '@/lib/schema';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      folderId,
      imagekitFileId,
      imagekitUrl,
      fileName,
      originalName,
      size,
      width,
      height,
      mimeType,
      alt,
      caption
    } = body;

    // Generate unique image ID
    const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Save to database
    await db.insert(tadaImages).values({
      id: imageId,
      folderId: folderId || null,
      imagekitFileId,
      imagekitUrl,
      fileName,
      originalName,
      size,
      width: width || null,
      height: height || null,
      mimeType,
      alt: alt || null,
      caption: caption || null,
    });

    revalidatePath('/admin');
    
    return NextResponse.json({ 
      success: true, 
      imageId,
      url: imagekitUrl 
    });
  } catch (error) {
    console.error('Error saving image metadata:', error);
    return NextResponse.json(
      { error: 'Failed to save image metadata' },
      { status: 500 }
    );
  }
} 