const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
  devtool: '#source-map',
  output: {
    filename: '[name]_[hash].js',
    chunkFilename: '[name]_[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial', // 只对入口文件处理
      cacheGroups: {
        vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
          test: /node_modules\//,
          name: 'page/vendor',
          priority: 10,
          enforce: true
        },
        commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
          test: /common\/|components\//,
          name: 'page/commons',
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin(['dist']),
    // new webpack.HashedModuleIdsPlugin(),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({ // 分离css
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ]
})