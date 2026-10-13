import { useEffect, useState, useSyncExternalStore } from "react";
import { ThemeContext, THEME_OVERRIDE_KEY } from "./ThemeContext.js";

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

const subscribeToSystemTheme = (onChange) => {
  darkQuery.addEventListener("change", onChange);
  return () => darkQuery.removeEventListener("change", onChange);
};

const getSystemTheme = () => (darkQuery.matches ? "dark" : "light");

const readOverride = () => {
  const saved = sessionStorage.getItem(THEME_OVERRIDE_KEY);
  return saved === "dark" || saved === "light" ? saved : null;
};

export const ThemeProvider = ({ children }) => {
  const systemTheme = useSyncExternalStore(
    subscribeToSystemTheme,
    getSystemTheme
  );
  const [override, setOverride] = useState(readOverride);
  const theme = override ?? systemTheme;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    if (next === systemTheme) {
      sessionStorage.removeItem(THEME_OVERRIDE_KEY);
      setOverride(null);
    } else {
      sessionStorage.setItem(THEME_OVERRIDE_KEY, next);
      setOverride(next);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode: theme === "dark", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
