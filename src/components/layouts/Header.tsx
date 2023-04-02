import "../../assets/styles/header.css";

import { HeaderBackgroundClassic } from "./header/HeaderBackgrounds";
import HeaderLogotype from "./header/HeaderLogotype";
import HeaderNotificationBar from "./header/HeaderNotificationBar";
import HeaderLinks from "./header/HeaderLinks";
import HeaderTools from "./header/HeaderTools";

interface HeaderProps {
  template: string;
  showNotificationBar: boolean;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="flex">
      <HeaderBackgroundClassic />
      <div className={`header-wrapper template-${props.template}`}>
        <div className="header-content">
          <div className="header-items">
            <HeaderLogotype />
            {props.showNotificationBar && <HeaderNotificationBar />}
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
