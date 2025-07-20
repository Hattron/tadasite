"use client";

import { Heart, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

interface OurApproachContent {
  heading: string;
  philosophyTitle: string;
  philosophyContent: string;
  uniqueTitle: string;
  uniqueContent: string;
  whyTitle: string;
  whyContent: string;
}

interface OurApproachClientProps {
  content: OurApproachContent;
}

export default function OurApproachClient({ content }: OurApproachClientProps) {
  return (
    <section
      style={{
        backgroundColor: "var(--color-background)",
        paddingTop: "var(--spacing-3xl)",
        paddingBottom: "var(--spacing-3xl)",
        paddingLeft: "var(--spacing-lg)",
        paddingRight: "var(--spacing-lg)",
      }}
      className="md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-center"
          style={{
            color: "var(--color-primary)",
            fontFamily: "var(--font-primary)",
            marginBottom: "var(--spacing-3xl)",
          }}
          dangerouslySetInnerHTML={{ __html: content.heading }}
        />

        {/* Mobile Layout - Stacked with Spacing */}
        <div className="block md:hidden space-y-8">
          {/* Column 1: Our Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center px-4"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2,
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Heart className="w-8 h-8" />
              </motion.div>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-md)",
              }}
              dangerouslySetInnerHTML={{ __html: content.philosophyTitle }}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 mx-auto"
              style={{
                backgroundColor: "var(--color-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
              dangerouslySetInnerHTML={{ __html: content.philosophyContent }}
            />
          </motion.div>

          {/* Column 2: Every Client Is Unique */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-4"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3,
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Users className="w-8 h-8" />
              </motion.div>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-md)",
              }}
              dangerouslySetInnerHTML={{ __html: content.uniqueTitle }}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-1 mx-auto"
              style={{
                backgroundColor: "var(--color-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
              dangerouslySetInnerHTML={{ __html: content.uniqueContent }}
            />
          </motion.div>

          {/* Column 3: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center px-4"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.4,
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl font-bold"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-primary)",
                marginBottom: "var(--spacing-md)",
              }}
              dangerouslySetInnerHTML={{ __html: content.whyTitle }}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-1 mx-auto"
              style={{
                backgroundColor: "var(--color-primary)",
                marginBottom: "var(--spacing-lg)",
              }}
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-secondary)",
                fontSize: "var(--font-size-base)",
              }}
              dangerouslySetInnerHTML={{ __html: content.whyContent }}
            />
          </motion.div>
        </div>

        {/* Desktop Layout - Aligned columns with icons */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Column 1: Our Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  <Heart className="w-10 h-10" />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl lg:text-2xl font-bold"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
                dangerouslySetInnerHTML={{ __html: content.philosophyTitle }}
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-1 mx-auto"
                style={{
                  backgroundColor: "var(--color-primary)",
                  marginBottom: "var(--spacing-lg)",
                }}
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base lg:text-lg leading-relaxed"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-base)",
                }}
                dangerouslySetInnerHTML={{ __html: content.philosophyContent }}
              />
            </motion.div>

            {/* Column 2: Every Client Is Unique */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  <Users className="w-10 h-10" />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl lg:text-2xl font-bold"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
                dangerouslySetInnerHTML={{ __html: content.uniqueTitle }}
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-1 mx-auto"
                style={{
                  backgroundColor: "var(--color-primary)",
                  marginBottom: "var(--spacing-lg)",
                }}
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base lg:text-lg leading-relaxed"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-base)",
                }}
                dangerouslySetInnerHTML={{ __html: content.uniqueContent }}
              />
            </motion.div>

            {/* Column 3: Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.4,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                  }}
                >
                  <Award className="w-10 h-10" />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl lg:text-2xl font-bold"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-primary)",
                  marginBottom: "var(--spacing-md)",
                }}
                dangerouslySetInnerHTML={{ __html: content.whyTitle }}
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-1 mx-auto"
                style={{
                  backgroundColor: "var(--color-primary)",
                  marginBottom: "var(--spacing-lg)",
                }}
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base lg:text-lg leading-relaxed"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                  fontSize: "var(--font-size-base)",
                }}
                dangerouslySetInnerHTML={{ __html: content.whyContent }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
