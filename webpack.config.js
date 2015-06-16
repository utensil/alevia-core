var webpack = require('webpack');
var _ = require('lodash');

var common_config = {
  output: {
    libraryTarget: "var", 
    path: __dirname + '/test/build/',
    filename: '[name]'
  },
  target: 'web',
  plugins: [
    new webpack.ProvidePlugin({
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  externals: [
      {
          "window": "window"
      }
  ]
};

var configs = _.map(['test_deps.js', 'test_all.js'], function (js_name) {
    var config = {
        entry: {

        }
    };

    config.entry[js_name] = './test/' + js_name;

    return _.merge(config, common_config);
});

module.exports = configs;