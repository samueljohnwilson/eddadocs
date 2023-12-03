<script setup lang="ts">
import type { PropType } from 'vue';
import type { BaseArticleData } from '@/types';
import { getAsset } from '@/utils/getAsset';

defineProps({
  activeGod: {
    type: Object as PropType<BaseArticleData>,
    required: true,
  },
});
</script>

<template>
  <v-container class="main">
    <v-img :src="getAsset('tome.webp')" max-width="80%"></v-img>
  </v-container>
</template>
