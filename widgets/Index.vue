<script setup lang="ts">
import useLayoutStore from '@/stores/layout'
import { IconPlus, IconMinus } from '@tabler/icons-vue'
const layoutStore = useLayoutStore()
const { baseMargin, baseSize } = storeToRefs(layoutStore)
defineOptions({
  name: 'widget'
})
const props: any = defineProps({
  widget: {
    type: Object,
    default: () => ({})
  },
  component: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})

const wh = computed(() => {
  const { widgetSize } = props.widget
  return widgetSize.split(':')
})

const widgetWH = computed(() => {
  const [w, h] = wh.value
  return {
    width: `${w * baseSize.value + (w - 1) * baseMargin.value}px`,
    height: `${h * baseSize.value + (h - 1) * baseMargin.value}px`
  }
})

const scale = computed(() => {
  const [w, h] = wh.value
  let scale = 1
  if (props.type === 'add' && (h > 2 || w > 4)) scale = 0.65
  return {
    transform: `scale(${scale})`
  }
})

const iconScale = computed(() => {
  const [w, h] = wh.value
  let scale = 1
  if (props.type === 'add' && (h > 2 || w > 4)) scale = 1.5
  return {
    transform: `translate(-25%, -25%) scale(${scale})`
  }
})

const handleClick = () => {
  props.type === 'add' && layoutStore.addWidget(props.widget, props.component)
  props.type === 'edit' && layoutStore.delWidget(props.widget)
}

</script>
<template>
  <div class="relative select-none" :style="{ ...widgetWH, ...scale }">
    <template v-if="type">
      <component :is="type==='add'?IconPlus:IconMinus" :size="22"
        class="absolute left-0 top-0 scale-100 text-white cursor-pointer rounded-full bg-base-1 p-1 transition hover:bg-primary-default"
        @click="handleClick" :style="iconScale" />
    </template>
    <component class="overflow-hidden rounded-lg bg-white" :style="widgetWH" is="WidgetsExternalLink" :type="type"
      :widget="widget" />
  </div>
</template>