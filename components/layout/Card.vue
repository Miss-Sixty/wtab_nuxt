<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="mb-3 last:mb-0">
    <h4 v-if="title" class="mb-1.5 ml-2.5 mr-1.5 mt-2">{{ title }}</h4>
    <slot name="content">
      <div class="rounded-md bg-white px-5 py-3">
        <slot />
      </div>
    </slot>
  </div>
</template>
