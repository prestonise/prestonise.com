<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref, unref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'

const navLinks = siteConfig.header.navLinks || []

const socialLinks = computed(() => {
  return siteConfig.socialLinks.filter((link: Record<string, any>) => {
    if (link.header && typeof link.header === 'boolean') {
      return link
    }
    else if (link.header && typeof link.header === 'string') {
      link.icon = link.header.includes('i-') ? link.header : link.icon
      return link
    }
    else {
      return false
    }
  })
})

const { y: scroll } = useWindowScroll()

const oldScroll = ref(unref(scroll))

onMounted(() => {
  const navMask = document.querySelector('.nav-drawer-mask') as HTMLElement

  navMask?.addEventListener('touchmove', (event) => {
    event.preventDefault()
  }, { passive: true })

  const headerEl = document.querySelector('#header') as HTMLElement
  if (!headerEl)
    return

  window.addEventListener('scroll', () => {
    if (scroll.value < 150) {
      headerEl.classList.remove('header-hide')
      return
    }

    if (scroll.value - oldScroll.value > 150) {
      headerEl.classList.add('header-hide')
      oldScroll.value = scroll.value
    }

    if (oldScroll.value - scroll.value > 150) {
      headerEl.classList.remove('header-hide')
      oldScroll.value = scroll.value
    }
  }, { passive: true })
})

function toggleNavDrawer() {
  const drawer = document.querySelector('.nav-drawer') as HTMLElement
  const mask = document.querySelector('.nav-drawer-mask') as HTMLElement
  if (!drawer || !mask)
    return
  if (drawer.style.transform === `translateX(0%)`) {
    drawer.style.transform = `translateX(-100%)`
    mask.style.opacity = `0`
    mask.style.transform = `translateX(-100%)`
  }
  else {
    drawer.style.transform = `translateX(0%)`
    mask.style.opacity = `100%`
    mask.style.transform = `translateX(0%)`
  }
}
</script>

<template>
  <header
    id="header"
    class="fixed bg-transparent backdrop-blu-sm z-899 w-screen h-20 px-6 flex justify-between items-center relative"
  >
    <!-- class="header-bg-blur fixed bg-transparent z-899 w-screen h-20 px-6 flex justify-between items-center relative" -->
    <div class="flex items-center h-full">
      <a href="/" class="mr-6" aria-label="Header Logo Image">
        <img width="32" height="32" :src="siteConfig.header.logo.src" :alt="siteConfig.header.logo.alt">
      </a>
      <nav class="sm:flex hidden flex-wrap gap-x-6 position-initial flex-row">
        <a
          v-for="link in navLinks" :key="link.text" :aria-label="`${link.text}`" :target="getLinkTarget(link.href)"
          nav-link :href="link.href"
        >
          {{ link.text }}
        </a>
      </nav>
      <div class="sm:hidden h-full flex items-center" @click="toggleNavDrawer()">
        <menu class="ri-menu-2-fill" />
      </div>
    </div>
    <div class="flex gap-x-6 mr-6">
      <a
        v-for="link in socialLinks" :key="link.text" :aria-label="`${link.text}`" :class="link.icon" nav-link
        :target="getLinkTarget(link.href)" :href="link.href"
      />

      <a nav-link target="_blank" href="/rss.xml" class="ri-rss-line" aria-label="RSS" />
      <ThemeToggle />
    </div>
  </header>
  <nav class="nav-drawer sm:hidden box-border fixed h-screen z-999 left-0 top-0 bg-main p-6 text-lg flex flex-col gap-5 transition-all">
    <i class="ri-menu-2-fill" @click="toggleNavDrawer()" />
    <a
      v-for="link in navLinks" :key="link.text" :aria-label="`${link.text}`" :target="getLinkTarget(link.href)"
      nav-link :href="link.href" class="mr-6 font-bold" @click="toggleNavDrawer()"
    >
      {{ link.text }}
    </a>
  </nav>
  <div class="nav-drawer-mask transition-all" @click="toggleNavDrawer()" />
</template>

<style scoped>
.header-hide {
  transform: translateY(-100%);
  transition: transform 150ms ease;
}

.nav-drawer {
  transform: translateX(-100%);
  width: 100vw;
  background: rgba(255, 255, 255, 1);
}
html.dark .nav-drawer {
  background: rgba(0, 0, 0, 0) !important;
}

.nav-drawer-mask {
  display: block;
  opacity: 0;
  transform: translateX(-100%);
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  z-index: 998;
}
</style>
