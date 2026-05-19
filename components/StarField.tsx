"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  maxOpacity: number;
  cycleDuration: number;
  timeOffset: number;
}

interface ShootingStar {
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  speed: number;       // px/ms
  trailLength: number; // px
  startTime: number;
  duration: number;    // ms
}

// Star is visible ~92% of its cycle — dark only 8%
// This keeps ≥80% of stars on screen at all times given random phases
function winkEnvelope(phase: number): number {
  if (phase < 0.08) return phase / 0.08;                     // fade in
  if (phase < 0.84) return 1;                                 // hold
  if (phase < 0.92) return 1 - (phase - 0.84) / 0.08;       // fade out
  return 0;                                                    // brief dark
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
    let shootingStar: ShootingStar | null = null;
    let nextShootTime = 0; // set on first frame

    function createStars() {
      const count = Math.floor((canvas!.width * canvas!.height) / 13000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        radius: Math.random() * 0.9 + 0.25,
        maxOpacity: Math.random() * 0.35 + 0.12,
        cycleDuration: (Math.random() * 10 + 6) * 1000, // 6–16 s
        timeOffset: Math.random() * 25000,
      }));
    }

    function scheduleNext(now: number) {
      nextShootTime = now + (30 + Math.random() * 60) * 1000; // 30–90 s
    }

    function spawnShootingStar(now: number) {
      const w = canvas!.width;
      const h = canvas!.height;

      // Angle 20–40° below horizontal
      const angle = (20 + Math.random() * 20) * (Math.PI / 180);

      // Randomly pick one of two directions
      const goRight = Math.random() > 0.5;

      let startX: number, startY: number;
      let dx: number, dy: number;

      if (goRight) {
        // From top edge (left portion) or upper-left edge → right and slightly down
        const fromTop = Math.random() > 0.35;
        startX = fromTop ? Math.random() * w * 0.65 : 0;
        startY = fromTop ? 0 : Math.random() * h * 0.45;
        dx =  Math.cos(angle);
        dy =  Math.sin(angle);
      } else {
        // From top edge (right portion) or upper-right edge → left and slightly down
        const fromTop = Math.random() > 0.35;
        startX = fromTop ? w * 0.35 + Math.random() * w * 0.65 : w;
        startY = fromTop ? 0 : Math.random() * h * 0.45;
        dx = -Math.cos(angle);
        dy =  Math.sin(angle);
      }

      // Travel 75–85% of screen width over 2.1–2.8 s
      const travelDist = w * (0.75 + Math.random() * 0.10);
      const duration   = 2100 + Math.random() * 700;

      shootingStar = {
        startX,
        startY,
        dx,
        dy,
        speed: travelDist / duration,
        trailLength: travelDist * (0.14 + Math.random() * 0.06),
        startTime: now,
        duration,
      };
    }

    function drawShootingStar(now: number) {
      if (!shootingStar) return;
      const s = shootingStar;
      const elapsed  = now - s.startTime;
      const progress = elapsed / s.duration;

      if (progress >= 1) { shootingStar = null; return; }

      // Opacity envelope: fade in 10%, full 10–80%, fade out 20%
      let alpha: number;
      if      (progress < 0.10) alpha = progress / 0.10;
      else if (progress < 0.80) alpha = 1;
      else                       alpha = 1 - (progress - 0.80) / 0.20;
      alpha *= 0.80;

      const dist  = elapsed * s.speed;
      const headX = s.startX + s.dx * dist;
      const headY = s.startY + s.dy * dist;
      const tailX = headX - s.dx * s.trailLength;
      const tailY = headY - s.dy * s.trailLength;

      // Trail: transparent tail → blue mid → bright blue-white head
      const trail = ctx!.createLinearGradient(tailX, tailY, headX, headY);
      trail.addColorStop(0,    `rgba(43,  96,  222, 0)`);
      trail.addColorStop(0.45, `rgba(80,  140, 255, ${alpha * 0.35})`);
      trail.addColorStop(0.80, `rgba(160, 205, 255, ${alpha * 0.75})`);
      trail.addColorStop(1,    `rgba(220, 238, 255, ${alpha})`);

      ctx!.save();
      ctx!.beginPath();
      ctx!.moveTo(tailX, tailY);
      ctx!.lineTo(headX, headY);
      ctx!.strokeStyle = trail;
      ctx!.lineWidth = 1.5;
      ctx!.lineCap = "round";
      ctx!.stroke();

      // Tiny bright glow at the head
      const glow = ctx!.createRadialGradient(headX, headY, 0, headX, headY, 3.5);
      glow.addColorStop(0,   `rgba(235, 248, 255, ${alpha})`);
      glow.addColorStop(0.4, `rgba(140, 195, 255, ${alpha * 0.55})`);
      glow.addColorStop(1,   `rgba(80,  140, 255, 0)`);
      ctx!.beginPath();
      ctx!.arc(headX, headY, 3.5, 0, Math.PI * 2);
      ctx!.fillStyle = glow;
      ctx!.fill();

      ctx!.restore();
    }

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
      createStars();
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      if (nextShootTime === 0) scheduleNext(now);

      if (!shootingStar && now >= nextShootTime) {
        spawnShootingStar(now);
        scheduleNext(now);
      }

      // Draw stars
      for (const star of stars) {
        const phase   = ((now + star.timeOffset) % star.cycleDuration) / star.cycleDuration;
        const opacity = star.maxOpacity * winkEnvelope(phase);
        if (opacity < 0.008) continue;

        const glowR = star.radius * 4.5;
        const g = ctx!.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowR);
        g.addColorStop(0,    `rgba(212, 228, 255, ${opacity})`);
        g.addColorStop(0.22, `rgba(190, 215, 255, ${opacity * 0.68})`);
        g.addColorStop(0.55, `rgba(162, 200, 255, ${opacity * 0.24})`);
        g.addColorStop(1,    `rgba(140, 185, 255, 0)`);

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, glowR, 0, Math.PI * 2);
        ctx!.fillStyle = g;
        ctx!.fill();
      }

      drawShootingStar(now);
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
