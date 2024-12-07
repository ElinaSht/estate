<script setup lang="ts">
const props = defineProps<{
  label: string
  active: boolean
}>()
</script>

<template>
  <div
    class="px-3.5 py-1.5 text-[14px] flex justify-center border-[1px] border-green-links rounded-full cursor-pointer
         hover:bg-green-links hover:bg-opacity-70 hover:border-opacity-0 hover:text-white transition
           sm:max-md:text-[12px] max-sm:w-[170px] max-sm:text-[10px]"
    :class="props.active ? 'bg-green-links text-white pointer-events-none' : 'bg-white text-green-links'"
  >
    {{ props.label }}
  </div>
</template>
