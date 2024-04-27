<script setup lang="ts">
import 'animate.css';
import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/logo.png';
import ReturnToTopButton from '@/components/ReturnToTopButton.vue';
import { Routes } from './enums/routes';
</script>

<template>
  <v-app>
    <v-main>
      <RouterLink to="/">
        <img :src="logo" class="logo" alt="logo" />
      </RouterLink>
      <v-container fluid>
        <v-row class="navbar">
          <RouterLink
            v-for="route in Object.values(Routes)"
            :to="`/${route}`"
            :key="route"
          >
            {{ route.toUpperCase() }}
          </RouterLink>
        </v-row>
        <v-row>
          <v-container class="main">
            <RouterView />
          </v-container>
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
  margin: 0 96px;
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

.logo {
  position: fixed;
  top: 0px;
  left: 16px;
  width: 96px;
}
</style>
