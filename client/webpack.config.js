const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  context: path.join(__dirname, './web'),
  entry: {
    js: './index.jsx',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, './bundle'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        loaders: [
          // 'react-hot',
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./web'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    // })
  ],
  devServer: {
    contentBase: './web'
    // hot: true
  }
};
