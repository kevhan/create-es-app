const config = {
  entry: [],
  output: {
    library: 'App',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['eslint-loader'],
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.html$/,
      use: ['html-loader'],
    },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', '.json '],
  },
};

module.exports = config;
