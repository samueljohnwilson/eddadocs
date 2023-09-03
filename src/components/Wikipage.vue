<template>
  <v-container class="main" fluid>
    <NavBar :navElements="navElements" :parentPath="parentPath"/>
    <BaseArticle :activeArticle="activeArticle"/>
  </v-container>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import BaseArticle from '@/components/BaseArticle.vue';
import NavBar from '@/components/NavBar.vue';
import { type BaseArticleData } from '@/types';

defineProps({
  navElements: {
    type: Array as PropType<string[]>,
    required: true,
  },
  parentPath: {
    type: String,
    required: true,
  },
  activeArticle: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>
