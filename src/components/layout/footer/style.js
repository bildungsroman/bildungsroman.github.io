import styled from "styled-components";
import variables from "../../../data/variables";

export const FooterStyle = styled.footer`
  margin-top: 6rem;
  padding: 1rem;
  z-index: 0;
  position: relative;
  text-align: left;
  @media (max-width: ${variables.breakpointPhone}) {
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
  }
  .quote {
    margin: 0;
    font-size: 4rem;
    font-family: "Lato";
    font-weight: 400;
    line-height: 1.2;
    color: ${variables.primary};
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 2rem;
    }
  }
`;

export const SubRight = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 2px;
  text-transform: capitalize;
  margin-bottom: 20px;
  font-family: "Lato";
`;

export const CopyRight = styled.p`
  font-size: 11px;
  line-height: 1.8;
  letter-spacing: 1px;
  a,
  a:visited {
    color: ${variables.primary};
  }
`;

export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  h3 {
    color: ${variables.primary};
    font-weight: 400;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSocialMedia = styled.ul`
  list-style: none;
  padding-left: 0;
  @media (max-width: ${variables.breakpointPhone}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

export const MediaLink = styled.a`
  padding: 0.5rem;
  line-height: 1;
  font-size: 1rem;
  font-weight: 100;
  text-transform: capitalize;
  font-family: "Lato";
  color: ${variables.primary};
  svg {
    margin-right: 0.5rem;
  }
`;
