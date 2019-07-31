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
    flex: 1;
    min-height: 100px;
  }
</style>
