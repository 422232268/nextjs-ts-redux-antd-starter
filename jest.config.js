module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/.next/'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^server(.*)$': '<rootDir>/server$1',
    '^pages(.*)$': '<rootDir>/pages$1',
  },
  collectCoverageFrom: [
    './{src,server}/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/coverage/**',
    '!**/*.stories.{ts,tsx,js,jsx}',
    '!**/{config,constants,styles,types,__fixtures__}/**',
  ],
  watchPathIgnorePatterns: ['dist'],
  transform: {
    '^.+\\.stories\\.[tj]sx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
}
