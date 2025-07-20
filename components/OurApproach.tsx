import { getCopyContent } from "@/lib/hardcoded-copy";
import OurApproachClient from "./client/OurApproachClient";

export default function OurApproach() {
  // Get hardcoded copy content
  const content = {
    heading: getCopyContent("about-our-approach-heading") || "Our Approach",
    philosophyTitle:
      getCopyContent("about-our-approach-philosophy-title") || "Our Philosophy",
    philosophyContent:
      getCopyContent("about-our-approach-philosophy-content") ||
      "Renovating doesn't have to be stressful. With our experience, guidance, and collaborative approach, we make the journey as enjoyable as the destination - bringing your dream space to life, one thoughtful decision at a time.",
    uniqueTitle:
      getCopyContent("about-our-approach-unique-title") ||
      "Every Client Is Unique",
    uniqueContent:
      getCopyContent("about-our-approach-unique-content") ||
      "No two clients are alike - and neither are our designs. We create spaces that are as individual as the people who live or work in them.",
    whyTitle: getCopyContent("about-our-approach-why-title") || "Why Choose Us",
    whyContent:
      getCopyContent("about-our-approach-why-content") ||
      "Working with TaDa! Interiors means saving time, avoiding costly mistakes, and gaining expert guidance every step of the way. From selecting finishes and furnishings to choosing the perfect lighting, we streamline the process and help you make confident, well-informed decisions.",
  };

  return <OurApproachClient content={content} />;
}
