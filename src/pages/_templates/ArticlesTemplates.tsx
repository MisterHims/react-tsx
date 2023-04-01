import { ReactNode } from "react";
import Header from "../../components/layouts/Header";
import { ArticleContent} from "../../components/layouts/Content";
import MainSidebarDocs from "../../components/layouts/MainSideBarDocs";
import MainSidebarExercices from "../../components/layouts/MainSideBarExercices";

type Props = {
  children: ReactNode;
};

const DocsTemplate = ({ children }: Props) => {
  return (
  <div className="article-wrapper">
    <Header template="article" showNotificationBar={true}/>
    <div className="article-container flex flex-row justify-center flex-nowrap">
      <MainSidebarDocs />
      <ArticleContent>{children}</ArticleContent>
    </div>
  </div>
  );
};

const ExercicesTemplate = ({ children }: Props) => {
  return (
  <div className="article-wrapper">
    <Header template="article" showNotificationBar={true}/>
    <div className="article-container flex flex-row justify-center flex-nowrap">
      <MainSidebarExercices />
      <ArticleContent>{children}</ArticleContent>
    </div>
  </div>
  );
};

export { DocsTemplate, ExercicesTemplate }