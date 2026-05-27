"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { socials } from "@/lib/data";

const expertise = [
  {
    title: "REACT & NEXT.JS",
    sub: "SSR, RSC, perf",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    )
  },
  {
    title: "TYPESCRIPT",
    sub: "Type-safe systems",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    title: "DATABASES",
    sub: "PG, Redis, Mongo",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <line x1="12" y1="4" x2="12" y2="20"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
      </svg>
    )
  },
  {
    title: "CLOUD / AWS",
    sub: "Infra, Docker",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      </svg>
    )
  }
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY     = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      id="about"
      ref={ref}
      style={{ borderTop: "1px solid #2a2a2e", padding: "7rem 4rem",
        background: "#09090b", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: "4rem", alignItems: "start" }}>

        {/* Left — text */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">ABOUT ME <span className="font-mono text-muted" style={{ marginLeft: "0.3rem" }}>/ 01</span></p>

          <h2 className="font-display font-bold text-ivory"
            style={{ fontSize: "clamp(2rem,2.8vw,2.8rem)", lineHeight: "1.2", marginBottom: "2rem" }}>
            Crafting <strong className="text-gold">systems</strong> that stand the test of scale.
          </h2>

          <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.75", marginBottom: "2.5rem" }}>
            Professional software engineer with extensive experience in architecting enterprise-grade web applications. Deep understanding of modern ecosystems.
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-muted transition-colors"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none", borderBottom: "1px solid #2a2a2e", paddingBottom: "0.25rem",
                  transition: "color 0.3s, border-color 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#C9A05A"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#C9A05A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#8A8680"; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#2a2a2e"; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Middle — portrait */}
        <motion.div style={{ y: portraitY, position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden", borderRadius: "4px", background: "#111113" }}>
              <Image
                src="/portrait.jpg"
                alt="Nihal portrait"
                fill
                style={{ objectFit: "cover", filter: "grayscale(0.85) contrast(1.1)",
                  transition: "filter 0.6s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0.3) contrast(1.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0.85) contrast(1.1)"; }}
              />
            </div>

            {/* Stat chip */}
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "-2rem",
              background: "#161618", border: "1px solid #2a2a2e", padding: "1.2rem", zIndex: 2 }}>
              <div className="font-display font-bold text-gold" style={{ fontSize: "2rem", lineHeight: "1" }}>7+</div>
              <div className="font-mono text-muted" style={{ fontSize: "0.6rem", letterSpacing: "0.12em",
                textTransform: "uppercase", marginTop: "0.3rem" }}>Years Exp.</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Expertise */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">TECHNICAL EXPERTISE <span className="font-mono text-muted" style={{ marginLeft: "0.3rem" }}>/ 02</span></p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#2a2a2e" }}
          >
            {expertise.map((skill, idx) => (
              <div
                key={idx}
                style={{ background: "#111113", padding: "2rem 1.5rem",
                  display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div className="text-gold" style={{ display: "flex", alignItems: "center" }}>
                  {skill.icon}
                </div>
                <div>
                  <div className="text-ivory" style={{ fontSize: "0.75rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{skill.title}</div>
                  <div className="font-mono text-muted" style={{ fontSize: "0.65rem", lineHeight: "1.4" }}>{skill.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
