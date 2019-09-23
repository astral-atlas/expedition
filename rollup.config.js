const nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'public/index.js',
      format: 'esm',
    }
  ],
  plugins: [nodeResolve()],
}