module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    semi: 'off',
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
  },
}
