import "../../assets/styles/header.css";

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
      <div className="header-background">
        <div>
          <picture>
            <source
              srcSet="src/assets/medias/background/header-top-background.avif"
              type="image/avif"
            />
            <img
              srcSet="./src/assets/medias/background/header-top-background.png"
              alt=""
              className="light-version"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet="./src/assets/medias/background/header-top-dark-background.avif"
              type="image/avif"
            />
            <img
              srcSet="./src/assets/medias/background/header-top-dark-background.png"
              alt=""
              className="dark-version"
              decoding="async"
            />
          </picture>
        </div>
      </div>
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
