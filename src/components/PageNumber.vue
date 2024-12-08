<script setup lang="ts">
const props = defineProps<{
  index: number
  selected: boolean
}>()
</script>

<template>
  <div
    class="w-[32px] h-[38px] flex justify-center items-center rounded border-[1px] border-white cursor-pointer active:scale-95 transition
           sm:hover:border-green-links sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px] will-change-transform"
    :class="props.selected && 'bg-green-links'"
    @touchstart.passive="() => {}"
  >
    <a
      class="size-full flex justify-center items-center rounded text-[20px] transition sm:max-md:text-[16px] max-sm:text-[12px]"
      :class="props.selected && 'text-white'"
    >
      {{ props.index + 1 }}
    </a>
  </div>
</template>
