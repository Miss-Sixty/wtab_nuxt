<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'
const emit = defineEmits(['update:modelValue', 'closed'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
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

watch(
  () => props.modelValue,
  (bl) => {
    if (bl) return
    setTimeout(() => emit('closed'), 200)
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-[opacity] duration-200"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-[opacity] duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-show="modelValue"
        class="fixed left-0 top-0 z-[999] h-full w-full backdrop-blur"
        @contextmenu.prevent
      >
        <transition
          enter-active-class="animate-zoom-in  transform-gpu"
          leave-active-class="animate-zoom-out transform-gpu"
        >
          <div
            v-show="modelValue"
            :style="{ width: `${width}px` }"
            class="absolute inset-0 m-auto flex h-full w-full max-w-full flex-col overflow-hidden bg-primary-medium shadow-lg transition-[background-color] tablet:h-[600px] tablet:max-w-[calc(100vw-40px)] tablet:rounded-lg"
          >
            <div
              v-if="header"
              class="relative flex h-12 shrink-0 items-center justify-between pl-5 pr-1.5"
            >
              <span class="text-lg">{{ title }}</span>
              <button
                @click="$emit('update:modelValue', false)"
                class="top-1 flex h-9 w-11 cursor-pointer items-center justify-center rounded-lg bg-primary-medium transition-[background-color] hover:bg-primary-light"
              >
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
    </Transition>
  </Teleport>
</template>
