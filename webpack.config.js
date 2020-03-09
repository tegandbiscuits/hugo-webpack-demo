const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve('public'),
    watchContentBase: true,
    publicPath: '/assets',
  },
  entry: [
    path.resolve('src', 'js', 'app.js'),
    path.resolve('src', 'styles', 'app.css'),
  ],
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
