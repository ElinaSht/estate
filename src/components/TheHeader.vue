<script setup lang="ts">
import SocialNetwork from '@/components/SocialNetwork.vue'
import Sidebar from '@/components/TheSidebar.vue'
import IconFavourites from '../assets/favourites.svg'
import IconShoppingCart from '../assets/shopping-cart.svg'
import StringLink from '@/components/StringLink.vue'
import IconLink from '@/components/IconLink.vue'
</script>

<template>
  <div class="bg-black-gray-text w-full">
    <div class="max-w-[1304px] h-[52px] mx-auto py-3 px-4 flex justify-between max-sm:flex-col">
      <SocialNetwork class="max-sm:hidden"/>

      <div class="flex gap-14 md:max-lg:gap-6 max-md:gap-4">
        <div class="flex gap-[30px] items-center text-white text-[15px] font-bold md:max-lg:gap-[20px] sm:max-lg:text-[12px] sm:max-md:gap-[16px] max-sm:hidden">
          <StringLink to="/forum" label="Форум"/>
          <StringLink to="/search" label="Поиск"/>
          <StringLink to="/contacts" label="Контакты"/>
        </div>

        <div class="flex gap-[30px] items-center text-white md:max-lg:gap-[20px] max-md:gap-[16px] max-sm:ml-auto">

          <IconLink to="/favourites" :component="IconFavourites" />
          <IconLink to="/shoppingList" :component="IconShoppingCart" />

          <button
            class="h-7 px-3.5 rounded bg-green-links border-green-links text-white text-[14px] transition
                   sm:hover:bg-green-logo/40 sm:hover:shadow-xl sm:hover:shadow-black-gray
                   active:scale-95"
            @touchstart.passive="() => {}"
          >
            Личный кабинет
          </button>
        </div>
      </div>
    </div>

    <div class="bg-black-gray w-full h-[103px] flex max-sm:h-[80px]">
      <div class="max-w-[1304px] mx-auto px-4 flex-1 flex justify-between items-center text-white">
        <RouterLink to="/" class="transition active:scale-95" @touchstart.passive="() => {}">
            <img alt="ElcorePLC" src="../assets/logo.svg?url" class="lg:max-xl:w-[170px] md:max-lg:w-[140px] sm:max-md:w-[100px] max-sm:w-[150px] pointer-events-none" />
        </RouterLink>

        <div class="flex gap-10 items-center text-[18px] font-bold lg:max-xl:gap-6 md:max-lg:text-[14px] md:max-lg:gap-3 sm:max-md:text-[12px] sm:max-md:gap-2 max-sm:hidden">
          <StringLink to="/elcorestore" label="ElcoreStore"/>
          <StringLink to="/elcorecloud" label="ElcoreCloud"/>
          <StringLink to="/elcoreide" label="ElcoreIDE"/>

          <HeaderLinkPopover>
            <StringLink to="/studyResources" label="Обучение и ресурсы"/>
          </HeaderLinkPopover>

          <StringLink to="/newsArticles" label="Новости и статьи"/>
        </div>

        <Sidebar />
      </div>
    </div>

  </div>
</template>
