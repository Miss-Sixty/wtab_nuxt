<script setup lang="ts">
import themeScss from '@/assets/scss/_theme.module.scss'
import { IconDeviceDesktop, IconSunLow, IconMoonStars } from '@tabler/icons-vue'
const colorMode = useColorMode()


// 将 themeScss 中 light、dark 和其他色分开
const colors = computed(() => {
  let system: any = { auto: 'auto' }
  let other: any = {}
  for (const key in themeScss) {
    if (key === 'light' || key === 'dark') {
      system[key] = themeScss[key]
    } else {
      other[key] = themeScss[key]
    }
  }
  return {
    system,
    other
  } as {
    system: { [key: string]: string }
    other: { [key: string]: string }
  }
})
</script>

<template>
  <Dialog title="常规设置">
    <LayoutCard>
      <div class="flex items-center justify-between">
        <div>主题</div>
        <div class="flex justify-end">
          <div class="mr-4 flex gap-1">
            <div class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
              @click="colorMode = key" v-for="(color, key) in colors.system" :key="key">
              <IconDeviceDesktop v-if="key === 'auto'" :size="18" />
              <IconSunLow v-if="key === 'light'" :size="18" />
              <IconMoonStars v-if="key === 'dark'" :size="18" />
            </div>
          </div>
          <div class="flex gap-1">
            <div v-for="(color, key) in colors.other" :key="key" class="h-7 w-7 cursor-pointer rounded-full"
              :style="{ 'background-color': color }" @click="colorMode = key"></div>
          </div>
        </div>
      </div>
    </LayoutCard>
  </Dialog>
</template>
