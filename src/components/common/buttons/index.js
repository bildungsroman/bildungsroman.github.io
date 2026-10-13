import styled, { css } from "styled-components";
import { Link } from "react-router";

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.75rem;
  border: none;
  border-radius: 999px;
  background: var(--button-gradient);
  background-size: 200% 100%;
  background-position: 0% 50%;
  color: var(--on-button);
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition:
    background-position 400ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
  &:hover {
    color: var(--on-button);
    background-position: 100% 50%;
    transform: translateY(-2px);
    box-shadow: var(--shadow-lift);
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

export const ButtonDefault = styled.a`
  ${buttonStyles}
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;
