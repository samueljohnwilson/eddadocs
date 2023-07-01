<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  parentPath: {
    type: String,
    required: true,
  },
  navElements: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <v-row class="navbar">
    <RouterLink v-for="el in navElements" :to="`/${parentPath}/${el}`" :key="el">
      {{ el.toUpperCase() }}
    </RouterLink>
  </v-row>
</template>
