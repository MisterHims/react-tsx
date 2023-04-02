import { ReactNode } from "react";
import Header from "../layouts/Header";
import { HomeContent } from "../layouts/Content";
import Footer from "../layouts/Footer";

// Import Animated Background
import ParticlesBackground from "../components/animated-backgrounds/ParticlesBackground";

// Import Style(s)
import "../assets/styles/templates/one-view-template.css";


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
