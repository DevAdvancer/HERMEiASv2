import React, { useEffect, useRef, useState } from 'react';

const InteractiveStarsBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const updateDimensions = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Create stars
    const createStars = () => {
      const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5;
        const opacity = Math.random() * 0.8 + 0.2;

        starsRef.current.push({
          x,
          y,
          size,
          opacity,
          flicker: Math.random() * 3
        });
      }
    };

    createStars();

    // Track mouse position
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star, index) => {
        // Star flicker effect
        star.flicker += 0.01;
        const flickerOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.flicker));

        ctx.fillStyle = `rgba(255, 255, 255, ${flickerOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect to mouse if in range
        const distance = Math.sqrt(
          Math.pow(star.x - mousePosition.x, 2) +
          Math.pow(star.y - mousePosition.y, 2)
        );

        const maxDistance = 150; // Maximum distance to connect

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.5;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          ctx.stroke();
        }

        // Connect to nearby stars
        starsRef.current.forEach((otherStar, otherIndex) => {
          if (index !== otherIndex) {
            const starDistance = Math.sqrt(
              Math.pow(star.x - otherStar.x, 2) +
              Math.pow(star.y - otherStar.y, 2)
            );

            const maxStarDistance = 100;

            if (starDistance < maxStarDistance) {
              const opacity = (1 - starDistance / maxStarDistance) * 0.2;
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.lineWidth = 0.3;
              ctx.beginPath();
              ctx.moveTo(star.x, star.y);
              ctx.lineTo(otherStar.x, otherStar.y);
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default InteractiveStarsBackground;
