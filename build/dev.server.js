const baseConfig = require('./webpack.base.conf.js')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
module.exports = merge(baseConfig,{
  plugins: [
    // new webpack.HotModuleReplacementPlugin() 
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8100,
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    // hot: true,
    // contentBase: false,
    watchOptions: {
      poll: false
    }
  }
})