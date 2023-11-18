<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()
import widgetJson from '@/widgets'
import Widgets from '@/widgets/Index.vue'

const widgetList = shallowRef()
const init = async () => {
  const res = await widgetJson()
  widgetList.value = res
}

init()
</script>
<template>
  <DialogPage title="添加小组件" :width="1024">
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
      <div class="flex h-96 flex-col overflow-hidden rounded-lg bg-base-3" v-for="(list, i) in widgetList" :key="i">
        <swiper-container :loop="true" :pagination="{
          clickable: true
        }" class="w-full flex-1">
          <swiper-slide v-for="(data, j) in list.widget" :key="j" class="flex items-center justify-center">
            <Widgets type="add" :widget="data" :component="list.key" />
          </swiper-slide>
        </swiper-container>

        <div class="footer h-24 p-4 leading-none">
          <p class="text-base font-bold">{{ list.name }}</p>
          <p class="line-clamp-2 text-sm text-slate-500">{{ list.text }}</p>
        </div>
      </div>
    </div>
  </DialogPage>
</template>

<style scoped lang="scss">
swiper-container::part(bullet-active) {
  @apply bg-base-1
}
</style>
