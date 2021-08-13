const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', './dist'),
    open: true,
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
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
  ],
}
