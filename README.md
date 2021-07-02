# common-jest-preset

Provide default jest preset config for node-modules group.

## Installation

```bash
$ npm i --save-dev common-jest-preset
```

## Configuration

Add these to your `package.json`

```js
{
  "jest": {
    "preset": "common-jest-preset",
    "setupFilesAfterEnv": [
      "<rootDir>/node_modules/common-jest-preset/setup-jest.js"
    ]
  }
}
```

## Rules

- support `.cjs` and `.mjs`.
- reset global console to clean the boring line number.
