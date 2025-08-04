import React from "react";
import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const ToggleButton = styled.button`
  background: ${(props) => props.theme.global.background};
  color: ${(props) => props.theme.global.color};
  border: 2px solid ${(props) => props.theme.palette.mainBrand};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.palette.mainBrand};
    color: ${(props) => props.theme.global.background};
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </ToggleButton>
  );
};

export default ThemeToggle;
