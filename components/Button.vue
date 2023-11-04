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
    class="hover:outline-base-default outline-transparent outline outline-offset-1 outline-1 rounded-full  flex align-middle justify-center bg-base-default text-white duration-[20000ms]"
    :class="sizeType[size]">
    <slot />
  </button>
</template>
