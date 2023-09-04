<script setup lang="ts">
import type { PropType } from 'vue';
import BaseArticle from '@/components/BaseArticle.vue';
import type { BaseArticleData } from '@/types';

defineProps({
  activeArticle: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <BaseArticle :activeArticle="activeArticle"/>
</template>
