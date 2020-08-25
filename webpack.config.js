const path       = require('path');
const nodeExtrn  = require('webpack-node-externals');
const pluginHtml = require('html-webpack-plugin');

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }
  ]
}

const client = {
  mode: 'development',
  entry: {
    client: path.join(__dirname, 'src/client/index.js')
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  plugins: [
    new pluginHtml({
      template: 'src/client/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/public'),
    publicPath: '/dist/'
  }
}

const server = {
  mode: 'development',
  entry: {
    server: path.join(__dirname, 'src/server/index.js')
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleObj,
  externals: [nodeExtrn()]
}

module.exports = [client, server];