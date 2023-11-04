<script setup>
import themeScss from '@/assets/scss/_theme.module.scss?inline'

const colorMode = useColorMode()
</script>

<template>
  <div class="h-full bg-base-medium duration-[20000ms]">
    <LayoutHeader />
    <div class="pt-14">
      <select v-model="colorMode.preference">
        <option v-for="(item, key) in themeScss" :key="key" :value="key">
          {{ key }}
        </option>
      </select>
      <NuxtPage class="mx-auto p-4" />
    </div>
  </div>
</template>
