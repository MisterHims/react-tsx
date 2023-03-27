import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Exercice01 from "../main-content/exercices/Exercice01";
import Exercice02 from "../main-content/exercices/Exercice02";
import Exercice03 from "../main-content/exercices/Exercice03";
import Exercice04 from "../main-content/exercices/Exercice04";
import TailwindCSSIntroduction from "../main-content/docs/tailwindcss/TailwindCSSIntroduction";
import FlowbiteDarkMode from "../main-content/docs/flowbite/FlowbiteDarkMode";

const HeaderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Home />} />
      <Route path="/DarkMode" element={<Home />} />

      <Route path="exercices/exercice-01" element={<Exercice01 />} />
      <Route path="exercices/exercice-02" element={<Exercice02 />} />
      <Route path="exercices/exercice-03" element={<Exercice03 />} />
      <Route path="exercices/exercice-04" element={<Exercice04 />} />

      <Route path="docs/tailwindcss-introduction" element={<TailwindCSSIntroduction />} />
      <Route path="docs/dark-mode-with-flowbite" element={<FlowbiteDarkMode />} />
    </Routes>
  );
};

export default HeaderRoutes;
