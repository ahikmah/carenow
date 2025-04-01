import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  viewMode: "mobile" | "system";
  toggleViewMode: (val: "mobile" | "system") => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
