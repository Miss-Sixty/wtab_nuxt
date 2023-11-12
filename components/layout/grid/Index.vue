<script setup lang="ts">
import useGesture from './useGesture'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  colsNum: {
    type: Number,
    required: true
  },
  baseSize: {
    type: Number,
    required: true
  },
  baseMargin: {
    type: Number,
    required: true
  },
  editMode: {
    type: Boolean,
    default: false
  }
})

let widthStyle = ref()
let heightStyle = ref()

onMounted(() => {
  widthStyle.value = props.colsNum * (props.baseSize + props.baseMargin) - props.baseMargin

  let h = 0
  let y = 0
  props.modelValue.forEach((widget: any) => {
    const widgetY = widget.position[props.colsNum][1]
    const widgetH = Number(widget.widgetSize.split(':')[1])
    if (widgetY + widgetH > y + h) {
      h = widgetH
      y = widgetY
    }
  })
  heightStyle.value = `${(y + h) * (props.baseSize + props.baseMargin) - props.baseMargin}px`
})


const gridRef = ref<HTMLElement | null>(null)
// 手势
const { dragging, childXY, draggingId, placeholderData } = useGesture({
  listener: computed(() => props.editMode), // 是否开启手势
  el: gridRef, // 绑定的元素
  baseSize: computed(() => props.baseSize), // 基础尺寸
  baseMargin: computed(() => props.baseMargin), // 基础间距
  layouts: computed(() => props.modelValue),
  colsNum: computed(() => props.colsNum)
})

provide('gridContextKey', {
  colsNum: computed(() => props.colsNum),
  baseSize: computed(() => props.baseSize),
  baseMargin: computed(() => props.baseMargin),
  layouts: computed(() => props.modelValue),
  childXY,
  draggingId,
  dragging,
  editMode: computed(() => props.editMode)
})
</script>

<template>
  <div ref="gridRef" class="relative m-auto transition-all" :style="{
    width: widthStyle + 'px',
    height: heightStyle
  }" v-if="widthStyle">
    <LayoutGridItem class="bg-base-4" :key="placeholderData?.id" :id="placeholderData?.id" :placeholder="placeholderData"
      v-show="dragging" />
    <slot />
  </div>
</template>
