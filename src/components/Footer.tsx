import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid #2a2a2e", padding: "3rem 4rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "#09090b" }}
    >
      <div className="font-display font-bold text-gold"
        style={{ fontSize: "1.3rem", letterSpacing: "0.08em" }}>
        NIHAL.
      </div>

      <p className="font-mono text-muted" style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}>
        © {new Date().getFullYear()} Nihal V K M — All rights reserved.
      </p>

      <div style={{ display: "flex", gap: "2rem" }}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-muted hover:text-gold transition-colors"
            style={{ fontSize: "0.62rem", letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
