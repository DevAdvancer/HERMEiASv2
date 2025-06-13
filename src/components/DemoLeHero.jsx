"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import DemoLePhone from "../design/DemoLePhone";
import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars";

const DemoLeHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  useEffect(() => {
    // Cleanup just in case we add listeners later
    return () => {};
  }, []);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100]);

  return (
    <div ref={containerRef} className="w-full min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>
      <motion.div style={{ y }} className="relative z-10 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="order-2 md:order-1 flex items-center justify-center max-w-6xl mx-auto space-y-4 md:pl-[7vw] xl:pl-[10vw] px-4">
            <div className="space-y-2">
              <h1 className="text-center md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90">
                Democratizing Legal Assistance
              </h1>
              <p className="text-center md:text-left text-lg text-white/70">
                AI-Powered Legal Assistant
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 h-[80vh] relative">
            <Canvas className="w-full h-full">
              <DemoLePhone shadows scale={0.9} />
            </Canvas>
          </div>
        </div>
      </motion.div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>
    </div>
  );
};

export default DemoLeHero;
