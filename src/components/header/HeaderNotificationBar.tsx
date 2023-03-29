import { NavLink } from "react-router-dom";

const HeaderNotificationBar = () => {
  return (
    <NavLink className="header-bar-notification" to="#">
      <strong className="font-semibold">Notification du jour</strong>
      <svg width="2" height="2" fill="currentColor" aria-hidden="true" className="dot-separator text-sky-600 dark:text-sky-400/70" > <circle cx="1" cy="1" r="1"></circle> </svg>
      <span className="ml-2 min-[1372px]:hidden">React + Typescript</span>
      <span className="ml-2 hidden min-[1372px]:inline"> React + Typescript, ça tourne mal </span>
      <svg width="3" height="6" className="arrow-cta text-sky-300 dark:text-sky-400" aria-hidden="true" > <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ></path> </svg>
    </NavLink>
  );
}

export default HeaderNotificationBar