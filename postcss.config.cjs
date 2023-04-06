module.exports = {
  plugins: [
    require('postcss-import'),
    
    require('postcss-mixins'),
    require('cssnano')({ preset: 'default', }),
    require('tailwindcss/nesting')(require('postcss-nested')),
    require('postcss-simple-vars'),
    require('autoprefixer'),
    require('postcss-utilities'),
    require('tailwindcss')('./tailwind.config.cjs'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': false
      }
    }),
  ],
};