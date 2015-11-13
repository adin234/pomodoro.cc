var commonConfig = require('./webpack-common.config.js');

var devLoaders = [
  // javascript/jsx loader - https://www.npmjs.com/package/babel-loader - with the react-hot loader
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel-loader'],
  }
]

module.exports = {
  entry: [
  // setup the hot mobule loading
  'webpack-dev-server/client?http://localhost:9000',
  'webpack/hot/only-dev-server',
  // our entry file
  './src/index.js'
  ],
  output: {
    path: './build',
    filename: 'bundle.[hash].js'
  },
  devtool: 'eval',
  module: {
    loaders: commonConfig.loaders.concat(devLoaders)
  },
  plugins: [
    commonConfig.indexPagePlugin
  ],
};
