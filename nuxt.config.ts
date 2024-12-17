// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    ['@nuxtjs/google-fonts', {
      families: {
        'IBM+Plex+Sans+Arabic': [100, 200, 300, 400, 500, 600, 700]
      },
      display: 'swap',
    }]
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})