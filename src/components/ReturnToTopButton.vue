<template>
  <div class="scroll-btn">
    <a v-scroll-to="'#app'">
      <v-btn variant="outlined" color="secondary" icon>
        <FontAwesomeIcon icon="arrow-up" />
      </v-btn>
    </a>
  </div>
</template>

<style scoped>
.scroll-btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;

  & button {
    border-width: 2px;   
  }
}
</style>
