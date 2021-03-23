import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

const production = !process.env.ROLLUP_WATCH;

const extensions = [".ts", ".js", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      sourcemap: true,
      name: "vui",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["vue"],
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    scss(),
    typescript(),
    babel({ babelHelpers: "bundled", extensions }),
    replace({
      "process.env.NODE_ENV": production ? JSON.stringify("production") : JSON.stringify("development"),
    }),
    production && terser(), // minify, but only in production
  ],
};
