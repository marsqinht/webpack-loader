const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const path = require('path');
const devMode = process.env.NODE_ENV === 'development'

const config = {
  mode: 'development',
  entry: [
    './index.js',
    hotMiddlewareScript
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        include: path.resolve(__dirname, "src"),
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg)$/,
        include: path.resolve(__dirname, "src"),
        use: ['file-loader']
      },
      {
        test: /.js$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: path.resolve('loader/loader.js')
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};

module.exports = config;