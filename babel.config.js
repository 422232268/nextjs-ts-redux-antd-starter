module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'index.css',
      },
    ],
  ],
}
