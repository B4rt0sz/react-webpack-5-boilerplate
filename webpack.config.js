const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //For production purpose

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
}
