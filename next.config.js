/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  webpack(config) {
    // Ensures that web workers can import scripts.
    config.output.publicPath = '/_next/'

    return config
  },
}

module.exports = nextConfig
