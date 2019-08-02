<template>
  <div class="ani-main-style">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "AniMain"
  }
</script>

<style scoped>
  .ani-main-style {
    min-height: 100px;
    flex: 1;
  }
</style>
