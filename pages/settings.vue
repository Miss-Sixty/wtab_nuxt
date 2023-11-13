<script setup lang="ts">
import themeScss from '@/assets/scss/_theme.module.scss'
import { IconDeviceDesktop, IconSunLow, IconMoonStars } from '@tabler/icons-vue'
const colorMode = useColorMode()


const system = ['system', 'light', 'dark']



</script>

<template>
  <Dialog title="常规设置">
    <LayoutCard>
      <div class="flex items-center justify-between">
        <div>外观</div>
        <div class="flex justify-end gap-2">
          <div class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border"
            @click="colorMode.preference = color" v-for="(color) in system" :key="color">
            <IconDeviceDesktop v-if="color === 'system'" :size="18" />
            <IconSunLow v-if="color === 'light'" :size="18" />
            <IconMoonStars v-if="color === 'dark'" :size="18" />
          </div>
        </div>
      </div>
    </LayoutCard>
    <LayoutCard>
      <div class="flex items-center justify-between">
        <div>强调色</div>
        <div class="flex justify-end  gap-2">
          <div v-for="(color) in themeScss" :key="color" class="h-7 w-7 cursor-pointer rounded-full"
            :style="{ 'background-color': color }" @click="colorMode.preference = color"></div>
        </div>
      </div>
    </LayoutCard>
  </Dialog>
</template>
