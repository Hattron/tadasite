import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { tadaImageFolders } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seedDefaultFolders() {
  try {
    console.log('🌱 Seeding default folders...');

    // Check if folders already exist
    const existingFolders = await db.select().from(tadaImageFolders);
    
    if (existingFolders.length > 0) {
      console.log('📁 Default folders already exist. Skipping seed.');
      return;
    }

    // Create default folders
    const defaultFolders = [
      {
        id: 'folder_main',
        name: 'Main',
        description: 'Main gallery images',
        parentId: null,
        sortOrder: 1,
      },
      {
        id: 'folder_retail',
        name: 'Retail',
        description: 'Retail project images',
        parentId: null,
        sortOrder: 2,
      },
      {
        id: 'folder_commercial',
        name: 'Commercial',
        description: 'Commercial project images',
        parentId: null,
        sortOrder: 3,
      },
    ];

    for (const folder of defaultFolders) {
      await db.insert(tadaImageFolders).values(folder);
      console.log(`✅ Created folder: ${folder.name}`);
    }

    console.log('🎉 Default folders seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding default folders:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDefaultFolders().then(() => {
  console.log('✨ Seeding complete!');
  process.exit(0);
}); 