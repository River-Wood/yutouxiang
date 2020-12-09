
export default {
  ssr: false,
  base: '/scripts/',

  /*
   ** Headers of the page
   */
  head: {
    title: '数字沙滩',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' },
      { rel: 'stylesheet', type: 'text/css', href: '/player.css' }
    ],
    script: [
      { src: 'scripts/adapter.js' },
      { src: 'scripts/webRtcPlayer.js' },
      { src: 'scripts/app.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css',
    {src:'element-ui/lib/theme-chalk/index.css'}
  ],
  styleResources: {
    less: './assets/css/base.less'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/tools', ssr: false },
    { src: '@/plugins/axios', ssr: false },
    { src: '@/plugins/lodash', ssr: false },
    { src: '@/plugins/element-ui', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/toast', 
    '@/plugins/lodash'
  ],

  toast: {
    position: 'top-center',
    duration: 5000,
    keepOnHover: true,
    singleton: true,
    theme: 'bubble'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    credentials: true
  },

  // proxy: {
  //   '/rtmp/': {
  //     target: `http://${config.rtmpIP}:${config.apiPort}/`,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/rtmp/': '/vrapi/hikvisionNVR/'
  //     }
  //   }
  // },

  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        { // 重定向
          name: 'home-redirect',
          path: '*',
          component: resolve(__dirname, 'pages/index.vue')
        }
      )
    }
  },
  generate: {
    dir: '../TaiZhouRunner/taizhouServe'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['element-ui'],
    publicPath: '/scripts/',
    cache: true,
    parallel: true,
    hash: Date.now(),
    maxChunkSize: 300000,
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: false,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        removeTagWhitespace: false,
        sortClassName: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    splitChunks: {
      pages: true,
      components: true,
      commons: true
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
