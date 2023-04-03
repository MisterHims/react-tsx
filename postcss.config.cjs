module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnano')({ preset: 'default', }),
    require('tailwindcss/nesting')(require('postcss-nested')),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.cjs'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    }),
  ],
};