"use client";

import { useEffect, useRef, useMemo } from "react";

interface ParticleBackgroundProps {
  particleCount?: number;
  colors?: string[];
  className?: string;
  speed?: number;
}

export default function ParticleBackground({
  particleCount = 50,
  colors = ["#D4AF37", "#1D4E89", "#E63946"],
  className = "",
  speed = 1,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Memoize particles array initialization
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5 * speed,
      speedY: (Math.random() - 0.5) * 0.5 * speed,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [particleCount, colors, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Draw static particles for reduced motion
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.x * canvas.width,
          particle.y * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });
      return;
    }

    let animationFrameId: number;
    let isRunning = true;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const animate = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX / canvas.width;
        particle.y += particle.speedY / canvas.height;

        // Wrap around edges
        if (particle.x < 0) particle.x = 1;
        if (particle.x > 1) particle.x = 0;
        if (particle.y < 0) particle.y = 1;
        if (particle.y > 1) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(
          particle.x * canvas.width,
          particle.y * canvas.height,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      isRunning = false;
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
