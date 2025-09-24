const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "distMain.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //css
      },
      {
        test: /\.html$/i,
        loader: "html-loader", //images in html
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource", //images in js
      },
    ],
  },
};