<script setup lang="ts">
import IconBegin from '../assets/begin.svg'
import IconEnd from '../assets/end.svg'

const props = defineProps<{
  total: number
}>()

const current = defineModel<number>('current', { required: true })

const visibleCount = 3
const indexes = computed(() => Array.from({ length: props.total }, (value, index) => index))
const visibleIndexes = computed(() => {
  const from = Math.max(0, current.value - visibleCount)
  const to = Math.min(props.total - 1, current.value + visibleCount + 1)
  return indexes.value.slice(from, to)
})
</script>

<template>
  <div class="w-max mt-[52px] mx-auto flex items-center gap-5 sm:max-md:gap-3 max-sm:gap-1.5 max-sm:my-[32px]">
    <a
      href="#newsHeader"
      class="icon w-[32px] h-[38px] flex sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px] cursor-pointer text-black-gray transition sm:hover:text-green-links"
      @click="current = 0"
    >
      <div class="size-full flex justify-center items-center active:scale-95" @touchstart.passive="() => {}">
        <IconBegin class="max-sm:h-[10px]" />
      </div>
    </a>

    <div class="flex gap-2 sm:max-md:gap-1 max-sm:gap-[1px]">
      <PageNumber v-if="visibleIndexes.at(0)! > 0" :index="0" :selected="current === 1" @click="current = 1" />

      <div
        v-if="visibleIndexes.at(0)! > 1"
        class="w-[32px] h-[38px] flex items-center justify-center sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px]"
      >
        ...
      </div>

      <template v-for="index of visibleIndexes" :key="index">
        <PageNumber :index="index" :selected="current === index" @click="current = index" />
      </template>

      <div
        v-if="visibleIndexes.at(-1)! < props.total - 2"
        class="w-[32px] h-[38px] flex items-center justify-center sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px]"
      >
        ...
      </div>

      <PageNumber
        v-if="visibleIndexes.at(-1)! < props.total - 1"
        :index="props.total - 1"
        :selected="current === props.total - 1"
        @click="current = props.total - 1"
      />
    </div>

    <a
      href="#newsHeader"
      class="w-[32px] h-[38px] flex items-center justify-center sm:max-md:w-[28px] sm:max-md:h-[34px] max-sm:w-[24px] max-sm:h-[30px] cursor-pointer text-black-gray transition sm:hover:text-green-links"
      @click="current = props.total - 1"
    >
      <div class="size-full flex justify-center items-center active:scale-95" @touchstart.passive="() => {}">
        <IconEnd class="max-sm:h-[10px]" />
      </div>
    </a>
  </div>
</template>

<style scoped></style>
