import { db } from '@/lib/db';
import { tadaImages, tadaImageFolders } from '@/lib/schema';
import { eq } from 'drizzle-orm';

async function consolidateFolders() {
  try {
    console.log('🔧 Consolidating folder structure...');

    // First, check current state
    const folders = await db.select().from(tadaImageFolders);
    const images = await db.select().from(tadaImages);
    
    console.log(`Current folders: ${folders.map(f => `${f.name} (${f.id})`).join(', ')}`);
    console.log(`Current images: ${images.length} total`);

    // 1. Create folder_main if it doesn't exist
    const mainFolder = folders.find(f => f.id === 'folder_main');
    if (!mainFolder) {
      await db.insert(tadaImageFolders).values({
        id: 'folder_main',
        name: 'Main',
        description: 'Main gallery images',
        parentId: null,
        folderType: 'main',
        sortOrder: 0,
      });
      console.log('✅ Created folder_main');
    } else {
      console.log('📁 folder_main already exists');
    }

    // 2. Ensure folder_residential exists with correct type
    const residentialFolder = folders.find(f => f.id === 'folder_residential');
    if (!residentialFolder) {
      await db.insert(tadaImageFolders).values({
        id: 'folder_residential',
        name: 'Residential',
        description: 'Residential projects',
        parentId: null,
        folderType: 'residential',
        sortOrder: 1,
      });
      console.log('✅ Created folder_residential');
    } else {
      console.log('📁 folder_residential already exists');
    }

    // 3. Ensure folder_commercial exists with correct type  
    const commercialFolder = folders.find(f => f.id === 'folder_commercial');
    if (!commercialFolder) {
      await db.insert(tadaImageFolders).values({
        id: 'folder_commercial',
        name: 'Commercial',
        description: 'Commercial projects',
        parentId: null,
        folderType: 'commercial',
        sortOrder: 2,
      });
      console.log('✅ Created folder_commercial');
    } else {
      console.log('📁 folder_commercial already exists');
    }

    // 4. Move any images from folder_hero to folder_main
    const heroFolder = folders.find(f => f.id === 'folder_hero');
    if (heroFolder) {
      const heroImages = images.filter(img => img.folderId === 'folder_hero');
      if (heroImages.length > 0) {
        for (const image of heroImages) {
          await db
            .update(tadaImages)
            .set({ folderId: 'folder_main' })
            .where(eq(tadaImages.id, image.id));
        }
        console.log(`✅ Moved ${heroImages.length} images from hero to main folder`);
      }

      // Delete the hero folder
      await db.delete(tadaImageFolders).where(eq(tadaImageFolders.id, 'folder_hero'));
      console.log('✅ Deleted folder_hero');
    }

    // 5. Update any remaining orphaned images to use folder_main if they were referencing folder_main but it didn't exist
    // This should now be fixed since we created folder_main

    console.log('🎉 Folder consolidation complete!');
    console.log('📊 Final structure should be: Main, Residential, Commercial + project subfolders');

  } catch (error) {
    console.error('❌ Error consolidating folders:', error);
  }
}

consolidateFolders(); 