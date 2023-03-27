import { Container } from "@mui/material";
import HeaderRoutes from "./HeaderRoutes";

const MainContent = () => {
  return (
    <Container className="main-content article-page flex-auto">
      <HeaderRoutes />
    </Container>
  );
};

export default MainContent;