"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        borderTop: "1px solid #2a2a2e",
        padding: "7rem 4rem",
        background: "#111113",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Technical Expertise
          <span
            className="font-mono text-muted"
            style={{ marginLeft: "0.3rem" }}
          >
            / 02
          </span>
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "#2a2a2e",
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-cursor="true"
              style={{
                background: "#161618",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                transition: "background 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "#09090b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "#161618";
              }}
            >
              <div
                className="text-gold"
                style={{ fontSize: "1.4rem", lineHeight: "1" }}
              >
                {skill.icon}
              </div>

              <div
                className="text-ivory font-ui"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {skill.name}
              </div>

              <div
                className="font-mono text-muted"
                style={{
                  fontSize: "0.65rem",
                  lineHeight: "1.6",
                }}
              >
                {skill.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}