const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FB_ENV': JSON.stringify(true)
    }),
  ]
})
