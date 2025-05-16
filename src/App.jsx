import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DemoLe from "./pages/DemoLe";
import ContactPage from "./pages/ContactPage";
import EnSightsPage from "./pages/EnSightsPage";
import KAIPage from "./pages/KAIPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/DemoLe" element={<DemoLe />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/EnSights" element={<EnSightsPage />} />
        <Route path="/KAI" element={<KAIPage />} />
      </Routes>
    </>
  );
};

export default App;
