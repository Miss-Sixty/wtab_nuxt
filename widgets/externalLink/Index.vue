<script setup lang="ts">
defineOptions({
  name: 'ExternalLink'
})

const props = defineProps({
  widget: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div>
    <p id="1">111</p>
    <p id="2">222</p>
    <p id="3">333</p>
    <p id="4">444</p>
  </div>
</template>
