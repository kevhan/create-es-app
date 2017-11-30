const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base.config');

const prodConfig = {
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: 'app.js',
    // chunkFilename: 'app.chunk.[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
  ],
};

const config = merge(baseConfig, prodConfig);

module.exports = config;
