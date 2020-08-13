const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: "./src/ts/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [__dirname + "./src"],
        //include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    //publicPath: "build",
    path: __dirname + "/build",
    filename: "bundle.js",
    //path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
