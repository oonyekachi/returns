require('es6-promise').polyfill();
var path = require("path");
var css = require("css-loader");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: __dirname,
    entry: {
      client_only:  "./webpack/client_only.js",
      client_and_server: "./webpack/client_and_server.js"
    },
    output: {
      path: path.join(__dirname, 'app', 'assets',   'javascripts', 'webpack'),
      filename: "[name].js",
      publicPath: "/webpack/"
    },
    module: {
      loaders: [
        { test: /\.css$/,  loader: "style-loader!css-loader" },
        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
        { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
        { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
      ]
    },
    resolve: {
      root: path.join(__dirname, '..', 'webpack')
    },
};