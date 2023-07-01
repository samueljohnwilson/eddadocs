<script setup lang="ts">
import 'animate.css';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid id="main-container">
        <v-row class="navbar">
          <RouterLink to="/gods">GODS</RouterLink>
          <RouterLink to="/races">RACES</RouterLink>
          <RouterLink to="/maps">MAPS</RouterLink>
        </v-row>
        <v-row>
          <RouterView />
        </v-row>
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

#main-container {
  width: 85%;
}

.v-img {
  margin: 0 auto;
  border: 1px black solid;
}

p.group-description {
  padding-top: 3rem;
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

h1 {
  display: flex;
  justify-content: center;
  font-size: 2rem;
  margin: 0 0 1.5rem;
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

/* .sidebar {
  background-color: #b8c8d8 !important;
}

.animate__animated.view {
  --animate-duration: 1s;
} */

/* .leaflet-control-attribution {
  display: none !important;
} */
</style>