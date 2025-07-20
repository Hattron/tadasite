import { getCopyContentByKeys } from "@/lib/copy-actions";
import OurApproachClient from "./client/OurApproachClient";

export default async function OurApproach() {
  // Fetch copy content for the Our Approach section
  const copyContent = await getCopyContentByKeys([
    "about-our-approach-heading",
    "about-our-approach-philosophy-title",
    "about-our-approach-philosophy-content",
    "about-our-approach-unique-title",
    "about-our-approach-unique-content",
    "about-our-approach-why-title",
    "about-our-approach-why-content",
  ]);

  // Extract content with fallbacks
  const content = {
    heading: copyContent["about-our-approach-heading"] || "Our Approach",
    philosophyTitle:
      copyContent["about-our-approach-philosophy-title"] || "Our Philosophy",
    philosophyContent:
      copyContent["about-our-approach-philosophy-content"] ||
      "Renovating doesn't have to be stressful. With our experience, guidance, and collaborative approach, we make the journey as enjoyable as the destination - bringing your dream space to life, one thoughtful decision at a time.",
    uniqueTitle:
      copyContent["about-our-approach-unique-title"] ||
      "Every Client Is Unique",
    uniqueContent:
      copyContent["about-our-approach-unique-content"] ||
      "No two clients are alike - and neither are our designs. We create spaces that are as individual as the people who live or work in them.",
    whyTitle: copyContent["about-our-approach-why-title"] || "Why Choose Us",
    whyContent:
      copyContent["about-our-approach-why-content"] ||
      "Working with TaDa! Interiors means saving time, avoiding costly mistakes, and gaining expert guidance every step of the way. From selecting finishes and furnishings to choosing the perfect lighting, we streamline the process and help you make confident, well-informed decisions.",
  };

  return <OurApproachClient content={content} />;
}
