import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { StarsBackground } from "./design/StarsBackground";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DemoLe = lazy(() => import("./pages/DemoLe"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const EnSightsPage = lazy(() => import("./pages/EnSightsPage"));
const KAIPage = lazy(() => import("./pages/KAIPage"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/DemoLe" element={<DemoLe />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/EnSights" element={<EnSightsPage />} />
          <Route path="/KAI" element={<KAIPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
