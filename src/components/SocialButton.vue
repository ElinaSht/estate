<script setup lang="ts">
import IconTelegram from '../assets/icons/telegram.svg'
import IconWhatsApp from '../assets/icons/whatsapp.svg'
import IconLinkedIn from '../assets/icons/linkedin.svg'
import IconInstagram from '../assets/icons/instagram.svg'
import type { SocialNetworks } from '@/types/social-networks.ts'

const props = defineProps<{
  type: SocialNetworks
  size: number
  fill?: boolean
}>()

const icon = {
  telegram: IconTelegram,
  whatsapp: IconWhatsApp,
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
}
</script>

<template>
  <button
    class="flex items-center cursor-pointer transition text-white sm:hover:scale-110 sm:active:scale-100 max-sm:active:scale-110"
    :class="props.fill && 'p-[8px] bg-spm-blue rounded-full'"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    @touchstart.passive="() => {}"
  >
    <Component :is="icon[props.type]" class="h-auto w-full m-auto" />
  </button>
</template>

<style scoped></style>
