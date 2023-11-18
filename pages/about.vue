<script setup lang="ts">
import miaoMiao from '/miaomiao.svg'
import configs from '@/config/settings'
const appConfig = useAppConfig()

const links = [
  {
    link: 'https://web.wtab.cn',
    text: '官方网站'
  },
  {
    link: 'https://support.qq.com/products/592621/',
    text: '问题反馈'
  }
]

</script>

<template>
  <DialogPage>
    <div class="relative flex h-full flex-col items-center antialiased">
      <img class="mb-3 mt-14 w-28" :src="miaoMiao" />

      <p class="text-xl font-bold">{{ configs.title }}</p>
      <p class="mt-3 text-xs text-gray-500">{{ configs.description }}</p>
      <div class="mx-1 mt-4 divide-x divide-current text-sm">
        <a class="px-1.5" v-for="(item, i) in links" :key="i" :href="item.link" target="_blank">
          {{ item.text }}
        </a>
      </div>

      <div class="absolute bottom-0 flex w-full justify-between">
        <p class="text-xs text-gray-500">最后更新：{{ appConfig.appInfo.lastBuildTime }}</p>
        <p class="text-xs text-gray-500">V{{ appConfig.appInfo.version }}</p>
      </div>
    </div>
  </DialogPage>
</template>
