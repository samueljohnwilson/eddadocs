<script setup lang="ts">
import tome from '@/assets/tome.webp';
</script>

<template>
  <v-card elevation="0" :max-width="$vuetify.display.smAndDown ? '100%' : '60%'">
    <v-img :src="tome"></v-img>
    <v-card-title>
      CODEX EDDA
    </v-card-title>
    <v-card-text>
      <p>
        The great kingdoms of the past fell long ago, leaving the world of men
        in a dark age of ignorance and superstition.
        The ancient evils were swept from the land with the old empires, but in recent years dim
        figures have crept from the shadows.
      </p>
      <p>
        After millennia of relative peace, darkness grows in Edda once again.
        For those who would stand against it, herein lies all that is known.
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card {
  margin: 0 auto;
}

.v-card-text, .v-card-title {
  padding: 0.5rem 1rem;
}

p {
  padding-bottom: 0.5rem;
}
</style>

