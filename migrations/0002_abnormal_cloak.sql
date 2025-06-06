ALTER TABLE "tada_image_folders" ADD COLUMN "folder_type" varchar(50) DEFAULT 'project';--> statement-breakpoint
ALTER TABLE "tada_images" ADD COLUMN "is_residential_cover" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "tada_images" ADD COLUMN "is_commercial_cover" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "tada_images" ADD COLUMN "is_project_cover" boolean DEFAULT false NOT NULL;