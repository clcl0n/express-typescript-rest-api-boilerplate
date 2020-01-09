const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const webpackBase = {
  entry: {
    server: './src/index.ts'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  mode: 'production',
  target: 'node',
  externals: {
    'express': 'commonjs express'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [
        new TsconfigPathsPlugin()
    ]
  }
};

const webpackModules = {
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
  }
};

const webpackPlugins = {
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: 'Building API'
    })
  ]
};

module.exports = {...webpackBase, ...webpackModules, ...webpackPlugins};