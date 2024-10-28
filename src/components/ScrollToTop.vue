<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y: scroll } = useWindowScroll()

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <button
    aria-label="Scroll to top"
    class="fixed right-5 sm:right-30 bottom-30 w-12 h-12 text-lg hover:op100 rounded-full bg-hex-8883 transition duration-300 z-100 print:hidden"
    flex="~ items-center justify-center"
    :class="scroll > 300 ? 'op75' : 'op0 pointer-events-none'"
    @click="toTop()"
  >
    <i class="ri-arrow-up-line" />
  </button>
</template>
