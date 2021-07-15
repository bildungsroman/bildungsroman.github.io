import React  from 'react';
import { useStyledDarkMode } from 'gatsby-styled-components-dark-mode';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';
import Footer from './footer';
import { GlobalStyle, ContainerLayout, MainContent } from '../common';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { isDark, toggleDark } = useStyledDarkMode();

  return (
    <>
      <GlobalStyle />
      <MainContent>
        <ContainerLayout>
          <Navbar isDark={isDark} toggleDark={toggleDark} siteTitle={data.site.siteMetadata.title} />
        </ContainerLayout>
        <ContainerLayout>
          <main>{children}</main>
        </ContainerLayout>
      </MainContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
