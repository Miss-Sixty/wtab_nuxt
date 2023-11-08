<script setup lang="ts">
const addWidgetsVisible = ref(false)
const contextMenuRef = ref()
const handleSettingIcon = (ref: Ref) => {
  contextMenuRef.value.show('settingIcon', ref)
}
</script>

<template>
  <LayoutHeader @handleSettingIcon="handleSettingIcon" />
  <LayoutContextMenu ref="contextMenuRef" v-model:addWidget="addWidgetsVisible" />
</template>
