const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    index: './src/j/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/j/[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: {config: {path: './build/postcss.config.js'}} }
        ]
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use:[
        //     { loader: 'style-loader' },
        //     { loader: 'css-loader' },
        //     { loader: 'postcss-loader', options: {config: {path: './build/postcss.config.js'}} }
        //   ]
        // })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin({
    //   filename: "static/c/[name]-[hash:5].css"
    // }),
    new htmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      // inject: false
    })
  ],
  devServer: {
    port: 8100,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true
  }
}