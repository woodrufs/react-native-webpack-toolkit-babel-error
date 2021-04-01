// This is a workaround for https://github.com/eslint/eslint/issues/3458
// eslint-disable-next-line import/no-unassigned-import
require("@strmbrkr/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: ["@strmbrkr/eslint-config"],
  rules: {
    noExplicitAny: "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"]
  },
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
