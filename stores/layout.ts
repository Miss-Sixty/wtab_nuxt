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
  const layouts: any = ref([{ "id": "WidgetsExternalLink-M8GMq0oWyWSw03WguWbiT", "widgetName": "外链1", "updateTime": "", "widgetSize": "1:1", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 0], "6": [0, 0], "8": [0, 0], "12": [0, 0], "14": [0, 0], "16": [0, 0], "18": [0, 0], "20": [0, 0] }, "update": 1699775873333, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-wMoF294lZmmLNJFi1vLRE", "widgetName": "外链1", "updateTime": "", "widgetSize": "1:1", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [1, 0], "6": [1, 0], "8": [1, 0], "12": [1, 0], "14": [1, 0], "16": [1, 0], "18": [1, 0], "20": [1, 0] }, "update": 1699775873505, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-qr9v7QK2V6bP9yRnAHCg5", "widgetName": "外链2", "updateTime": "", "widgetSize": "1:2", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [2, 0], "6": [2, 0], "8": [2, 0], "12": [2, 0], "14": [2, 0], "16": [2, 0], "18": [2, 0], "20": [2, 0] }, "update": 1699775874689, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-MKWY35EgBDBV1hGd-DOxh", "widgetName": "外链3", "updateTime": "", "widgetSize": "2:1", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 1], "6": [3, 0], "8": [3, 0], "12": [3, 0], "14": [3, 0], "16": [3, 0], "18": [3, 0], "20": [3, 0] }, "update": 1699775875771, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-GUJjfvEOg8-GzGnO0ByxR", "widgetName": "外链3", "updateTime": "", "widgetSize": "2:1", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 2], "6": [0, 1], "8": [5, 0], "12": [5, 0], "14": [5, 0], "16": [5, 0], "18": [5, 0], "20": [5, 0] }, "update": 1699775875882, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-IBCTzUdWK0Ny-koMUF3fO", "widgetName": "外链4", "updateTime": "", "widgetSize": "3:2", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 3], "6": [3, 1], "8": [2, 2], "12": [7, 0], "14": [7, 0], "16": [7, 0], "18": [7, 0], "20": [7, 0] }, "update": 1699775877397, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-NZYKMIK1ZtZMtZY5qJ3d5", "widgetName": "外链5", "updateTime": "", "widgetSize": "2:3", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 5], "6": [0, 2], "8": [0, 1], "12": [10, 0], "14": [10, 0], "16": [10, 0], "18": [10, 0], "20": [10, 0] }, "update": 1699775878705, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-i9T0cqNbCv6no80HpHXDZ", "widgetName": "外链6", "updateTime": "", "widgetSize": "3:3", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 8], "6": [2, 3], "8": [5, 1], "12": [3, 1], "14": [3, 1], "16": [12, 0], "18": [12, 0], "20": [12, 0] }, "update": 1699775879974, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-XAI5k_qdIT8EjroucXDb8", "widgetName": "外链7", "updateTime": "", "widgetSize": "4:3", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 11], "6": [0, 6], "8": [4, 4], "12": [6, 2], "14": [6, 2], "16": [3, 1], "18": [3, 1], "20": [15, 0] }, "update": 1699775881128, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-rR2YUa2frRRgNFAi4cpif", "widgetName": "外链8", "updateTime": "", "widgetSize": "4:2", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [0, 14], "6": [0, 9], "8": [0, 4], "12": [0, 4], "14": [10, 3], "16": [7, 3], "18": [7, 3], "20": [3, 1] }, "update": 1699775882513, "component": "WidgetsExternalLink" }, { "id": "WidgetsExternalLink-7ByMRPqzJ3bLAjWXIXfe3", "widgetName": "外链1", "updateTime": "", "widgetSize": "1:1", "widgetData": { "protocol": "", "src": "", "bgColor": "", "iconType": "online", "onlineIcon": "", "pureIcon": "", "localIcon": "" }, "position": { "4": [3, 0], "6": [5, 0], "8": [7, 0], "12": [0, 1], "14": [12, 0], "16": [15, 0], "18": [15, 0], "20": [19, 0] }, "update": 1699775884486, "component": "WidgetsExternalLink" }]) // 布局组件数据

  // 布局宽度数据
  const breakpoints = ref({
    4: 366,
    6: 558,
    8: 750,
    12: 1134,
    14: 1326,
    16: 1518,
    18: 1710,
    20: 1902
  })
  const breakpointsData = useBreakpoints(breakpoints.value)
  const current: ComputedRef<string[]> = breakpointsData.current() //当前布局断点

  // 一共多少列
  const colsNum: ComputedRef<number> = computed(() => {
    const [firstData] = Object.keys(breakpoints.value)
    console.log(111, current.value);

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
