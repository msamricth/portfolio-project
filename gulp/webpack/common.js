const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/js/scripts.js"],
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "../../site/js")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../../src/js")
    }
  }
};