import styled, { css } from "styled-components";
import { Link } from "react-router";

const buttonStyles = css`
  display: inline-block;
  min-width: 12.5rem;
  padding: 0.95rem 1.5rem 0.9rem;
  border: 4px solid var(--brand);
  background: var(--surface);
  color: var(--primary);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 8px 10px 0 var(--button-shadow);
  transition: box-shadow 500ms ease;
  &:hover {
    color: var(--primary);
    box-shadow: -4px 4px 0 var(--button-shadow);
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ButtonDefault = styled.a`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;
