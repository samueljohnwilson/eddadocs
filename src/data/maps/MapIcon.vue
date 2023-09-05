<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  }
});

</script>

<template>
  <v-card-subtitle>
    {{ title }}
  </v-card-subtitle>
  <slot></slot>
</template>
