const path=require('path');
const WebpackCopyPlugin=require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    app: path.resolve(__dirname, "src", "script", "app.tsx")
  },
  output: {
    filename: path.join("assets", "script", "[name].js"),
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)?$/,
      include: [
        path.resolve(__dirname, "src")
      ],
      loader: "ts-loader"
    }]
  },
  resolve: {
    extensions: [
      ".ts", ".tsx", ".js"
    ]
  },
  plugins: [
    new WebpackCopyPlugin(
      [{
        from: "./",
        to: "",
        ignore: [ "*/**" ]
      }],
      { context: path.resolve(__dirname, "src") }
    )
  ]
}