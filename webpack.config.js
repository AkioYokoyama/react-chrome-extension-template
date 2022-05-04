const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup.js',
    options: './src/options.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/popup.html',
      filename: 'popup.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/options.html',
      filename: 'options.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: ".",
          to: "../build",
          context: "public",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.html"],
          },
        },
      ],
      options: {},
    }),
  ],
};
