import { db } from '@/lib/db';
import { tadaImageFolders } from '@/lib/schema';

async function seedGalleryStructure() {
  try {
    console.log('Seeding gallery structure...');

    // Create main sections
    await db.insert(tadaImageFolders).values([
      {
        id: 'folder_hero',
        name: 'Hero',
        description: 'Hero image selection',
        parentId: null,
        folderType: 'hero',
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