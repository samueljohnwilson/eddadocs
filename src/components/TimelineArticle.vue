<script setup lang="ts">
import { getAsset } from '@/utils/getAsset';

defineProps({
  events: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="event in events"
      :key="event.id"
      size="small"
      dot-color="white"
      width="90%"
    >
      <template v-slot:opposite>
        {{  event.date }}
      </template>
      <template v-slot:icon>
        <img :src="getAsset(`icons/${event.icon}`)" />
      </template>
      <v-card>
        <p v-html="event.paragraphs[0]"></p>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<style scoped>
img {
  width: 40px;
}

.v-card {
  padding: 1rem;
}

.v-timeline {
  height: 80%;
}
</style>
