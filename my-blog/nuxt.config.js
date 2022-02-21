require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    async routes() {
      const faunadb = require('faunadb')
      const query = faunadb.query
      const slugify = require('slugify')
      const q = query
      if (!process.env.FAUNA_SERVER_KEY) {
        throw new Error('FAUNA_SERVER_KEY not found.')
      }
      const client = new faunadb.Client({
        secret: process.env.FAUNA_SERVER_KEY,
      })
      const result = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('allPosts'))),
          q.Lambda('X', q.Get(q.Var('X')))
        )
      )
      const posts = result.data.map((p) => p.data)
      const routes = posts.map((post) => {
        console.log(post)
        console.log(JSON.stringify(post))
        const title = post.title
        const slug = slugify(title, {
          remove: /[*+~.()'"!:@]/g,
        })

        return {
          route: '/posts/' + slug,
          payload: post,
        }
      })
      routes.push({
        route: '/',
        payload: posts,
      })
      return routes
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
