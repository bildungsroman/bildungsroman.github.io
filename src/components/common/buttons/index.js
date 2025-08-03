import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../data/variables";

const buttonStyles = `
  cursor: pointer;
  margin: 10% 0%;
  font-family: "Lato";
  font-size: inherit;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border: 4px solid ${colors.primary};
  color: ${colors.primary};
  background: ${colors.button.light};
  outline: none;
  position: relative;
  display: inline-block;
  padding: 15px 10px 14px;
  cursor: pointer;
  width: auto;
  min-width: 200px;
  &::after {
    min-width: 200px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${colors.primary};
    background-color: ${colors.primary};
    left: 4px;
    top: 9px;
    z-index: -1;
    content: "";
    transition: all 0.5s;
  }
  &:hover:after {
    top: 0px;
    left: -4px;
  }
`;

export const ButtonDefault = styled.a`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;
