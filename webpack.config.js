module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["babel-polyfill", "./frontend/main"],
  output: {
    path: __dirname,
    filename: "public/bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
