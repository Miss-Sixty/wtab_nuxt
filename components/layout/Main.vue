<script setup lang="ts">
import useLayoutStore from '@/stores/layout'
const emit = defineEmits(['widgetContextmenu'])
const layoutStore = useLayoutStore()
const { layouts, baseMargin, baseSize, colsNum, editMode } = storeToRefs(layoutStore)
</script>

<template>
  <main class="h-full overflow-y-auto px-1 py-10">

    <LayoutGrid v-model="layouts" :colsNum="colsNum" :baseSize="baseSize" :baseMargin="baseMargin" :editMode="editMode">
      <LayoutGridItem v-for="item in layouts" :key="item.id" :id="item.id"
        @widgetContextmenu="$emit('widgetContextmenu', $event)">
        <Widgets :type="editMode ? 'del' : ''" :widget="item" :component="item.component" />
      </LayoutGridItem>
    </LayoutGrid>
  </main>
</template>
