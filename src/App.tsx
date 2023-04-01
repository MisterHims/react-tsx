// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { CssBaseline } from "@mui/material"; /*
Reset.CSS fourni par MUI */

// Import Main Components
import MainRoutes, { DocsRoutes, ExercicesRoutes } from "./components/MainRoutes";

// Import Main Style(s)
import "../src/styles/app.css";
import "../src/styles/colors.css";

// Import Animated Background
import ParticlesBackground from "./components/animated/ParticlesBackground";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App">
        <MainRoutes />
        <DocsRoutes />
        <ExercicesRoutes />
        <ParticlesBackground />
      </div>
    </BrowserRouter>
  );
}

export default App;
