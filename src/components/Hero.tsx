"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const blob1Y   = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const blob2Y   = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const gridY    = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-end overflow-hidden bg-obsidian"
      style={{ paddingBottom: "5rem" }}
    >
      {/* Ambient blobs */}
      <motion.div
        style={{ y: blob1Y, position: "absolute", top: "-10%", right: "-5%",
          width: "50vw", height: "80vh", borderRadius: "50%",
          background: "radial-gradient(ellipse at 60% 40%, rgba(201,160,90,0.07) 0%, transparent 65%)",
          pointerEvents: "none" }}
      />
      <motion.div
        style={{ y: blob2Y, position: "absolute", bottom: "20%", left: "-10%",
          width: "40vw", height: "60vh",
          background: "radial-gradient(ellipse, rgba(201,160,90,0.04) 0%, transparent 70%)",
          pointerEvents: "none" }}
      />

      {/* Grid overlay */}
      <motion.div
        style={{ y: gridY, position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(201,160,90,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,90,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px", pointerEvents: "none" }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity, width: "100%",
          maxWidth: "1400px", margin: "0 auto", padding: "8rem 4rem 0" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-gold"
          style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "2rem" }}
        >
          <span style={{ display: "block", width: "2.5rem", height: "1px", background: "#C9A05A", flexShrink: 0 }} />
          Software Engineer &amp; Architect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-ivory"
          style={{ fontSize: "clamp(4rem,10vw,9.5rem)", lineHeight: "0.95",
            letterSpacing: "-0.02em", marginBottom: "3rem" }}
        >
          Building
          <br />
          <em className="text-gold" style={{ fontStyle: "italic" }}>Exceptional</em>
          <br />
          Software.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
            justifyContent: "space-between", gap: "2rem" }}
        >
          <p className="text-muted" style={{ maxWidth: "28rem", fontSize: "1rem", lineHeight: "1.75" }}>
            Engineering high-performance web applications with a focus on clean architecture,
            modern design patterns, and exceptional user experiences that scale.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-end" }}>
            <a href="#projects" className="btn-gold">View Selected Work ↗</a>
            <a href="#contact"  className="btn-outline">Initiate Contact →</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity, position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.5rem" }}
      >
        <span className="font-mono text-muted" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: "1px", height: "3rem",
          background: "linear-gradient(to bottom, #8A8680, transparent)" }} />
      </motion.div>
    </section>
  );
}
