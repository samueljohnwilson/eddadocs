<template>
  <div class="god-markdown-view">
    <NavBar title="GODS" :navElements="Object.values(Gods)" :parentPath="Routes.GODS" />

    <BaseMarkdownArticle :article-data="godMarkdownData" :article-id="godId" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseMarkdownArticle from '@/components/BaseMarkdownArticle.vue'
import NavBar from '@/components/NavBar.vue'
import godsData from '@/data/gods/data'
import { Gods } from '@/enums/gods'
import { Routes } from '@/enums/routes'
import { type BaseMarkdownArticleData } from '@/types'

// Route
const route = useRoute()

// Computed - extract godId from URL path
const godId = computed(() => {
  const pathSegments = route.path.split('/')
  return pathSegments[pathSegments.length - 1] // Get the last segment
})

const godData = computed(() => {
  return godsData[godId.value as Gods]
})

// Convert god data to markdown article data format
const godMarkdownData = computed((): BaseMarkdownArticleData => {
  const data = godData.value
  if (!data) {
    return {
      id: godId.value,
      title: godId.value,
      markdownPath: `/markdown/gods/${godId.value}.md`
    }
  }

  return {
    id: data.id,
    title: data.title,
    image: data.image,
    quote: data.quote,
    sidebar: data.sidebar,
    groupDescription: data.groupDescription,
    markdownPath: `/markdown/gods/${godId.value}.md`
  }
})
</script>

<style>
.god-markdown-view {
  min-height: 100vh;
}
</style>
