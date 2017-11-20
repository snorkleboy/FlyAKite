var path = require('path');
  module.exports = {
      context: __dirname,
      entry: "./frontend/FlyAKiteEntry.js",
      output: 'app/assets/javascripts',
      module: {
        loaders: [
       {
         test: [/\.jsx?$/, /\.js?$/],
         exclude: /(node_modules)/,
         loader: 'babel-loader',
         query: {
        presets: ['es2016', 'react']
         }
       }
        ]
      },
      devtool: 'source-map',
      resolve: {
        extensions: ["'.js'", "'.jsx'", "'*'"]
      }
    };
