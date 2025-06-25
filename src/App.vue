<script setup lang="ts">
import 'animate.css'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { Routes } from './enums/routes'

const drawer = ref(false)
</script>

<template>
  <v-app>
    <v-main>
      <div class="menu-btn">
        <v-btn size="x-large" variant="text" color="secondary" icon @click="drawer = !drawer">
          <FontAwesomeIcon icon="bars" size="xl"/>
        </v-btn>
      </div>
      <div class="scroll-btn">
        <a v-scroll-to="'#app'">
          <v-btn variant="outlined" color="secondary" icon>
            <FontAwesomeIcon icon="arrow-up" />
          </v-btn>
        </a>
      </div>
      <v-container class="main">
        <RouterView />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item
          v-for="route in Object.values(Routes)"
          :key="route"
          :to="`/${route}`"
          @click="drawer = false"
          active-class="active-router-link"
        >
          {{ route.toUpperCase() }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<style>
html,
body, h2 {
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin: 0;
}

h1 {
  font-weight: 400;
}

.v-main {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-white));
}

.main {
  max-width: 90%;
}

.v-img {
  margin: 0 auto;
}

.v-card-subtitle {
  font-size: 1.5rem;
  padding: 0 0 0.5rem;
  opacity: 1.0;
}

h2 {
  font-size: 1.5rem;
  padding: 0 0 0.5rem;
  opacity: 1.0;
}

.v-card-title {
  font-size: 2rem;
  padding: 0 0 1rem;
}

.v-card-text {
  font-size: 1rem;
  line-height: 1.5rem !important;
  padding: 0 0 1rem;
}

.active-router-link {
  color: rgb(var(--v-theme-secondary)) !important;
}

.menu-btn {
  position: fixed;
  top: 0.5rem;
  left: 1rem;
  z-index: 1000;
}

.scroll-btn {
  position: fixed;
  bottom: 1rem;
  left: 1.5rem;
  z-index: 1000;
}

.scroll-btn button {
  border-width: 2px;   
}
</style>
