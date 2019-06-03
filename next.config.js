const withNextPages = require('@primer/next-pages/plugin')
const configure = require('./lib/config')

module.exports = configure(withNextPages({
  env: {
    GOOGLE_ANALYTICS_UA: 'UA-126681523-1'
  }
}))
