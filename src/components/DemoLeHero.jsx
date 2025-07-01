"use client";
import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

import { Canvas } from "@react-three/fiber";
import DemoLePhone from "../design/DemoLePhone";
import { Spotlight } from "../design/Spotlight";
import { ShootingStars } from "../design/ShootingStars";

const DemoLeHero = () => {

  return (
    <div className="w-full min-h-screen relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight />
      </div>
      <div className="relative z-10 min-h-screen">
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
            <ErrorBoundary>
              <Suspense fallback={<p>Loading 3D model...</p>}>
                <Canvas className="w-full h-full">
                  <DemoLePhone shadows scale={0.9} />
                </Canvas>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShootingStars />
      </div>
    </div>
  );
};

export default DemoLeHero;
