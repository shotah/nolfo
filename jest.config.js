/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleNameMapper: {
    '.+\\.(scss|sass|css|gif|png|jpg|ttf)$':
      '<rootDir>/test/fileTransformer.js',
  },
  testTimeout: 15000,
  bail: 1,
  verbose: true,
};
