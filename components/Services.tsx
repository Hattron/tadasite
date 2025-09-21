"use client";

import { Button } from "./ui/button";
import {
  Paintbrush,
  Sofa,
  Ruler,
  Home,
  Layers,
  Layout,
  Wrench,
  RefreshCw,
  ClipboardCheck,
  Camera,
  Hammer,
  Lightbulb,
  Blinds,
  Brush,
  Image as ArtIcon,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type ServiceItem = {
  icon: LucideIcon;
  text: string;
};

type ServiceGroup = {
  title: string;
  icon: LucideIcon;
  services: ServiceItem[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Design & Selection",
    icon: Paintbrush,
    services: [
      { icon: Paintbrush, text: "Paint Consultations" },
      { icon: Sofa, text: "Furniture Layout and Selection" },
      { icon: Layers, text: "Materials and Finishes Selections" },
      { icon: Home, text: "New Home Finish Selections" },
      { icon: Camera, text: "Home Staging" },
    ],
  },
  {
    title: "Planning & Management",
    icon: Layout,
    services: [
      { icon: Ruler, text: "Space Planning and Floor Plans" },
      { icon: Wrench, text: "Kitchen and Bath Remodels" },
      { icon: RefreshCw, text: "Partial/Full Renovations" },
      { icon: ClipboardCheck, text: "Project Management" },
      { icon: Camera, text: "3D Drawings and Mood Boards" },
    ],
  },
  {
    title: "Custom & Decor",
    icon: Hammer,
    services: [
      { icon: Hammer, text: "Custom Millwork and Furniture Design" },
      { icon: Lightbulb, text: "Lighting Plans and Selections" },
      { icon: Blinds, text: "Window Treatments" },
      { icon: Brush, text: "Decorative Wall Treatments" },
      { icon: ArtIcon, text: "Art and Accessories" },
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <h2 className="services-heading-title">Services</h2>
      </div>

      <div className="services-grid">
        {serviceGroups.map(({ title, icon: GroupIcon, services }) => (
          <motion.article
            key={title}
            className="services-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <div className="services-card-header">
              <div className="services-icon" aria-hidden="true">
                <GroupIcon className="services-icon-vector" />
              </div>
              <h3 className="services-card-title">{title}</h3>
              <span className="services-card-divider" aria-hidden="true" />
            </div>

            <ul className="services-list">
              {services.map(({ icon: ItemIcon, text }) => (
                <li key={text} className="services-list-item">
                  <span className="services-list-icon" aria-hidden="true">
                    <ItemIcon className="services-list-icon-vector" />
                  </span>
                  <span className="services-list-text">{text}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="services-cta">
        <Link href="/contact">
          <Button size="lg" className="services-cta-button">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
