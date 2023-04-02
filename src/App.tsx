// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { CssBaseline } from "@mui/material";
/* CCSBaseline est un Reset.CSS fourni par MUI */

// Import Main Components
import MainRoutes, { DocsRoutes, ExercicesRoutes } from "./routes/MainRoutes";

// Import Main Style(s)
import "./assets/styles/global/app.css";
import "./assets/styles/global/colors.css";

import { Global, css } from '@emotion/react';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      {/* Global est utilisé pour écrasé le background-color natif d'Emotion par du transparent */}
      <Global styles={css` body { background-color: transparent; } `} />
      <div className="App">
        <MainRoutes />
        <DocsRoutes />
        <ExercicesRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
