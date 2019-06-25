const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/public"),
    filename: "index_bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    open: true,
    port: 80,
    stats: "none",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new dotenv()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
