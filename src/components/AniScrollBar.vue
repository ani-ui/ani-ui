<template>
  <div class="ani-scroll-bar-style">
    <div style="height: 500px;"></div>
  </div>
</template>

<script>
  export default {
    name: "AniScrollBar"
  }
</script>

<style scoped>
  .ani-scroll-bar-style {
    height: 200px;
    width: 200px;
    overflow-y: auto;
  }
  .ani-scroll-bar-style::-webkit-scrollbar {
    width: 10px;
  }
  .ani-scroll-bar-style::-webkit-scrollbar-track {
  }
  .ani-scroll-bar-style::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,.2);
    border-radius: 10px;
    outline: none;
  }
</style>
