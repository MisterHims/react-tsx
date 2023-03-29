import { ReactNode } from "react";
import MainContent from "../../components/ArticleContent";
import MainSidebarDocs from "../../components/MainSideBarDocs";

type Props = {
  children: ReactNode;
};

const DocsPage = ({ children }: Props) => {
  return (
    <div className="main-wrapper flex flex-row justify-center flex-nowrap">
      <MainSidebarDocs />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default DocsPage;
