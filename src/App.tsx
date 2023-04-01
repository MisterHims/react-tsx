// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { CssBaseline } from "@mui/material";
/* CCSBaseline est un Reset.CSS fourni par MUI */

// Import Main Components
import MainRoutes, { DocsRoutes, ExercicesRoutes } from "./components/routes/MainRoutes";

// Import Main Style(s)
import "./assets/styles/app.css";
import "./assets/styles/colors.css";

// Import Animated Background
import ParticlesBackground from "./components/animated-backgrounds/ParticlesBackground";

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