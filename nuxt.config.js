
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css', integrity: 'sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=', crossorigin: 'anonymous' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  axios: {
  },
  build: {
    extend (config, ctx) {
    }
  },
  pwa: {
    icon: {                                      
      accessibleIcons: false                                      
    },
    meta: {                                      
      theme_color: '#f61f16',
      ogHost: 'https://cocinandoconamor.netlify.app',
      nativeUI: true
    },
    manifest: {
      name: 'Cocinando con Amor',
      short_name: 'Cocinando con Amor',
      theme_color: "#f61f16",
      background_color: "#f61f16",
      icons: [],
      start_url: "/",
    }
  },
}
