import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import styled from "styled-components";
import variables from "../data/variables";
import { ContainerLayout } from "./common";
import { GradientText } from "./common/global";

const NAV_ITEMS = [
  { to: "/", label: "About" },
  { to: "/coding", label: "Coding" },
  { to: "/speaking", label: "Speaking" },
  { to: "/writing", label: "Writing" },
];

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  border-bottom: 1px solid var(--border);
`;

const Bar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.5rem;
`;

const Wordmark = styled(Link)`
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: -0.01em;
  white-space: nowrap;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
  @media (max-width: ${variables.breakpointPhone}) {
    display: ${(props) => (props.$open ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 4%;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
  }
`;

const MenuLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  color: var(--text);
  font-size: 1.05rem;
  font-weight: 400;
  &:hover {
    color: var(--primary);
    background: var(--surface-2);
  }
  &.active {
    color: var(--primary);
    font-weight: 900;
  }
  @media (max-width: ${variables.breakpointPhone}) {
    padding: 0.85rem 1rem;
    font-size: 1.15rem;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  color: var(--primary);
  cursor: pointer;
  transition:
    transform 200ms ease,
    background 200ms ease;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    background: var(--surface-2);
    transform: rotate(-15deg);
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const MenuToggle = styled(IconButton)`
  display: none;
  @media (max-width: ${variables.breakpointPhone}) {
    display: inline-flex;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Navbar = ({ isDark, toggleDark, siteTitle }) => {
  const location = useLocation();
  const [openedAt, setOpenedAt] = useState(null);
  // The mobile menu closes itself whenever the route changes.
  const menuOpen = openedAt === location.pathname;

  return (
    <Header>
      <ContainerLayout>
        <Bar aria-label="Main">
          <Wordmark to="/" aria-label={`${siteTitle} home`}>
            <GradientText>{siteTitle}</GradientText>
          </Wordmark>
          <Menu id="main-menu" $open={menuOpen}>
            {NAV_ITEMS.map(({ to, label }) => (
              <li key={to}>
                <MenuLink to={to} end={to === "/"}>
                  {label}
                </MenuLink>
              </li>
            ))}
          </Menu>
          <Actions>
            <IconButton
              type="button"
              onClick={toggleDark}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </IconButton>
            <MenuToggle
              type="button"
              onClick={() => setOpenedAt(menuOpen ? null : location.pathname)}
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </MenuToggle>
          </Actions>
        </Bar>
      </ContainerLayout>
    </Header>
  );
};

export default Navbar;
