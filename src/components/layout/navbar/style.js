import styled from "styled-components";
import variables from "../../../data/variables";

export const NavbarLogo = styled.div`
  a {
    font-size: 2.3rem;
    font-family: "Lato";
  }
  img {
    padding: 0.5rem;
    width: 120px;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;

export const NavbarElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media (max-width: ${variables.breakpointPhone}) {
    grid-template-columns: 1fr;
    text-align: center;
    width: 100%;
  }
`;

export const NavbarList = styled.ul`
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  > li a {
    font-size: 1.2rem;
    padding: 0.5rem 0.2rem;
    margin: 0 1rem;
    text-decoration: none;
    vertical-align: middle;
    > svg {
      width: 18px;
      margin-right: 5px;
    }
    span,
    svg {
      display: block;
      vertical-align: middle;
    }
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 1rem;
    }
  }
`;

export const DarkSwitch = styled.li`
  margin: 8px;
  svg {
    width: 24px !important;
    height: 24px !important;
  }
  .switch {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .switch div {
    position: relative;
    display: block;
    width: 40px;
    border-radius: 50px;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .fa-adjust {
    transform: rotate(180deg);
  }
  .switch input {
    display: none;
  }
  .slider {
    margin-top: 2px;
    transition: 0.4s;
    border-radius: 34px;
    height: 20px;
    width: 20px;
    display: inline-block;
    position: relative;
  }
  input:checked + .slider {
    transform: translateX(8px);
  }
`;
