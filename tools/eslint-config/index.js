module.exports = {
  root: true,
  parser: "",
  ignorePatterns: ["*.d.ts"],

  extends: [],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/explicit-member-accessibility": "off",
        "react/jsx-handler-names": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
