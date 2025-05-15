"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "../../lib/utils";

export const TextStarsBackground = ({
  text = "HERMEIAS",
  starDensity = 0.00015,
  patternStarDensity = 0.8,
  randomStarCount = 150,
  connectionDistance = 100,
  textColor = "rgba(255, 255, 255, 0.8)",
  className,
}) => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);
  const patternStarsRef = useRef([]);
  const randomStarsRef = useRef([]);
  const animationRef = useRef(null);

  // Generate pattern stars along text
  const generatePatternStars = useCallback((width, height) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    context.clearRect(0, 0, width, height);

    // Configure text
    const fontSize = Math.min(width / text.length * 1.5, height * 0.6);
    context.font = `bold ${fontSize}px sans-serif`;
    context.fillStyle = textColor;
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Draw text at center
    context.fillText(text, width / 2, height / 2);

    // Get pixel data
    const imageData = context.getImageData(0, 0, width, height).data;

    // Sample points from the text pixels
    const patternStars = [];
    const pixelGap = Math.max(1, Math.floor(1 / patternStarDensity));

    for (let y = 0; y < height; y += pixelGap) {
      for (let x = 0; x < width; x += pixelGap) {
        const i = (y * width + x) * 4;
        // If pixel has alpha > 0, it's part of the text
        if (imageData[i + 3] > 0) {
          patternStars.push({
            x,
            y,
            radius: Math.random() * 1 + 0.5,
            opacity: Math.random() * 0.5 + 0.5,
            isPatternStar: true,
          });
        }
      }
    }

    return patternStars;
  }, [text, textColor, patternStarDensity]);

  // Generate random stars
  const generateRandomStars = useCallback((width, height) => {
    const count = randomStarCount || Math.floor(width * height * starDensity);
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinkleOffset: Math.random() * Math.PI * 2,
      isPatternStar: false,
    }));
  }, [randomStarCount, starDensity]);

  // Initialize canvas and generate stars
  useEffect(() => {
    const updateCanvas = () => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const { width, height } = canvas.getBoundingClientRect();

      // Set actual canvas dimensions
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });

      // Generate stars
      patternStarsRef.current = generatePatternStars(width, height);
      randomStarsRef.current = generateRandomStars(width, height);
    };

    updateCanvas();

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      updateCanvas();
    });

    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [generatePatternStars, generateRandomStars]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsMouseInCanvas(true);
    const handleMouseLeave = () => setIsMouseInCanvas(false);

    window.addEventListener("mousemove", handleMouseMove);

    if (canvasRef.current) {
      canvasRef.current.addEventListener("mouseenter", handleMouseEnter);
      canvasRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (canvasRef.current) {
        canvasRef.current.removeEventListener("mouseenter", handleMouseEnter);
        canvasRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawStar = (star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    };

    const drawConnection = (x1, y1, x2, y2, maxDistance, opacity = 0.5) => {
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      if (distance < maxDistance) {
        const lineOpacity = (1 - distance / maxDistance) * opacity;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const allStars = [...patternStarsRef.current, ...randomStarsRef.current];
      const patternStars = patternStarsRef.current;
      const randomStars = randomStarsRef.current;

      // Update random stars position and opacity
      randomStars.forEach(star => {
        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // Keep within bounds
        star.x = Math.max(0, Math.min(canvas.width, star.x));
        star.y = Math.max(0, Math.min(canvas.height, star.y));

        // Twinkle effect
        star.opacity = 0.3 + 0.5 * Math.sin(Date.now() * star.twinkleSpeed + star.twinkleOffset);
      });

      // Draw connections between stars
      for (let i = 0; i < randomStars.length; i++) {
        const star = randomStars[i];

        // Connect to pattern stars with higher priority
        for (let j = 0; j < patternStars.length; j++) {
          const targetStar = patternStars[j];
          drawConnection(
            star.x,
            star.y,
            targetStar.x,
            targetStar.y,
            connectionDistance * 1.5,
            0.4
          );
        }

        // Connect to nearby random stars
        for (let j = i + 1; j < randomStars.length; j++) {
          const targetStar = randomStars[j];
          drawConnection(
            star.x,
            star.y,
            targetStar.x,
            targetStar.y,
            connectionDistance * 0.7,
            0.2
          );
        }

        // Connect to mouse if in canvas
        if (isMouseInCanvas) {
          drawConnection(
            star.x,
            star.y,
            mousePosition.x,
            mousePosition.y,
            connectionDistance * 2,
            0.3
          );
        }
      }

      // Draw stars on top of connections
      allStars.forEach(drawStar);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [connectionDistance, dimensions, isMouseInCanvas, mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};
