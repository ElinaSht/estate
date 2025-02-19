<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import IntroButton from '@/components/IntroButton.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const md = breakpoints.smaller('md')

const iconSize = computed(() => (md.value ? 20 : 24))

const bgImage = computed(() =>
  sm.value
    ? new URL('../assets/intro/intro-sm.webp', import.meta.url).href
    : new URL('../assets/intro/intro-lg.webp', import.meta.url).href
)

const imageLoaded = ref<boolean>(false)
</script>

<template>
  <div class="relative rounded-[26px] overflow-hidden max-sm:h-[960px] bg-spm-gray">
    <img
      :src="bgImage"
      alt="Estate"
      class="size-full object-cover object-center transition duration-500"
      :class="!imageLoaded && 'opacity-0'"
      @load="imageLoaded = true"
    />

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
          <IntroButton />

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
