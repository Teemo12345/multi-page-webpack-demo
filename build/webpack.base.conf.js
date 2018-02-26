const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/j/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/j/[name].[hash:5].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:[
            // { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader', options: {config: {path: './build/postcss.config.js'}} }
          ]
        })
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'i/[name].[hash:5].[ext]',
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "static/c/[name]-[hash:5].css"
    }),
    // new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new htmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      // inject: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
  
}