const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConf = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
module.exports = merge(webpackBaseConf,{
  plugins: [
    new CleanWebpackPlugin(['dist/'], {root: path.resolve(__dirname, '../')}),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: process.env.NODE_ENV === 'production' ? {safe: true} : {safe: true, map: {inline: false}}
    })
  ]
})
