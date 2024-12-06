<script setup lang="ts">
const props = defineProps<{
  page: number
  selected: boolean
}>()
</script>

<template>
  <a
    href="#newsHeader"
    class="w-[24px] h-[32px] text-[20px] flex justify-center items-center border-[1px] border-white rounded cursor-pointer
                 hover:border-opacity-100 hover:border-green-links transition sm:max-md:text-[16px] max-sm:text-[12px]"
    :class="props.selected && 'bg-green-links text-white'"
  >
    {{ props.page }}
  </a>

</template>
