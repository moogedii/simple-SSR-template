module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', "prettier/vue"],
  plugins: [],
  // add your custom rules here
  rules: {},
}
// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: ["plugin:vue/vue3-recommended", "prettier", "prettier/vue"],
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
//     "vue/component-tags-order": "off",
//   },
//   parserOptions: {
//     parser: "babel-eslint",
//   },
// };
