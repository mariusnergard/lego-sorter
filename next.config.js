// next.config.js
require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  webpack(config) {
    config.node = { fs: 'empty' };
    return config;
  },
  env: {
    apiURL: process.env.apiURL,
  },
});
