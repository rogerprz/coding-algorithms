module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    'no-empty-function': 'error',
    'no-unused-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'func-names': 'off'
  }
};
