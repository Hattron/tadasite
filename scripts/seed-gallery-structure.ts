import { db } from '@/lib/db';
import { tadaImageFolders } from '@/lib/schema';

async function seedGalleryStructure() {
  try {
    console.log('Seeding gallery structure...');

    // Create main sections
    await db.insert(tadaImageFolders).values([
      {
        id: 'folder_main',
        name: 'Main',
        description: 'Main gallery images',
        parentId: null,
        folderType: 'main',
        sortOrder: 0,
      },
      {
        id: 'folder_residential',
        name: 'Residential',
        description: 'Residential design projects',
        parentId: null,
        folderType: 'residential',
        sortOrder: 1,
      },
      {
        id: 'folder_commercial',
        name: 'Commercial',
        description: 'Commercial design projects',
        parentId: null,
        folderType: 'commercial',
        sortOrder: 2,
      },
    ]);

    console.log('Gallery structure seeded successfully!');
  } catch (error) {
    console.error('Error seeding gallery structure:', error);
  }
}

seedGalleryStructure(); 