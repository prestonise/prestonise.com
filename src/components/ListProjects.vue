<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div class="opacity-50">
        nothing here yet.
      </div>
    </template>
    <li v-for="project in list" :key="project.text" class="container-link w-full flex items-center rd-2">
      <a class="flex items-baseline mb-4" target="_blank" :href="project.href" :aria-label="project.text">
        <div class="ml-2 mr-4">
          <i clas="text-4xl inline-block" :class="project.icon || ''" />
        </div>
        <div class="font-normal lh-tight">
          <div class="text-lg font-bold hover:text-main">{{ project.text }}</div>
          <div class="opacity-50 text-sm">{{ project.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>
