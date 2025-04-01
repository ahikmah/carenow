import { useState, useEffect, ReactNode } from "react";

import { ThemeContext } from "./theme-context";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const [viewMode, setViewMode] = useState<"mobile" | "system">(() =>
    window.innerWidth <= 768 ? "mobile" : "system"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleViewMode = (val: "mobile" | "system") => {
    setViewMode(val);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, viewMode, toggleViewMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
