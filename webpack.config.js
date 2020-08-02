const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const SRC_DIR = path.join(__dirname, '/public/src');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: '[name].bundle.js',
    path: DIST_DIR
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './public/src/index.html',
  //     filename: 'index.html'
  //   }),
  //   new CopyWebpackPlugin({
  //     patterns: [
  //         {from: './assets', to: 'assets'}
  //     ]
  //   }),
  //   new webpack.ProvidePlugin({
  //     $: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery',
  //     Popper: ['popper.js', 'default'],
  //     _: "underscore"
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  }
}