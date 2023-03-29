// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material"; /*
Reset.CSS fourni par MUI */

// Import Main Components
import Header from "./components/Header";
import HomePage from "./components/templates/HomeTemplate";
import Footer from "./components/Footer";
import MainRoutes, { DocsRoutes, ExercicesRoutes } from "./components/MainRoutes";

// Import Main Style(s)
import "../src/styles/app.css";
import "../src/styles/colors.css";
import "../src/styles/main-wrapper.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <div className="App flex flex-col">
        <Header />
        <MainRoutes />
        <DocsRoutes />
        <ExercicesRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
