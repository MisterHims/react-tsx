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

// import MenuListComposition from './MenuListCompositionExercices';

import DarkModeButton from "./DarkMode";

import SubMenuExercices from "./SubMenuExercices";
import SubMenuTailwindCSS from "./SubMenuTailwindCSS";
import SubMenuFlowbite from "./SubMenuFlowbite";

/*****/

const Header = () => {
  return (
    <header>
      <div className="header-background">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <source
              srcSet="src/assets/medias/background/header-top-background.avif"
              type="image/avif"
            />
            <img
              src="src/assets/medias/background/header-top-background.png"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
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
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="header-items">
            <a className="header-bar-logotype" href="/">
              <span className="sr-only">Tailwind CSS home page</span>
              <svg
                className="text-slate-900 dark:text-white w-auto h-8"
                viewBox="0 0 737.85 180"
              >
                <defs>
                  <linearGradient
                    id="A"
                    x1="2.94"
                    y1="75.71"
                    x2="246.55"
                    y2="29.44"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop offset="0" stopColor="#3c8eff" />{" "}
                    <stop offset=".31" stopColor="#5456fe" />{" "}
                    <stop offset=".84" stopColor="#bc64ff" />{" "}
                    <stop offset="1" stopColor="#4da1ff" />{" "}
                  </linearGradient>{" "}
                  <linearGradient
                    id="B"
                    x1="3.88"
                    y1="156.62"
                    x2="252.94"
                    y2="110.14"
                  />{" "}
                </defs>{" "}
                <path
                  d="M737.85 65.84a10.14 10.14 0 0 1-2.98 7.19l-15.66 15.89c-.54.55-1.43.56-1.98.02l-.02-.02-15.66-15.89c-3.97-3.97-3.98-10.41 0-14.38 3.97-3.97 10.41-3.98 14.38 0l2.28 2.13 2.29-2.14c3.98-3.96 10.42-3.95 14.38.04 1.9 1.91 2.96 4.49 2.96 7.18zm-384.87 9.07c2.87 3.46 4.3 8.76 4.3 15.89v31.47h-13.11V91.32c0-3.92-.66-6.77-1.99-8.55s-3.46-2.68-6.4-2.68c-3.5 0-6.23 1.19-8.18 3.57-1.96 2.38-2.94 5.7-2.94 9.97v28.64h-13.11V91.32c0-3.92-.65-6.77-1.94-8.55s-3.45-2.68-6.45-2.68c-3.43 0-6.12 1.19-8.08 3.57s-2.94 5.7-2.94 9.97v28.64h-13.11v-51.3h12.8v7.24c1.54-2.8 3.67-4.91 6.4-6.35 2.73-1.43 5.84-2.15 9.34-2.15 7.76 0 12.9 3.22 15.42 9.65 1.61-3.01 3.92-5.37 6.92-7.08 3.01-1.71 6.36-2.57 10.07-2.57 5.81 0 10.14 1.73 13.01 5.19zm63.99-3.82l-30.84 70.08h-13.22l9.34-20.88-21.4-49.2h13.85l14.48 36.19 14.9-36.19h12.9zm66.93 51.19h-14.69l-12.69-23.6c-1.19-2.24-2.66-3.81-4.41-4.72s-3.95-1.36-6.61-1.36h-10.28v29.69H421.9V48.32h32.73c8.39 0 14.77 1.87 19.15 5.61 4.37 3.74 6.56 9.14 6.56 16.21 0 5.67-1.59 10.33-4.77 14.01-3.18 3.67-7.68 6.07-13.48 7.19 3.92 1.05 7.06 3.81 9.44 8.29l12.38 22.66zm-19.93-42.96c2.37-1.92 3.57-4.88 3.57-8.87s-1.19-7.01-3.57-8.86-6.12-2.78-11.22-2.78h-17.62V82.2h17.62c5.1 0 8.84-.96 11.22-2.88zm72.17 19.67h-34.93c.42 4.76 1.85 8.29 4.3 10.59 2.45 2.31 5.94 3.46 10.49 3.46 5.67 0 10.84-1.82 15.53-5.46l3.77 9.02c-2.38 1.96-5.37 3.53-8.97 4.72s-7.22 1.78-10.86 1.78c-8.39 0-15.02-2.38-19.88-7.13s-7.29-11.26-7.29-19.51c0-5.24 1.05-9.9 3.15-13.95 2.1-4.06 5.05-7.2 8.87-9.44 3.81-2.24 8.13-3.36 12.96-3.36 7.06 0 12.64 2.27 16.73 6.82s6.14 10.81 6.14 18.78v3.67zm-31-16.68c-2.13 2.24-3.44 5.46-3.93 9.65h23.71c-.14-4.27-1.19-7.5-3.15-9.7s-4.69-3.3-8.18-3.3-6.31 1.12-8.45 3.36zm77.26-7.34c3.49 3.5 5.25 8.88 5.25 16.16v31.16h-12.49v-7.87c-1.19 2.73-3.06 4.86-5.61 6.4s-5.51 2.31-8.86 2.31-6.54-.7-9.34-2.1-5-3.32-6.61-5.77-2.41-5.17-2.41-8.18c0-3.78.96-6.75 2.88-8.92s5.05-3.74 9.39-4.72 10.32-1.47 17.94-1.47h2.62v-2.41c0-3.5-.75-6.01-2.25-7.55s-4.01-2.31-7.5-2.31c-2.73 0-5.58.47-8.55 1.42-2.97.94-5.89 2.26-8.76 3.93l-3.67-9.02c2.87-1.82 6.33-3.32 10.39-4.51 4.05-1.19 7.9-1.78 11.54-1.78 7.2 0 12.55 1.75 16.05 5.25zm-10.54 35.2c2.2-2.34 3.3-5.37 3.3-9.07v-2.2h-1.89c-4.69 0-8.32.21-10.91.63s-4.44 1.15-5.56 2.2-1.68 2.48-1.68 4.3c0 2.24.77 4.07 2.31 5.51 1.54 1.43 3.5 2.15 5.87 2.15 3.5 0 6.35-1.17 8.55-3.51zm35.98 9.7c-3.95-2.17-6.98-5.24-9.08-9.23s-3.15-8.64-3.15-13.95 1.1-10.02 3.3-14.11 5.33-7.26 9.39-9.49c4.05-2.24 8.74-3.36 14.06-3.36 3.64 0 7.19.58 10.65 1.73s6.24 2.71 8.34 4.67l-3.78 9.23c-2.17-1.75-4.46-3.08-6.87-3.99s-4.81-1.36-7.19-1.36c-4.55 0-8.08 1.42-10.6 4.25s-3.78 6.91-3.78 12.22 1.26 9.28 3.78 12.12c2.52 2.83 6.05 4.25 10.6 4.25 2.38 0 4.77-.45 7.19-1.36 2.41-.91 4.7-2.24 6.87-3.99l3.78 9.13c-2.24 2.03-5.11 3.62-8.6 4.77-3.5 1.15-7.13 1.73-10.91 1.73-5.38 0-10.05-1.08-14-3.25zm75.53-6.93l-.63 9.76-5.77.31c-7.2 0-12.52-1.66-15.95-4.98s-5.14-8.27-5.14-14.84V80.85h-9.86v-9.86h9.86V55.67h13.11v15.32h13.53v9.86h-13.53v22.14c0 6.86 3.18 10.28 9.55 10.28 1.54 0 3.15-.1 4.82-.31z"
                  fill="currentColor"
                />{" "}
                <path
                  d="M29.06 120.44c-10.77 0-28.64-4.21-29.06-14.41 0-15.72 26.33-30.42 36.54-31.38l-1.31 9.78c-3.95 3.63-16.89 10.69-10.61 16.56 4.45 3.33 10.23 2.24 15.43 2.34l2.27-.05s.08-1.54-.08-2.52C32.18 3.57 160.95-39.39 210.67 45.29c1.35 2.33 2.02 3.06 2.02 3.06l3.01-1.7c4.37-2.46 16.87-9.13 9.28-14.13-5.12-2.69-9.79-1.49-14.74-.3l-6.66-10c58.85-10.61 55.3 29.26 12.1 40.23-19.98 3.75-36.76-2.21-58.52-21.05 6.3 56.96-88.35 79.06-128.1 79.06z"
                  fill="url(#A)"
                />{" "}
                <path
                  d="m187.06,122.56c-3.65-23.25,10.04-44.11,30.62-54.24,3.95-3.69,3.79,11.93,4.71,14.2,1.41,13.42-.5,27.1-5.28,39.7-11.13,30.34-39.75,53.1-71.94,56.55-35.5,7.91-76.11-23.76-48.2-58.51,22.16-25.43,70.98-27.61,90.09,2.29Z"
                  fill="url(#A)"
                />{" "}
              </svg>
            </a>
            <a className="header-bar-notification" href="#">
              <strong className="font-semibold">Notification du jour</strong>
              <svg
                width="2"
                height="2"
                fill="currentColor"
                aria-hidden="true"
                className="ml-2 text-sky-600 dark:text-sky-400/70"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <span className="ml-2 min-[1372px]:hidden">
                React + Typescript
              </span>
              <span className="ml-2 hidden min-[1372px]:inline">
                React + Typescript, ça tourne mal
              </span>
              <svg
                width="3"
                height="6"
                className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
                aria-hidden="true"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <div className="header-submenu">
              <SubMenuExercices />
              <SubMenuTailwindCSS />
              <SubMenuFlowbite />
            </div>
            <div className="header-quick-access">
              <nav>
                <ul className="space-x-8">
                  <li>
                    <a className="dark" href="/docs/installation">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindui.com/?ref=top" className="dark">
                      Components
                    </a>
                  </li>
                  <li>
                    <a className="dark" href="/blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-tools">
                <label
                  className="sr-only"
                  id="headlessui-listbox-label-3"
                  data-headlessui-state=""
                >
                  Theme
                </label>
                <DarkModeButton />
                <a
                  href="https://github.com/MisterHims"
                  className="header-github-access hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <span className="sr-only">MisterHims on GitHub</span>
                  <svg
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
