const gh = process.env.NODE_ENV === 'gh-pages';

module.exports = {
  process: {
    env: {
      BACKEND_URL: gh ? 'https://celloworld.github.io/product-page' : ''
    },
  },
}
