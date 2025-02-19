<script setup lang="ts">
import IconDropdownArrow from '../assets/icons/dropdown-arrow.svg'

const props = defineProps<{
  text: string
  sublinks?: { text: string }[]
  static?: boolean
  thin?: boolean
}>()

const hovered = ref<boolean>(false)
const opened = computed(() => props.sublinks && hovered.value)
</script>

<template>
  <div class="relative isolate" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <a
      href="#"
      class="w-full relative flex gap-[6px] items-center cursor-pointer sm:hover:text-spm-blue-light sm:active:text-spm-blue max-sm:active:text-spm-blue-light transition"
      :class="!props.thin && 'py-[8px]'"
    >
      <span class="flex-1" :class="props.static && 'font-merriweather text-[30px]'">
        {{ props.text }}
      </span>

      <IconDropdownArrow
        v-if="!props.static && props.sublinks"
        class="transition duration-300"
        :class="hovered && 'rotate-180'"
        @click="hovered = !hovered"
      />

      <div
        v-if="!props.static && props.sublinks"
        class="absolute -left-[20px] bottom-0 z-20 bg-spm-blue-mid h-[1px] w-[calc(100%+40px)] transition"
        :class="!opened && 'opacity-0'"
      />
    </a>

    <div
      v-if="props.sublinks"
      class="top-full z-10 w-[calc(100%+40px)] bg-white/90 backdrop-blur-lg transition will-change-transform duration-300"
      :class="[
        !props.static && !opened && '-translate-y-[5px] opacity-0 pointer-events-none',
        props.static ? 'pl-[20px]' : 'rounded-b-[10px] absolute -left-[20px]',
      ]"
    >
      <HyperLink v-for="link of props.sublinks" :key="link.text" :text="link.text" class="px-[20px]" />
    </div>
  </div>
</template>

<style scoped></style>
