import React from "react";
import Layout from "./../components/layout";
import Seo from "./../components/seo";
import About from "../components/about";

const IndexPage = () => (
  <Layout>
    <Seo title="Anna Spysz | Portland-based full-stack web developer" />
    <About />
  </Layout>
);

export default IndexPage;
