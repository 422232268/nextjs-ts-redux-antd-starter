const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    '@storybook/addon-jest',
    '@storybook/addon-interactions',
    '@storybook/testing-library',
    '@storybook/jest',
    '@storybook/test-runner',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '../src'),
    }

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
