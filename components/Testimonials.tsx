"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title?: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "TaDa! Interiors was there from day one, all the way to completion. Joanna took the time to ensure that my living spaces that have truly enhanced the value of my home. Now that my first renovation project is done, I'm looking to start another one with TaDa! Interiors.",
    name: "Marina",
    location: "Kanata",
  },
  {
    quote:
      "Maureen has done several decorating and sewing projects for my business. She is very professional, creative, and pleasant to deal with and the results are always on time, on budget and exceed my expectations. I would not hesitate to recommend TaDa! Interior Design.",
    name: "Mike Traub",
    title: "Vice President, Riverstone Retirement Community",
    location: "Ottawa",
  },
  {
    quote:
      "I want you to know how pleased I am with the outstanding service your company has provided me. I couldn't let our business relationship come to an end without telling you how much I've enjoyed your friendly service. It's been a pleasure to work with people who knows the meaning of creativity, efficiency and dedication. I have always been able to rely on your flexibility and courteous service. Thank you again for making my home a 'beautiful home'",
    name: "Anna",
    location: "Orleans",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [containerHeight, setContainerHeight] = useState(320); // Default min height
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate container height based on longest testimonial
  useEffect(() => {
    if (!isMobile || !measureRef.current) return;

    const measureHeight = () => {
      let maxHeight = 320; // minimum height

      testimonials.forEach((testimonial) => {
        // Create a temporary element to measure content height
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.width = "320px"; // max-w-sm equivalent
        tempDiv.style.padding = "24px"; // p-6 equivalent
        tempDiv.style.boxSizing = "border-box";
        tempDiv.innerHTML = `
          <div style="font-size: 14px; line-height: 1.6; font-style: italic; margin-bottom: 16px;">
            "${testimonial.quote}"
          </div>
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${testimonial.name}
            ${testimonial.title ? `<span style="font-size: 12px; font-weight: 400; display: block;">${testimonial.title}</span>` : ""}
          </div>
          <div style="font-size: 12px;">${testimonial.location}</div>
        `;

        document.body.appendChild(tempDiv);
        const height = tempDiv.offsetHeight + 100; // Increased buffer significantly
        document.body.removeChild(tempDiv);

        maxHeight = Math.max(maxHeight, height);
      });

      // Add extra margin for container padding and decorative quote
      setContainerHeight(maxHeight + 40);
    };

    measureHeight();
  }, [isMobile]);

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < testimonials.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
      setUserHasInteracted(true); // Stop auto-rotation when user interacts
    } else if (newIndex < 0) {
      // Wrap to last testimonial
      setDirection(-1);
      setCurrentIndex(testimonials.length - 1);
      setUserHasInteracted(true);
    } else if (newIndex >= testimonials.length) {
      // Wrap to first testimonial
      setDirection(1);
      setCurrentIndex(0);
      setUserHasInteracted(true);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setUserHasInteracted(true); // Stop auto-rotation when user interacts
  };

  // Auto-advance carousel on mobile (only if user hasn't interacted)
  useEffect(() => {
    if (!isMobile || userHasInteracted) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setDirection(1);
    }, 7500);

    return () => clearInterval(timer);
  }, [isMobile, userHasInteracted]);

  return (
    <section
      className="py-12 sm:py-20 px-4 sm:px-8"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-4"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-primary)",
            }}
          >
            Testimonials
          </h2>

          {/* Decorative line */}
          <motion.div
            className="flex justify-center mb-4 sm:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="h-0.5"
              style={{ backgroundColor: "var(--color-secondary)" }}
            ></div>
          </motion.div>

          <p
            className="text-base sm:text-lg max-w-3xl mx-auto px-4"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-secondary)",
            }}
          >
            Hear what our clients have to say about working with TaDa! Interior
            Design.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div
            className="relative overflow-hidden"
            style={{ height: `${containerHeight}px` }}
          >
            <div ref={measureRef} />
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 flex items-start justify-center px-4 py-6 cursor-grab active:cursor-grabbing"
              >
                <div
                  className="relative rounded-2xl shadow-sm border p-6 group hover:shadow-md transition-shadow duration-300 flex flex-col w-full max-w-sm pointer-events-none"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--color-primary)",
                    borderWidth: "1px",
                  }}
                >
                  {/* Quote text */}
                  <blockquote
                    className="text-sm leading-relaxed italic relative z-10 flex-grow mb-4"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-secondary)",
                    }}
                  >
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Author info - positioned at bottom */}
                  <div className="relative z-10">
                    <div
                      className="font-semibold text-base mb-1"
                      style={{
                        color: "var(--color-text)",
                        fontFamily: "var(--font-primary)",
                      }}
                    >
                      {testimonials[currentIndex].name}
                      {testimonials[currentIndex].title ? (
                        <span
                          className="font-normal text-xs block"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {testimonials[currentIndex].title}
                        </span>
                      ) : null}
                    </div>
                    <div
                      className="text-xs"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-secondary)",
                      }}
                    >
                      {testimonials[currentIndex].location}
                    </div>
                  </div>

                  {/* Large decorative quote mark - bottom right */}
                  <div
                    className="absolute bottom-3 right-4 opacity-20 text-6xl leading-none"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <span style={{ fontFamily: "serif" }}>&rdquo;</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots only */}
          <div className="flex justify-center mt-1 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "opacity-100" : "opacity-40"
                }`}
                style={{
                  backgroundColor: "var(--color-secondary)",
                  transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl shadow-sm border p-6 sm:p-8 group hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[350px] sm:min-h-[400px]"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-primary)",
                borderWidth: "1px",
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Quote text */}
              <blockquote
                className="text-sm sm:text-base leading-relaxed italic relative z-10 flex-grow"
                style={{
                  color: "var(--color-text)",
                  fontFamily: "var(--font-secondary)",
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author info - positioned at bottom */}
              <motion.div
                className="relative z-10 mt-4 sm:mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div
                  className="font-semibold text-base sm:text-lg mb-1"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-primary)",
                  }}
                >
                  {testimonial.name}
                  {testimonial.title && (
                    <span
                      className="font-normal text-xs sm:text-sm block"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {testimonial.title}
                    </span>
                  )}
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-secondary)",
                  }}
                >
                  {testimonial.location}
                </div>
              </motion.div>

              {/* Large decorative quote mark - bottom right */}
              <motion.div
                className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 opacity-20 text-6xl sm:text-8xl leading-none"
                style={{ color: "var(--color-primary)" }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <span style={{ fontFamily: "serif" }}>&rdquo;</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
