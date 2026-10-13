import styled, { createGlobalStyle } from "styled-components";
import variables from "../../../data/variables.js";
import "./fonts.css";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  body {
    font-size: 16px;
    line-height: 1.6;
  }
  main {
    display: block;
  }
  [id] {
    scroll-margin-top: 6rem;
  }
  h1,
  h2,
  h3 {
    color: var(--heading);
    font-weight: 900;
    line-height: 1.2;
  }
  h2 {
    font-size: 2rem;
    margin: 3.5rem 0 1.5rem;
    @media (max-width: ${variables.breakpointPhone}) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.125rem;
    line-height: 1.8;
  }
  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 150ms ease;
  }
  a:hover {
    color: var(--accent);
  }
  :focus-visible {
    outline: 3px solid var(--brand);
    outline-offset: 3px;
    border-radius: 4px;
  }
  img {
    max-width: 100%;
    border-style: none;
  }
  button,
  input {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  ::selection {
    background: var(--primary);
    color: var(--on-primary);
  }
  .center {
    text-align: center;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .lined-link {
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background: var(--gradient);
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover::after,
    &.active::after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  }

  .error__emoji {
    width: min(30rem, 70vw);
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
  @media (max-width: ${variables.breakpointPhone}) {
    font-size: 1.5rem;
  }
`;

export const SubText = styled.p`
  font-size: 1rem;
  line-height: 2;
`;
