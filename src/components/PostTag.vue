<script setup lang="ts">
const props = defineProps<{
  label: string
  active: boolean
}>()
</script>

<template>
  <div
    class="px-3.5 py-1.5 text-[14px] flex justify-center border-[1px] border-green-links rounded-full cursor-pointer active:scale-95 transition
         sm:hover:bg-green-links/70 sm:hover:border-opacity-40 sm:hover:text-white
           sm:max-md:text-[12px] max-sm:w-[170px] max-sm:text-[10px]"
    :class="props.active ? 'bg-green-links text-white pointer-events-none' : 'bg-white text-green-links'"
  >
    {{ props.label }}
  </div>
</template>
