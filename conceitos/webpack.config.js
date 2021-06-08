const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //src\index.js
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/",
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
