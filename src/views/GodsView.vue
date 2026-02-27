<template>
  <div class="god-view">
    <NavBar :title="Routes.GODS" :navElements="Object.values(Gods)" :parentPath="Routes.GODS" />
    <BaseMarkdownArticle :article-data="godData" :view-name="Routes.GODS" />
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

const route = useRoute();
const godData = computed(() => godsData[route.name as Gods]);
</script>
