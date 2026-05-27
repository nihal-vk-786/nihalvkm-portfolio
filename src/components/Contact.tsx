"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2022 — PRESENT",
    company: "Global Tech",
    role: "Senior Software Engineer",
    desc: "Architected highly available services serving millions of users.",
    num: "01",
  },
  {
    year: "2019 — 2022",
    company: "Fintech Ltd.",
    role: "Software Engineer",
    desc: "30% latency reduction via query optimization.",
    num: "02",
  },
  {
    year: "2017 — 2019",
    company: "Digital Agency",
    role: "Frontend Developer",
    desc: "Translated design systems into reusable React components.",
    num: "03",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    tenant: 37,
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // TEXTAREA CHANGE
  const handleTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // FORM SUBMIT
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://staging-api.raihsuite.com/v1/crm/enquiries/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tenant: 37,
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            message: form.message,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Enquiry submitted successfully!");

        setForm({
          tenant: 37,
          name: "",
          email: "",
          mobile: "",
          message: "",
        });

        console.log(data);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  // INPUT STYLE
  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #2a2a2e",
    padding: "0.7rem 0",
    fontFamily: "var(--font-syne)",
    fontSize: "0.9rem",
    color: "#F0EDE6",
    outline: "none",
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid #2a2a2e",
        padding: "7rem 4rem",
        background: "#09090b",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="section-label"
            style={{ marginBottom: "2.5rem" }}
          >
            EXPERIENCE
            <span
              className="font-mono text-muted"
              style={{ marginLeft: "0.3rem" }}
            >
              / 04
            </span>
          </p>

          <div>
            {experiences.map((experience, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "11rem 1fr",
                  gap: "1.5rem",
                  padding: "2.5rem 0",
                  position: "relative",
                  borderBottom: "1px solid #2a2a2e",
                  borderTop:
                    index === 0
                      ? "1px solid #2a2a2e"
                      : "none",
                }}
              >
                {/* NUMBER */}
                <div
                  className="font-display font-bold"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "2.5rem",
                    fontSize: "4rem",
                    lineHeight: "1",
                    pointerEvents: "none",
                    color: "rgba(255,255,255,0.04)",
                    userSelect: "none",
                  }}
                >
                  {experience.num}
                </div>

                {/* LEFT */}
                <div>
                  <div
                    className="font-mono text-gold"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {experience.year}
                  </div>

                  <div
                    className="font-display text-muted"
                    style={{
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    {experience.company}
                  </div>
                </div>

                {/* RIGHT */}
                <div style={{ paddingRight: "3.5rem" }}>
                  <div
                    className="font-ui font-bold text-ivory"
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {experience.role}
                  </div>

                  <p
                    className="text-muted"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {experience.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="section-label"
            style={{ marginBottom: "2.5rem" }}
          >
            CONTACT
            <span
              className="font-mono text-muted"
              style={{ marginLeft: "0.3rem" }}
            >
              / 05
            </span>
          </p>

          <h2
            className="font-display font-bold text-ivory"
            style={{
              fontSize: "clamp(3rem,4.5vw,4.5rem)",
              lineHeight: "1.1",
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Build{" "}
            <em
              className="text-gold"
              style={{
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              Together.
            </em>
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Available for projects & collaborations.
          </p>

          <div style={{ marginBottom: "3rem" }}>
            <a
              href="mailto:nihal@example.com"
              className="font-mono text-gold"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                borderBottom: "1px solid #C9A05A",
                paddingBottom: "0.3rem",
                textDecoration: "none",
              }}
            >
              nihal@example.com
            </a>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-gold"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#C9A05A";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#2a2a2e";
                  }}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-gold"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  EMAIL
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#C9A05A";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#2a2a2e";
                  }}
                />
              </div>

              {/* MOBILE */}
              <div>
                <label
                  htmlFor="mobile"
                  className="font-mono text-gold"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  MOBILE
                </label>

                <input
                  id="mobile"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#C9A05A";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderBottomColor =
                      "#2a2a2e";
                  }}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-gold"
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.8rem",
                  }}
                >
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleTextArea}
                  required
                  style={{
                    ...inputStyle,
                    minHeight: "120px",
                    resize: "none",
                    border: "1px solid #2a2a2e",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "#C9A05A";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "#2a2a2e";
                  }}
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="btn-gold"
              disabled={loading}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "1.1rem",
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading
                ? "Submitting..."
                : "SUBMIT INQUIRY ↗"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}