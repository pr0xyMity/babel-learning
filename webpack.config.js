const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
