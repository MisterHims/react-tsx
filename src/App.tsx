import MuiClassNameSetup from "./components/utils/styling-functions/MuiClassNameSetup";
// ...other component imports

// My Theme
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/utils/theme-provider/Theme';

// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { CssBaseline } from "@mui/material";
/* CCSBaseline est un Reset.CSS fourni par MUI */

// Import Main Components
import MainRoutes from "./routes/MainRoutes";

// Import Main Style(s)
import "../build/styles/global/app.css";
import "../build/styles/global/colors.css";

import { Global, css } from '@emotion/react';

function App() {
  return (
    <BrowserRouter>
      <MuiClassNameSetup />
      <CssBaseline />
      {/* Global est utilisé pour écraser le background-color natif d'Emotion par du transparent */}
      <Global styles={css` body { background-color: transparent; } `} />
      <ThemeProvider theme={theme}>
        <div className="App">
          <MainRoutes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;