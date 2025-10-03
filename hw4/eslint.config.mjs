// eslint.config.mjs
import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { console: "readonly" },
    },

    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "off",
      "no-undef": "error",
      eqeqeq: "warn",
      semi: ["warn", "always"],
      quotes: ["warn", "double"],
    },
  },
];
