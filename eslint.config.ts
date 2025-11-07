import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  {
    ignores: ["./src-tauri", "vite.config.ts"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.ts"],
          defaultProject: "tsconfig.json",
        },
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      eqeqeq: "error",
      "@typescript-eslint/no-shadow": "warn",
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "no-unneeded-ternary": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      curly: ["error", "multi-line", "consistent"],
      "no-fallthrough": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowIIFEs: true,
        },
      ],
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "no-useless-catch": "error",
    },
  },
]);
