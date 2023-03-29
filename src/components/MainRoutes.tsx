import { Routes, Route } from "react-router-dom";

/////////// HOME PAGES \\\\\\\\\\\

import HomeTemplate from "../pages/_templates/HomeTemplate";
import HomePage from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate><HomePage /></HomeTemplate>} />
    </Routes>
  );
};

/////////// EXERCICES PAGES \\\\\\\\\\\

// Import Exercices Template 
import ExercicesTemplate from "../pages/_templates/ExercicesTemplate";

// Import Interstitial Exercices 
import ExercicesIndex from "../pages/articles/exercices/ExercicesIndex";

// Import Exercices Files
import FlowbiteExercice01 from "../pages/articles/exercices/flowbite/FlowbiteExercice01";
import MaterialUIExercice01 from "../pages/articles/exercices/material-ui/MaterialUIExercice01";
import MaterialUIExercice02 from "../pages/articles/exercices/material-ui/MaterialUIExercice02";
import PostCSSExercice01 from "../pages/articles/exercices/postcss/PostCSSExercice01";
import TailwindCSSExercice01 from "../pages/articles/exercices/tailwindcss/TailwindCSSExercice01";
import TypescriptExercice01 from "../pages/articles/exercices/typescript/TypescriptExercice01";

const ExercicesRoutes = () => {
  return (
    <Routes>
      <Route path="exercices" element={<ExercicesTemplate><ExercicesIndex /></ExercicesTemplate>}/>
      <Route path="exercices/flowbite/exercice-01" element={<ExercicesTemplate><FlowbiteExercice01 /></ExercicesTemplate>}/>
      <Route path="exercices/material-ui/exercice-01" element={<ExercicesTemplate><MaterialUIExercice01 /></ExercicesTemplate>}/>
      <Route path="exercices/material-ui/exercice-02" element={<ExercicesTemplate><MaterialUIExercice02 /></ExercicesTemplate>}/>
      <Route path="exercices/postcss/exercice-01" element={<ExercicesTemplate><PostCSSExercice01 /></ExercicesTemplate>}/>
      <Route path="exercices/tailwindcss/exercice-01" element={<ExercicesTemplate><TailwindCSSExercice01 /></ExercicesTemplate>}/>
      <Route path="exercices/typescript/exercice-01" element={<ExercicesTemplate><TypescriptExercice01 /></ExercicesTemplate>}/>
    </Routes>
  );
};

/////////// DOCS PAGES \\\\\\\\\\\

// Import Docs Template 
import DocsTemplate from "../pages/_templates/DocsTemplate";

// Import Interstitial Docs 
import DocsIndex from "../pages/articles/docs/DocsIndex";

// Import Docs Files
import FlowbiteDarkMode from "../pages/articles/docs/flowbite/FlowbiteDarkMode";
import MyReactPresentation from "../pages/articles/docs/myreact/MyReactPresentation";
import MyReactInstallation from "../pages/articles/docs/myreact/MyReactInstallation";
import TypescriptPresentation from "../pages/articles/docs/typescript/TypescriptPresentation";
import PostCSSPresentation from "../pages/articles/docs/postcss/PostCSSPresentation";
import MaterialUIPresentation from "../pages/articles/docs/material-ui/MaterialUIPresentation";
import TailwindCSSPresentation from "../pages/articles/docs/tailwindcss/TailwindCSSPresentation";
import FlowbitePresentation from "../pages/articles/docs/flowbite/FlowbitePresentation";

const DocsRoutes = () => {
  return (
    <Routes>
      <Route path="docs" element={<DocsTemplate><DocsIndex /></DocsTemplate>}/>
      <Route path="docs/myreact/presentation" element={<DocsTemplate><MyReactPresentation /></DocsTemplate>}/>
      <Route path="docs/dark-mode-with-flowbite" element={<DocsTemplate><FlowbiteDarkMode /></DocsTemplate>}/>
      <Route path="docs/myreact/installation" element={<DocsTemplate><MyReactInstallation /></DocsTemplate>}/>
      <Route path="docs/typescript/presentation" element={<DocsTemplate><TypescriptPresentation /></DocsTemplate>}/>
      <Route path="docs/postcss/presentation" element={<DocsTemplate><PostCSSPresentation /></DocsTemplate>}/>
      <Route path="docs/material-ui/presentation" element={<DocsTemplate><MaterialUIPresentation /></DocsTemplate>}/>
      <Route path="docs/tailwindcss/presentation" element={<DocsTemplate><TailwindCSSPresentation /></DocsTemplate>}/>
      <Route path="docs/flowbite/presentation" element={<DocsTemplate><FlowbitePresentation /></DocsTemplate>}/>
    </Routes>
  );
};

export default MainRoutes;
export { DocsRoutes, ExercicesRoutes };
