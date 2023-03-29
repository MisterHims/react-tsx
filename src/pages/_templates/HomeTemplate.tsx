import { ReactNode } from "react";
import MainContent from "../../components/ArticleContent";

type Props = {
  children: ReactNode;
};

const HomeTemplate = ({ children }: Props) => {
  return (
    <div className="main-wrapper flex flex-row justify-center flex-nowrap">
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default HomeTemplate;
