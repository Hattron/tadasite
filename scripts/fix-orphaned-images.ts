import { db } from '@/lib/db';
import { tadaImageFolders } from '@/lib/schema';

async function fixOrphanedImages() {
  try {
    console.log('🔧 Fixing orphaned images...');

    // Create the missing folder_main folder
    await db.insert(tadaImageFolders).values({
      id: 'folder_main',
      name: 'Main Gallery',
      description: 'Main gallery images',
      parentId: null,
      folderType: 'project', // or you could make it a special type
      sortOrder: 0,
    });

    console.log('✅ Created folder_main successfully!');
    console.log('🎉 Orphaned images should now be visible in the gallery manager.');

  } catch (error) {
    console.error('❌ Error fixing orphaned images:', error);
  }
}

fixOrphanedImages(); 