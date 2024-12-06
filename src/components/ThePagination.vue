<script setup lang="ts">
const props = defineProps<{
  total: number
}>()

const current = defineModel<number>('current', { required: true })

const visibleCount = 3
const indexes = computed(() => Array.from({ length: props.total }, (v, index) => index + 1))
const visibleIndexes = computed(() => {
  if (current.value - visibleCount < 0)
    return indexes.value.slice(0, current.value + visibleCount)

  else if (current.value + visibleCount > props.total )
    return indexes.value.slice(current.value - visibleCount - 1, props.total)

  else
    return indexes.value.slice(Math.max(0, current.value - visibleCount), Math.min(current.value + visibleCount, props.total))
})

console.log(visibleIndexes.value.at(0))
console.log(visibleIndexes.value)
</script>

<template>
  <div class="w-max mt-[52px] mx-auto flex items-center gap-5 sm:max-md:gap-3 max-sm:gap-1.5 max-sm:my-[32px]">
    <div>
      <img class="cursor-pointer max-sm:h-[10px]" alt="Begin" src="../assets/begin.svg" />
    </div>

    <div class="flex gap-2 sm:max-md:gap-1 max-sm:gap-[1px]">
      <template v-if="1 < visibleIndexes.at(0)!">
        <PageNumber :page="1" :selected="current === 1" @click="current = 1"/>
        <div class="self-end">...</div>
      </template>

      <template v-for="index of visibleIndexes" :key="index">
        <PageNumber :page="index" :selected="current === index" @click="current = index" />
      </template>

      <template v-if="props.total > visibleIndexes.at(-1)!">
        <div class="self-end">...</div>
        <PageNumber :page="props.total" :selected="current === 11" @click="current = 11" />
      </template>
    </div>

    <div>
      <img class="cursor-pointer max-sm:h-[10px]" alt="End" src="../assets/end.svg" />
    </div>
  </div>
</template>

<style scoped></style>
