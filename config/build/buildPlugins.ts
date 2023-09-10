import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import Dotenv from "dotenv-webpack"

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => {

  return [
    new webpack.ProgressPlugin(),
    new Dotenv(),
    new HTMLWebpackPlugin({
      template: paths.html
    })
  ]
}