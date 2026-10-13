import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";
import { GlobalStyle } from "./common/global";
import { ContainerLayout } from "./common";
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data/data";

const Main = styled.main`
  min-height: 70vh;
`;

const Layout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <Navbar
        isDark={isDarkMode}
        toggleDark={toggleTheme}
        siteTitle={data.SiteTitle}
      />
      <ContainerLayout>
        <Main>{children}</Main>
      </ContainerLayout>
      <Footer />
    </>
  );
};

export default Layout;
