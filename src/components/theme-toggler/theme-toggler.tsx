import { useThemeContext } from "src/theme";

import { Iconify } from "src/components/iconify";

export const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      type="button"
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="p-3 rounded-lg bg-slate-300 dark:bg-slate-900 text--800 dark:text-slate-300"
      onClick={toggleTheme}
    >
      <Iconify icon={theme === "light" ? "bi:moon" : "bi:sun"} size={16} />
    </button>
  );
};
