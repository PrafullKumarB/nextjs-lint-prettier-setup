module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  overrides: [
    {
      files: ["**.ts", "**.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "no-multiple-empty-lines" :"error",
    "linebreak-style": ["error", "unix"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ]
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
};