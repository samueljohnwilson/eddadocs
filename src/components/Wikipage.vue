<template>
  <!-- <NavButton :data="articles" :active="activeArticle" :setActive="setActiveArticle" /> -->
  <BaseArticle :data="activeArticle" />
</template>

<script setup lang="ts">
import BaseArticle from '@/components/BaseArticle.vue';
// import NavButton from '@/components/NavButton.vue';
import { BaseArticleData } from '@/types';
import { PropType } from 'vue';

defineProps({
  articles: {
    type: Object as PropType<Record<string, BaseArticleData>>,
    required: true,
  },
  activeArticle: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
  setActiveArticle: {
    type: Function as PropType<(article: string) => void>,
    required: true,
  },
});
</script>
