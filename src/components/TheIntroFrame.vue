<script setup lang="ts">
import IconArrowRight from '../assets/icons/arrow-right.svg'
import { breakpointsTailwind, useBreakpoints, useElementHover } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const md = breakpoints.smaller('md')

const iconSize = computed(() => (md.value ? 20 : 24))

const bgImage = computed(() =>
  sm.value
    ? new URL('../assets/intro/intro-sm.webp', import.meta.url).href
    : new URL('../assets/intro/intro-lg.webp', import.meta.url).href
)

const buttonRef = shallowRef<HTMLElement>()
const isHovered = useElementHover(buttonRef)
</script>

<template>
  <div class="relative rounded-[26px] overflow-hidden max-sm:h-[960px]">
    <img :src="bgImage" alt="Estate" class="size-full object-cover object-center" />

    <div class="absolute inset-0 py-[80px] px-[100px] max-xl:p-[40px] max-lg:p-[16px] max-sm:py-[40px]">
      <div class="flex flex-col size-full">
        <div
          class="flex flex-col gap-[24px] max-lg:gap-[10px] max-md:gap-[2px] max-sm:gap-[17px] w-[654px] max-lg:w-[480px] max-md:w-[400px] max-sm:w-auto max-sm:mx-auto"
        >
          <div
            class="text-[42px] max-lg:text-[28px] max-md:text-[22px] max-sm:text-[28px] text-white font-merriweather leading-tight"
          >
            Доверие и сервисная модель — основные показатели успеха в работе компании
          </div>

          <div class="text-white max-820:text-[14px] max-md:text-[12px] max-sm:text-[15px]">
            Рынок недвижимости в 2025 году сталкивается с серьезными вызовами. Изменились ключевые тенденции и запросы
            инвесторов.
          </div>

          <div class="text-white max-820:text-[14px] max-md:text-[12px] max-sm:text-[15px]">
            Объективный подход к анализу рынка, детальное изучение перспектив объектов, эффективные бизнес-модели и
            подтвержденная ликвидность — всё это способствует сохранению и увеличению капитала наших инвесторов.
          </div>
        </div>

        <div
          class="flex mt-auto gap-[51px] max-lg:gap-[20px] items-center max-sm:flex-1 max-sm:flex-col max-sm:mt-[24px]"
        >
          <div
            ref="buttonRef"
            class="relative overflow-hidden isolate justify-center rounded-full transition bg-spm-blue active:bg-spm-blue-active-button max-sm:w-full max-sm:max-w-[345px] cursor-pointer"
          >
            <div
              class="z-10 transition duration-500 animate-move-right-repeat absolute inset-0 bg-gradient-to-r from-transparent via-spm-blue-gradient-button/40 to-transparent"
              :class="isHovered && 'opacity-0'"
            />

            <div
              class="z-20 relative flex items-center gap-[20px] text-white py-[11px] max-lg:py-[6px] max-md:py-0 max-sm:py-[11px] px-[36px] max-lg:px-[30px] max-md:px-[20px] max-sm:px-[36px]"
            >
              <span class="max-lg:text-[14px] max-md:text-[12px] max-sm:text-[16px]">Связаться напрямую</span>
              <IconArrowRight />
            </div>
          </div>

          <div class="flex flex-1 max-sm:flex-row-reverse max-sm:flex-none max-sm:w-full max-sm:mt-auto">
            <div class="flex gap-[14px] items-center max-820:ml-auto">
              <SocialButton type="linkedin" :size="iconSize" />
              <SocialButton type="instagram" :size="iconSize" />
            </div>

            <div class="flex flex-col ml-auto max-820:ml-[30px] max-sm:ml-0">
              <span
                class="text-white font-merriweather text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[20px]"
                >Ярослав Попов
              </span>
              <span class="text-white text-[15px] max-lg:text-[12px] max-md:text-[10px] max-sm:text-[15px]">
                CEO Estate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
