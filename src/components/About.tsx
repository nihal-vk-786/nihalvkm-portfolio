"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { socials } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        background: "#09090b",
        borderTop: "1px solid #1b1b1f",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            style={{
              color: "#8A8680",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            About Me / 01
          </p>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: "1.05",
              color: "#F5F1EA",
              fontWeight: 700,
              marginBottom: "2rem",
              maxWidth: "700px",
            }}
          >
            Creating modern digital products with{" "}
            <span style={{ color: "#C9A05A" }}>
              premium user experiences
            </span>
            .
          </h2>

          <p
            style={{
              color: "#8A8680",
              fontSize: "1rem",
              lineHeight: "1.95",
              maxWidth: "620px",
              marginBottom: "2rem",
            }}
          >
            I’m a React developer passionate about building clean,
            high-performance web applications with modern technologies.
            Focused on elegant UI, scalable architecture, smooth animations,
            and experiences that feel premium across every screen.
          </p>

          <p
            style={{
              color: "#6f6f75",
              fontSize: "0.95rem",
              lineHeight: "1.9",
              maxWidth: "580px",
              marginBottom: "3rem",
            }}
          >
            Currently working on enterprise-level applications while constantly
            exploring new frontend technologies, design systems, and creative
            interaction patterns.
          </p>

          {/* SOCIALS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#8A8680",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #2a2a2e",
                  paddingBottom: "0.3rem",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#C9A05A";
                  e.currentTarget.style.borderBottomColor = "#C9A05A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8A8680";
                  e.currentTarget.style.borderBottomColor = "#2a2a2e";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{
            y: portraitY,
            position: "relative",
          }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              inset: "-10%",
              background:
                "radial-gradient(circle, rgba(201,160,90,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />

          {/* Image */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              borderRadius: "28px",
              background: "#111113",
              zIndex: 1,
            }}
          >
            <Image
              src="/portrait.jpg"
              alt="Nihal portrait"
              fill
              priority
              style={{
                objectFit: "cover",
                filter: "grayscale(0.75) contrast(1.05)",
                transition: "0.6s ease",
              }}
            />
          </div>

          {/* Floating Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: "-2rem",
              left: "-2rem",
              background: "rgba(15,15,18,0.92)",
              backdropFilter: "blur(14px)",
              border: "1px solid #2a2a2e",
              borderRadius: "24px",
              padding: "1.4rem 1.6rem",
              zIndex: 2,
              minWidth: "190px",
            }}
          >
            <h3
              style={{
                fontSize: "2.6rem",
                lineHeight: 1,
                color: "#C9A05A",
                marginBottom: "0.4rem",
                fontWeight: 700,
              }}
            >
              4.5+
            </h3>

            <p
              style={{
                color: "#8A8680",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Years Experience
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}