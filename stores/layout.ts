import { defineStore } from 'pinia'
import { useBreakpoints } from '@vueuse/core'
import dayjs from 'dayjs'
import { nanoid } from 'nanoid/non-secure'

function findPosition([widgetW, widgetH]: [number, number], layouts: any, colsNum: number) {
  for (let y = 0; ; y++) {
    for (let x = 0; x <= colsNum - widgetW; x++) {
      let canPlace = true
      for (let i = 0; i < layouts.length; i++) {
        const rect = layouts[i]
        const [rectX, rectY] = rect.position[colsNum]
        const [rectW, rectH] = rect.widgetSize.split(':').map(Number)
        if (
          x <= rectX + rectW - 1 &&
          x + widgetW - 1 >= rectX &&
          y <= rectY + rectH - 1 &&
          y + widgetH - 1 >= rectY
        ) {
          canPlace = false
          break
        }
      }
      if (canPlace) {
        return [x, y]
      }
    }
  }
}

export default defineStore('storeLayout', () => {
  const baseSize = ref(74) // 图标大小
  const baseMargin = ref(18) // 图标间距
  const editMode = ref(false) // 编辑模式
  const layouts: any = ref([
    {
      id: 'externalLink-x0gnJpstG4h0CYSkPPcLS',
      widgetName: '外链1',
      updateTime: '',
      widgetSize: '1:1',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [0, 0],
        '8': [0, 0],
        '12': [0, 0],
        '14': [0, 0],
        '16': [0, 0],
        '18': [0, 0],
        '20': [0, 0]
      },
      update: 1698497157119,
      component: 'externalLink'
    },
    {
      id: 'externalLink-QwnfFlV0UmTJcKLUnX1A1',
      widgetName: '外链1',
      updateTime: '',
      widgetSize: '1:1',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [1, 0],
        '8': [1, 0],
        '12': [1, 0],
        '14': [1, 0],
        '16': [1, 0],
        '18': [1, 0],
        '20': [1, 0]
      },
      update: 1698497158245,
      component: 'externalLink'
    },
    {
      id: 'externalLink-QErDWJnpreYhfmIMcgri-',
      widgetName: '外链3',
      updateTime: '',
      widgetSize: '2:1',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [2, 0],
        '8': [2, 0],
        '12': [2, 0],
        '14': [2, 0],
        '16': [2, 0],
        '18': [2, 0],
        '20': [2, 0]
      },
      update: 1698497161020,
      component: 'externalLink'
    },
    {
      id: 'externalLink-j1uDyDQIBBoW9x18gbH8e',
      widgetName: '外链4',
      updateTime: '',
      widgetSize: '3:2',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [0, 1],
        '8': [4, 0],
        '12': [4, 0],
        '14': [4, 0],
        '16': [4, 0],
        '18': [4, 0],
        '20': [4, 0]
      },
      update: 1698497162658,
      component: 'externalLink'
    },
    {
      id: 'externalLink-fZX70pAAnpynDbVPtn--4',
      widgetName: '外链1',
      updateTime: '',
      widgetSize: '1:1',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [3, 1],
        '8': [7, 0],
        '12': [7, 0],
        '14': [7, 0],
        '16': [7, 0],
        '18': [7, 0],
        '20': [7, 0]
      },
      update: 1698497166706,
      component: 'externalLink'
    },
    {
      id: 'externalLink-yB1MO7yd_STzCo7jVQZGV',
      widgetName: '外链6',
      updateTime: '',
      widgetSize: '3:3',
      widgetData: {
        protocol: '',
        src: '',
        bgColor: '',
        iconType: 'online',
        onlineIcon: '',
        pureIcon: '',
        localIcon: ''
      },
      position: {
        '4': [0, 3],
        '8': [0, 1],
        '12': [8, 0],
        '14': [8, 0],
        '16': [8, 0],
        '18': [8, 0],
        '20': [8, 0]
      },
      update: 1698497172269,
      component: 'externalLink'
    }
  ]) // 布局组件数据

  // 布局宽度数据
  const breakpoints = ref({
    4: 475,
    8: 705,
    12: 1050,
    14: 1225,
    16: 1400,
    18: 1575,
    20: 1750
  })
  const breakpointsData = useBreakpoints(breakpoints.value)
  const current: ComputedRef<string[]> = breakpointsData.current() //当前布局断点
  // 一共多少列
  const colsNum: ComputedRef<number> = computed(() => {
    const [firstData] = Object.keys(breakpoints.value)
    const colsNum = current.value.at(-1) || firstData
    return Number(colsNum)
  })

  const addWidget = (widget: any, component: 'string') => {
    const position: any = {} // 布局位置
    const [w, h] = widget.widgetSize.split(':').map(Number)

    for (const colsNum in breakpoints.value) {
      // 首次添加
      if (layouts.value.length === 0) {
        position[colsNum] = [0, 0]
        continue
      }

      const [x, y] = findPosition([w, h], layouts.value, +colsNum)
      position[colsNum] = [x, y]
    }
    const id = component + '-' + nanoid()
    layouts.value.push({ id, ...widget, position, update: dayjs().valueOf(), component })
  }

  const delWidget = (widget: any) => {
    const index = layouts.value.findIndex((item: any) => item.id === widget.id)
    layouts.value.splice(index, 1)
  }

  return {
    baseSize,
    baseMargin,
    addWidget,
    delWidget,
    editMode,
    breakpoints,
    colsNum,
    layouts
  }
})
