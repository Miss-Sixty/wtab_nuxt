<script setup>
import themeScss from '@/assets/scss/_theme.module.scss'
const colorMode = useColorMode()
</script>

<template>
  <LayoutHeader />
  <div class="pt-14">
    <select v-model="colorMode.preference">
      <option v-for="(item, key) in themeScss" :key="key" :value="key">
        {{ key }}
      </option>
    </select>
    <NuxtPage class="mx-auto p-4" />
  </div>
</template>
