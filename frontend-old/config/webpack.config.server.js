'use strict'

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const srcPath = path.resolve(__dirname, '../')
const distPath = path.resolve(__dirname, '../server/dist')

const plugins = [
  new ExtractTextPlugin('[name].css')
]

module.exports = {
  context: srcPath,
  entry: './server/index',
  output: {
    path: distPath,
    filename: 'server.js',
    publicPath: '/static/'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: ['node_modules', 'server', 'shared'],
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/static/'
        })
      },
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            ignore: /(node_modules)/,
            presets: ['react-app'],
            plugins: [
              'relay',
              'transform-object-rest-spread'
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            query: {
              name: '[name].[hash:8].[ext]'
            }
          }
        }]
      }
    ]
  },
  plugins,
  externals: [
    nodeExternals(),
    {'window': 'window'}
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
