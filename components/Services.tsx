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
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceGroups = [
  {
    title: "Design & Selection",
    icon: <Paintbrush className="text-primary" />,
    services: [
      { icon: <Paintbrush />, text: "Paint Consultations" },
      { icon: <Sofa />, text: "Furniture Layout and Selection" },
      { icon: <Layers />, text: "Materials and Finishes Selections" },
      { icon: <Home />, text: "New Home Finish Selections" },
      { icon: <Camera />, text: "Home Staging" },
    ],
  },
  {
    title: "Planning & Management",
    icon: <Layout className="text-primary" />,
    services: [
      { icon: <Ruler />, text: "Space Planning and Floor Plans" },
      { icon: <Wrench />, text: "Kitchen and Bath Remodels" },
      { icon: <RefreshCw />, text: "Partial/Full Renovations" },
      { icon: <ClipboardCheck />, text: "Project Management" },
      { icon: <Camera />, text: "3D Drawings and Mood Boards" },
    ],
  },
  {
    title: "Custom & Decor",
    icon: <Hammer className="text-primary" />,
    services: [
      { icon: <Hammer />, text: "Custom Millwork and Furniture Design" },
      { icon: <Lightbulb />, text: "Lighting Plans and Selections" },
      { icon: <Blinds />, text: "Window Treatments" },
      { icon: <Brush />, text: "Decorative Wall Treatments" },
      { icon: <ArtIcon />, text: "Art and Accessories" },
    ],
  },
];

export default function Services() {
  return (
    <section
      className="py-14 px-2"
      style={{
        background: "var(--color-background)",
        textAlign: "center",
      }}
      id="services"
    >
      <h2
        className="mb-10 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight"
        style={{
          fontFamily: "var(--font-primary)",
          color: "var(--color-primary)",
          marginBottom: "var(--spacing-2xl, 2.5rem)",
        }}
      >
        Services
      </h2>
      <div className="grid gap-6 w-full max-w-7xl mx-auto px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start md:justify-items-center">
        {serviceGroups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative rounded-3xl shadow-md p-6 sm:p-8 flex flex-col h-full justify-between border overflow-hidden w-full max-w-sm md:max-w-none"
            style={{
              background: "var(--color-card, white)",
              borderColor: "var(--color-primary)",
              borderRadius: "var(--radius-3xl, 1.5rem)",
              padding: "var(--spacing-xl, 2rem)",
              boxShadow: "var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))",
              transition: "var(--transition-normal, all 0.3s ease)",
            }}
          >
            <div className="flex flex-col items-center mb-4">
              <span
                className="mb-2"
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "var(--spacing-sm, 0.5rem)",
                }}
              >
                {group.icon}
              </span>
              <span
                className="text-2xl font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "var(--text-2xl, 1.5rem)",
                  fontWeight: "var(--font-weight-semibold, 600)",
                  color: "var(--color-primary)",
                  marginBottom: "var(--spacing-sm, 0.5rem)",
                }}
              >
                {group.title}
              </span>
            </div>
            <div className="flex-1">
              <ul className="space-y-3">
                {group.services.map((service) => (
                  <li
                    key={service.text}
                    className="flex items-center gap-3 text-base text-left"
                    style={{
                      fontFamily: "var(--font-secondary)",
                      color: "var(--color-text)",
                      fontSize: "var(--text-base, 1rem)",
                      gap: "var(--spacing-md, 0.75rem)",
                    }}
                  >
                    <span style={{ color: "var(--color-primary)" }}>
                      {service.icon}
                    </span>
                    <span>{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <Button
            size="lg"
            style={{
              fontFamily: "var(--font-secondary)",
              fontSize: "var(--button-font-size, 1rem)",
              fontWeight: "var(--button-font-weight, 500)",
              padding: "var(--button-padding, 0.75rem 1.5rem)",
              borderRadius: "var(--button-radius, 0.5rem)",
              background: "var(--color-primary)",
              color: "white",
              transition: "var(--transition-normal, all 0.3s ease)",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-primary-hover, var(--color-primary))";
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-primary)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
