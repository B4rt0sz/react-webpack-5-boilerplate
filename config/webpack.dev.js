const path = require('path')
const Dotenv = require('dotenv-webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '..', 'public'),
    },
    open: true,
    hot: true,
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
