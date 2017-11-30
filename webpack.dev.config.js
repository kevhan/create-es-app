const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const devConfig = {
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: 'app.dev.js',
    // chunkFilename: 'app.chunk.[name].dev.js',
    path: path.resolve(__dirname, 'dev'),
  },
  plugins: [
    new CleanWebpackPlugin(['dev']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'App Dev Page',
      filename: 'dev_page.html',
      inject: 'body',
      template: './template/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    port: 9080,
    hot: true,
    open: true,
    openPage: 'dev_page.html',
    clientLogLevel: 'error',
  },
};

const config = merge(baseConfig, devConfig);

module.exports = config;
