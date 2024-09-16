/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  rules: {
    "vue/require-default-prop": "off",
  },
  ignorePatterns: [".gitignore", "dist/**", "vendors/**"],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
