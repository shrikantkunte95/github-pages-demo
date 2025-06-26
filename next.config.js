/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',          // tells Next to generate static files
  basePath: isProd ? '/github-pages-demo' : '',
  assetPrefix: isProd ? '/github-pages-demo/' : '',
  trailingSlash: true        // keeps routes working on GH Pages
}
