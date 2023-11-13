<script setup lang="ts">
import useLayoutStore from '@/stores/layout'
import { routerKey } from 'vue-router';
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

const baseSettingDialogVisible = ref(true)


// watchEffect(() => {

// })

const route = useRoute()
const router = useRouter()
watch(() => route.name, (name, oldName) => {
  console.log(11, name, oldName);
  baseSettingDialogVisible.value = name === 'settings'
}, {
  immediate: true
})
watch(baseSettingDialogVisible, (bl) => {
  if (!bl) router.push('/')
})
console.log(33, router);

</script>

<template>
  <div class="fixed z-10">
    <NuxtLink to="/settings">
      我
    </NuxtLink>
  </div>


  <NuxtPage></NuxtPage>

  <LayoutHeader @handleSettingIcon="handleSettingIcon" />
  <LayoutContextMenu ref="contextMenuRef" v-model:addWidget="addWidgetsVisible" @del="handleDel" />
  <LayoutMain @widgetContextmenu="handleWidgetContextmenu" />
  <LayoutAddWidgets v-model="addWidgetsVisible" />
  <LayoutSettings v-model="baseSettingDialogVisible" />
</template>
