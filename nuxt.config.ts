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
  components: [
    { path: '~/widgets', global: true, prefix: 'Widgets' },
    '~/components'
  ],
  vue: {
    compilerOptions: {
      // 将所有带短横线的标签名都视为自定义元素
      isCustomElement: (tag) => tag.includes('swiper-')
    }
  }
})
