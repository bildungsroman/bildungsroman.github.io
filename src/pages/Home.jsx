import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  color: ${(props) => props.theme.global.color};
  background: ${(props) => props.theme.global.background};
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Anna Spysz</h1>
      <p>Welcome to my portfolio website. This is the home/about page.</p>
      <p>Developer, Writer, Speaker</p>
    </HomeContainer>
  );
};

export default Home;
