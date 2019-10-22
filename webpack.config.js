const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_SOURCE = path.join(__dirname, 'src');
const PATH_DIST = path.join(__dirname, 'dist');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(PATH_SOURCE, 'index.html'),
  filename: 'index.html',
  inject: false,
});

module.exports = {
  entry: path.join(PATH_SOURCE, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: PATH_DIST,
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: PATH_DIST,
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
};
