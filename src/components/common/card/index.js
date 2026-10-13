import styled from "styled-components";

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;
  &:hover {
    transform: translateY(-4px);
    border-color: var(--brand);
    box-shadow: var(--shadow-lift);
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;
