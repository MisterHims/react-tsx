import React, { ReactNode } from "react";
import { DocsRoutes } from "./MainRoutes";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const ArticleContent = ({ children }: Props) => {
  return (
    <div className="article-content flex flex-col">
      {children}
      <Footer />
    </div>
  );
};

export default ArticleContent;
