import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {

  return {
    alias: options.aliases,
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, "node_modules"],
    plugins: [new TsconfigPathsPlugin()]
  }
}