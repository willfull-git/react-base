const
  path       = require('path'),
  pluginHtml = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src/index.js')
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new pluginHtml({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/public'),
    publicPath: '/dist/'
  }
}

module.exports = config;
