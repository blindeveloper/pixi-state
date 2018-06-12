const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ISPROD = process.env.IS_PROD_ENV ? JSON.parse(process.env.IS_PROD_ENV) : 0
const extractSass = new ExtractTextPlugin({filename: 'bundle.min.css'})

module.exports = {
  mode: ISPROD ? 'production' : 'development',
  entry: './src/index.jsx',
  watch: ISPROD ? false : true,
  devtool: ISPROD ? false : 'source-map',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['react'] }
        }]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {loader: 'css-loader', options: { minimize: true }},
            {loader: 'sass-loader'}
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      title:'React init',
      template: path.resolve(__dirname, 'src/components/pages/index.html')
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}