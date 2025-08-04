import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { GlobalStyle } from "./common/global";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContainerLayout, MainContent } from "./common";

const Layout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout>
          <Navbar
            isDark={isDarkMode}
            toggleDark={toggleTheme}
            siteTitle="Anna Spysz"
          />
        </ContainerLayout>
        <ContainerLayout>
          <main>{children}</main>
        </ContainerLayout>
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
