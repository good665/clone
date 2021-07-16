module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },

  extends: ["eslint", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};
