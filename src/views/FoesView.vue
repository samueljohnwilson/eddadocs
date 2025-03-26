<script setup lang="ts">
import type { PropType } from 'vue';
import NavBar from '@/components/NavBar.vue';
import WikiPage from '@/components/WikiPage.vue';
import { Foes } from '@/enums/foes';
import { Routes } from '@/enums/routes';
import type { BaseArticleData } from '@/types';

defineProps({
  activeFoe: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <NavBar title="Foes" :navElements="Object.values(Foes)" :parentPath="Routes.FOES"/>
  <WikiPage :activeArticle="activeFoe"/>
</template>
