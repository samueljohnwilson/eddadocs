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
    {{ title.toUpperCase() }}
  </v-card-subtitle>
  <slot></slot>
</template>
