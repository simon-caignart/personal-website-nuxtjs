export default {
  target: 'server',
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "en-US",
    },
    link: [
      { rel: "shortcut icon", href: "https://simoncaignart.com/favicon.ico" },
      { rel: "icon", href: "https://simoncaignart.com/favicon.ico" },
      { rel: "apple-touch-icon", href: "https://simoncaignart.com/favicon.ico" },
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/vue-tel-input/dist/vue-tel-input.css",
    "~/node_modules/element-ui/lib/theme-chalk/index.css",
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vue-tel-input.js",
    "~/plugins/element-ui",
    { src: "~/plugins/aos", ssr: false },
    "~/plugins/animateAboutIllustration.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],
  i18n: {
    baseUrl: "https://simoncaignart.com",
    strategy: "no_prefix",
    langDir: "~/locales/",
    locales: [
      { code: "en", iso: "en-US", file: "en.json" },
      { code: "fr", iso: "fr-FR", file: "fr.json" }
    ],

    defaultLocale: "en",
    fallbackLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};