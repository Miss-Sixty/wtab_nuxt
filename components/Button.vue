<script setup lang="ts">
defineOptions({
  name: 'Button'
})

const sizeType: any = {
  xs: 'px-3 py-1 text-xs',
  sm: 'px-3 py-1 text-sm'
}

defineProps({
  size: {
    type: String,
    default: 'default'
  }
})
</script>

<template>
  <button
    class="hover:outline-base-default outline-transparent outline outline-offset-1 outline-1 rounded-full  flex align-middle justify-center ease-linear bg-base-default text-white transition-[background-color] duration-200"
    :class="sizeType[size]">
    <slot />
  </button>
</template>
