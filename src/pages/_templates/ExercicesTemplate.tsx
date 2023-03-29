import { ReactNode } from "react";
import MainContent from "../../components/ArticleContent";
import MainSidebarExercices from "../../components/MainSideBarExercices";

type Props = {
  children: ReactNode;
};

const ExercicesPage = ({ children }: Props) => {
  return (
    <div className="main-wrapper flex flex-row justify-center flex-nowrap">
      <MainSidebarExercices />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default ExercicesPage;
