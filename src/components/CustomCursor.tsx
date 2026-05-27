"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);

    let frame: number;
    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + "px";
        ringRef.current.style.top  = pos.current.ry + "px";
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    const expand = () => {
      if (!dotRef.current || !ringRef.current) return;
      dotRef.current.style.transform  = "translate(-50%,-50%) scale(0.5)";
      ringRef.current.style.width     = "56px";
      ringRef.current.style.height    = "56px";
      ringRef.current.style.opacity   = "0.8";
    };
    const shrink = () => {
      if (!dotRef.current || !ringRef.current) return;
      dotRef.current.style.transform  = "translate(-50%,-50%) scale(1)";
      ringRef.current.style.width     = "36px";
      ringRef.current.style.height    = "36px";
      ringRef.current.style.opacity   = "0.5";
    };
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", width: 10, height: 10,
          background: "#C9A05A", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9999,
          transform: "translate(-50%,-50%)",
          transition: "transform 0.15s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", width: 36, height: 36,
          border: "1px solid #C9A05A", borderRadius: "50%",
          pointerEvents: "none", zIndex: 9998,
          transform: "translate(-50%,-50%)",
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
          opacity: 0.5,
        }}
      />
    </>
  );
}
