<script setup lang="ts">
const props = defineProps<{
  index: number
  selected: boolean
}>()
</script>

<template>
  <a
    href="#newsHeader"
    class="w-[32px] h-[38px] text-[20px] flex justify-center items-center border-[1px] border-white rounded cursor-pointer
                 hover:border-opacity-100 hover:border-green-links transition sm:max-md:text-[16px] sm:max-md:w-[28] sm:max-md:h-[34] max-sm:text-[12px] max-sm:w-[24] max-sm:h-[30]"
    :class="props.selected && 'bg-green-links text-white'"
  >
    {{ props.index + 1 }}
  </a>

</template>
