var path = require('path');
var fs = require('fs');
const NodemonPlugin = require( 'nodemon-webpack-plugin' ) 

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use:  { loader: 'ts-loader' },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new NodemonPlugin(),
  ],
  target: 'node',
  externals: nodeModules
}