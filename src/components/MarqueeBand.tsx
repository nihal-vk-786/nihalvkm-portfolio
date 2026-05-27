import { marqueeItems } from "@/lib/data";

export default function MarqueeBand() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{ borderTop: "1px solid #2a2a2e", borderBottom: "1px solid #2a2a2e",
      padding: "0.75rem 0", overflow: "hidden", background: "#111113" }}>
      <div className="animate-marquee" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-muted"
            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0 2.5rem" }}
          >
            {item}
            <span style={{ color: "#C9A05A", margin: "0 0.5rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
