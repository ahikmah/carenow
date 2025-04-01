import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-ins (e.g., 'fs', 'path')
            "external", // npm packages (e.g., 'react')
            "internal", // Aliased imports (e.g., 'src/<dir>')
            "parent", // Parent imports (e.g., '../utils')
            "sibling", // Sibling imports (e.g., './Component')
            "index", // Index imports (e.g., './')
          ],
          pathGroups: [
            {
              pattern: "src/api/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "src/components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "src/lib/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "src/theme/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "src/types/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["src", "./src"], // Align alias with Vite config
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Ensure TS and JSX files are resolved
        },
      },
    },
  }
);
