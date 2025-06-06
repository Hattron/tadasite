import { pgTable, text, varchar, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const tadaCssVariables = pgTable('tada_css_variables', {
  id: varchar('id', { length: 50 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  value: text('value').notNull(),
  category: varchar('category', { length: 50 }).notNull().default('general'),
  description: text('description'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const tadaImageFolders = pgTable('tada_image_folders', {
  id: varchar('id', { length: 50 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  parentId: varchar('parent_id', { length: 50 }),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const tadaImages = pgTable('tada_images', {
  id: varchar('id', { length: 50 }).primaryKey(),
  folderId: varchar('folder_id', { length: 50 }),
  imagekitFileId: varchar('imagekit_file_id', { length: 100 }).notNull(),
  imagekitUrl: text('imagekit_url').notNull(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  originalName: varchar('original_name', { length: 255 }).notNull(),
  size: integer('size').notNull(),
  width: integer('width'),
  height: integer('height'),
  mimeType: varchar('mime_type', { length: 100 }).notNull(),
  alt: text('alt'),
  caption: text('caption'),
  isHero: boolean('is_hero').notNull().default(false),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}); 