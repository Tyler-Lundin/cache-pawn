"use client";
import React, { useRef, useEffect } from "react";

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    const layers = [
      { spacing: 130, dotSize: 3, speed: 0.0002, color: "rgba(255, 255, 255, 0.3)", rotation: 0 },
      { spacing: 100, dotSize: 2, speed: 0.0004, color: "rgba(255, 255, 255, 0.4)", rotation: 0 },
      { spacing: 70, dotSize: 1.5, speed: 0.0006, color: "rgba(255, 255, 255, 0.5)", rotation: 0 },
    ];

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      layers.forEach((layer) => {
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(layer.rotation);

        ctx.fillStyle = layer.color;
        for (let x = -width; x < width; x += layer.spacing) {
          for (let y = -height; y < height; y += layer.spacing) {
            ctx.beginPath();
            ctx.arc(x, y, layer.dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();

        layer.rotation += layer.speed;
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full min-h-[calc(100vh-100px)]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-10 h-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
