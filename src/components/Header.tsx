import "../styles/header.css";
/* import Grid from '@mui/material/Grid'; */
// import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// import { Box } from "@mui/system"; /* For Inline Styles in Box */
// import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
/* NavLink helps us conditionally add styling attributes to the rendered element */

/* MUI Joy -- Menu Component */
import Button from "@mui/joy/Button";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";

import HeaderLogotype from "./header/HeaderLogotype";
import HeaderNotificationBar from "./header/HeaderNotificationBar";
import HeaderLinks from "./header/HeaderLinks";
import HeaderTools from "./header/HeaderTools";

const Header = () => {
  return (
    <header>
      <div className="header-background">
        <div>
          <picture>
            <source
              srcSet="src/assets/medias/background/header-top-background.avif"
              type="image/avif"
            />
            <img
              src="src/assets/medias/background/header-top-background.png"
              alt=""
              className="light-version"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet="src/assets/medias/background/header-top-dark-background.avif"
              type="image/avif"
            />
            <img
              src="src/assets/medias/background/header-top-dark-background.png"
              alt=""
              className="dark-version"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-items">
            <HeaderLogotype />
            <HeaderNotificationBar />
            <div className="header-quick-access">
              <HeaderLinks />
              <HeaderTools />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
