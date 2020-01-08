const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'server.js',
  },
  devtool: "inline-source-map",
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
        new TsconfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'ts-loader'
              }
          ]
      }
    ]
  },
  target: 'node',
};