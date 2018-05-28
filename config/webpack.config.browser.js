var webpack = require('webpack')
var merge = require('webpack-merge')
var base = require('./webpack.config.base')
var path = require('path')

var outputFile = 'vue-spinners'
var globalName = 'VueSpinners'

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {
    // Put external libraries like lodash here
    // With their global name
    // Example: 'lodash': '_'
  },
  plugins: [
    new UglifyJsPlugin({
      "uglifyOptions": {
        compress: {
          warnings: true
        },
        mangle: false,
      }
    })
  ],
})
