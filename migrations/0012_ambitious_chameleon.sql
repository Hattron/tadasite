CREATE TABLE "tada_copy_content" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"section_key" varchar(100) NOT NULL,
	"title" text,
	"content" text NOT NULL,
	"page" varchar(50) NOT NULL,
	"section" varchar(100) NOT NULL,
	"content_type" varchar(50) DEFAULT 'paragraph' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tada_copy_content_section_key_unique" UNIQUE("section_key")
);
