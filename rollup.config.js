const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'public/index.js',
      format: 'esm',
    }
  ],
  plugins: [nodeResolve(), babel({ exclude: 'node_modules/**' })],
}