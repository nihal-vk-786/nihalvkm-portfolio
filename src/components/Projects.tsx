"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="work"
      style={{
        borderTop: "1px solid #2a2a2e",
        padding: "7rem 4rem",
        background: "#09090b",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Heading */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Selected Work
          <span
            className="font-mono text-muted"
            style={{ marginLeft: "0.3rem" }}
          >
            / 03
          </span>
        </motion.p>

        {/* Projects */}
        <div>
          {projects?.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-cursor="true"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                gap: "3rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid #2a2a2e",
                borderTop: idx === 0 ? "1px solid #2a2a2e" : "none",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget as HTMLDivElement
                ).style.background = "rgba(201,160,90,0.02)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "transparent";
              }}
            >
              {/* Index */}
              <div
                className="font-mono text-gold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                }}
              >
                {`0${idx + 1}`}
              </div>

              {/* Project Info */}
              <div>
                <h3
                  className="font-display font-bold text-ivory"
                  style={{
                    fontSize: "clamp(1.4rem,2.2vw,2rem)",
                    marginBottom: "0.5rem",
                    transition: "color 0.3s",
                    lineHeight: "1.1",
                  }}
                >
                  {project?.title || "Untitled Project"}
                </h3>

                <p
                  className="text-muted"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: "1.7",
                    maxWidth: "38rem",
                    marginBottom: "1rem",
                  }}
                >
                  {project?.description || "No description available."}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {Array.isArray(project?.tech) &&
                    project.tech.map(
                      (tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="font-mono text-muted"
                          style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            border: "1px solid #2a2a2e",
                            padding: "0.2rem 0.65rem",
                            borderRadius: "999px",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                </div>
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "flex-end",
                }}
              >
                {project?.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-muted hover:text-gold transition-colors"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Repository ↗
                  </a>
                )}

                {project?.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-muted hover:text-gold transition-colors"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Live System ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}