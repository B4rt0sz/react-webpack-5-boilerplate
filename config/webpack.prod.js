const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[contenthash:6].js',
    clean: true,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      //example of using copy-webpack-plugin:
      patterns: [
        {
          from: path.resolve(__dirname, '..', './public/images'),
          to: 'images',
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:6].css',
      chunkFilename: '[id].css',
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
}
