/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:vitest-globals/recommended",//this string has to be added after npm install
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    "vitest-globals/env": true,//this string has to be added after npm install
  },
};
