import React from "react";

import { Logo } from "src/components/logo/logo";
import { ThemeToggler } from "src/components/theme-toggler";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 shadow-sm dark:bg-gray-800 bg-primary-foreground text-gray-600 dark:text-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between py-2 max-w-screen-lg">
        <Logo width="60px" height="60px" />

        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
