CREATE TABLE "tada_image_folders" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"parent_id" varchar(50),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tada_images" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"folder_id" varchar(50),
	"imagekit_file_id" varchar(100) NOT NULL,
	"imagekit_url" text NOT NULL,
	"file_name" varchar(255) NOT NULL,
	"original_name" varchar(255) NOT NULL,
	"size" integer NOT NULL,
	"width" integer,
	"height" integer,
	"mime_type" varchar(100) NOT NULL,
	"alt" text,
	"caption" text,
	"is_hero" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
