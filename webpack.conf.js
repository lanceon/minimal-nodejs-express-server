const webpack = require('webpack')

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: "./server.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
