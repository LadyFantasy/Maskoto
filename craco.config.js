

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  }