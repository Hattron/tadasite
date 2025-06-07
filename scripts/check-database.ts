import { db } from '@/lib/db';
import { tadaImages, tadaImageFolders } from '@/lib/schema';
import { eq } from 'drizzle-orm';

async function checkDatabase() {
  try {
    console.log('🔍 Checking database contents...');

    // Check folders
    const folders = await db.select().from(tadaImageFolders);
    console.log(`📁 Found ${folders.length} folders:`);
    folders.forEach(folder => {
      console.log(`   - ${folder.name} (${folder.id}) - type: ${folder.folderType || 'project'}`);
    });

    // Check images
    const images = await db.select().from(tadaImages);

    // Check for orphaned images (referencing non-existent folders)
    const folderIds = new Set(folders.map(f => f.id));
    const orphanedImages = images.filter(img => img.folderId && !folderIds.has(img.folderId));
    console.log(`🔍 Found ${orphanedImages.length} orphaned images:`);
    orphanedImages.forEach(image => {
      console.log(`   - ${image.fileName} references missing folder: ${image.folderId}`);
    });
    console.log(`🖼️  Found ${images.length} images:`);
    images.forEach(image => {
      console.log(`   - ${image.fileName} (${image.id}) - folder: ${image.folderId} - hero: ${image.isHero}`);
    });

    // Check hero images specifically
    const heroImages = await db.select().from(tadaImages).where(eq(tadaImages.isHero, true));
    console.log(`🦸 Found ${heroImages.length} hero images:`);
    heroImages.forEach(image => {
      console.log(`   - ${image.fileName} - ${image.imagekitUrl}`);
    });

    console.log('\n📊 Summary:');
    console.log(`Total folders: ${folders.length}`);
    console.log(`Total images: ${images.length}`);
    console.log(`Hero images: ${heroImages.length}`);

  } catch (error) {
    console.error('❌ Error checking database:', error);
  }
}

checkDatabase(); 