module.exports = {
  plugins: [
    require('cssnano')({ preset: 'default', }),
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.cjs'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    }),
  ],
};