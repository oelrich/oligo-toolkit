module.exports = {
  entry: "./src/components/otk.ts",
  output: {
    filename: "otk.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
    ]
  },
  externals: {
    "d3": "D3"
  }
};