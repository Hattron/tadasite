import OurApproachClient from "./client/OurApproachClient";

export default function OurApproach() {
  const content = {
    heading: "Our Approach",
    philosophyTitle: "Our Philosophy",
    philosophyContent:
      "Renovating doesn't have to be stressful. With our experience, guidance, and collaborative approach, we make the design process enjoyable and rewarding. We're here to listen, understand your vision, and bring it to life in ways that exceed your expectations.",
    uniqueTitle: "Every Client Is Unique",
    uniqueContent:
      "No two clients are alike, and neither are our designs. We believe that every space should tell a unique story- one that reflects the personality, lifestyle, and needs of the people who live or work there. We take the time to understand your vision, then thoughtfully transform it into a space that feels truly personal, functional, and beautifully you.",
    whyTitle: "Why Choose Us",
    whyContent:
      "Working with TaDa! Interiors means saving time, avoiding costly mistakes, and gaining expert guidance every step of the way. We handle the details so you can focus on enjoying the transformation of your space.",
  };

  return <OurApproachClient content={content} />;
}
