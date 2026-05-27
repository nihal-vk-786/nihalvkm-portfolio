"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ borderTop: "1px solid #2a2a2e", padding: "7rem 4rem", background: "#111113" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Professional Experience
          <span className="font-mono text-muted" style={{ marginLeft: "0.3rem" }}>/ 04</span>
        </motion.p>

        <div>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "grid", gridTemplateColumns: "14rem 1fr",
                gap: "4rem", padding: "3.5rem 0", position: "relative",
                borderBottom: "1px solid #2a2a2e",
                borderTop: idx === 0 ? "1px solid #2a2a2e" : "none",
              }}
            >
              {/* Ghost number */}
              <div
                className="font-display font-bold"
                style={{ position: "absolute", right: 0, top: "3.5rem",
                  fontSize: "6rem", lineHeight: "1", pointerEvents: "none",
                  color: "rgba(201,160,90,0.05)", userSelect: "none" }}
              >
                {exp.num}
              </div>

              {/* Left */}
              <div>
                <div className="font-mono text-gold"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {exp.year}
                </div>
                <div className="font-display text-muted"
                  style={{ fontSize: "1.05rem", fontStyle: "italic" }}>
                  {exp.company}
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="font-ui font-bold text-ivory"
                  style={{ fontSize: "1.25rem", marginBottom: "0.85rem", letterSpacing: "0.01em" }}>
                  {exp.role}
                </div>
                <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
