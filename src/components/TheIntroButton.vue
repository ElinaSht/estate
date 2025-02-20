<script setup lang="ts">
import IconArrowRight from '@/assets/icons/arrow-right.svg'
import { useElementActive } from '@/hooks/element-active.ts'

const props = defineProps<{
  disabled?: boolean
}>()

const buttonRef = shallowRef<HTMLElement>()

const { activeState } = useElementActive(buttonRef)
const gradientHidden = computed(() => props.disabled || activeState.value)
</script>

<template>
  <button
    ref="buttonRef"
    :disabled="props.disabled"
    :class="disabled ? 'bg-spm-disabled-button/20' : 'bg-spm-blue active:bg-spm-blue-active-button cursor-pointer'"
    class="relative overflow-hidden isolate justify-center rounded-full transition max-sm:w-full max-sm:max-w-[345px]"
    @touchstart.passive="() => {}"
  >
    <span
      class="z-10 transition animate-move-right-repeat absolute inset-0 bg-gradient-to-r from-transparent via-spm-blue-gradient-button/40 to-transparent"
      :class="gradientHidden && 'opacity-0'"
    />

    <span
      class="z-20 relative flex items-center justify-center gap-[20px] text-white py-[11px] max-lg:py-[6px] max-md:py-0 max-sm:py-[11px] px-[36px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[36px]"
    >
      <span class="block max-lg:text-[14px] max-md:text-[12px] max-sm:text-[16px]">Связаться напрямую</span>
      <IconArrowRight />
    </span>
  </button>
</template>

<style scoped></style>
