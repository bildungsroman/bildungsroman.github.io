import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { GlobalStyle } from "./common/global";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContainerLayout, MainContent } from "./common";

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout>
          <Navbar
            isDark={isDark}
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
