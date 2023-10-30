# node-development
Supercharge your Node development configuration.

## Installation

Add `@svile/node-development` usually in `devDependencies` of your `package.json`.

## Usage

### Prettier
Add `prettier` usually in `devDependencies` of your `package.json` then add the following to your `package.json` file:
```
{
    "prettier": "@svile/node-development/prettier"
}
```
_NOTE_: Prettier can be further customized as per the [documentation](https://prettier.io/docs/en/configuration)

### Typescript
Add `typescript` usually in `devDependencies` of your `package.json` then create a `tsconfig.json` file in the root directory of your repo with the following contents:
```
{
    "extends": "@svile/node-development/tsconfig.json",
    "compilerOptions": {
        "baseUrl": ".",
    }
}
```
_NOTE_: Typescript can be further customized as per the [documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### ESLint
Add `eslint` usually in `devDependencies` of your `package.json` then add the following to your `package.json` file:
```
{
    "eslintConfig": {
        "extends": [
            "./node_modules/@svile/node-development/eslint"
        ],
        "root": true
    }
}
```
_NOTE_: ESLint can be further customized as per the [documentation](https://eslint.org/docs/latest/use/configure/)

### Jest
Add `jest` usually in `devDependencies` of your `package.json` then create a `jest.config.js` file in the root directory of your repo with the following contents:
```
module.exports = {
  ...require('@svile/node-development/jest'),
  moduleNameMapper: {
    '^-/(.*)': '<rootDir>/src/$1',
  },
};

```
_NOTE_: Jest can be further customized as per the [documentation](https://jestjs.io/docs/configuration)
