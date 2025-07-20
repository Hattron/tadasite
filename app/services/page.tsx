"use client";

import { Button } from "@/components/ui/button";
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

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen py-16"
      style={{
        paddingTop: "calc(var(--navbar-height) + var(--spacing-md))",
        backgroundColor: "var(--color-background)",
        fontFamily: "var(--font-primary)",
        paddingBottom: "calc(var(--spacing-xl) * 2)",
      }}
    >
      <div
        className="container mx-auto"
        style={{ padding: "var(--spacing-md)" }}
      >
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--color-primary)",
              marginBottom: "var(--spacing-lg)",
            }}
          >
            Our Services
          </h1>
          <p
            className="text-lg text-center max-w-3xl mx-auto"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-secondary)",
              lineHeight: "1.6",
            }}
          >
            From personalized paint consultations to full scale renovations, we
            offer a wide range of residential and commercial design services
            tailored to meet each client&apos;s needs.
          </p>
        </div>

        {/* Large Bathtub Image */}
        <div className="mb-16">
          <div
            className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto"
            style={{
              backgroundColor: "var(--color-background)",
              border: `1px solid var(--color-text-muted)`,
            }}
          >
            <img
              src="https://ik.imagekit.io/crimsonstack/tada/Assets/tub.png"
              alt="Luxury bathroom with modern bathtub"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2
            className="text-2xl sm:text-3xl font-light tracking-tight text-center mb-12"
            style={{
              fontFamily: "var(--font-primary)",
              color: "var(--color-primary)",
              marginBottom: "var(--spacing-2xl)",
            }}
          >
            List of Services
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
                  boxShadow:
                    "var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))",
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
        </div>

        {/* Service Descriptions and Pricing */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Residential Services */}
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{
              backgroundColor: "var(--color-background)",
              border: `1px solid var(--color-text-muted)`,
              padding: "var(--spacing-xl)",
            }}
          >
            <h3
              className="text-2xl font-medium mb-6"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              Residential Services
            </h3>
            <p
              className="mb-6 leading-relaxed text-lg"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                marginBottom: "var(--spacing-lg)",
                lineHeight: "1.7",
              }}
            >
              At TaDa! Interiors, we take pride in sourcing the finest products
              and materials the market has to offer. Backed by a trusted network
              of skilled tradespeople and a keen eye for finding the perfect
              finishing touches, we make the design process both seamless and
              enjoyable. Whether you are refreshing a room or transforming an
              entire space, we ensure the journey is as rewarding as the final
              result.
            </p>
            <div
              className="text-lg font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary)",
              }}
            >
              Time and expertise for residential services are billed at an
              hourly rate of $150.00/hour plus HST
            </div>
          </div>

          {/* Commercial Services */}
          <div
            className="rounded-lg p-8 shadow-sm"
            style={{
              backgroundColor: "var(--color-background)",
              border: `1px solid var(--color-text-muted)`,
              padding: "var(--spacing-xl)",
            }}
          >
            <h3
              className="text-2xl font-medium mb-6"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            >
              Commercial Services
            </h3>
            <p
              className="mb-6 leading-relaxed text-lg"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                marginBottom: "var(--spacing-lg)",
                lineHeight: "1.7",
              }}
            >
              In addition to residential work, TaDa! Interiors has completed a
              wide range of commercial projects. Our portfolio includes - though
              is not limited to - restaurants, retail environments, office
              spaces, and condominiums.
            </p>
            <div
              className="text-lg font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary)",
              }}
            >
              Time and expertise for commercial services are billed at an hourly
              rate of $165.00/hour plus HST
            </div>
          </div>

          {/* Commercial Image - Starling Restaurant */}
          <div className="mb-12">
            <div
              className="rounded-lg overflow-hidden shadow-lg"
              style={{
                backgroundColor: "var(--color-background)",
                border: `1px solid var(--color-text-muted)`,
              }}
            >
              <img
                src="https://ik.imagekit.io/crimsonstack/tada/Assets/starling.JPG"
                alt="Commercial restaurant interior design - Starling Restaurant"
                className="w-full h-96 object-cover"
              />
            </div>
            <p
              className="text-center mt-4 text-sm"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-secondary)",
                fontStyle: "italic",
              }}
            ></p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href="/contact">
            <Button
              size="lg"
              style={{
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--button-font-size, 1.1rem)",
                fontWeight: "var(--button-font-weight, 500)",
                padding: "var(--button-padding, 1rem 2rem)",
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
              Get Started with Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
