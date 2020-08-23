const path      = require('path');
const nodeExtrn = require('webpack-node-externals');

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
  entry: {
    client: path.join(__dirname, '/src/client/index.js')
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj
}

const server = {
  entry: {
    server: path.join(__dirname, '/src/server/index.js')
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