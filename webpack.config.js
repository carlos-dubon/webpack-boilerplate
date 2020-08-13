const path = require("path");

module.exports = {
  entry: "./src/ts/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "build",
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
