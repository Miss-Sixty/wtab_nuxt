<script setup lang="ts">
import { IconSettings, IconPlus } from '@tabler/icons-vue'
const editMode = ref(true)
defineEmits(['handleSettingIcon'])
const settingRef = ref()
</script>

<template>
  <header class="fixed left-0 right-0 top-0 flex h-8 items-center justify-end space-x-2 px-4 align-middle">
    <Transition enter-from-class="opacity-0 translate-x-5" enter-active-class="transition-all duration-200"
      enter-to-class="opacity-100 translate-x-0" leave-from-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200" leave-to-class="opacity-0 translate-x-5">
      <div v-show="editMode" class="flex items-center space-x-2">
        <Button size="xs" class="w-10" @click="$emit('handleAddWidget')">
          <IconPlus :size="16" />
        </Button>
        <Button size="xs" @click="editMode = false">完成</Button>
      </div>
    </Transition>
    <div
      class="box-content rounded-full p-0.5 transition-all duration-[20000ms] text-base-default bg-base-default cursor-pointer hover:outline-base-default outline-transparent outline  outline-1 ">
      <IconSettings ref="settingRef" :size="20" @click.stop="$emit('handleSettingIcon', settingRef)" />
    </div>
    <div class="box-content rounded-full p-0.5 transition-all duration-[20000ms] text-base-default ">
      反反复复</div>

  </header>
</template>
