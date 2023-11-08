// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
    storageKey: 'wtab-theme',
  },
  css: [
    '@/assets/scss/index.scss',
  ],
  experimental: {
    inlineSSRStyles: false
  },
})
