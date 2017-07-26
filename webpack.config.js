// https://medium.com/@vladimirtolstikov/how-to-merge-d-ts-typings-with-dts-bundle-and-webpack-e8903d699576

var webpack = require('webpack');

var libraryName = 'oligo-toolkit';

var entry = {};
entry[libraryName] = __dirname + '/src/oligo-toolkit.ts';
entry[libraryName + '.min'] = __dirname + '/src/oligo-toolkit.ts';

var config = {
  entry: entry,
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: "[name].js"},
  resolve: {
    extensions: [".ts"]
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: "awesome-typescript-loader" }
    ]
  }
};

module.exports = config;
