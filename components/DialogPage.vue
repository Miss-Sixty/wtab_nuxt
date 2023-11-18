<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'

const emit = defineEmits(['update:modelValue', 'closed'])
defineProps({
  title: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    default: 600
  },
  header: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})

const router = useRouter()
const modelValue = ref(false)
onMounted(() => {
  modelValue.value = true
})

const closed = () => {
  modelValue.value = false
  setTimeout(() => router.push(history.state.back || '/'), 150)
}

</script>

<template>
  <div class="fixed left-0 top-0 z-[999] h-full w-full backdrop-blur" @contextmenu.prevent.stop>
    <transition enter-active-class="animate-zoom-in  transform-gpu" leave-active-class="animate-zoom-out transform-gpu">
      <div v-show="modelValue" :style="{ width: `${width}px` }"
        class="absolute inset-0 m-auto flex h-full w-full max-w-full flex-col overflow-hidden bg-neutral-100 shadow-lg transition-[background-color] tablet:h-[600px] tablet:max-w-[calc(100vw-40px)] tablet:rounded-lg">
        <div v-if="header" class="relative flex h-12 shrink-0 items-center justify-between pl-5 pr-1.5">
          <span class="text-lg">{{ title }}</span>
          <button @click="closed"
            class="top-1 flex h-9 w-11 cursor-pointer items-center justify-center rounded-lg transition-[background-color] hover:bg-base-3">
            <IconX :size="18" />
          </button>
        </div>
        <div class="flex-1 overflow-hidden p-1">
          <div class="h-full overflow-y-auto px-3 pb-4 pt-1 tablet:px-5">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>