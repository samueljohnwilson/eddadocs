/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['simple-import-sort'],
  rules: {
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single'],
    'simple-import-sort/imports': ['error', {
      groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']],
    }],
    'simple-import-sort/exports': 'error',
  }
}
