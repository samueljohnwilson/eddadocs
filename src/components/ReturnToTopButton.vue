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
  bottom: 16px;
  left: 32px;

  & button {
    border-width: 2px;   
  }
}
</style>
