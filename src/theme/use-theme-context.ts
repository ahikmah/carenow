import { useContext } from "react";

import { ThemeContext } from "./theme-context";

// ----------------------------------------------------------------------

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext is undefined");
  }

  return context;
}
