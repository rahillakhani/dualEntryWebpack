var webpack = require('webpack');
var path = require('path');

var devPath = path.resolve(__dirname, "source/components/");
// var buildPath = path.resolve(`${__dirname}/public/js/`);
var buildPath = path.resolve(__dirname, "public");

console.log(buildPath);
var config = {
    context: devPath,
    entry:{
      mainApp: './mainApp.jsx',
      route1: './route1/app.jsx',
      route2: './route2/app.jsx'
    },
    output: {
      path: buildPath,
      filename: '\\js\\[name].js'
    },
    module: {
      loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: devPath,
            loader: "babel",
        }
      ]
    }
}
module.exports = config;
