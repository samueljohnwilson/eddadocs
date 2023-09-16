<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <v-card-subtitle>
    {{ title.toUpperCase() }}
  </v-card-subtitle>
  <v-card-text v-if="description">
    {{ description }}
  </v-card-text>
  <router-link v-if="link" :to=link target="_blank">Information</router-link>
</template>
