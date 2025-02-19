<script setup lang="ts">
import TheFooterLinks from '@/components/TheFooterLinks.vue'
</script>

<template>
  <div
    class="pt-[70px] pb-[45px] flex gap-[118px] max-lg:gap-[50px] max-md:flex-col max-md:pt-[22px] max-md:pb-[36px] max-sm:gap-[20px]"
  >
    <div class="flex flex-col shrink-0 max-lg:shrink">
      <HyperLink thin text="Estate" class="text-[36px] font-bold font-merriweather max-sm:text-[22px]" />

      <div class="mt-[108px] flex flex-col gap-[4px] max-md:mt-[40px] max-sm:text-[14px] max-sm:mt-[14px]">
        <HyperLink thin text="Москва, БЦ «Лотос», ул. Ленинская, 19" />
        <HyperLink thin text="+7 999 854 85 85 — Москва" />
        <HyperLink thin text="+7 914 487 38 38 — Владивосток" />
        <HyperLink thin text="hello@estate.ru" />
      </div>

      <div class="flex gap-[4px] mt-[18px] max-sm:mt-[20px]">
        <SocialButton fill type="telegram" :size="45" />
        <SocialButton fill type="whatsapp" :size="45" />
      </div>
    </div>

    <div class="flex flex-col max-md:gap-[40px]">
      <TheFooterLinks />

      <div class="mt-auto max-w-[671px]">
        <span class="text-[12px] opacity-50">
          © 2025 Estate. Все права защищены. При копировании материалов сайта ссылка на источник обязательна. Политика
          конфиденциальности • Соглашение об использовании
        </span>
      </div>
    </div>
  </div>
</template>
