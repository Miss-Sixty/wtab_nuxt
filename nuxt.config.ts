// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/color-mode', '@blokwise/dynamic'],
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
    inlineSSRStyles: false,
    viewTransition: true
  },
  // components: [
  //   { path: '~/widgets/**/components', global: true },
  // { path: '~/widgets/index.vue', global: true, prefix: 'Widgets' },
  //   '~/components'
  // ],
  vue: {
    compilerOptions: {
      // 将所有带短横线的标签名都视为自定义元素
      isCustomElement: (tag) => tag.includes('swiper-')
    }
  },
  // hooks: {
  //   'pages:extend'(pages) {
  //     console.log(2233, pages);

  //     // 添加一个路由
  //     pages.push({
  //       name: 'externalLink',
  //       path: '/externalLink/setting',
  //       file: '~/widgets/externalLink/dialog/setting.vue'
  //     })
  //   }
  // }
})
