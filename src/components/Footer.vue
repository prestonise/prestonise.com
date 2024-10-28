<script lang="ts" setup>
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
</script>

<template>
  <div class="prose mt-18">
    <hr class="hr-line">
  </div>
  <footer class="w-full mt-4 pb-8 max-w-3xl text-sm flex flex-col gap-4 text-dark dark:text-gray">
    <div v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0" class="flex flex-wrap gap-4">
      <template v-for="(link, index) in siteConfig.footer.navLinks" :key="link.text">
        <a
          :aria-label="`${link.text}`" :target="getLinkTarget(link.href)" class="nav-link flex items-center"
          :href="link.href"
        >
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footer.navLinks.length - 1" op-70> / </span>
      </template>
    </div>
    <div flex>
      <span class="op-70">CC BY-NC-SA 4.0</span>
      <span class="op-70">&nbsp;&nbsp;&copy;&nbsp;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;{{ siteConfig.author }}</span>
    </div>
  </footer>
</template>
