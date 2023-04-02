import { ReactNode } from "react";
import Header from "../../components/layouts/Header";
import { HomeContent } from "../../components/layouts/Content";
import Footer from "../../components/layouts/Footer";

// Import Animated Background
import ParticlesBackground from "../../components/animated-backgrounds/ParticlesBackground";

type Props = {
  children: ReactNode;
};

const HomeTemplate = ({ children }: Props) => {
  return (
  <div className="home-wrapper">
    <Header template="home" showNotificationBar={false} />
    <div className="home-container flex flex-col flex-nowrap items-center">
      <HomeContent>{children}</HomeContent>
      <Footer />
    </div>
    <ParticlesBackground />
  </div>
  );
};

export { HomeTemplate };
