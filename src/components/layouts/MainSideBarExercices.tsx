import SearchBar from "../forms-inputs/SearchBar";
import SidebarTopLinks from "./sidebar/SidebarTopLinks";
import { SideBarExercicesLinks } from "./sidebar/SideBarLinks";

import "../../assets/styles/sidebar.css";

const MainSidebarExercices = () => {
  return (
    <div className="sidebar flex">
      <nav id="nav" className="sidebar-container lg:text-sm lg:leading-6">
        <div className="sidebar-content">
          <SearchBar />
          <SidebarTopLinks />
          <SideBarExercicesLinks />
        </div>
      </nav>
    </div>
  );
};

export default MainSidebarExercices;