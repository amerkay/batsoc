export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'batsoc',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        hid: 'netlify-identity-widget',
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true,
      },
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
  ],

  webfontloader: {
    google: {
      families: ['Inter:400,700,900&display=swap'], // Loads Lato font with weights 400 and 700
    },
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'Australia/Brisbane',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
      'localizedFormat',
    ],
  },

  hooks: {
    // Doc: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
    'content:file:beforeInsert': async (document, database) => {
      // search for markdown containing
      // only `specialNotice` property.
      if (
        document.extension === '.json' &&
        document.questions &&
        document.questions.length > 0
      ) {
        document.questions.forEach(async (q) => {
          // Replace Markdown string in database
          // with the JSON ATS version
          q.answer = await database.markdown.toJSON(q.answer)
        })
      }
    },
  },

  // tailwindcss: {
  //   // configPath: '~/tailwind.config.js',
  //   // cssPath: '~/assets/css/main.scss',
  //   // Doc: https://github.com/nuxt-community/tailwindcss-module
  //   exposeConfig: true,
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
