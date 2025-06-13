"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import DemoLePhone from "../design/DemoLePhone";
import PhoneLeft from "../assets/PhoneLeft.png";
import { Spotlight } from "../design/Spotlight";
import { StarsBackground } from "../design/StarsBackground";
import { ShootingStars } from "../design/ShootingStars";
import { TextGenerateEffect } from "../design/TextGenerateEffect";

const DemoLeHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [words, setWords] = useState("Democratizing Legal Assistance");
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );
  const isMobile = screenWidth <= 768;

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest >= 0.2) {
        setWords("AI-Powered Legal Assistant");
      } else {
        setWords("Democratizing Legal Assistance");
      }
    });
  }, [scrollYProgress]);

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[90vh] relative overflow-hidden"
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>
      <motion.div style={{ y }} className="relative z-10 h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="order-2 md:order-1 flex items-center justify-center max-w-6xl mx-auto space-y-4 md:pl-[7vw] xl:pl-[10vw] px-4">
            {words === "Democratizing Legal Assistance" ? (
              <h1 className="text-center md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90">
                {words}
              </h1>
            ) : (
              <TextGenerateEffect
                key={words}
                words={words}
                duration={1}
                delay={0}
                filter={!isMobile}
                className="text-center md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold text-white/90"
              />
            )}
          </div>
          <div className="order-1 md:order-2 h-[80vh] relative">
            {isMobile ? (
              <img
                src={PhoneLeft}
                alt="DemoLe App"
                className="w-full h-full object-contain"
              />
            ) : (
              <Canvas className="w-full h-full">
                <DemoLePhone shadows scale={0.9} />
              </Canvas>
            )}
          </div>
        </div>
      </motion.div>
      {!isMobile && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarsBackground />
          <ShootingStars />
        </div>
      )}
    </div>
  );
};

export default DemoLeHero;
