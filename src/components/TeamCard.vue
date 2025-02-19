<script setup lang="ts">
import type { TeamMember } from '@/types/team-member.ts'

const props = defineProps<{
  member: TeamMember
}>()

const imageLoaded = ref<boolean>(false)
</script>

<template>
  <div
    class="relative isolate flex flex-col rounded-[16px] overflow-hidden shadow-spm-shadow min-w-[290px] max-sm:min-w-[327px]"
  >
    <div class="absolute z-10 flex gap-[10px] top-[10px] left-[10px]">
      <SocialButton v-for="item of props.member.social" :key="item" :size="22" :type="item" :fill="false" />
    </div>

    <div class="overflow-hidden max-w-[290px] max-sm:max-w-full max-md:h-[260px] bg-spm-gray">
      <img
        :src="props.member.image"
        :alt="props.member.name"
        class="size-full object-cover object-center will-change-transform sm:hover:scale-110 max-sm:active:scale-110 transition duration-500"
        :class="!imageLoaded && 'opacity-0 '"
        @touchstart.passive="() => {}"
        @load="imageLoaded = true"
      />
    </div>

    <div class="flex flex-col mx-auto mt-[13px] mb-[37px] max-md:mt-[8px] max-md:mb-[13px] px-[10px]">
      <span class="text-center font-merriweather text-[18px] text-black max-md:text-[20px]">{{
        props.member.name
      }}</span>
      <span class="text-center text-spm-blue-dark text-[14px]">{{ props.member.post }}</span>
    </div>
  </div>
</template>

<style scoped></style>
