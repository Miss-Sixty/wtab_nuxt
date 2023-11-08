<script setup lang="ts">
import { computePosition, flip, shift, offset } from '@floating-ui/dom'
import { onClickOutside, unrefElement } from '@vueuse/core'
import useLayoutStore from '@/stores/layout'
const layoutStore = useLayoutStore()
const { editMode } = storeToRefs(layoutStore)

defineOptions({
  name: 'ContextMenu'
})
const emit = defineEmits(['update:addWidget', 'del'])
const props = defineProps({
  addWidget: {
    type: Boolean,
    default: false
  }
})

const options: any = {
  settingIcon: {
    placement: 'bottom-end',
    middleware: [
      offset(6),
      flip(),
      shift(),
      { fn: () => (styles.value.transformOrigin = '90% 0%') }
    ],
    transformOrigin: '90% 0%'
  },
  widgetContextmenu: {
    placement: 'bottom-start',
    middleware: [
      offset(6),
      flip(),
      shift(),
      {
        fn: ({ placement }: any) => {
          const placementMap: any = {
            'bottom-start': '0% 0%',
            'bottom-end': '100% 0%',
            'top-start': '0% 100%',
            'top-end': '100% 100%'
          }
          return (styles.value.transformOrigin = placementMap[placement])
        }
      }
    ],
    transformOrigin: '90% 0%'
  },
  base: {
    placement: 'right-start',
    middleware: [
      flip(),
      shift(),
      {
        fn: ({ placement }: any) =>
          (styles.value.transformOrigin = placement === 'left-start' ? '90% 0%' : '0% 0%')
      }
    ],
    transformOrigin: '0% 0%'
  }
}
const floatingRef = ref()
const popperVisible = ref(false)
const dialogType = ref('')
// 存储传来的数据
const saveData = ref()
const show = async (type: string, domOrRect: any, data: any) => {
  saveData.value = data
  if (type === 'homeContextmenu') {
    domOrRect = getBoundingClientRect(domOrRect)
  }
  dialogType.value = type
  popperVisible.value = true
  const activeOptions = options[type] || options.base
  onContextmenu(domOrRect, activeOptions)
}

// 处理 getBoundingClientRect 如果为dom则直接返回，如果为event则返回一个伪造的dom
const getBoundingClientRect = ({ clientX, clientY }: any) => ({
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x: clientX,
      y: clientY,
      top: clientY,
      left: clientX,
      right: clientX,
      bottom: clientY
    }
  }
})

const styles = ref({
  top: '0',
  left: '0',
  transformOrigin: '0% 0%'
})
const onContextmenu = async (reference: any, options: any = {}) => {
  const { placement, middleware } = options
  const position = await computePosition(unrefElement(reference), floatingRef.value, {
    placement,
    middleware,
    strategy: 'fixed'
  })

  styles.value.top = position.y + 'px'
  styles.value.left = position.x + 'px'
}

// 点击外部关闭
onClickOutside(floatingRef, () => {
  popperVisible.value = false
  saveData.value = false
})

const handleClick = (item: any) => {
  popperVisible.value = false
  item.onclick()
}

const baseSettingDialogVisible = ref(false)
const aboutDialogVisible = ref(false)
const contextmenuData = [
  {
    text: '常规设置',
    divided: false,
    visibles: ['settingIcon', 'homeContextmenu', 'widgetContextmenu'],
    onclick: () => (baseSettingDialogVisible.value = true)
  },
  {
    text: '删除此小组件',
    divided: true,
    delete: true,
    visibles: ['widgetContextmenu'],
    onclick: () => emit('del', saveData.value)
  },
  {
    text: '添加小组件',
    divided: () => ['settingIcon', 'homeContextmenu'].includes(dialogType.value),
    visibles: ['settingIcon', 'homeContextmenu', 'widgetContextmenu'],
    onclick: () => emit('update:addWidget', true)
  },
  {
    text: '编辑主页',
    divided: false,
    visibles: ['settingIcon', 'homeContextmenu', 'widgetContextmenu'],
    onclick: () => (editMode.value = true)
  },
  {
    text: '关于',
    divided: true,
    visibles: ['settingIcon'],
    onclick: () => (aboutDialogVisible.value = true)
  }
]

const showMenu = computed(() =>
  contextmenuData.filter((item) => item.visibles.includes(dialogType.value))
)

defineExpose({ show })
</script>

<template>
  <Teleport to="body">
    <Transition enter-active-class="animate-zoom-in transition-none transform-gpu"
      leave-active-class="animate-zoom-out transform-gpu">
      <ul
        class="fixed z-auto min-w-[150px] translate-x-0 translate-y-0 select-none rounded-md bg-white p-2 shadow-sm transition-[left,top]"
        :style="styles" v-show="popperVisible" ref="floatingRef">
        <template v-for="(item, i) in showMenu" :key="i">
          <li class="my-1.5 border-t border-[#E5E5E5]"
            v-if="typeof item.divided === 'boolean' ? item.divided : item.divided()" />
          <li :class="[
            item.delete ? 'text-danger-default' : '',
            item.delete ? 'hover:bg-danger-2' : 'hover:bg-base-2 hover:text-white'
          ]" class="cursor-pointer rounded px-2.5 py-1.5 text-sm transition" @click="handleClick(item)">
            {{ item.text }}
          </li>
        </template>
      </ul>
    </Transition>
  </Teleport>

  <LayoutSettings v-model="baseSettingDialogVisible" />
  <LayoutAbout v-model="aboutDialogVisible" />
</template>
