var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/public/src/entry.js',
  output: {
    path: './app/public/build',
    filename: 'bundle.js'
  },

  cache: false,
  debug: true,
  devtool: 'source-map',

  module: {
    loaders: [
      // {test: /\.css$/, loader: 'style!css'},
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },

      {
        test: /\.less$/,
        loader: "style!css!less"
      },

      { test: /\.png$/,    loader: 'url-loader?mimetype=image/png' },


      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          cacheDirectory: true
          //plugins: ['transform-runtime']
        }
      }
    ]
  },
  plugins: [
    // Don't compress yet for faster building time
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //}),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
};
