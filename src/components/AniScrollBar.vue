<template>
  <div class="ani-scroll-bar-style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AniScrollBar",
};
</script>

<style scoped>
.ani-scroll-bar-style {
  overflow-y: auto;
}
.ani-scroll-bar-style::-webkit-scrollbar {
  width: 5px;
}
.ani-scroll-bar-style::-webkit-scrollbar-track {
  box-shadow:inset 0 0 5px rgba(0,0,0,0.2);
}
.ani-scroll-bar-style::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  outline: none;
}
</style>
