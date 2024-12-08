<script setup lang="ts">
const props = defineProps<{
  index: number
  selected: boolean
}>()
</script>

<template>
  <div
    class="w-[32px] h-[38px] flex justify-center items-center rounded border-[1px] border-white cursor-pointer active:scale-95 transition
           sm:hover:border-green-links sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px]"
    :class="props.selected && 'bg-green-links'"
  >
    <a
      href="#newsHeader"
      class="size-full flex justify-center items-center rounded text-[20px] transition sm:max-md:text-[16px] max-sm:text-[12px]"
      :class="props.selected && 'text-white'"
    >
      {{ props.index + 1 }}
    </a>
  </div>


<!--  <a-->
<!--    class="w-[32px] h-[38px] text-[20px] flex justify-center items-center border-[1px] border-white rounded cursor-pointer active:scale-95 transition-->
<!--          sm:hover:border-green-links-->
<!--           sm:max-md:text-[16px] sm:max-md:w-[28] sm:max-md:h-[34] max-sm:text-[12px] max-sm:w-[24] max-sm:h-[30]"-->
<!--    :class="props.selected && 'bg-green-links text-white'"-->
<!--  >-->
<!--    {{ props.index + 1 }}-->
<!--  </a>-->

</template>
