import postcssImport from 'postcss-import';
import cssnano from 'cssnano';
import postcssNested from 'postcss-nested';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssImport(),
    cssnano({ preset: 'default' }),
    tailwindcss({ config: './tailwind.config.cjs' }),
    postcssNested(),
    autoprefixer(),
    postcssPresetEnv({
      features: {
        'nesting-rules': false
      }
    }),
  ],
};