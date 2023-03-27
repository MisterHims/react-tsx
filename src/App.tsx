// Import Router
import { BrowserRouter } from "react-router-dom";

// Import MUI Base
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material"; /*
Reset.CSS fourni par MUI */

// Import Main Components
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Main Style(s)
import "../src/styles/app.css";
import "../src/styles/colors.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Box className="MainWrapper flex flex-col">
          <Header />
          <MainContent />
          <Footer />
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
