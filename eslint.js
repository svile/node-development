/**
 * @file ESLint config
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  settings: {
    'import/internal-regex': '^~/',
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-console': 1,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    `*.min.*`,
    `CHANGELOG.md`,
    `LICENSE*`,
    `dist`,
    `output`,
    `coverage`,
    `public`,
    `static`,
    `packages-lock.json`,
    `pnpm-lock.yaml`,
    `__snapshots__`,
    `!.github`,
    `!.vscode`,
  ],
};
