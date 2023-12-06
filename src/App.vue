<script setup lang="ts">
import 'animate.css';
import { RouterLink, RouterView } from 'vue-router'
import ReturnToTopButton from '@/components/ReturnToTopButton.vue';
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row class="navbar">
          <RouterLink to="/races">RACES</RouterLink>
          <RouterLink to="/lands">LANDS</RouterLink>
          <RouterLink to="/gods">GODS</RouterLink>
          <RouterLink to="/maps">MAPS</RouterLink>
        </v-row>
        <v-row>
          <RouterView />
        </v-row>
        <ReturnToTopButton />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
html,
body {
  font-size: 16px;
  margin: 0;
}

.v-main {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-white));
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.main {
  max-width: 90%;
}

.v-img {
  margin: 0 auto;
}

.v-card-subtitle {
  font-size: 1.25rem;
  padding: 0 0 0.5rem;
}

.v-card-title {
  font-size: 2rem;
  padding: 0 0 1rem;
}

.v-card-text {
  font-size: 1rem;
  padding: 0 0 0.5rem;
}

.navbar {
  padding: 1rem;
  font-weight: bold;
  justify-content: center;
  
  & a {
    font-size: 1.25rem;
    padding: 0 0.5rem 0;
    text-decoration: none;
    color: rgb(var(--v-theme-white));

    &.router-link-active {
      color: rgb(var(--v-theme-secondary));
    }
  }
}
</style>
