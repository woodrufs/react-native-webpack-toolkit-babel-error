module.exports = {
  root: true,
  parser: "",
  ignorePatterns: ["*.d.ts"],

  extends: ["plex-standards", "plex-standards/node", "plex-standards/react"],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: "plex-standards/typescript",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module"
      },
      rules: {
        "@typescript-eslint/explicit-member-accessibility": "off",
        "react/jsx-handler-names": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/no-default-export": "off"
      }
    }
  ]
};
