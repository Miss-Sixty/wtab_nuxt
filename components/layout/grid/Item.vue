<script setup lang="ts">
import { onLongPress } from '@vueuse/core'
const emit = defineEmits(['widgetContextmenu'])
defineOptions({
  name: 'GridItem'
})

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: Object,
    default: () => ({})
  }
})

const { colsNum, baseSize, baseMargin, layouts, childXY, draggingId, editMode }: any =
  inject('gridContextKey')

/**
 * item的数据
 */
const dragingData: any = computed(() => {
  return layouts.value.find((item: any) => item.id === props.id)
})

const xywh = computed(() => {
  if (!props.id) return
  if (props.id === 'placeholder') {
    const { x, y, w, h } = props.placeholder
    return { x, y, w, h }
  }

  const { position, widgetSize } = dragingData.value
  const [x, y] = position[colsNum.value]
  const [w, h] = widgetSize.split(':').map(Number)
  return { x, y, w, h }
})

// 初始排序
const initStyle = computed(() => {
  if (!xywh.value) return
  return {
    transform: `translate3d(
        ${xywh.value.x * (baseMargin.value + baseSize.value)}px,
        ${xywh.value.y * (baseMargin.value + baseSize.value)}px,
        0
    )`,
    width: `${xywh.value.w * baseSize.value + (xywh.value.w - 1) * baseMargin.value}px`,
    height: `${xywh.value.h * baseSize.value + (xywh.value.h - 1) * baseMargin.value}px`
  }
})

const dragStyle = computed(() => {
  if (props.id !== draggingId.value) return
  if (!childXY.value?.length) return
  const [x, y] = childXY.value

  return {
    transform: `translate3d(${x}px, ${y}px,0)`,
    zIndex: 2,
    transition: 'none'
  }
})

const itemRef = ref()
const onPress = (ev: Event) => {
  if (editMode.value) return
  emit('widgetContextmenu', { ref: itemRef.value, id: props.id })
}

//按压
onLongPress(itemRef, onPress, { delay: 500 })
</script>

<template>
  <div
    :id="`grid-item-${id}`"
    class="absolute rounded-lg transition-all"
    :class="editMode ? 'touch-none' : 'touch-auto'"
    :style="{ ...initStyle, ...dragStyle }"
    ref="itemRef"
    @contextmenu.prevent.stop="onPress"
  >
    <slot />
  </div>
</template>
