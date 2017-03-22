import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import css from 'rollup-plugin-css-only';
//import image from 'rollup-plugin-image';
import { keys }    from 'lodash';
import url from "rollup-plugin-url";

const urlPlugin = url({
  limit: 10 * 1024, // inline files < 10k, copy files > 10k
});

const EXTERNALS = {
  'react': 'React',
  'react-dom': 'ReactDOM',
}

const plugins = [
	json(),
	css({ output: 'public/assets/styles/timetomeet.css' }),
	urlPlugin,
	babel({
		exclude: 'node_modules/**'
	}),
	resolve({
		jsnext: true,
		browser: true,
		main: true,
		ignoreGlobal: false,
		skip: keys(EXTERNALS),
	}),
	commonjs(),
	globals(),
	replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
	(process.env.NODE_ENV === 'production' && uglify())
];

const options = {
	entry: 'src/index.js',
	external: keys(EXTERNALS),
  globals: EXTERNALS,
};

const writeOptions = {
	dest: 'public/assets/scripts/timetomeet.js',
  format: 'iife',
  sourceMap: true
};

const plugin = url({
  limit: 10 * 1024, // inline files < 10k, copy files > 10k
  include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
})

rollup({
  entry: 'src/index.js',
  plugins,
})
.then(bundle => bundle.write(writeOptions))
.then(() => plugin.write(writeOptions))
