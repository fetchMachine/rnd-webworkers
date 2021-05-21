const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

module.exports = (_, { mode = 'development' }) => {
  const rootDir = fs.realpathSync(process.cwd());
  const distDir = path.resolve(rootDir, 'dist');

  return {
    mode,
    entry: path.resolve(rootDir, 'src/index.js'),
    output: { path: distDir },

    devServer: {
      port: process.env.DEV_PORT || 3000,
      contentBase: distDir,
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(rootDir, 'public/index.html'),
      }),
    ],
  };
}
