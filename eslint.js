/**
 * @file ESLint config
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
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
