const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      title:'React init',
      template: path.resolve(__dirname, './index.html')
    })
  ],
};