'use strict'

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const GoogleFontsPlugin = require('google-fonts-webpack-plugin')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const srcPath = path.resolve(__dirname, '../')
const distPath = path.resolve(__dirname, '../client/dist')

const isProduction = process.env.NODE_ENV === "'production'"
console.log('isProduction: ', isProduction, process.env.NODE_ENV)

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    async: true,
    name: 'vendor',
    children: true,
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
  }),
  new webpack.DefinePlugin({
    'process.env': { APP_ENV: JSON.stringify('BROWSER'), NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
  }),
  new GoogleFontsPlugin({
    fonts: [
      { family: 'Roboto', variants: [ '200', '300', '400', '500', '600', '700', '800' ] }
    ]
  }),
  new ExtractTextPlugin('[name].css'),
  new PreloadWebpackPlugin()
]

module.exports = {
  context: srcPath,
  target: 'web',
  entry: './client/index',
  output: {
    path: distPath,
    filename: 'client.js',
    chunkFilename: '[name]-[chunkhash:8].js',
    publicPath: '/static/'
  },
  resolve: {
    modules: ['*', 'shared', 'client', 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.scss', '.svg']
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
            ignore: /(node_modules|bower_components)/,
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
      },
      {
        test: /favicon\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
            query: {
              name: '[name].[ext]'
            }
          }
        }]
      }
    ]
  },
  plugins,
  performance: isProduction && {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
    hints: 'warning'
  },
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    versions: false,
    warnings: true,
    colors: true
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map'
}
