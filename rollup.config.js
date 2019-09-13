import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import includepaths from 'rollup-plugin-includepaths'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'wongai'
    }
  ],
  plugins: [
    typescript(),
    terser(),
    includepaths({
      path: ['./src'],
      extensions: ['.ts']
    })]
}
