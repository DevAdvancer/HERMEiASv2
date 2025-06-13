import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DemoLe = lazy(() => import("./pages/DemoLe"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const EnSightsPage = lazy(() => import("./pages/EnSightsPage"));
const KAIPage = lazy(() => import("./pages/KAIPage"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/DemoLe" element={<DemoLe />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/EnSights" element={<EnSightsPage />} />
        <Route path="/KAI" element={<KAIPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
