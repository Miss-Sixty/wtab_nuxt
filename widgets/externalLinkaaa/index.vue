<script setup lang="ts">
const router = useRouter()

const props = defineProps({
  widget: {
    type: Object,
    default: () => ({})
  },
  type: { // 删除-del 新增-add ''-展示
    type: String,
    default: ''
  }
})

const handleClick = () => {
  console.log(1, props.widget, props.type);
  router.push({ path: '/externalLinkaaa/setting' })
}

</script>

<template>
  <div @click="handleClick">
    <p id="1">111</p>
    <p id="2">222</p>
    <p id="3">333</p>
    <p id="4">444</p>
  </div>
</template>
