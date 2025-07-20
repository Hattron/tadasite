"use server";

import { db } from "@/lib/db";
import { tadaCopyContent } from "@/lib/schema";
import { eq, asc, and } from "drizzle-orm";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export interface CopyContentData {
  id: string;
  sectionKey: string;
  title: string | null;
  content: string;
  page: string;
  section: string;
  contentType: string;
  sortOrder: number;
  isActive: boolean;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Get all copy content
export async function getAllCopyContent(): Promise<CopyContentData[]> {
  try {
    const result = await db
      .select()
      .from(tadaCopyContent)
      .where(eq(tadaCopyContent.isActive, true))
      .orderBy(asc(tadaCopyContent.page), asc(tadaCopyContent.sortOrder));

    return result.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));
  } catch (error) {
    console.error("Error fetching copy content:", error);
    return [];
  }
}

// Get copy content by page
export async function getCopyContentByPage(
  page: string,
): Promise<CopyContentData[]> {
  try {
    const result = await db
      .select()
      .from(tadaCopyContent)
      .where(
        and(eq(tadaCopyContent.page, page), eq(tadaCopyContent.isActive, true)),
      )
      .orderBy(asc(tadaCopyContent.sortOrder));

    return result.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));
  } catch (error) {
    console.error("Error fetching copy content by page:", error);
    return [];
  }
}

// Get copy content by section
export async function getCopyContentBySection(
  page: string,
  section: string,
): Promise<CopyContentData[]> {
  try {
    const result = await db
      .select()
      .from(tadaCopyContent)
      .where(
        and(
          eq(tadaCopyContent.page, page),
          eq(tadaCopyContent.section, section),
          eq(tadaCopyContent.isActive, true),
        ),
      )
      .orderBy(asc(tadaCopyContent.sortOrder));

    return result.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }));
  } catch (error) {
    console.error("Error fetching copy content by section:", error);
    return [];
  }
}

// Get single copy content by section key
export async function getCopyContentByKey(
  sectionKey: string,
): Promise<CopyContentData | null> {
  try {
    const result = await db
      .select()
      .from(tadaCopyContent)
      .where(
        and(
          eq(tadaCopyContent.sectionKey, sectionKey),
          eq(tadaCopyContent.isActive, true),
        ),
      )
      .limit(1);

    if (result.length === 0) return null;

    return {
      ...result[0],
      createdAt: new Date(result[0].createdAt),
      updatedAt: new Date(result[0].updatedAt),
    };
  } catch (error) {
    console.error("Error fetching copy content by key:", error);
    return null;
  }
}

// Helper function to get multiple content pieces by keys
export async function getCopyContentByKeys(
  sectionKeys: string[],
): Promise<Record<string, string>> {
  try {
    const result = await db
      .select()
      .from(tadaCopyContent)
      .where(and(eq(tadaCopyContent.isActive, true)));

    const contentMap: Record<string, string> = {};
    result.forEach((item) => {
      if (sectionKeys.includes(item.sectionKey)) {
        contentMap[item.sectionKey] = item.content;
      }
    });

    return contentMap;
  } catch (error) {
    console.error("Error fetching copy content by keys:", error);
    return {};
  }
}

// Create new copy content
export async function createCopyContent(data: {
  sectionKey: string;
  title?: string;
  content: string;
  page: string;
  section: string;
  contentType?: string;
  description?: string;
  sortOrder?: number;
}): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    const id = nanoid();

    await db.insert(tadaCopyContent).values({
      id,
      sectionKey: data.sectionKey,
      title: data.title || null,
      content: data.content,
      page: data.page,
      section: data.section,
      contentType: data.contentType || "paragraph",
      description: data.description || null,
      sortOrder: data.sortOrder || 0,
      isActive: true,
    });

    // Revalidate pages that might use this content
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/admin");

    // Also trigger cache revalidation across all edge nodes
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/revalidate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.REVALIDATE_SECRET,
            paths: ["/", "/about", "/admin"],
          }),
        },
      );
    } catch (error) {
      console.warn("Failed to trigger edge cache revalidation:", error);
    }

    return { success: true, id };
  } catch (error) {
    console.error("Error creating copy content:", error);
    return { success: false, error: "Failed to create copy content" };
  }
}

// Update copy content
export async function updateCopyContent(
  id: string,
  data: {
    title?: string;
    content?: string;
    sortOrder?: number;
    description?: string;
  },
): Promise<{ success: boolean; error?: string }> {
  try {
    await db
      .update(tadaCopyContent)
      .set({
        ...data,
        title: data.title || null,
        description: data.description || null,
        updatedAt: new Date(),
      })
      .where(eq(tadaCopyContent.id, id));

    // Revalidate pages that might use this content
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/admin");

    // Also trigger cache revalidation across all edge nodes
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/revalidate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.REVALIDATE_SECRET,
            paths: ["/", "/about", "/admin"],
          }),
        },
      );
    } catch (error) {
      console.warn("Failed to trigger edge cache revalidation:", error);
    }

    return { success: true };
  } catch (error) {
    console.error("Error updating copy content:", error);
    return { success: false, error: "Failed to update copy content" };
  }
}

// Delete copy content (soft delete)
export async function deleteCopyContent(
  id: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    await db
      .update(tadaCopyContent)
      .set({
        isActive: false,
        updatedAt: new Date(),
      })
      .where(eq(tadaCopyContent.id, id));

    // Revalidate pages that might use this content
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/admin");

    // Also trigger cache revalidation across all edge nodes
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/revalidate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.REVALIDATE_SECRET,
            paths: ["/", "/about", "/admin"],
          }),
        },
      );
    } catch (error) {
      console.warn("Failed to trigger edge cache revalidation:", error);
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting copy content:", error);
    return { success: false, error: "Failed to delete copy content" };
  }
}
