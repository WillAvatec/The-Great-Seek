module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
