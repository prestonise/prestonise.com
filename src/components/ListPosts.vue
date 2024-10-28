<script lang="ts" setup>
interface Post {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

withDefaults(defineProps<{
  list: Post[]
}>(), {
  list: () => [],
})

function getDate(date: string) {
  return new Date(date).toISOString()
}

function getHref(post: Post) {
  if (post.data.redirect)
    return post.data.redirect
  return `/posts/${post.slug}`
}

function getTarget(post: Post) {
  if (post.data.redirect)
    return '_blank'
  return '_self'
}
</script>

<template>
  <ul class="sm:min-h-38 min-h-28 mb-18" grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div class="opacity-50">
        nothing here yet.
      </div>
    </template>
    <li v-for="post in list " :key="post.data.title" class="container-link w-full flex items-center rd-2">
      <a class="flex items-baseline mb-4" nav-link :aria-label="post.data.title" :target="getTarget(post)" :href="getHref(post)">
        <div class="ml-2 mr-4">
          <i v-if="post.data.tag === 'note'" class="text-base vertical-mid ri-lightbulb-flash-line" />
          <i v-if="post.data.tag !== 'note'" class="text-base vertical-mid ri-draft-line" />
        </div>
        <div class="font-normal lh-tight">
          <div class="text-lg font-bold hover:text-main">{{ post.data.title }}</div>
          <div class="opacity-50 text-sm ws-nowrap" flex="~ gap-2 items-center">
            <time v-if="post.data.date" :datetime="getDate(post.data.date)">{{ post.data.date.split(',')[0] }}</time>
            <span v-if="post.data.duration"> | {{ post.data.duration }}</span>
          </div>
          <div class="opacity-50 text-sm">{{ post.data.description }}</div>
          <span v-if="post.data.tag && post.data.tag !== 'note'" class="opacity-50 text-sm">#{{ post.data.tag }}</span>
        </div>
      </a>
    </li>
  </ul>
</template>
