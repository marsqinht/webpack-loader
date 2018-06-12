const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const path = require('path');


const config = {
  entry: {
    app: './src/app.js',
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};

module.exports = config;