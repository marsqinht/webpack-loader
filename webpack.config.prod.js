const merge = require('webpack-merge');
const common = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin()
  ]
})