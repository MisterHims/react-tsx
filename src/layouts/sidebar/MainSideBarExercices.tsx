import SearchBar from "../../components/forms-inputs/SearchBar";
import SidebarTopLinks from "./SidebarTopLinks";
import { SideBarExercicesLinks } from "./SideBarLinks";

import "../../assets/styles/layouts/sidebar.css";

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
