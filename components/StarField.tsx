"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  maxOpacity: number;
  cycleDuration: number; // ms for a full wink cycle
  timeOffset: number;    // stagger so they don't all sync
}

// Returns opacity 0→1→0→0 over one normalised cycle [0,1]
// Fade in: 0–15%, hold: 15–30%, fade out: 30–45%, dark: 45–100%
function winkEnvelope(phase: number): number {
  if (phase < 0.15)  return phase / 0.15;
  if (phase < 0.30)  return 1;
  if (phase < 0.45)  return 1 - (phase - 0.30) / 0.15;
  return 0;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;
    let stars: Star[] = [];

    function createStars() {
      const count = Math.floor((canvas!.width * canvas!.height) / 13000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 0.9 + 0.25,
        maxOpacity: Math.random() * 0.35 + 0.12,   // very subtle: 0.12–0.47
        cycleDuration: (Math.random() * 14 + 8) * 1000, // 8–22 seconds
        timeOffset: Math.random() * 30000,           // spread starts across 30s
      }));
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      createStars();
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const star of stars) {
        const phase = ((time + star.timeOffset) % star.cycleDuration) / star.cycleDuration;
        const opacity = star.maxOpacity * winkEnvelope(phase);
        if (opacity < 0.008) continue; // skip fully dark stars

        const r = star.radius;
        const glowR = r * 4.5;

        // Slightly blue-tinted star: pale blue-white core, soft blue outer glow
        const grad = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowR);
        grad.addColorStop(0,    `rgba(210, 228, 255, ${opacity})`);
        grad.addColorStop(0.2,  `rgba(190, 215, 255, ${opacity * 0.7})`);
        grad.addColorStop(0.55, `rgba(160, 200, 255, ${opacity * 0.25})`);
        grad.addColorStop(1,    `rgba(140, 185, 255, 0)`);

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, glowR, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
