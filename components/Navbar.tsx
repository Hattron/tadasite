"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { imagekitConfig } from "@/lib/imagekit";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="z-50 border-b"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "var(--color-background, #ffffff)",
        borderBottomColor: "var(--color-text-muted, #6b7280)",
        borderBottomWidth: "1px",
        zIndex: 9999,
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          padding: "var(--spacing-md, 1rem) var(--spacing-md, 1rem)",
        }}
      >
        <Link
          href="/"
          className="flex items-center hover:opacity-80"
          style={{ gap: "var(--spacing-xs, 0.25rem)" }}
          onClick={closeMenu}
        >
          <img
            src={`${imagekitConfig.urlEndpoint}/tada/Assets/logosimple.png?tr=h-300,q-90`}
            alt="TaDa! Interior Design"
            className="h-20 sm:h-24"
            style={{ height: "5rem" }}
          />
          <span
            className="text-3xl sm:text-4xl font-normal"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-primary)",
            }}
          >
            TaDa! Interiors
          </span>
        </Link>

        <div
          className="hidden md:flex items-center"
          style={{ gap: "var(--spacing-lg, 1.5rem)" }}
        >
          <Link
            href="/about"
            className="font-medium pb-1 transition-all"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-secondary, Inter, sans-serif)",
              borderBottom: "2px solid transparent",
              fontSize: "var(--font-size-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.borderBottomColor = "var(--color-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-medium pb-1 transition-all"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-secondary, Inter, sans-serif)",
              borderBottom: "2px solid transparent",
              fontSize: "var(--font-size-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.borderBottomColor = "var(--color-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="font-medium pb-1 transition-all"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-secondary, Inter, sans-serif)",
              borderBottom: "2px solid transparent",
              fontSize: "var(--font-size-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.borderBottomColor = "var(--color-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Recent Projects
          </Link>
          <Link
            href="/contact"
            className="font-medium pb-1 transition-all"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-secondary, Inter, sans-serif)",
              borderBottom: "2px solid transparent",
              fontSize: "var(--font-size-lg)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.borderBottomColor = "var(--color-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.borderBottomColor = "transparent";
            }}
          >
            Contact
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
          style={{
            color: "var(--color-text, #0d0d0d)",
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--color-background, #ffffff)",
            borderTopColor: "var(--color-text-muted, #6b7280)",
          }}
        >
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/about"
              className="block py-3 px-2 font-medium rounded-md transition-all"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary, Inter, sans-serif)",
                fontSize: "var(--font-size-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(159, 149, 108, 0.08)"; // subtle secondary tint
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-3 px-2 font-medium rounded-md transition-all"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary, Inter, sans-serif)",
                fontSize: "var(--font-size-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(159, 149, 108, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block py-3 px-2 font-medium rounded-md transition-all"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary, Inter, sans-serif)",
                fontSize: "var(--font-size-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(159, 149, 108, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={closeMenu}
            >
              Recent Projects
            </Link>
            <Link
              href="/contact"
              className="block py-3 px-2 font-medium rounded-md transition-all"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-secondary, Inter, sans-serif)",
                fontSize: "var(--font-size-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(159, 149, 108, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
