/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

// It is handy to not have those transformations while we developing
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('precss'),
      require('autoprefixer'),
      require('postcss-nested'),
      require('cssnano'),
      // More postCSS modules here if needed
    ],
  };
}
