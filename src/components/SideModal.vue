<script setup lang="ts">
const showed = defineModel<boolean>('showed', { required: true })
</script>

<template>
    <div
      class="fixed z-10 inset-0 overflow-hidden transition"
      :class="showed ? 'bg-gray-dark-3/90' : 'bg-transparent pointer-events-none'"
      @click.self="showed = false"
    >
      <Transition
        enter-from-class="opacity-0 translate-x-full"
        leave-to-class="opacity-0 translate-x-full"
        enter-active-class="transition-[opacity,transform] duration-300 ease-out"
        leave-active-class="transition-[opacity,transform] duration-200 ease-in"
      >
        <div
          v-if="showed"
          class="absolute right-0 z-20 inset-y-0 w-[300px] bg-black-gray-text pointer-events-auto md:w-[500px]"
        >
          <slot name="default" />
        </div>
      </Transition>
    </div>
</template>
