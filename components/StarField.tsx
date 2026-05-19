"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseOpacity: number;
  speed: number;
  phase: number;
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
      const count = Math.floor((canvas!.width * canvas!.height) / 14000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 1.1 + 0.2,
        baseOpacity: Math.random() * 0.55 + 0.2,
        speed: Math.random() * 1.5 + 0.4,
        phase: Math.random() * Math.PI * 2,
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
        const t = time * 0.0003 * star.speed + star.phase;
        const twinkle = Math.sin(t);
        const opacity = star.baseOpacity * (0.45 + 0.55 * ((twinkle + 1) / 2));
        const r = star.radius * (0.85 + 0.15 * ((twinkle + 1) / 2));
        const glowR = r * 4;

        const grad = ctx!.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, glowR
        );
        grad.addColorStop(0,   `rgba(255, 255, 255, ${opacity})`);
        grad.addColorStop(0.25, `rgba(210, 225, 255, ${opacity * 0.55})`);
        grad.addColorStop(1,   `rgba(180, 210, 255, 0)`);

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
