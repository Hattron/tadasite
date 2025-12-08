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
  folderType: varchar('folder_type', { length: 50 }).default('project'), // 'main', 'residential', 'commercial', 'project'
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
  heroTitle: text('hero_title'),
  heroSubtitle: text('hero_subtitle'),
  isMobileHero: boolean('is_mobile_hero').notNull().default(false),
  isFirstImage: boolean('is_first_image').notNull().default(false),
  firstImageTitle: text('first_image_title'),
  firstImageSubtitle: text('first_image_subtitle'),
  isAboutUsImage: boolean('is_about_us_image').notNull().default(false),
  isMaureenImage: boolean('is_maureen_image').notNull().default(false),
  isJoannaImage: boolean('is_joanna_image').notNull().default(false),
  isTeamImage: boolean('is_team_image').notNull().default(false),
  isSecondImage: boolean('is_second_image').notNull().default(false),
  secondImageTitle: text('second_image_title'),
  secondImageSubtitle: text('second_image_subtitle'),
  isThirdImage: boolean('is_third_image').notNull().default(false),
  thirdImageTitle: text('third_image_title'),
  thirdImageSubtitle: text('third_image_subtitle'),
  isResidentialCover: boolean('is_residential_cover').notNull().default(false),
  isCommercialCover: boolean('is_commercial_cover').notNull().default(false),
  isProjectCover: boolean('is_project_cover').notNull().default(false),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const tadaCopyContent = pgTable('tada_copy_content', {
  id: varchar('id', { length: 50 }).primaryKey(),
  sectionKey: varchar('section_key', { length: 100 }).notNull().unique(),
  title: text('title'),
  content: text('content').notNull(),
  page: varchar('page', { length: 50 }).notNull(), // 'home', 'about', 'contact'
  section: varchar('section', { length: 100 }).notNull(), // 'about-us', 'team', 'our-approach', 'business-hours', 'services-residential', 'services-commercial'
  contentType: varchar('content_type', { length: 50 }).notNull().default('paragraph'), // 'paragraph', 'heading', 'list', 'address'
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  description: text('description'), // Admin description of what this content is for
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}); 