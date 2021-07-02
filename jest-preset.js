export default {
  transform: {},
  moduleFileExtensions: [ 'cjs', 'mjs', 'js', 'ts', 'json', 'node' ],
  testMatch: [
    '**/__tests__/**/*.{js,ts,cjs,mjs,ts,tsx,jsx}',
    "**/?(*.)+(spec|test).{js,ts,cjs,mjs,ts,tsx,jsx}",
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/boilerplate/',
    '/dist/',
    '/coverage/',
    '/.vscode/',
    '/test/.tmp/',
    '/test/fixtures/',
    '/.tmp/',
  ],
};
