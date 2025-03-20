<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  parentPath: {
    type: String,
    required: false,
  },
  navElements: {
    type: Array as PropType<string[]>,
    required: false,
  },
});
</script>

<template>
  <v-row class="navbar">
    <v-col>
      <v-row>
          <h1>{{title.toUpperCase()}}</h1>
      </v-row>
      <v-row v-if="navElements && parentPath">
        <RouterLink v-for="el in navElements" :to="`/${parentPath}/${el}`" :key="el">
          {{ el.toUpperCase() }}
        </RouterLink>
      </v-row>
      </v-col>
  </v-row>
</template>
<style scoped>
.navbar {
  padding: 0.75rem;
  font-weight: bold;
}

.navbar a {
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.navbar a.router-link-active {
  color: rgb(var(--v-theme-secondary));
}

.navbar a::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 2px;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.navbar a:hover::after {
  width: 100%;
}

.navbar a.router-link-active::after {
  width: 100%;
  background-color: rgb(var(--v-theme-secondary));
}
</style>
