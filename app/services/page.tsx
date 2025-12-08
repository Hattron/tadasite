import { Metadata } from "next";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our wide range of interior design services, including paint consultations, renovations, space planning, and custom millwork for residential and commercial projects.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
