"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        padding: "1.2rem 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid #2a2a2e"
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontSize: "1.4rem",
          textDecoration: "none",
          color: "#c9a05a",
          letterSpacing: "0.15em",
          fontWeight: "bold",
        }}
      >
        NIHAL.
      </a>

      {/* Menu */}
      <div
        className="hidden md:flex"
        style={{
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {Array.isArray(navLinks) &&
          navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              style={{
                position: "relative",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textDecoration: "none",
                textTransform: "uppercase",
                color: "#a1a1aa",
                fontFamily: "monospace",
                transition: "color 0.3s ease",
              }}
            >
              {link.name}
            </a>
          ))}
      </div>
    </nav>
  );
}