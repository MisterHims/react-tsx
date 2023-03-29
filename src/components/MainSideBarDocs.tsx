import SearchBar from "./sidebar/SearchBar";
import SidebarTopLinks from "./sidebar/SidebarTopLinks";
import { SideBarDocsLinks } from "./sidebar/SideBarLinks";

import "../styles/sidebar.css";

const MainSideBarDocs = () => {
  return (
    <div className="sidebar flex">
      <nav id="nav" className="sidebar-container lg:text-sm lg:leading-6">
        <div className="sidebar-content">
          <SearchBar />
          <SidebarTopLinks />
          <SideBarDocsLinks />
        </div>
      </nav>
    </div>
  );
};

export default MainSideBarDocs;
