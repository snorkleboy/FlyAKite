    var path = require("path");

    module.exports = {
      context: __dirname,
      entry: "./frontend/FlyAKite.jsx",
      output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: "bundle.js"
      },
      module: {
        loaders: [
          {
            test: [/\.jsx?$/, /\.js?$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2016', 'react']
            }
          }
        ]
      },
      devtool: 'source-map',
      resolve: {
        extensions: [".js", ".jsx", "*"]
      }
    };
