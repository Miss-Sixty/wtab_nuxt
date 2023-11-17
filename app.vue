<script setup lang="ts">
import useLayoutStore from '@/stores/layout'
const layoutStore = useLayoutStore()

const addWidgetsVisible = ref(false)
const contextMenuRef = ref()
const handleSettingIcon = (ref: Ref) => {
  contextMenuRef.value.show('settingIcon', ref)
}

const handleWidgetContextmenu = ({ ref, id }: { ref: Ref; id: string }) => {
  contextMenuRef.value.show('widgetContextmenu', ref, { id })
}

const handleHomeContextmenu = (e: Event) => {
  contextMenuRef.value.show('homeContextmenu', e)
}

const handleDel = (widget: any) => {
  layoutStore.delWidget(widget)
}


onMounted(() => {
  useEventListener(document, 'contextmenu', (evt) => {
    evt.preventDefault();//取消默认事件
    handleHomeContextmenu(evt)
  })
})




</script>

<template>
  <NuxtPage />


  <LayoutHeader @handleSettingIcon="handleSettingIcon" />
  <LayoutContextMenu ref="contextMenuRef" v-model:addWidget="addWidgetsVisible" @del="handleDel" />
  <LayoutMain @widgetContextmenu="handleWidgetContextmenu" />
  <LayoutAddWidgets v-model="addWidgetsVisible" />
</template>

