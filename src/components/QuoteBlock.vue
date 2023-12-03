<script setup lang="ts">
defineProps({
  quote: {
    type: String,
    required: true,
  },
  attribution: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <v-card-text>
      <blockquote v-html="quote" ></blockquote>
    </v-card-text>
    <p style="color: grey">{{ attribution }}</p>
  </div>
</template>
